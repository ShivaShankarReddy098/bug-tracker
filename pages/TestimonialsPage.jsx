export default function Testimonials() {
  return (
    <section className="bg-blue-100 py-16">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-8">What Our Users Say</h2>
        <div className="flex flex-wrap justify-center gap-12">
          <div className="max-w-md bg-white p-8 shadow-lg rounded-lg">
            <p className="text-lg mb-4">
              "Bug Tracker has been a game-changer for our development process.
              It's simple to use and keeps our team organized."
            </p>
            <div className="flex items-center justify-center">
              <div className="bg-yellow-500 p-4 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7a4 4 0 118 0 4 4 0 01-8 0zM12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2M19 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold">John Doe</p>
                <p className="text-sm text-gray-600">Developer</p>
              </div>
            </div>
          </div>
          <div className="max-w-md bg-white p-8 shadow-lg rounded-lg">
            <p className="text-lg mb-4">
              "The dashboard makes it easy to track bugs and priorities. It's
              helped us improve our release cycles significantly."
            </p>
            <div className="flex items-center justify-center">
              <div className="bg-yellow-500 p-4 rounded-full mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12h3l-3-3m0 6h3l-3-3m-4 0H6l3-3m0 6H6l3-3"
                  />
                </svg>
              </div>
              <div>
                <p className="font-semibold">Jane Smith</p>
                <p className="text-sm text-gray-600">QA Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
