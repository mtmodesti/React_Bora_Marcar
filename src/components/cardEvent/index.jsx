import { Container, FirstContainer, SecondContainer } from "./styles";
import { useEvents } from "../../provider/Events";
import Button from "../button";

const CardEvent = ({ event, ...rest }) => {
  const { handleDeleteEvent } = useEvents();

  const deleteEvent = (id) => {
    handleDeleteEvent(id);
  };

  return (
    <Container>
      {event && (
        <div>
          <FirstContainer>
            <hr />
            <span children="X" onClick={() => deleteEvent(event.id)} />
          </FirstContainer>
          <SecondContainer {...rest}>
            <div>
              <p>{event.name} </p>
            </div>
            <span>
              Quando?{" "}
              {event.date
                ? event.date.split("-").reverse().join("/")
                : "Deus quiser!"}
            </span>
            <span>
              Onde? {event.location ? event.location : "Local não informado"}
            </span>
            {event.confirmed ? (
              <span>Evento confirmado!</span>
            ) : (
              <span>Evento não confirmado!</span>
            )}
          </SecondContainer>
        </div>
      )}
    </Container>
  );
};

export default CardEvent;
