export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1573166584647-2c1366f9b219?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNvZnR3YXJlJTIwZGV2ZWxvcGVyfGVufDB8fDB8fHww)",
          }}
        ></div>
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to Bug Tracker
          </h1>
          <p className="text-lg mb-8">
            Easily report, track, and manage bugs in your software development
            projects.
          </p>
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-all">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
