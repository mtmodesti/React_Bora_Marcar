import { useGuests } from "../../provider/Guests";
import NewItemButton from "../newItemButton";
import { FaTrashAlt } from "react-icons/fa";

const GuestList = ({ handleOpenFormGuest }) => {
  const { guests, handleRemoveGuest } = useGuests();

  return (
    <>
      <div>
        <p>Total de Convidados</p>
        <span>{guests ? guests.length : 0}</span>
        <NewItemButton onClick={() => handleOpenFormGuest()} />
      </div>
      <ul>
        {guests.map((item, idx) => (
          <li key={idx} info={item}>
            <p>{item.name}</p>
            <button onClick={() => handleRemoveGuest(item.id)}>
              <FaTrashAlt />
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GuestList;
