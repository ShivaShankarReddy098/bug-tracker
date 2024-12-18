export default function Contact() {
  return (
    <section className="bg-gray-200 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
        <p className="text-lg mb-8">
          Have any questions? We'd love to hear from you!
        </p>
        <form className="max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 mb-4 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 mb-4 border rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 mb-4 border rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
