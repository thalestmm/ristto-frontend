import { For, Show, createResource } from "solid-js";
import CategoryContainer from "../components/CategoryContainer";
import PlainItemCard from "../components/PlainItemCard";
import NavItem from "../components/NavItem";
import MenuNavbar from "../components/MenuNavbar";


const fetchMenu = async () => {
    // const res = await fetch("http://localhost:8000/api/menu", {
    //     method:"get",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Access-Control-Allow-Origin" : "*", 
    //         "Access-Control-Allow-Credentials" : true 
    //     }
    // })

    const res = await fetch("http://localhost:4000/categories")

    return res.json()
}

export default function Menu() {
    const [categories] = createResource(fetchMenu);

    return (
        <>
        <p>{console.log(categories(), categories.loading)}</p>
        <Show when={categories()} fallback={<p>Loading...</p>}>
        {/* TODO: Implement loading animation on fallback */}
        <MenuNavbar>
            <For each={categories()}>
                {(category) => (
                    <Show when={category.visible}>
                        <NavItem name={category.name} />
                    </Show>
                )}
            </For>
        </MenuNavbar>

        <div class="app-container">
            <For each={categories()}>
                {(category) => (
                    <Show when={category.visible}>
                        <CategoryContainer name={category.name} description={category.description}>
                            <For each={category.items}>
                                {(item) => (
                                    <PlainItemCard name={item.name} description={item.description} price={item.price} />
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

