import { FileText, Download } from "lucide-react";
import resumePDF from "../assets/Taniya_agarwal.pdf";

const Resume = () => {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-white px-6">
      <h2 className="text-3xl font-bold text-orange-400 mb-6">Resume</h2>

      <div className="bg-[rgba(255,255,255,0.05)] backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-lg max-w-xl w-full text-center">
        <p className="text-lg mb-6">
          You can download or preview my resume below to know more about my
          skills, education, and experience.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-orange-400 hover:bg-orange-500 text-black font-semibold px-6 py-2 rounded transition duration-300"
          >
            <FileText className="w-5 h-5" />
            Preview Resume
          </a>

          <a
            href={resumePDF}
            download="Taniya_Agarwal_Resume.pdf"
            className="flex items-center justify-center gap-2 border border-orange-400 hover:bg-orange-400 hover:text-black text-orange-400 font-semibold px-6 py-2 rounded transition duration-300"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
