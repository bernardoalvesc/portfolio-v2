import { Github } from "lucide-react";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";

const Projects = () => {
  return (
    <section id="projects" className="py-40 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 floating-orb opacity-15 animate-float"></div>
        <div
          className="absolute bottom-20 right-20 w-64 h-64 floating-orb opacity-20 animate-morph"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black mb-8 text-white animate-fade-up drop-shadow-lg">
              Projetos
            </h2>
            <div
              className="w-32 h-1 bg-purple-500 mx-auto rounded-full animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            ></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Projeto 1 */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 animate-slide-in-left">
              <div className="h-64 border-b border-white/10 overflow-hidden">
                <img
                  src="/images/aztra.jpg"
                  alt="Imagem do Projeto Aztra"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Landing Page Aztra Tech
                </h3>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  Landing Page responsiva criada para a startup Aztra
                  Technology. Conta com uma interface intuitiva e com cores
                  chamativas mantendo a identidade visual da empresa.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30">
                    React
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30">
                    Tailwind
                  </span>
                </div>
                <a
                  href="https://www.aztratech.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full bg-white/10 backdrop-blur-xl text-white hover:text-purple-200 hover:bg-white/20 border border-white/20"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Acesse o site
                  </Button>
                </a>
              </div>
            </div>

            {/* Projeto 2 */}
            <div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="h-64 border-b border-white/10 overflow-hidden">
                <img
                  src="/images/explorer.jpg"
                  alt="GitHub Explorer"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  GitHub Explorer
                </h3>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  Tracker para acessar rápidamente perfis do GitHub: Apenas
                  colocar o nome do usuário e pronto, você terá acesso a todos
                  os repositórios. Feito utilizando a dev API do Github.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30">
                    TailwindCSS
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30">
                    React
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30">
                    TypeScript
                  </span>
                </div>
                <a
                  href="https://github.com/bernardoalvesc/github-explorer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full bg-white/10 backdrop-blur-xl text-white hover:text-purple-200 hover:bg-white/20 border border-white/20"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    Acesse o repositório
                  </Button>
                </a>
              </div>
            </div>

            {/* Projeto 3 */}
            <div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="h-64 border-b border-white/10 overflow-hidden">
                <img
                  src="/images/midnighty.jpg"
                  alt="Midnighty"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Midnighty Studio
                </h3>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  Site desenvolvido para o studio Midnighty, um studio
                  independente de criação de jogos. O site foi desenvolvido
                  utilizando puramente HTML + Tailwind CSS e JavaScript.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30">
                    HTML
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30">
                    TailwindCSS
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30">
                    JavaScript
                  </span>
                </div>
                <a
                  href="https://github.com/bernardoalvesc/midnighty-studio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full bg-white/10 backdrop-blur-xl text-white hover:text-purple-200 hover:bg-white/20 border border-white/20"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    Acesse o repositório
                  </Button>
                </a>
              </div>
            </div>

            {/* Projeto 4 */}
            <div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:scale-105 transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="h-64 border-b border-white/10 overflow-hidden">
                <img
                  src="/images/sperto.jpg"
                  alt="espertofit"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  EspertoFit
                </h3>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  Uma aplicação visual feita em ReactJS + Typescript, focada em
                  ajudar a comunidade maromba e montar treinamentos. O projeto
                  conta com uma interface intuitiva e responsiva.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30">
                    React
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30">
                    TailwindCSS
                  </span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-200 rounded-full text-sm font-medium border border-purple-500/30">
                    TypeScript
                  </span>
                </div>
                <a
                  href="https://github.com/bernardoalvesc/espertofit"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full bg-white/10 backdrop-blur-xl text-white hover:text-purple-200 hover:bg-white/20 border border-white/20"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    Acesse o repositório
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

export default Projects;
