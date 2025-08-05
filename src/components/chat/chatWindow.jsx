// The new ChatPage component.
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
const ChatPage = () => (
  <div className="flex flex-col items-center justify-center p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Chat Page</h1>
    <p className="text-lg text-gray-600 dark:text-gray-400">
      Welcome to the chat! You can add your chat functionality here.
    </p>
    <Link to="/" className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
      Go to Home
    </Link>
  </div>
);

export default ChatPage;