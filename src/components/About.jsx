const About = () => {
  return (
    <section
      id="about"
      className="w-full  px-6 py-16 flex items-center justify-center bg-transparent"
    >
      <div className="w-full max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-6">
          About Me
        </h2>
        <p className="text-base md:text-lg text-white leading-relaxed">
          Hello! I'm{" "}
          <span className="text-orange-300 font-semibold">Taniya Agarwal</span>,
          a dedicated and creative frontend developer with a strong passion for
          building responsive and user-friendly web interfaces. I specialize in
          using modern technologies like{" "}
          <span className="text-blue-300 font-medium">React.js</span> and{" "}
          <span className="text-blue-300 font-medium">Tailwind CSS</span> to
          create seamless digital experiences. <br />
          <br />
          With a keen eye for design and detail, I strive to write clean,
          efficient code that brings ideas to life on the web. I'm always eager
          to learn, grow, and contribute to meaningful projects that make a
          difference.
        </p>
      </div>
    </section>
  );
};

export default About;
