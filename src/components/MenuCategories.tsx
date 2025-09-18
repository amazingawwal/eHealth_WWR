export default function MenuCategories() {
const menu = [
  { category: "Fruits", items: ["Apple", "Banana", "Orange"] },
  { category: "Vegetables", items: ["Carrot", "Spinach"] }
];
    return(<>
        {menu.map(item =>
        <div>
            <h3 >{item.category}</h3>
            <ul>
                {item.items.map(fruits=><li key={fruits}>
                    {fruits}
                </li>)}
            </ul>
        </div>)}
    </>)
}