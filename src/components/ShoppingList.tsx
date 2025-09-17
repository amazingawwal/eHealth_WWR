export default function ShoppingList() {
    const shoppingList = ["Milk", "Bread", "Eggs", "Cheese", "Butter"];

    return(
        <ul>
            {shoppingList.map(item=>
            <li style={{textDecoration: item === "Eggs"? 'line-through' : "none"}}>
                {item}
            </li>)
            }
        </ul>
    )
};
