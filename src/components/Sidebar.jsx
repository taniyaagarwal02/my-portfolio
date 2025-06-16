import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const Sidebar = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-col fixed top-24 left-4 w-72 h-[350px] p-4 bg-[rgba(255,255,255,0.05)] backdrop-blur-md border-r border-b border-white/20 rounded-br-2xl shadow-lg text-white space-y-6">
        <h2 className="text-orange-400 font-bold text-lg">Contacts</h2>

        <div className="text-orange-300 flex items-center space-x-3">
          <Mail className="w-5 h-5" />
          <a
            href="mailto:taniyaagarwal2003@gmail.com"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            taniyaagarwal2003@gmail.com
          </a>
        </div>

        <div className="text-orange-300 flex items-center space-x-3">
          <Github className="w-5 h-5" />
          <a
            href="https://github.com/TaniyaAgarwal02"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            GitHub
          </a>
        </div>

        <div className="text-orange-300 flex items-center space-x-3">
          <Linkedin className="w-5 h-5" />
          <a
            href="https://www.linkedin.com/in/taniya-agarwal1108?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition duration-300"
          >
            LinkedIn
          </a>
        </div>

        {/* <div className="text-orange-300 flex items-center space-x-3">
          <MapPin className="w-5 h-5" />
          <span className="text-white hover:text-blue-400 transition duration-300">
            India
          </span>
        </div> */}
        <div className="hidden md:flex text-orange-300 items-center space-x-3">
          <MapPin className="w-5 h-5" />
          <span className="text-white">India</span>
        </div>
      </div>

      {/* Mobile Footer */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-[rgba(255,255,255,0.05)] backdrop-blur-md border-t border-white/20 flex justify-around items-center py-2 text-orange-400">
        <a href="mailto:taniyaagarwal2003@gmail.com">
          <Mail className="w-6 h-6 hover:text-blue-400 transition duration-300" />
        </a>
        <a
          href="https://github.com/TaniyaAgarwal02"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="w-6 h-6 hover:text-blue-400 transition duration-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/taniya-agarwal1108?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-6 h-6 hover:text-blue-400 transition duration-300" />
        </a>
        <MapPin className="w-6 h-6 hover:text-blue-400 transition duration-300" />
      </div>
    </>
  );
};

export default Sidebar;
