const Hero = () => {
  return (
<section
  className="relative flex flex-col nav-height"
  aria-labelledby="hero-heading"
>
  <div className="flex-center w-full h-5/6 text-center">
    <div>
      <h1 id="hero-heading" className="hero-title">
        Wolfgang Lloyd
      </h1>
      <p className="hero-subtitle">
        Producer | Director | Editor
      </p>
    </div>
  </div>
</section>

  );
};

export default Hero;
