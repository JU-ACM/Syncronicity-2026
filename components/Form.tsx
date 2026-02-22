import React from "react";

const SendMessageCard: React.FC = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
      
      <h2 className="text-2xl font-bold text-sky-400 mb-6">
        Send a message
      </h2>

      <form className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="mt-1 w-full rounded-full text-gray-600 placeholder:text-gray-600 bg-gray-200 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            placeholder="Phone"
            className="mt-1 w-full rounded-full text-gray-600 placeholder:text-gray-600 bg-gray-200 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Email ID</label>
          <input
            type="email"
            placeholder="Email ID"
            className="mt-1 w-full rounded-full text-gray-600 placeholder:text-gray-600 bg-gray-200 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Message</label>
          <textarea
            placeholder="Enter your message"
            rows={4}
            className="mt-1 w-full rounded-xl text-gray-600 placeholder:text-gray-600 bg-gray-200 px-4 py-2 text-sm resize-none outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 rounded-full bg-sky-500 px-6 py-2 text-white text-sm font-semibold shadow-md hover:bg-sky-600 active:scale-95 transition"
        >
          Send
          <span className="text-lg">➤</span>
        </button>
      </form>
    </div>
  );
};

export default SendMessageCard;