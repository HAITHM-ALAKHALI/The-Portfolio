import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
function AllCertifications() {
  const allCerts = [
    {
      id: 1,
      title: "Business Email",
      org: "HP LIFE (HP Foundation)",
      platform: "",
      link: "https://www.life-global.org/certificate/97c2f617-0bfa-4b69-9204-29f074ca3ed9",
    },
    {
      id: 2,
      title: "Introduction to Digital Business Skills",
      org: "HP LIFE (HP Foundation)",
      platform: "",
      link: "https://www.life-global.org/certificate/9faf77bb-0795-4b5e-9fe1-68d30ccc2c5a",
    },
    {
      id: 3,
      title: "Business Communications",
      org: "HP LIFE (HP Foundation)",
      platform: "",
      link: "https://www.life-global.org/certificate/e2b4fa23-f3e4-4bd6-b5d9-5bc5ad316c76",
    },
    {
      id: 4,
      title: "Selling Online",
      org: "HP LIFE (HP Foundation)",
      platform: "",
      link: "https://www.life-global.org/certificate/1e6586ce-04bf-4b10-a5e6-cdbbbadc6e3b",
    },
    {
      id: 5,
      title: "CCNA Routing and Wireless Essentials",
      org: "General Telecommunication Institute",
      platform: "",
      link: "https://drive.google.com/file/d/19WrAXnbrgd0bA1zFlgyy5k8RghqhRvN2/view?usp=sharing",
    },
    {
      id: 6,
      title: "CCNA Introduction to Networks and Switching",
      org: "General Telecommunication Institute",
      platform: "",
      link: "https://drive.google.com/file/d/1vEd75fiDAOCr5Bbmaw-GE38kKSRX6mp3/view?usp=sharing",
    },
    {
      id: 7,
      title: "Introduction to Computer Programming",
      org: "University of London",
      platform: "Coursera",
      link: "https://coursera.org/verify/EM8VF0SZF1NG",
    },
    {
      id: 8,
      title: "Introduction to Artificial Intelligence (AI)",
      org: "IBM",
      platform: "Coursera",
      link: "https://coursera.org/verify/UNR8NTNUO8FI",
    },
    {
      id: 9,
      title: "Introduction to Software Engineering",
      org: "IBM",
      platform: "Coursera",
      link: "https://coursera.org/verify/6R7B12UXS4BQ",
    },
    {
      id: 10,
      title: "Building Web Applications in PHP",
      org: "University of Michigan",
      platform: "Coursera",
      link: "https://coursera.org/verify/2BR01KYON6FQ",
    },
  ];

  return (
    <div className="all-page">
      <div className="page-header">
        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
        <h1>Professional Certifications</h1>
        <p>All my verified certifications from various platforms</p>
      </div>

      <div className="all-list">
        {[...allCerts].reverse().map((cert) => (
          <div key={cert.id} className="all-card">
            <div>
              <h3>{cert.title}</h3>
              <p className="org">{cert.org}</p>
              <p className="platform">{cert.platform}</p>
            </div>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="verify-btn"
            >
              Verify Certificate <span className="arrow">↗</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllCertifications;
