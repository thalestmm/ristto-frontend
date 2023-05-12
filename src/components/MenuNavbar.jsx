import NavItem from "./NavItem";

function MenuNavbar(props) {
    return(
        <>
        <nav class="menu-navbar">
            <ul class="flex list-none">
                {props.children}
            </ul>
        </nav>
        </>
    )
}

export default MenuNavbar;