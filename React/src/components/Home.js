import banner from "../assets/banner.jpeg";

function Home({ heading, description }) {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{heading}</h1>
      <p>{description}</p>
      <img src={banner} alt="Banner" width="500" />
    </div>
  );
}

export default Home;