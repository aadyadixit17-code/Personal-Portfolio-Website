function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2>Khushi Portfolio</h2>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#111",
    color: "white"
  }
};

export default Navbar;