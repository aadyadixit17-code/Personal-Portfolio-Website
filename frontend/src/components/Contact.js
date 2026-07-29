function Contact() {
  return (
    <section style={styles.section}>
      <h2>Contact Me</h2>

      <p>Email: khushi@example.com</p>
      <p>Phone: +91-XXXXXXXXXX</p>

      <div style={styles.links}>
        <a href="#">LinkedIn</a>
        <a href="#">GitHub</a>
        <a href="#">Instagram</a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "50px",
    textAlign: "center",
    backgroundColor: "#f5f5f5"
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "10px"
  }
};

export default Contact;