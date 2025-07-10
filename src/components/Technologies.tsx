import { FileJson, Atom, Wind, Server } from "lucide-react";

const Technologies = () => {
  const technologies = [
    {
      name: "TypeScript",
      icon: FileJson,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500/10",
    },
    {
      name: "React",
      icon: Atom,
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-500/10",
    },
    {
      name: "Node.js",
      icon: Server,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500/10",
    },
    {
      name: "Tailwind CSS",
      icon: Wind,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <section id="technologies" className="py-40 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-40 left-40 w-80 h-80 floating-orb opacity-15 animate-float"></div>
        <div
          className="absolute bottom-40 right-40 w-64 h-64 floating-orb opacity-20 animate-morph"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute inset-0 bg-gradient-radial opacity-30"></div>

        {/* Additional Elements */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-purple-400/30 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 left-20 w-2 h-2 bg-indigo-400/40 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-3 h-3 bg-violet-400/25 rounded-full animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-6xl md:text-8xl font-black mb-8 text-white animate-fade-up">
            Tecnologias
          </h2>
          <p
            className="text-2xl md:text-3xl text-gray-100 max-w-4xl mx-auto animate-fade-up leading-relaxed font-light"
            style={{ animationDelay: "0.2s" }}
          >
            Ferramentas que domino para criar{" "}
            <span className="text-purple-300 font-semibold">
              soluções únicas
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 hover:bg-white/10 hover:scale-105 transition-all duration-300 animate-scale-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`w-24 h-24 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-500 bg-gradient-to-br ${tech.color} shadow-xl`}
                >
                  <tech.icon className="h-12 w-12 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-purple-300 transition-all duration-300">
                  {tech.name}
                </h3>

                <p className="text-gray-200 text-center leading-relaxed text-lg"></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
