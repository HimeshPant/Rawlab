import React from "react";
import {
  Lightbulb,
  Settings,
  PenTool,
  Code,
  Cpu,
  Link,
  FlaskConical,
  Rocket,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Ideation & Input",
    description: "Gathering initial concepts and raw data requirements.",
    icon: Lightbulb,
    color: "text-yellow-400",
    border: "border-yellow-400/30",
    shadow: "shadow-yellow-400/20",
    hoverShadow: "hover:shadow-yellow-400/40",
  },
  {
    id: 2,
    title: "System Setup",
    description: "Configuring the environment and necessary dependencies.",
    icon: Settings,
    color: "text-cyan-400",
    border: "border-cyan-400/30",
    shadow: "shadow-cyan-400/20",
    hoverShadow: "hover:shadow-cyan-400/40",
  },
  {
    id: 3,
    title: "Design Phase",
    description: "Creating wireframes and architecture diagrams.",
    icon: PenTool,
    color: "text-pink-400",
    border: "border-pink-400/30",
    shadow: "shadow-pink-400/20",
    hoverShadow: "hover:shadow-pink-400/40",
  },
  // Row 2 (Reversed Flow visually: 6 <- 5 <- 4)
  {
    id: 4,
    title: "Development Start",
    description: "Writing core logic and feature implementation.",
    icon: Code,
    color: "text-blue-400",
    border: "border-blue-400/30",
    shadow: "shadow-blue-400/20",
    hoverShadow: "hover:shadow-blue-400/40",
  },
  {
    id: 5,
    title: "Core Logic",
    description: "Implementing the central, critical business rules.",
    icon: Cpu,
    color: "text-purple-400",
    border: "border-purple-400/30",
    shadow: "shadow-purple-400/20",
    hoverShadow: "hover:shadow-purple-400/40",
  },
  {
    id: 6,
    title: "Integration",
    description: "Connecting all modules and external APIs seamlessly.",
    icon: Link,
    color: "text-indigo-400",
    border: "border-indigo-400/30",
    shadow: "shadow-indigo-400/20",
    hoverShadow: "hover:shadow-indigo-400/40",
  },
  // Row 3 (Standard Flow: 7 -> 8 -> 9)
  {
    id: 7,
    title: "Testing & QA",
    description: "Rigorous unit, integration, and user acceptance testing.",
    icon: FlaskConical,
    color: "text-green-400",
    border: "border-green-400/30",
    shadow: "shadow-green-400/20",
    hoverShadow: "hover:shadow-green-400/40",
  },
  {
    id: 8,
    title: "Deployment",
    description: "Moving the final product to the live production environment.",
    icon: Rocket,
    color: "text-orange-400",
    border: "border-orange-400/30",
    shadow: "shadow-orange-400/20",
    hoverShadow: "hover:shadow-orange-400/40",
  },
  {
    id: 9,
    title: "Success & Review",
    description: "Final sign-off and retrospective on the process.",
    icon: CheckCircle2,
    color: "text-emerald-400",
    border: "border-emerald-400/30",
    shadow: "shadow-emerald-400/20",
    hoverShadow: "hover:shadow-emerald-400/40",
  },
];

// Helper to determine arrow direction based on grid position
const Connector = ({ type, className = "" }) => {
  const common = `absolute text-neutral-600 z-0 ${className}`;
  // Electric flow line style
  const flowLine =
    "absolute w-full h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 animate-energy-flow shadow-[0_0_8px_rgba(34,211,238,0.8)]";
  const flowLineVertical =
    "absolute h-full w-[3px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-0 animate-energy-flow shadow-[0_0_8px_rgba(34,211,238,0.8)]";

  if (type === "right")
    return (
      <div
        className={`${common} -right-6 md:-right-8 top-1/2 -translate-y-1/2`}
      >
        <ArrowRight size={24} className="text-neutral-700" />
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden h-[4px]">
          <div className={`${flowLine} left-[-100%]`}></div>
        </div>
      </div>
    );

  if (type === "left")
    return (
      <div className={`${common} -left-6 md:-left-8 top-1/2 -translate-y-1/2`}>
        <ArrowLeft size={24} className="text-neutral-700" />
        <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 overflow-hidden h-[4px] rotate-180">
          <div className={`${flowLine} left-[-100%]`}></div>
        </div>
      </div>
    );

  if (type === "down")
    return (
      <div className={`${common} -bottom-10 left-1/2 -translate-x-1/2`}>
        <div className="relative flex flex-col items-center h-10 justify-center">
          <div className="h-full w-[20px] relative overflow-hidden">
            <div
              className={`${flowLineVertical} top-[-100%] left-1/2 -translate-x-1/2`}
            ></div>
          </div>
          <ArrowDown
            size={24}
            className="text-neutral-700 absolute bottom-[-6px]"
          />
        </div>
      </div>
    );

  if (type === "down-right")
    return (
      <div className={`${common} -bottom-12 right-1/2 translate-x-1/2`}>
        <div className="relative h-12 w-[2px] bg-neutral-800/50 overflow-hidden">
          <div className={`${flowLineVertical} top-[-100%]`}></div>
        </div>
        {/* Use a right arrow rotated 90 degrees to point down if preferred, or just a vertical line connector visually */}
        <ArrowDown
          size={24}
          className="text-neutral-700 absolute -bottom-3 -left-[11px]"
        />
      </div>
    );

  if (type === "down-left")
    return (
      <div className={`${common} -bottom-12 left-1/2 -translate-x-1/2`}>
        <div className="relative h-12 w-[2px] bg-neutral-800/50 overflow-hidden">
          <div className={`${flowLineVertical} top-[-100%]`}></div>
        </div>
        <ArrowDown
          size={24}
          className="text-neutral-700 absolute -bottom-3 -left-[11px]"
        />
      </div>
    );

  return null;
};

export default function ProcessFlow() {
  // Mobile Reordering: 1, 2, 4, 3, 5, 6, 8, 7, 9
  const mobileSteps = [
    steps[0],
    steps[1], // Row 1
    steps[3],
    steps[2], // Row 2
    steps[4],
    steps[5], // Row 3
    steps[7],
    steps[6], // Row 4
    steps[8], // Row 5
  ];

  return (
    <section
      id="process-flow"
      className="py-20 bg-black overflow-hidden relative"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <style>{`
        @keyframes energy-flow {
          0% { transform: translateX(0); opacity: 0; }
          10% { opacity: 1; }
          50% { opacity: 1; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        @keyframes energy-flow-vertical {
            0% { transform: translateY(0); opacity: 0; }
            10% { opacity: 1; }
            50% { opacity: 1; }
            100% { transform: translateY(200%); opacity: 0; }
          }
        .animate-energy-flow { animation: energy-flow 2s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
        
        .animate-energy-flow-v { animation: energy-flow-vertical 2s cubic-bezier(0.4, 0, 0.2, 1) infinite; }

        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        /* New Animations for Constant Motion */
        @keyframes sheen {
          0% { transform: translateX(-150%) skewX(-45deg); }
          20% { transform: translateX(150%) skewX(-45deg); } 
          100% { transform: translateX(150%) skewX(-45deg); }
        }
        .animate-sheen {
          animation: sheen 6s ease-in-out infinite;
        }

        @keyframes float-icon {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-float-icon {
          animation: float-icon 4s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              Production Engine
            </span>
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            From concept to deployment, our 9-step growth architecture ensures
            precision at every stage.
          </p>
        </div>

        {/* --- DESKTOP LAYOUT (Hidden on Mobile) --- */}
        <div className="hidden md:grid max-w-6xl mx-auto grid-cols-3 gap-y-16 gap-x-16 relative">
          {/* ROW 1: 1 -> 2 -> 3 */}
          {steps.slice(0, 3).map((step, index) => (
            <div key={step.id} className="relative group perspective-1000">
              <div
                className={`relative z-10 h-full bg-neutral-900/80 backdrop-blur-md border ${step.border} rounded-2xl p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:${step.shadow} ${step.hoverShadow} opacity-0 animate-fade-in-up overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Sheen Effect */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-10">
                  <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-sheen"></div>
                </div>

                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div
                    className={`p-3 rounded-lg bg-white/5 ${step.color} shadow-inner animate-float-icon`}
                  >
                    <step.icon size={24} />
                  </div>
                  <span className="text-4xl font-black text-neutral-800/50 group-hover:text-neutral-700 transition-colors select-none">
                    0{step.id}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors relative z-10">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
              {index < 2 && <Connector type="right" />}
              {index === 2 && <Connector type="down-right" />}
            </div>
          ))}

          {/* ROW 2: 6 <- 5 <- 4 */}
          {[steps[5], steps[4], steps[3]].map((step, index) => (
            <div key={step.id} className="relative group">
              <div
                className={`relative z-10 h-full bg-neutral-900/80 backdrop-blur-md border ${step.border} rounded-2xl p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:${step.shadow} ${step.hoverShadow} opacity-0 animate-fade-in-up overflow-hidden`}
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                {/* Sheen Effect */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-10">
                  <div
                    className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-sheen"
                    style={{ animationDelay: "1s" }}
                  ></div>
                </div>

                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div
                    className={`p-3 rounded-lg bg-white/5 ${step.color} shadow-inner animate-float-icon`}
                    style={{ animationDelay: "0.5s" }}
                  >
                    <step.icon size={24} />
                  </div>
                  <span className="text-4xl font-black text-neutral-800/50 group-hover:text-neutral-700 transition-colors select-none">
                    0{step.id}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors relative z-10">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
              {index > 0 && <Connector type="left" />}
              {index === 0 && <Connector type="down-left" />}
            </div>
          ))}

          {/* ROW 3: 7 -> 8 -> 9 */}
          {steps.slice(6, 9).map((step, index) => (
            <div key={step.id} className="relative group">
              <div
                className={`relative z-10 h-full bg-neutral-900/80 backdrop-blur-md border ${step.border} rounded-2xl p-6 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:${step.shadow} ${step.hoverShadow} opacity-0 animate-fade-in-up overflow-hidden`}
                style={{ animationDelay: `${(index + 6) * 100}ms` }}
              >
                {/* Sheen Effect */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-10">
                  <div
                    className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-sheen"
                    style={{ animationDelay: "2s" }}
                  ></div>
                </div>

                <div className="flex items-center justify-between mb-4 relative z-10">
                  <div
                    className={`p-3 rounded-lg bg-white/5 ${step.color} shadow-inner animate-float-icon`}
                    style={{ animationDelay: "1s" }}
                  >
                    <step.icon size={24} />
                  </div>
                  <span className="text-4xl font-black text-neutral-800/50 group-hover:text-neutral-700 transition-colors select-none">
                    0{step.id}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors relative z-10">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>
              {index < 2 && <Connector type="right" />}
            </div>
          ))}
        </div>

        {/* --- MOBILE LAYOUT (2 Columns, Snake Flow) --- */}
        <div className="grid md:hidden grid-cols-2 gap-x-8 gap-y-16 max-w-md mx-auto relative">
          {mobileSteps.map((step, index) => (
            <div key={step.id} className="relative group">
              <div
                className={`relative z-10 h-full bg-neutral-900/80 backdrop-blur-md border ${step.border} rounded-2xl p-4 transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:${step.shadow} ${step.hoverShadow} opacity-0 animate-fade-in-up overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Sheen Effect Mobile */}
                <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-10">
                  <div
                    className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-sheen"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between mb-3 relative z-10">
                  <div
                    className={`p-2 rounded-lg bg-white/5 ${step.color} shadow-inner animate-float-icon`}
                  >
                    <step.icon size={20} />
                  </div>
                  <span className="text-3xl font-black text-neutral-800/50 group-hover:text-neutral-700 select-none">
                    0{step.id}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1 leading-tight group-hover:text-cyan-400 transition-colors relative z-10">
                  {step.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed relative z-10">
                  {step.description}
                </p>
              </div>

              {/* Mobile Arrows based on visual index in the 2-col grid */}
              {index === 0 && <Connector type="right" />}
              {index === 1 && <Connector type="down" />}

              {index === 3 && <Connector type="left" />}
              {index === 2 && <Connector type="down" />}

              {index === 4 && <Connector type="right" />}
              {index === 5 && <Connector type="down" />}

              {index === 7 && <Connector type="left" />}
              {index === 6 && <Connector type="down" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
