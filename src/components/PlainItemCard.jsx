function PlainItemCard(props) {
    return (
        <div class="item-card">
            <h3 class="card-title font-sans">{props.name}</h3>
            <text class="card-description font-sans line-clamp-2">
                {props.description}
            </text>
            <h4 class="card-price font-sans slashed-zero">R$ {props.price}</h4>
        </div>
    )
}

export default PlainItemCard;