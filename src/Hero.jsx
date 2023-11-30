import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ipsa
            laudantium nam aperiam? Quo, reprehenderit. Ipsam possimus itaque
            eos perspiciatis a repellendus architecto corrupti suscipit.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero image" className="img"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
