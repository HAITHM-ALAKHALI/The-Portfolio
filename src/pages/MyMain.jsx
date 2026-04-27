import EducationCard from "../components/EducationCard.jsx";
import WorkExperienceCard from "../components/WorkExperienceCard.jsx";
import CertificationCard from "../components/CertificationCard.jsx";
import AchievementCard from "../components/AchievementCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { Route, Routes, Link } from "react-router-dom";

function MyMain() {
  const Educations = [
    { 
      id: 1,
      date: "2024 — Present",
      title: "Bachelor of Computer Science",
      place: "Sana'a University",
      desc: `Focusing on Software Engineering, Object-Oriented Programming
                  (OOP), and System Logic. Actively applying theoretical
                  knowledge to full-stack web development and backend system
                  architecture.`,
    },
    {
      id: 2,
      date: "2025",
      title: "CCNA Networking Program",
      place: "General Telecommunication Institute",
      desc: `Completed CCNA Introduction to Networks, Switching, Routing,
                  and Wireless Essentials.`,
    },
    {
      id: 3,
      date: "2023 — 2024",
      title: "English for Communication",
      place: "New Horizon Institute",
      desc: `Completed English for communication course, Level 3A (B2-Upper
                  Intermediate proficiency)`,
    },
  ];

  const Experiences = [
    {
      id: 1,
      date: "2023 — 2024",
      title: "Independent Shape Designer and Seller",
      place: "Remote",
      desc: `Created innovative shapes for internet channels. Utilized social
                media (Instagram/Facebook) to increase sales and establish brand
                identity.`,
      tags: ["Digital Design", "Social Media Marketing"],
    },
  ];

  const Certifications = [
    {
      id: 1,
      title: "Building Web Applications in PHP",
      organization: "University of Michigan",
      platform: "Coursera",
      link: "https://coursera.org/verify/2BR01KYON6FQ",
    },
    {
      id: 2,
      title: "Introduction to Software Engineering",
      organization: "IBM",
      platform: "Coursera",
      link: "https://coursera.org/verify/6R7B12UXS4BQ",
    },
    {
      id: 3,
      title: "Introduction to Artificial Intelligence (AI)",
      organization: "IBM",
      platform: "Coursera",
      link: "https://coursera.org/verify/UNR8NTNUO8FI",
    },
    {
      id: 4,
      title: "Introduction to Computer Programming",
      organization: "University of London",
      platform: "Coursera",
      link: "https://coursera.org/verify/EM8VF0SZF1NG",
    },
  ];

  const Achievements = [
    {
      id: 1,
      title: "Sana'a Tech Exhibition 2024",
      date: "Nov 2024",
      desc: `Awarded a certificate for successfully competing in a
                high-pressure, time-constrained programming event.`,
      organization: "Sana'a University",
      link: "../public/docs/Hackathon.pdf",
    },
  ];

  const Projects = [
    {
      id: 1,
      title: "Restaurant Website",
      job: "Full-Stack Developer",
      description: `Responsive website with dynamic menu system. Built with PHP
                  and MySQL for backend data management.`,
      tags: ["PHP", "MySQL", "HTML5", "CSS3"],
      links: [{ id: 1, url: "", title: "" }],
    },
    {
      id: 2,
      title: "Magic Square Game",
      job: "Front-End Developer",
      description: `Interactive puzzle with dynamic grid generation (3x3 to 9x9)
                  and real-time validation engine.`,
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
    },
    {
      id: 3,
      title: "Online Store",
      job: "Back-End Developer",
      description: `Python OOP version with payment processing. C++ version using
                  file-based storage and modular design.`,
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
    },
  ];

  return (
    <>
      <div className="My-Main">
        <section id="About">
          <p className="summary">
            Computer Science student and Full-Stack Developer with a robust
            foundation in software architecture and computer networks.
            Proficient in building scalable web applications using React,
            TypeScript, and PHP, complemented by a deep understanding of
            low-level programming in C++. Certified in CCNA and Software
            Engineering, bringing a unique perspective that combines modern
            frontend excellence with rigorous backend and networking logic.
            Proven track record in developing efficient systems through academic
            and professional projects.
          </p>

          <div className="education-section">
            <h4>Education</h4>

            {Educations.map((Education) => (
              <EducationCard
                key={Education.id}
                date={Education.date}
                title={Education.title}
                place={Education.place}
                desc={Education.desc}
              ></EducationCard>
            ))}
          </div>
        </section>

        <section id="Experience">
          <div className="Topic_se">
            <h4>Work Experience</h4>

            {Experiences.map((Experience) => (
              <WorkExperienceCard
                key={Experience.id}
                date={Experience.date}
                title={Experience.title}
                place={Experience.place}
                desc={Experience.desc}
                tags={Experience.tags}
              ></WorkExperienceCard>
            ))}
          </div>

          <div className="Topic_se">
            <h4>Professional Certifications</h4>

            <ul className="cert-links">
              {Certifications.map((Certificate) => (
                <li key={Certificate.id}>
                  <CertificationCard
                    
                    title={Certificate.title}
                    organization={Certificate.organization}
                    link={Certificate.link}
                    platform={Certificate.platform}
                  ></CertificationCard>
                </li>
              ))}
            </ul>
            <div className="view-more-container">
              <Link to={"/Certificates"} className="view-more-link">
                <span>View All Certificates</span>
                <span className="arrow">↗</span>
              </Link>
            </div>
          </div>

          <div className="Topic_se">
            <h4>Achievements</h4>
            {Achievements.map((Achievement) => (
              <AchievementCard
                key={Achievement.id}
                title={Achievement.title}
                date={Achievement.date}
                desc={Achievement.desc}
                organization={Achievement.organization}
                link={Achievement.link}
              ></AchievementCard>
            ))}
          </div>
        </section>

        <section id="Projects">
          <div className="Topic_se">
            <h4>Projects</h4>
            {Projects.map((Project) => (
              <ProjectCard
                key={Project.id}
                title={Project.title}
                job={Project.job}
                description={Project.description}
                tags={Project.tags}
                links={Project.links}
              ></ProjectCard>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default MyMain;
