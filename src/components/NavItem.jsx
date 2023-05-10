function NavItem(props) {
    return(
        <li class="nav-item">
            <a href={"#" + props.sectionLink} class="nav-link">{props.name}</a>
        </li>
    )
}

export default NavItem;