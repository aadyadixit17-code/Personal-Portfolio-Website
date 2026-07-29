function About() {
  return (
    <section style={styles.about}>
      <h2>About Me</h2>
      <p>
        I am Khushi, an engineering student passionate about web development.
        I enjoy building React apps and learning new technologies.
      </p>

      <h3>Skills</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    </section>
  );
}

const styles = {
  about: {
    padding: "50px",
    textAlign: "center",
    backgroundColor: "#f5f5f5"
  }
};

export default About;