import RestaurantHeader from "./components/RestaurantHeader";
import RistoFooter from "./components/RisttoFooter";
import { Route, Routes } from "@solidjs/router";
import Menu from "./pages/Menu";


function App() {
  return (
    <>
      <RestaurantHeader />
      <Routes>
        <Route path="/" component={Menu} />
      </Routes>
      <RistoFooter />
    </>
  );
}

export default App;