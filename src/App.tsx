import './App.css'
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import ShoppingList from './components/ShoppingList'
import ProductList from './components/ProductList'
import MenuCategories from './components/MenuCategories'
import BookingList from './components/BookingList'
import AnimalFilter from './components/AnimalFilter'
import StudentGroup from './components/StudentGroup'
import MessageList from './components/MessageList'
import Navbar from './assets/HelperFunction/Navigation';


function App() {
 const navs = [
  { route: "/", component: <AnimalFilter/>, heading:"Exercise 1: Animal Filter" },
  { route: "/booking-list", component: <BookingList/>, heading:"Exercise 2: Booking List" },
  { route: "/menu-categories", component: <MenuCategories/>, heading:"Exercise 3: Menu Categories" },
  { route: "/message-list", component: <MessageList/>, heading:"Exercise 4: Message List" },
  { route: "/product-list", component: <ProductList/>, heading:"Exercise 5: Product List" },
  { route: "/shopping-list", component: <ShoppingList/>, heading:"Exercise 6: Shopping List" },
  { route: "/student-group", component: <StudentGroup/>, heading:"Exercise 7: Student Group" },
];

  return (
    <BrowserRouter>
      <nav style={{ backgroundColor: '#f8f9fa', padding: '10px', marginBottom: '20px' }}>
        <Navbar/>
      </nav>

      <section>
        {navs.map(nav=>
        <div style={{ padding: '0 20px' }}>
          <Routes>
            <Route key={nav.route} path={nav.route} element={<>
              <h2>{nav.heading}</h2>
              {nav.component}
              </>} >
            </Route>
          </Routes>
      </div>)}
      </section>
    </BrowserRouter>
  )
}

export default App
