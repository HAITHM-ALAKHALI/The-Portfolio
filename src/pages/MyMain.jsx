import EducationCard from "../components/EducationCard.jsx";
import WorkExperienceCard from "../components/WorkExperienceCard.jsx";
import CertificationCard from "../components/CertificationCard.jsx";
import AchievementCard from "../components/AchievementCard.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import { Route, Routes, Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function MyMain() {
  const Educations = [
    {
      id: 1,
      date: "2023 — 2024",
      title: "English for Communication",
      place: "New Horizon Institute",
      desc: `Completed English for communication course, Level 3A (B2-Upper
                  Intermediate proficiency)`,
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
      date: "2024 — Present",
      title: "Bachelor of Computer Science",
      place: "Sana'a University",
      desc: `Focusing on Software Engineering, Object-Oriented Programming
                  (OOP), and System Logic. Actively applying theoretical
                  knowledge to full-stack web development and backend system
                  architecture.`,
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
      title: "Introduction to Computer Programming",
      organization: "University of London",
      platform: "Coursera",
      link: "https://coursera.org/verify/EM8VF0SZF1NG",
    },
    {
      id: 2,
      title: "Introduction to Artificial Intelligence (AI)",
      organization: "IBM",
      platform: "Coursera",
      link: "https://coursera.org/verify/UNR8NTNUO8FI",
    },
    {
      id: 3,
      title: "Introduction to Software Engineering",
      organization: "IBM",
      platform: "Coursera",
      link: "https://coursera.org/verify/6R7B12UXS4BQ",
    },
    {
      id: 4,
      title: "Building Web Applications in PHP",
      organization: "University of Michigan",
      platform: "Coursera",
      link: "https://coursera.org/verify/2BR01KYON6FQ",
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
      link: "https://drive.google.com/file/d/1xpCAm_7NmnmwDU5RY7qcJuDzstgT3Ep0/view?usp=sharing",
    },
    {
      id: 2,
      title: "HP LIFE Ambassador",
      date: "Apr 2026",
      desc: `Selected as an HP LIFE Ambassador to lead initiatives promoting digital literacy, entrepreneurship, and professional career readiness within the university student community, bridging the gap between academic theory and industry-ready skills.`,
      organization: "HP Foundation",
      link: "https://www.life-global.org/en/badges/1db24fb7-ee32-4318-852e-bd21f8d0e901",
    },
  ];

  const Projects = [
    {
      id: 1,
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
      id: 2,
      title: "Restaurant Website",
      job: "Full-Stack Developer",
      description: `Responsive website with dynamic menu system. Built with PHP
                  and MySQL for backend data management.`,
      tags: ["PHP", "MySQL", "HTML5", "CSS3"],
      links: [],
    },
    {
      id: 3,
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

            {[...Educations].reverse().map((Education) => (
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

            {[...Experiences].reverse().map((Experience) => (
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
              {[...Certifications].reverse().map((Certificate) => (
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
            {[...Achievements].reverse().map((Achievement) => (
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
            {[...Projects].reverse().map((Project) => (
              <ProjectCard
                key={Project.id}
                title={Project.title}
                job={Project.job}
                description={Project.description}
                tags={Project.tags}
                links={Project.links}
              ></ProjectCard>
            ))}
            <div className="view-more-container">
              <Link to={"/Projects"} className="view-more-link">
                <span>View All Projects</span>
                <span className="arrow">↗</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default MyMain;
