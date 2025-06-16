const Contact = () => {
  return (
    <section className=" px-6 py-20 text-white flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-orange-400 mb-8">Contact Me</h2>

      <form className="w-full max-w-2xl bg-[rgba(255,255,255,0.05)] backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-lg space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded bg-black bg-opacity-30 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded bg-black bg-opacity-30 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm mb-2">
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Write your message here..."
            className="w-full px-4 py-2 rounded bg-black bg-opacity-30 border border-white/20 focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 text-black font-semibold px-6 py-2 rounded transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
