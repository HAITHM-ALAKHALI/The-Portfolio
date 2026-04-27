function WorkExperienceCard({ date, title, place, desc, tags }) {
  return (
    <>
      <div className="card">
        <span className="card-date">{date}</span>
        <div className="card-info">
          <h5>
            {title} · {place}
          </h5>
          <p>{desc}</p>
          <div className="tags">
            {tags.map((tag) => (
              <span>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkExperienceCard;
