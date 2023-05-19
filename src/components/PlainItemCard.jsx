import { Show } from "solid-js";

function PlainItemCard(props) {
    return (
        <div class="item-card">
            <div class="inline-block">
                <h3 class="card-title font-sans">{props.name}</h3>
                <Show when={props.country_code}>
                    <img src={"https://flagsapi.com/" + props.country_code + "/flat/64.png"} style="width:30px"></img>
                </Show>
            </div>
            <text class="card-description font-sans line-clamp-2">
                {props.description}
            </text>
            <h4 class="card-price font-sans slashed-zero">R$ {props.price}</h4>
        </div>
    )
}

export default PlainItemCard;