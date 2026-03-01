import webdesign from "../assets/webdesign.png";
import appdevelopment from "../assets/appdevelopment.png";
import dbms from "../assets/dbms.png";
import "./Services.css";
function Services(){
  return(
    <section className="services-section">
      <h1 className="services-title">Our Services</h1>
      <div className="services-container">
        <div className="service-card">
          <img src={webdesign} alt="Web Design"/>
          <h3>Web Design</h3>
          <p>Creative, responsive and modern UI/UX designs for websites.</p>
        </div>
        <div className="service-card">
          <img src={appdevelopment} alt="App Development"/>
          <h3>App Development</h3>
          <p>High-performance mobile and web applications.</p>
        </div>
        <div className="service-card">
          <img src={dbms} alt="Database Management System"/>
          <h3>Database Management System</h3>
          <p>Secure, scalable and optimized database solutions.</p>
        </div>
      </div>
    </section>
  );
}
export default Services;