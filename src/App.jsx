import { Toaster } from "react-hot-toast";
import Routes from "./routes";
import GlobalStyle from "./styles/global";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes />
    </>
  );
};

export default App;
