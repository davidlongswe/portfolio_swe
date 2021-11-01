import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Om mig</h1>
        <p className="a-sub">
          Utbildad Systemvetare med en extensiv bakgrund i programmering och
          Frontend-utveckling. Jag är intresserad av verksamhetsutveckling och
          får tillfredställelse av att effektivisera allt inom verksamheten med
          hjälp av ny teknik.
        </p>
        <p className="a-desc">
          Tveka inte att kontakta mig om du har frågor angående en digital
          transformation av din verksamhet!
        </p>
      </div>
    </div>
  );
};

export default About;
