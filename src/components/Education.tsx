import { ArrowUp } from "lucide-react";

const Education = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="education" className="py-40 relative overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 floating-orb opacity-20 animate-morph"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 floating-orb opacity-15 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <h2 className="text-3xl md:text-6xl font-extrabold text-white mb-10 animate-fade-up">
          Sempre aprendendo para construir o futuro com{" "}
          <span className="text-purple-300">código</span> 👨‍💻📚
        </h2>
      </div>
    </section>
  );
};

export default Education;
