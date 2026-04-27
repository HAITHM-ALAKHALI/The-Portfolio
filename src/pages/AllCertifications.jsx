import { Link } from "react-router-dom";

function AllCertifications() {
  const allCerts = [
    {
      id: 1,
      title: "Business Email",
      org: "HP LIFE (HP Foundation)",
      platform: "",
      link: "../../public/docs/Certificates/Business Email - HPL-EN11.pdf",
    },
    {
      id: 2,
      title: "Introduction to Digital Business Skills",
      org: "HP LIFE (HP Foundation)",
      platform: "",
      link: "../../public/docs/Certificates/Introduction to Digital Business Skills.pdf",
    },
    {
      id: 3,
      title: "Business Communications",
      org: "HP LIFE (HP Foundation)",
      platform: "",
      link: "../../public/docs/Certificates/Business Communications.pdf",
    },
    {
      id: 4,
      title: "Selling Online",
      org: "HP LIFE (HP Foundation)",
      platform: "",
      link: "../../public/docs/Certificates/Selling Online.pdf",
    },
    {
      id: 5,
      title: "CCNA Routing and Wireless Essentials",
      org: "General Telecommunication Institute",
      platform: "",
      link: "../../public/docs/Certificates/CCNA-_Switching-_Routing-_and_Wireless_Essentials.pdf",
    },
    {
      id: 6,
      title: "CCNA Introduction to Networks and Switching",
      org: "General Telecommunication Institute",
      platform: "",
      link: "../../public/docs/Certificates/CCNA-_Introduction_to_Networks.pdf",
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
    <div className="certificates-page">
      <div className="page-header">
        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
        <h1>Professional Certifications</h1>
        <p>All my verified certifications from various platforms</p>
      </div>

      <div className="certificates-list">
        {allCerts.reverse().map((cert) => (
          <div key={cert.id} className="cert-card">
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
