import { Link, useHistory } from "react-router-dom";
import { Container } from "./styles";
import Button from "../button";
import { buttonThemes } from "../../styles/themes";
import { MobileNav } from "../mobileNav";
import { useAuth } from "../../provider/Auth";
import DeskNav from "../deskNav";
import LogoHeader from "../../assets/Logos/Logo-Header.svg";
import { useItemsList } from "../../provider/ItemsList";
import { useGuests } from "../../provider/Guests";
import { useEvents } from "../../provider/Events";
import { useLocation } from "react-router-dom";

const Header = () => {
  const { setFinalSolution, getUserEvents } = useEvents();
  const { userToken, handleLogout } = useAuth();
  const { setItemsList } = useItemsList();
  const { setGuests } = useGuests();
  const history = useHistory();

  const handleBack = () => {
    setItemsList([]);
    setGuests([]);
    setFinalSolution({
      totalPrice: 0,
      averagePrice: 0,
      guests: {},
    });
    getUserEvents();
    history.push("/dashboard");
  };
  const location = useLocation();
  const currentLocation = location.pathname;

  return (
    <Container>
      <Link to="/">
        <img src={LogoHeader} alt="Logo" />
      </Link>

      {userToken !== "" ? (
        currentLocation === "/dashboard" ? (
          <nav>
            <Button theme={buttonThemes.header} onClick={handleLogout}>
              Logout
            </Button>
          </nav>
        ) : (
          <Button theme={buttonThemes.header} onClick={handleBack}>
            Voltar
          </Button>
        )
      ) : (
        <>
          <MobileNav />
          <DeskNav />
        </>
      )}
    </Container>
  );
};

export default Header;
