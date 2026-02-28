

function Footer({ company, year }) {
  return (
    <footer style={{ textAlign: "center", padding: "20px", backgroundColor: "#f2f2f2" }}>
      <p>© {year} {company}</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
       
      </div>
    </footer>
  );
}

export default Footer;