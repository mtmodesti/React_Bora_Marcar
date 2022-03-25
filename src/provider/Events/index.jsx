import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import boraMarcarApi from "../../services/api";
import { useAuth } from "../Auth";
import { useGuests } from "../Guests";
import { useItemsList } from "../ItemsList";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const { userToken, userId } = useAuth();
  const { guests } = useGuests();
  const { itemsList } = useItemsList();

  const [finalSolution, setFinalSolution] = useState({
    totalPrice: 0,
    averagePrice: 0,
    guests: {},
  });
  const [userEvents, setUserEvents] = useState([]);
  const [activeEvent, setActiveEvent] = useState(
    JSON.parse(localStorage.getItem("@BoraMarcar:activeEvent")) || {}
  );

  const getUserEvents = () => {
    boraMarcarApi
      .get(`/events?userId=${userId}`)
      .then(({ data }) => setUserEvents(data))
      .catch((error) => {
        console.log(error);
        toast.error("Ops! Algo deu errado!");
      });
  };

  const handleCreateEvent = (data) => {
    const newEvent = {
      ...data,
      itemsList: [],
      guests: [],
      confirmed: false,
      userId,
    };
    boraMarcarApi
      .post("/events", newEvent, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then(({ data }) => {
        setUserEvents([...userEvents, data]);
        toast.success("Evento criado!");
      });
  };

  const handleDeleteEvent = (id) => {
    const currentEvent = userEvents.find((element) => element.id === id);
    const newEvents = userEvents.filter((element) => element.id !== id);
    boraMarcarApi
      .delete(`/events/${currentEvent.id}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((res) => {
        setUserEvents(newEvents);
        toast.success("Evento removido!");
      });
  };

  const handleEditEvent = (data) => {
    const treatedData = { ...data, confirmed: true };
    boraMarcarApi
      .patch(`/events/${activeEvent.id}`, treatedData, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then(({ data }) => {
        localStorage.setItem("@BoraMarcar:activeEvent", JSON.stringify(data));
        setActiveEvent({ ...data });
        toast.success("Evento marcado!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ops! Algo deu errado!");
      });
  };

  const handleWhoTakes = () => {
    // Clone do array de convidados, usado para evitar mutações no array original
    let workGuestsArray = [...guests];

    for (let i = 0; i < itemsList.length; i++) {
      // Sorteia um convidado aleatório com base em sua posição no array de trabalho
      const randomGuest =
        workGuestsArray[Math.floor(Math.random() * workGuestsArray.length)];

      // Acessa o convidado sorteado, sua chave já existe no objeto finalSolution
      // Push do produto atual no array de produtos do convidado
      finalSolution.guests[randomGuest.name].productList.push(itemsList[i]);

      // Enquanto o array de convidados possuir nomes, vamos filtrando com base no id
      // Assim podemos garantir que todos os convidados vão receber ao menos um produto
      workGuestsArray = workGuestsArray.filter((guest) => {
        return guest.id !== randomGuest.id;
      });

      // Quando não temos mais convidados disponíveis, mas ainda temos produtos para
      // distribuir, o array de trabalho recebe novamente todos os convidados
      if (workGuestsArray.length === 0) {
        workGuestsArray = [...guests];
      }
    }
  };

  const handleCostDivision = () => {
    // Calcula e cria a propriedade itemCost para cada item contido no array productList
    for (const guest in finalSolution.guests) {
      finalSolution.guests[guest].productList.forEach(
        (item) => (item.itemCost = Number(item.price) * Number(item.quantity))
      );

      // Calcula e cria a propriedade totalCost para a soma dos custos de todos os
      // produtos do convidade selecionado
      finalSolution.guests[guest].totalCost =
        finalSolution.guests[guest].productList.reduce(
          (sum, { itemCost }) => (sum += itemCost),
          0
        ) - finalSolution.averagePrice;
    }
  };

  const handleLetsMake = () => {
    // Calculamos o custo total do evento
    finalSolution.totalPrice = itemsList.reduce(
      (sum, item) => (sum += Number(item.price) * Number(item.quantity)),
      0
    );

    // Calculamos a média de custo por usuário com base no preço total e quantidade
    // de convidades
    finalSolution.averagePrice = Number(
      (finalSolution.totalPrice / guests.length).toFixed(2)
    );

    // Criamos em finalSolution uma chave para cada convidade
    guests.forEach(({ name }) => {
      finalSolution.guests[name] = {
        totalCost: 0,
        productList: [],
      };
    });

    // Definimos as responsabilidades de cada convidade
    handleWhoTakes();
    // Definimos o custo final para cada usuário, com relação ao produto que recebeu
    handleCostDivision();
    setActiveEvent({
      ...activeEvent,
      eventResolution: finalSolution,
      guests,
      itemsList,
    });
  };

  useEffect(() => {
    if (userId) {
      getUserEvents();
    }
  }, [userId]);

  return (
    <EventContext.Provider
      value={{
        userEvents,
        activeEvent,
        setActiveEvent,
        handleCreateEvent,
        handleDeleteEvent,
        handleEditEvent,
        handleLetsMake,
        finalSolution,
        setFinalSolution,
        getUserEvents,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = () => useContext(EventContext);
