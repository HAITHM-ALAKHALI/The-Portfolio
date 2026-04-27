import { HiLink } from "react-icons/hi";
import './ProjectCardStyle.css'
function ProjectCard({ title, job, description, tags, links }) {
  return (
    <div className="card project-card">
      <div className="card-info">
        <h5>
          {title} · {job}
        </h5>
        <p>{description}</p>
        <div className="project-links">
          {links.map(
            (link) =>
              link.url && (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.id}
                >
                  <HiLink className="Link-Logo" /> {link.title || "Link"}
                </a>
              ),
          )}
        </div>
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
