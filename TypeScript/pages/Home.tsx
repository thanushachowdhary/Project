import welcome from "../assets/welcome.png"; 
import "./Home.css";
function Home(){
  return(
    <div className="home-container">
      <div className="home-content">
        <h1>Welcome to Our Website</h1>
        <p>
          We design and develop modern web applications using 
          React and TypeScript.
        </p>
      </div>
      <div className="home-image">
        <img src={welcome} alt="Welcome Image"/>
      </div>
    </div>
  );
}
export default Home;