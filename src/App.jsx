import "./App.css";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import MyMain from "./pages/MyMain";
import { useState, useEffect } from "react";
import { Route, Routes, Link } from "react-router-dom";
import AllCertifications from "./pages/AllCertifications.jsx";
function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY + window.scrollY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="main-layout"
        style={{
          background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      >
        <aside>
          <h1>Haithm Al-Akhali</h1>
          <h4>Full Stack Engineer</h4>
          <p>I build robust, scalable, and end-to-end solutions for the web.</p>
          <div className="Table-Content">
            <ul>
              <li>
                <a href="/#About">
                  <div className="Long-Dash"></div>About Me
                </a>
              </li>
              <li>
                <a href="/#Experience">
                  <div className="Long-Dash"></div>Experience and Achievements
                </a>
              </li>
              <li>
                <a href="/#Projects">
                  <div className="Long-Dash"></div>Projects
                </a>
              </li>
            </ul>
          </div>
          <ul className="social-links">
            <li>
              <a
                href="https://github.com/HAITHM-ALAKHALI"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub className="social-icon" />
              </a>
            </li>

            <li>
              <a
                href="https://linkedin.com/in/haithm-al-akhali-8b09552a9"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="social-icon" />
              </a>
            </li>

            <li>
              <a
                href="https://wa.me/967774071411"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="social-icon" />
              </a>
            </li>
          </ul>
          <a
            href="/public/docs/My CV.pdf"
            className="download-cv"
            target="_blank"
          >
            View Full Resume <span className="arrow">↗</span>
          </a>
        </aside>
        <main>
          <Routes>
            <Route path="/" element={<MyMain />} />
            <Route path="/Certificates" element={<AllCertifications />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
