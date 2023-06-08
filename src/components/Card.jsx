const Card = () => {
  return (
    <div className="card">
      <img
        src="../src/images/katie-zaferes.png"
        alt="katie-zaferes photo"
        className="card--img"
      />
      <div className="card--stats">
        <img
          src="../src/images/star.png"
          alt="star logo"
          className="card--star"
        />
        <span>5.0</span>
        <span className="gray">(6) ● </span>
        <span className="gray">USA</span>
      </div>
      <p>Life Lessons with Katie Zaferes</p>
      <p>
        <span className="bold">From $136</span> / person
      </p>
    </div>
  );
};

export default Card;
