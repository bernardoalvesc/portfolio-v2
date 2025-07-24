const About = () => {
  return (
    <section id="about" className="py-24 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-56 h-56 md:w-72 md:h-72 floating-orb opacity-20 animate-morph"></div>
        <div
          className="absolute bottom-20 left-10 w-72 h-72 md:w-96 md:h-96 floating-orb opacity-15 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-5xl md:text-7xl font-black mb-6 text-white animate-fade-up drop-shadow-lg">
            Sobre Mim
          </h2>
          <div
            className="w-24 h-1 bg-purple-500 mx-auto rounded-full animate-scale-in"
            style={{ animationDelay: "0.3s" }}
          ></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-5xl mx-auto">
          <div className="md:w-2/3 animate-slide-in-left">
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-4">
              Sou um{" "}
              <span className="text-purple-300 font-semibold">
                desenvolvedor fullstack
              </span>{" "}
              apaixonado por tecnologia e inovação, com experiência na criação
              de interfaces modernas, responsivas e funcionais usando{" "}
              <strong>ReactJS, Tailwind CSS e TypeScript</strong>.
            </p>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-4">
              Estudo Engenharia de Software na{" "}
              <span className="font-semibold">
                Universidade Católica de Brasília
              </span>{" "}
              e gosto de resolver problemas com soluções criativas, acessíveis e
              performáticas.
            </p>
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed">
              Meu foco é transformar ideias em{" "}
              <span className="text-purple-300 font-semibold">
                experiências digitais marcantes
              </span>{" "}
              com usabilidade e código limpo.
            </p>
          </div>

          <div className="md:w-1/3 flex justify-center md:justify-end animate-slide-in-right">
            <img
              src="/images/memoji.jpg"
              alt="Bernardo Memoji"
              className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-purple-500 shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
