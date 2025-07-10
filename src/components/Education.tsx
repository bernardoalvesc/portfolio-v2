import { Calendar, MapPin } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-40 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 floating-orb opacity-20 animate-morph"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 floating-orb opacity-15 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-8xl font-black mb-8 text-white animate-fade-up drop-shadow-lg">
              Formação
            </h2>
            <div
              className="w-32 h-1 bg-purple-500 mx-auto rounded-full animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            ></div>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {/* Formação 1 */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 hover:bg-white/10 hover:scale-105 transition-all duration-300 animate-slide-in-left">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Bacharelado em Engenharia de Software
                    </h3>
                    <p className="text-xl text-purple-300 font-medium">
                      Universidade Católica de Brasília
                    </p>
                  </div>
                  <div className="flex items-center text-gray-200 mt-4 lg:mt-0">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span className="text-lg">2024 - 2027</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-200">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="text-lg">Taguatinga, DF</span>
                </div>

                <p className="text-lg text-gray-100 leading-relaxed">
                  Formação sólida em fundamentos da computação, algoritmos,
                  estruturas de dados e desenvolvimento de software. Foco em
                  tecnologias web.
                </p>
              </div>
            </div>

            {/* Formação 2 */}
            <div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 hover:bg-white/10 hover:scale-105 transition-all duration-300 animate-slide-in-right"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Curso de Inglês
                    </h3>
                    <p className="text-xl text-purple-300 font-medium">CNA</p>
                  </div>
                  <div className="flex items-center text-gray-200 mt-4 lg:mt-0">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span className="text-lg">2019 - 2021</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-200">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="text-lg">Online</span>
                </div>

                <p className="text-lg text-gray-100 leading-relaxed">
                  Formação completa no curso de Língua Inglesa pela escola CNA.
                  Realização do Cambridge B2 First (antigo FCE), atingindo 168
                  pontos e conquistando a certificação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
