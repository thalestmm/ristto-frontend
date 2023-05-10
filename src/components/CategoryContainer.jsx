import PlainItemCard from "./PlainItemCard";

function CategoryContainer(props) {
    return(
        <section class="category-section">
            <div class="category-container">
                <h2 class="category-title">
                    Lorem, ipsum.
                </h2>
                <text class="category-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium officiis iusto enim minus sit ad!
                </text>
                 <PlainItemCard />
                 <PlainItemCard />
                 <PlainItemCard />
                <hr class="mt-3"></hr>
            </div>
        </section>
    )
}

export default CategoryContainer;