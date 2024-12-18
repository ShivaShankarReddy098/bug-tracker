export default function Features() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="bg-yellow-500 p-4 rounded-full inline-block mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 14l2 2 4-4m-6-6l-4 4m2 4l-2-2-4 4m14-4l2 2 4-4"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Easy Bug Reporting</h3>
            <p>
              Quickly report any bug with clear descriptions and priority
              levels.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="bg-yellow-500 p-4 rounded-full inline-block mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2">
              Interactive Dashboard
            </h3>
            <p>
              View all your reported bugs in one place and track their progress.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="bg-yellow-500 p-4 rounded-full inline-block mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 7h3M10 12h3m-3 4h6"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold mb-2">Easy Updates</h3>
            <p>
              Keep bugs up-to-date with priority changes and status updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
