import logo from "../assets/logo.jpeg";

function Navbar({ menu }) {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px" }}>
      <img src={logo} alt="Logo" width="60" />

      <ul style={{ display: "flex", listStyle: "none", gap: "20px" }}>
        {menu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;