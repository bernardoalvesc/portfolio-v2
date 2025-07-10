
const About = () => {
  return (
    <section id="about" className="py-40 relative overflow-hidden">-
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 floating-orb opacity-20 animate-morph"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 floating-orb opacity-15 animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black mb-8 text-white animate-fade-up drop-shadow-lg">
              Sobre Mim
            </h2>
            <div className="w-32 h-1 bg-purple-500 mx-auto rounded-full animate-scale-in" style={{ animationDelay: '0.3s' }}></div>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-10 animate-slide-in-left">
            <p className="text-2xl text-gray-100 leading-relaxed font-light">
              Sou um desenvolvedor apaixonado por tecnologia e inovação, com experiência na criação de interfaces modernas,
              responsivas e funcionais utilizando ReactJS, Tailwind CSS e TypeScript. Bacharelando em Engenharia de Software pela
              Universidade Católica de Brasília, tenho interesse em soluções criativas e desafios técnicos no desenvolvimento web. Meu foco é combinar
              performance, estética e usabilidade para transformar ideias em experiências digitais marcantes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
