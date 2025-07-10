import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-40 relative overflow-hidden">
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
              Experiência
            </h2>
            <div
              className="w-32 h-1 bg-purple-500 mx-auto rounded-full animate-scale-in"
              style={{ animationDelay: "0.3s" }}
            ></div>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            {/* Experiência 1 */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 hover:bg-white/10 hover:scale-105 transition-all duration-300 animate-slide-in-left">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Desenvolvedor fullstack júnior
                    </h3>
                    <p className="text-xl text-purple-300 font-medium">
                      SANP Tecnologia
                    </p>
                  </div>
                  <div className="flex items-center text-gray-200 mt-4 lg:mt-0">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span className="text-lg">2025</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-200">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="text-lg">Brasília, DF</span>
                </div>

                <p className="text-lg text-gray-100 leading-relaxed">
                  Desenvolvimento de aplicações e ecommerces utilizando
                  tecnologias JavaScript, como React, NodeJS e outras
                  tecnologias como Python e Django.
                </p>
              </div>
            </div>

            {/* Experiência 2 */}
            <div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 hover:bg-white/10 hover:scale-105 transition-all duration-300 animate-slide-in-right"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Fundador e idealizador
                    </h3>
                    <p className="text-xl text-purple-300 font-medium">
                      Aztra Technology
                    </p>
                  </div>
                  <div className="flex items-center text-gray-200 mt-4 lg:mt-0">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span className="text-lg">2025</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-200">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="text-lg">Brasília, DF</span>
                </div>

                <p className="text-lg text-gray-100 leading-relaxed">
                  Criador e idealizador da Aztra Technology, startup focada em
                  desenvolvimento de SaaS. Como criador, sou responsável por
                  gerir os assuntos executivos e lógicos da empresa, além de ser
                  responsável por todo o desenvolvimento, arquitetura,
                  hospedagem e lançamento de produtos e SaaS.
                </p>
              </div>
            </div>

            {/* Experiência 3 */}
            <div
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 hover:bg-white/10 hover:scale-105 transition-all duration-300 animate-slide-in-left"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      Desenvolvedor de front-end júnior
                    </h3>
                    <p className="text-xl text-purple-300 font-medium">
                      Codewynn Tecnologia
                    </p>
                  </div>
                  <div className="flex items-center text-gray-200 mt-4 lg:mt-0">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span className="text-lg">set 2024 - jan 2025</span>
                  </div>
                </div>

                <div className="flex items-center text-gray-200">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span className="text-lg">Brasília, DF</span>
                </div>

                <p className="text-lg text-gray-100 leading-relaxed">
                  Atuei como Desenvolvedor Front-End na Codewynn, criando
                  interfaces modernas e responsivas em ReactJS, NextJS e
                  TypeScript. Participei do desenvolvimento de um sistema de
                  gestão para restaurantes, estruturando o layout com
                  TailwindCSS e integrando APIs. Adotei boas práticas e
                  trabalhei em ambiente Scrum, colaborando com designers,
                  back-end e stakeholders. O projeto foi entregue com sucesso,
                  garantindo alta performance e ótima experiência do usuário.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
