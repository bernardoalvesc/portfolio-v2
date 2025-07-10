import { Github, Linkedin, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-gradient-conic opacity-10"></div>

        {/* Geometric Pattern */}
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

        {/* Subtle Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-200/20 to-transparent"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-indigo-200/15 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="animate-fade-up mb-20">
            <h1 className="text-7xl md:text-9xl font-black mb-20 text-white leading-tight tracking-tight">
              Bernardo Alves
            </h1>
            <h2
              className="text-5xl md:text-7xl font-light mb-12 text-gray-100 animate-slide-in-left tracking-wide"
              style={{ animationDelay: "0.3s" }}
            >
              Desenvolvedor Fullstack
            </h2>
          </div>

          <div
            className="animate-slide-in-right"
            style={{ animationDelay: "0.6s" }}
          >
            <p className="text-2xl md:text-4xl text-gray-200 mb-16 max-w-5xl mx-auto leading-relaxed font-light">
              Criando experiências digitais
              <span className="text-purple-300 font-semibold">
                {" "}
                extraordinárias
              </span>
              <br className="hidden md:block" />
              com código limpo e design inovador
            </p>
          </div>

          <div className="animate-zoom-in" style={{ animationDelay: "0.9s" }}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-20">
              <a href="/curriculo.pdf" download>
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-16 py-8 text-2xl font-semibold rounded-2xl shadow-2xl hover:scale-105 transition-all duration-300 border-0"
                >
                  <Download className="mr-4 h-7 w-7" />
                  Download CV
                </Button>
              </a>

              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/bernardoalvesdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 backdrop-blur-xl text-white hover:text-purple-200 hover:bg-white/20 px-10 py-8 text-xl font-medium rounded-2xl transition-all duration-300 border border-white/20"
                  >
                    <Linkedin className="mr-4 h-6 w-6" />
                    LinkedIn
                  </Button>
                </a>

                <a
                  href="https://github.com/bernardoalvesc"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ animationDelay: "0.2s" }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-white/10 backdrop-blur-xl text-white hover:text-purple-200 hover:bg-white/20 px-10 py-8 text-xl font-medium rounded-2xl transition-all duration-300 border border-white/20"
                  >
                    <Github className="mr-4 h-6 w-6" />
                    GitHub
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
