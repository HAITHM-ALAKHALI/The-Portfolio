import { Link } from "react-router-dom";
import { HiLink } from "react-icons/hi";
import { useState } from "react";
import { createPortal } from "react-dom";
import { Helmet } from "react-helmet";

function AllProjects() {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imgSrc) => setModalImage(imgSrc);
  const closeModal = () => setModalImage(null);

  const allPros = [
    {
      id: 1,
      title: "Online Store",
      job: "Back-End Developer",
      description: `Python OOP version with payment processing. C++ version using file-based storage and modular design.`,
      tags: ["Python", "C++", "OOP"],
      links: [
        {
          id: 1,
          url: "https://github.com/HAITHM-ALAKHALI/Online-Store.git",
          title: "GitHub C++",
        },
        {
          id: 2,
          url: "https://github.com/HAITHM-ALAKHALI/Python-OOP-Online-Store.git",
          title: "GitHub Python",
        },
      ],
      image: "",
      imageAlt: "",
    },
    {
      id: 2,
      title: "Magic Square Game",
      job: "Front-End Developer",
      description: `Interactive puzzle with dynamic grid generation (3x3 to 9x9) and real-time validation engine.`,
      tags: ["JavaScript (ES6+)", "Algorithms"],
      links: [
        {
          id: 1,
          url: "https://haithm-alakhali.github.io/Magic-Square",
          title: "Live Demo",
        },
        {
          id: 2,
          url: "https://github.com/HAITHM-ALAKHALI/Magic-Square",
          title: "GitHub",
        },
      ],
      image: "/images/Game.webp",
      imageAlt: "",
    },
    {
      id: 3,
      title: "Restaurant Website",
      job: "Full-Stack Developer",
      description: `Responsive website with dynamic menu system. Built with PHP and MySQL for backend data management.`,
      tags: ["PHP", "MySQL", "HTML5", "CSS3"],
      links: [],
      image: "/images/image.webp",
      imageAlt: "Restaurant website homepage",
    },
    {
      id: 4,
      title: "Professional Portfolio",
      job: "Full-Stack Developer",
      description: `Modern, responsive portfolio website featuring a dynamic "Spotlight" UI gradient effect and automated routing for certifications. Built with React, Vite, and React Router. Fully responsive and optimized for performance.`,
      tags: ["React", "Vite", "React Router", "CSS3"],
      links: [
        {
          id: 1,
          url: "https://haithm-al-akhali.vercel.app/",
          title: "Live Demo",
        },
      ],
      image: "/images/Portfolio.webp",
      imageAlt: "",
    },
  ];

  return (
    <div className="all-page">
      <Helmet>
        {/* Default meta tags for the whole site */}
        <title>Haithm Al‑Akhali – Full‑Stack Developer</title>
        <meta
          name="description"
          content="Computer Science student and Full-Stack Developer. Explore projects, certifications, and achievements."
        />

        {/* Open Graph / Social Sharing */}
        <meta
          property="og:title"
          content="Haithm Al‑Akhali – Full‑Stack Developer"
        />
        <meta
          property="og:description"
          content="Modern portfolio with React, PHP, CCNA, and interactive projects."
        />
        <meta
          property="og:image"
          content="https://haithm-al-akhali.vercel.app/og-image.webp"
        />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta
          property="og:url"
          content="https://haithm-al-akhali.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://haithm-al-akhali.vercel.app/og-image.webp"
        />
      </Helmet>
      <div className="page-header">
        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
        <h1>All Projects</h1>
        <p>Complete collection of my development work</p>
      </div>

      <div className="all-list">
        {modalImage &&
          createPortal(
            <div className="modal-overlay" onClick={closeModal}>
              <div
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <img src={modalImage} alt="Full size" />
                <button className="modal-close" onClick={closeModal}>
                  ✕
                </button>
              </div>
            </div>,
            document.getElementById("modal-root"),
          )}
        {[...allPros].reverse().map((pro) => (
          <div key={pro.id} className="project-card-wrapper">
            {/* Image on the left – only if exists */}
            {pro.image && (
              <div
                className="project-image-left"
                onClick={() => openModal(pro.image)}
                style={{ cursor: "pointer" }}
              >
                <img src={pro.image} alt={pro.imageAlt} loading="lazy" />
              </div>
            )}
            {/* Card content on the right */}
            <div className="all-card project-card">
              <div className="project-content">
                <div className="project-header">
                  <h3>
                    {pro.title} · {pro.job}
                  </h3>
                  <p className="project-description">{pro.description}</p>
                </div>
                {pro.links.length > 0 && (
                  <div className="project-links">
                    {pro.links.map((link) => (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <HiLink className="link-icon" /> {link.title}
                      </a>
                    ))}
                  </div>
                )}
                <div className="tags">
                  {pro.tags.map((tag, idx) => (
                    <span key={idx}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProjects;
