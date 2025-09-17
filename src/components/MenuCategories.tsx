export default function MenuCategories() {
const menu = [
  { category: "Fruits", items: ["Apple", "Banana", "Orange"] },
  { category: "Vegetables", items: ["Carrot", "Spinach"] }
];
    return(<>
        {menu.map(item =>
        <div>
            <header >{item.category}</header>
            <ul>
                {item.items.map(fruits=><li key={fruits}>
                    {fruits}
                </li>)}
            </ul>
        </div>)}
    </>)
}