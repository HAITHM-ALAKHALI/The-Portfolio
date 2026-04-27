import "./AchievementCardStyle.css";

function AchievementCard({ title, date, desc, organization, link }) {
  return (
    <div className="card">
      <span className="card-date">{date}</span>
      <div className="card-info">
        {link ? (
          <a href={link} target="_blank" rel="noreferrer">
            <h5>
              {title} <span className="arrow">↗</span>
            </h5>
          </a>
        ) : (
          <h5>{title}</h5>
        )}

        <p>{desc}</p>
        
        <div className="cert-meta">
          <span className="org-name achievement">{organization}</span>
        </div>
      </div>
    </div>
  );
}

export default AchievementCard;