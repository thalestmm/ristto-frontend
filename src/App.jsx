import CategoryContainer from "./components/CategoryContainer";
import MenuNavbar from "./components/MenuNavbar";
import RestaurantHeader from "./components/RestaurantHeader";
import RistoFooter from "./components/RisttoFooter";
import NavItem from "./components/NavItem";

function App() {
  return (
    <>
      <RestaurantHeader />
      <MenuNavbar>
        <NavItem name="Drinks" sectionLink="drinks" />
        <NavItem name="Entreé" sectionLink="entree"/>
        <NavItem name="Desserts" sectionLink="desserts"/>
        <NavItem name="Drinks" sectionLink="drinks" />
        <NavItem name="Entreé" sectionLink="entree"/>
        <NavItem name="Desserts" sectionLink="desserts"/>
      </MenuNavbar>
      <div class="app-container">
        <CategoryContainer />
        <CategoryContainer />
        <br></br>
        <RistoFooter />
      </div>
    </>
  );
}

export default App;