import { Code, MonitorSmartphone, Server, Palette } from "lucide-react";

const skills = [
  { icon: <Code className="w-8 h-8 text-orange-400" />, name: "JavaScript" },
  {
    icon: <MonitorSmartphone className="w-8 h-8 text-orange-400" />,
    name: "React.js",
  },
  { icon: <Server className="w-8 h-8 text-orange-400" />, name: "Node.js" },
  {
    icon: <Palette className="w-8 h-8 text-orange-400" />,
    name: "Tailwind CSS",
  },
  { icon: <Code className="w-8 h-8 text-orange-400" />, name: "HTML5" },
  { icon: <Code className="w-8 h-8 text-orange-400" />, name: "CSS3" },
];

const Skills = () => {
  return (
    <section className=" flex flex-col items-center justify-center px-4">
      <h2 className="text-4xl font-bold text-orange-400 mb-10">Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-white transition-transform duration-300 transform hover:scale-115"
          >
            {skill.icon}
            <span className="mt-2 text-lg">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
