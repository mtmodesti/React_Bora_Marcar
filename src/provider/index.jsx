import { AuthProvider } from "./Auth";
import { EventProvider } from "./Events";
import { UserProvider } from "./User";
import { ItemsListProvider } from "./ItemsList";
import { GuestListProvider } from "./Guests";

const Provider = ({ children }) => {
  return (
    <AuthProvider>
      <UserProvider>
        <GuestListProvider>
          <ItemsListProvider>
            <EventProvider>{children}</EventProvider>
          </ItemsListProvider>
        </GuestListProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default Provider;
