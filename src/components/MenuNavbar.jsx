import NavItem from "./NavItem";

function MenuNavbar(props) {
    return(
        <>
        <nav class="menu-navbar">
            <div class="whitespace-nowrap app-container">
                <ul class="flex list-none flex-row flex-nowrap">
                    {props.children}
                </ul>
            </div>
        </nav>
        </>
    )
}

export default MenuNavbar;