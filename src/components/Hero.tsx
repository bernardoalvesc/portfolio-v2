import { Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 md:pt-36 relative overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-conic opacity-10"></div>

        {/* Pontos animados */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400/20 rounded-full animate-pulse"></div>
          <div
            className="absolute top-1/3 right-1/3 w-1 h-1 bg-indigo-400/25 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-purple-300/15 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-violet-400/20 rounded-full animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/6 w-2.5 h-2.5 bg-purple-400/15 rounded-full animate-pulse"
            style={{ animationDelay: "4s" }}
          ></div>
          <div
            className="absolute top-2/3 right-1/6 w-1 h-1 bg-indigo-300/20 rounded-full animate-pulse"
            style={{ animationDelay: "5s" }}
          ></div>
        </div>

        {/* Linhas verticais */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-200/20 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-200/15 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="animate-fade-up mb-10 md:mb-16">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-white leading-tight tracking-tight">
              Bernardo <span className="text-purple-400">Alves</span>
            </h1>

            <h2
              className="text-xl sm:text-3xl md:text-4xl font-light mb-6 text-gray-100 animate-slide-in-left"
              style={{ animationDelay: "0.3s" }}
            >
              Desenvolvedor Fullstack
            </h2>
          </div>

          <div
            className="animate-slide-in-right"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-base sm:text-lg md:text-2xl text-gray-200 mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed font-light">
              Criando experiências digitais
              <span className="text-purple-300 font-semibold"> marcantes </span>
              com código limpo e muito café ☕.
            </p>
          </div>

          <div className="animate-zoom-in" style={{ animationDelay: "0.9s" }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <a href="/curriculo.pdf" download>
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Download className="mr-3 h-5 w-5" />
                  Download CV
                </Button>
              </a>

              <a
                href="https://www.linkedin.com/in/bernardoalvesdev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-xl text-white hover:text-purple-200 hover:bg-white/20 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 border border-white/20"
                >
                  <Linkedin className="mr-3 h-5 w-5" />
                  LinkedIn
                </Button>
              </a>

              <a
                href="https://github.com/bernardoalvesc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-xl text-white hover:text-purple-200 hover:bg-white/20 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 border border-white/20"
                >
                  <Github className="mr-3 h-5 w-5" />
                  GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
