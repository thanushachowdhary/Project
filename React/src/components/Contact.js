

function Contact({ email, phone, address }) {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Contact Us</h2>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
    
    </div>
  );
}

export default Contact;