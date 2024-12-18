export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">© 2024 Bug Tracker - All rights reserved.</p>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://twitter.com"
            target="_blank"
            className="text-white hover:text-gray-400"
          >
            <i className="fab fa-twitter fa-2x"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            className="text-white hover:text-gray-400"
          >
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-white hover:text-gray-400"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        </div>
        <p className="text-sm">Privacy Policy | Terms & Conditions</p>
      </div>
    </footer>
  );
}
