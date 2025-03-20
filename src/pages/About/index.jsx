import useDocumentTitle from '../../hooks/useDocumentTitle';
import { Link } from 'react-router-dom';

export default function About() {
    useDocumentTitle('About Page');

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">About Page</h1>
        <Link to="/">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
            Go to Home
          </button>
        </Link>
      </div>
    );
}