function NavItem(props) {
    return(
        <li class="nav-item">
            <a href={"#" + props.sectionLink} class="nav-link inline-block">{props.name}</a>
        </li>
    )
}

export default NavItem;