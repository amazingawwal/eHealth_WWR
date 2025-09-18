import { NavLink } from "react-router-dom";

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  margin: "0 10px",
  fontSize: "1.2em",
  color: isActive ? "#0090fc" : "#333",
  textDecoration: "none",
  fontWeight: isActive ? "bold" : "normal",
});


const links = [
  { to: "/", label: "Animal Filter" },
  { to: "/booking-list", label: "Booking List" },
  { to: "/menu-categories", label: "Menu Categories" },
  { to: "/message-list", label: "Message List" },
  { to: "/product-list", label: "Product List" },
  { to: "/shopping-list", label: "Shopping List" },
  { to: "/student-group", label: "Student Group" },
];

export default function Navbar() {
  return (
    <nav>
      {links.map(link=><NavLink key={link.label} to={link.to} style={linkStyle}>{link.label}</NavLink>)}
    </nav>
  );
}