import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-blue-600">404</h1>
      <p className="text-lg text-gray-600 mt-4">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
