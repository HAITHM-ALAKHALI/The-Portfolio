function EducationCard({ date, title, place, desc }) {
  return (
    <>
      <div className="card">
        <span className="card-date">{date}</span>
        <div className="card-info">
          <h5>
            {title} · {place}
          </h5>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
}

export default EducationCard;
