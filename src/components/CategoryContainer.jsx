import PlainItemCard from "./PlainItemCard";

function CategoryContainer(props) {
    return(
        <section class="category-section" id={props.section}> {/* TODO: Ensure section id uniqueness */}
            <div class="category-container">
                <h2 class="category-title">
                    {props.name} 
                </h2>
                <text class="category-description">
                    {props.description}
                </text>

                {/* * Place item cards here */}
                {props.children}

                <hr class="mt-3"></hr>
            </div>
        </section>
    )
}

export default CategoryContainer;