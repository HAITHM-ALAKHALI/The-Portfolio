import './CertificationCardStyle.css'

function CertificationCard({ title, organization, link, platform }) {
  return (
    <div className="cert-card-container">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="cert-main-link"
      >
        <h5 className="cert-title">
          {title}
          <span className="arrow-icon">↗</span>
        </h5>
      </a>

      <div className="cert-meta">
        <span className="org-name">{organization}</span>
        {platform && (
          <>
            <span className="separator">•</span>
            <span className="platform-name">{platform}</span>
          </>
        )}
      </div>
    </div>
  );
}

export default CertificationCard;
