import React, { useState } from "react";

const SendMessageCard: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

    try {
      const res = await fetch(
  "https://script.google.com/macros/s/AKfycbw8BbHV289Pv0aE-eeJDSohNmX9jZyQ9g9xv4_v9NpgfXv28qL_BXRV410VJU_pkMWQ/exec",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
    mode: "cors",
  }
);

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
      <h2 className="text-2xl font-bold text-sky-400 mb-6">Send a message</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <label className="text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="mt-1 w-full rounded-full text-gray-600 placeholder:text-gray-600 bg-gray-200 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm font-medium text-gray-700">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
            className="mt-1 w-full rounded-full text-gray-600 placeholder:text-gray-600 bg-gray-200 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium text-gray-700">Email ID</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email ID"
            required
            className="mt-1 w-full rounded-full text-gray-600 placeholder:text-gray-600 bg-gray-200 px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        {/* Message */}
        <div>
          <label className="text-sm font-medium text-gray-700">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            rows={4}
            required
            className="mt-1 w-full rounded-xl text-gray-600 placeholder:text-gray-600 bg-gray-200 px-4 py-2 text-sm resize-none outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex items-center gap-2 rounded-full bg-[#42a7d6] px-6 py-2 text-white text-sm font-semibold shadow-md 
                     transition-all duration-200 ease-in-out
                     hover:bg-[#3591bc] hover:shadow-lg hover:-translate-y-0.5
                     active:bg-[#2d7da3] active:scale-95 active:translate-y-0"
        >
          {loading ? "Sending..." : "Send"}
          <span className="text-lg">➤</span>
        </button>

        {status && (
          <p className="text-sm text-gray-600 mt-2">{status}</p>
        )}
      </form>
    </div>
  );
};

export default SendMessageCard;
