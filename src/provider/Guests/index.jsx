import { createContext, useContext, useState } from "react";

export const GuestListContext = createContext();

export const GuestListProvider = ({ children }) => {
  const [guests, setGuests] = useState([]);

  const genId = (array) => {
    let maxId = 0;
    array.forEach((item) => {
      if (item.id > maxId) maxId = item.id;
    });
    return maxId + 1;
  };

  const handleNewGuest = (data) => {
    const id = genId(guests)
    const newGuest = {...data, id}
    setGuests([...guests, newGuest]);
  };

  const handleRemoveGuest = (guestId) =>
    setGuests(guests.filter(({id}) => id !== guestId));
  const randomGuest = () => guests[Math.floor(Math.random() * (guests.length - 0)) + 0]

  return (
    <GuestListContext.Provider
      value={{
        guests,
        setGuests,
        handleNewGuest,
        handleRemoveGuest,
        randomGuest,
        genId
      }}
    >
      {children}
    </GuestListContext.Provider>
  );
};

export const useGuests = () => useContext(GuestListContext);
