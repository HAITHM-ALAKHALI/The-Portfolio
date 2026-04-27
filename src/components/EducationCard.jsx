function EducationCard({ date, title, place, desc }) {
  return (
    <>
      <div class="card">
        <span class="card-date">{date}</span>
        <div class="card-info">
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
