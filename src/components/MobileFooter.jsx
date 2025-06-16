import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const MobileFooter = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full md:hidden bg-[rgba(255,255,255,0.05)] backdrop-blur-md border-t border-white/20 py-2 px-4 flex justify-around items-center z-50">
      <a
        href="mailto:taniyaagarwal2003@gmail.com"
        className="text-orange-300 transition"
      >
        <Mail />
      </a>
      <a
        href="https://github.com/TaniyaAgarwal02"
        target="_blank"
        className="text-orange-300 transition"
      >
        <Github />
      </a>
      <a
        href="https://linkedin.com/in/taniya"
        target="_blank"
        className="text-orange-300 transition"
      >
        <Linkedin />
      </a>
      {/* <span className="text-orange-400">
        <MapPin />
      </span> */}
      <div className="flex md:hidden flex-col items-center text-orange-300">
        <MapPin className="w-5 h-5" />
        <span className="text-xs mt-1 text-white">India</span>
      </div>
    </div>
  );
};

export default MobileFooter;
