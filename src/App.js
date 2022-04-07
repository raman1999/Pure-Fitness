import "./App.css";
import { RoutingPath } from "./Routes/RoutingPath";
import { Navbar, Footer, Toast } from "./Components";
import { useUserContext } from "./Context";

function App() {
  const {
    userState: { toastMsg },
  } = useUserContext();

  return (
    <div className="App">
      <Navbar />
      {toastMsg && <Toast />}
      <div className="main-container">
        <RoutingPath />
      </div>
      <Footer />
    </div>
  );
}

export default App;
