import React, { useState } from "react";
import { Send } from "lucide-react";

const SendMessageCard: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  // New state to track if the status is an error
  const [isError, setIsError] = useState(false); 

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setIsError(false); // Reset error state on new submission

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyGw_emNEvEAcUD5y1Sh4TecYOpn8aV_9RyRVQss4AuuPHRV1KT4e71YxlKlCTFjyv60g/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain", 
          },
          body: JSON.stringify(formData),
          mode: "no-cors", 
        },
      );

      setStatus("Message sent successfully!");
      setIsError(false); // Ensure it's marked as success
      setFormData({ name: "", phone: "", email: "", message: "" });
    } catch (error) {
      setStatus("Error sending message.");
      setIsError(true); // Mark as error to trigger red text
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-bold font-unbounded text-black mb-6">
        Send a message
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label className="text-sm font-medium font-euclid text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="mt-1 w-full rounded-full font-euclid text-gray-600 placeholder:text-gray-600 bg-gray-200 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm font-medium font-euclid text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
            className="mt-1 w-full rounded-full font-euclid text-gray-600 placeholder:text-gray-600 bg-gray-200 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium font-euclid text-gray-700">
            Email ID
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email ID"
            required
            className="mt-1 w-full rounded-full font-euclid text-gray-600 placeholder:text-gray-600 bg-gray-200 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        {/* Message */}
        <div>
          <label className="text-sm font-medium font-euclid text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows={4}
            required
            className="mt-1 w-full rounded-xl font-euclid text-gray-600 placeholder:text-gray-600 bg-gray-200 px-4 py-2 text-sm resize-none outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2 text-white text-sm font-euclid font-medium shadow-md 
             transition-all duration-200 ease-in-out
             hover:bg-blue-400 hover:shadow-lg
             active:bg-blue-800 active:scale-90"
        >
          {loading ? "Sending..." : "Send"}
          <Send className="w-4 h-4" />
        </button>

        {/* Dynamic color based on the isError state */}
        {status && (
          <p
            className={`text-sm font-euclid mt-2 ${
              isError ? "text-red-500" : "text-green-500"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
};

export default SendMessageCard;