import React from "react";

function Hero() {
  // Add this inside your Hero component function
useEffect(() => {
  const overlay = document.getElementById('entrance-overlay');
  const startBtn = document.getElementById('start-btn');
  const music = document.getElementById('background-music');

  const handleStart = () => {
    music.play().catch(e => console.log("Playback failed:", e));
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.style.display = 'none';
    }, 500);
  };

  if (startBtn) {
    startBtn.addEventListener('click', handleStart);
  }

  // Cleanup
  return () => {
    if (startBtn) startBtn.removeEventListener('click', handleStart);
  };
}, []);
  return (
    <section style={styles.hero}>
      <div>
        <h1 style={styles.title}>Hi, I'm Khushi 👋</h1>
        <p style={styles.subtitle}>
          Engineering Student | React Developer
        </p>

        <button style={styles.button}>View My Work</button>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "#0f172a",
    color: "white",
  },
  title: {
    fontSize: "3rem",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.2rem",
    opacity: 0.8,
    marginBottom: "20px",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    background: "#38bdf8",
    color: "black",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default Hero;