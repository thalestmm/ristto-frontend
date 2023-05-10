import NavItem from "./NavItem";

function MenuNavbar(props) {
    return(
        <>
        <nav class="menu-navbar">
            <ul class="flex list-none">
                {props.children}
                <NavItem name="Drinks" sectionLink="drinks" />
                <NavItem name="Entreé" sectionLink="entree"/>
                <NavItem name="Desserts" sectionLink="desserts"/>
                <NavItem name="Drinks" sectionLink="drinks" />
                <NavItem name="Entreé" sectionLink="entree"/>
                <NavItem name="Desserts" sectionLink="desserts"/>
            </ul>
        </nav>
        </>
    )
}

export default MenuNavbar;