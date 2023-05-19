import { For, Show, createResource } from "solid-js";
import CategoryContainer from "../components/CategoryContainer";
import PlainItemCard from "../components/PlainItemCard";
import NavItem from "../components/NavItem";
import MenuNavbar from "../components/MenuNavbar";
import RestaurantHeader from "../components/RestaurantHeader";


const fetchMenu = async () => {
    // TODO: Change to API URL for production
    // const res = await fetch("http://localhost:8000/api/menu")
    const res = await fetch("https://api.ristto.app/api/menu")

    return res.json()
}

export default function Menu() {
    const [categories] = createResource(fetchMenu);

    return (
        <>
        <RestaurantHeader />
        <Show when={categories()} fallback={<h2 class='mt-7 mx-auto ml-6 font-bold'>Carregando...</h2>}>
        {/* TODO: Implement loading animation on fallback */}
        <MenuNavbar>
            <For each={categories()}>
                {(category) => (
                    <Show when={category.visible}>
                        <NavItem name={category.name} sectionLink={category.section_name}/>
                    </Show>
                )}
            </For>
        </MenuNavbar>

        <div class="app-container">
            <For each={categories()}>
                {(category) => (
                    <Show when={category.visible}>
                        <CategoryContainer name={category.name} description={category.description} section={category.section_name}>
                            <For each={category.items}>
                                {(item) => (
                                    <PlainItemCard name={item.name} description={item.description} price={item.price} country_code={item.origin_country_code}/>
                                )}
                            </For>
                        </CategoryContainer>
                    </Show>
                )}
            </For>
            <br></br>
        </div>
        </Show>
        </>
    )
}

