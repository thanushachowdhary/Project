import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

function App() {
  const menuItems = ["Home", "About", "Contact", "Login", "Signup"];

  return (
    <>
      <Navbar menu={menuItems} />

      <Home
        heading="Welcome to Our Company"
        description="We build modern web solutions for businesses."
      />

      <About
        title="About Our Company"
        description="We are a technology-driven startup focused on web development."
      />

      <Contact
        email="info@company.com"
        phone="+91 98765 43210"
        address="Bangalore, India"
      />

      <Login />
      <Signup />

      <Footer company="Company Name" year="2026" />
    </>
  );
}

export default App;