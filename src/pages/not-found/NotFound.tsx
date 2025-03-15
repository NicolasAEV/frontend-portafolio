import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-xl mt-4">Page Not Found</p>
        <p className="mt-2 text-gray-400">Sorry, the page you are looking for doesn't exist.</p>
        <Link
          to="/"
          className="mt-6 inline-block text-lg font-medium text-purple-500 hover:text-purple-400 transition duration-300"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
