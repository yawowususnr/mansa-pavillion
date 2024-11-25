import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RequestServices = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Subject: "",
    Message: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzniDMgzfvWgr1Nc3kUpz-F2aTEsSYXNPYFtjQwG3NZBx8U68l5NYDCMU-f6fpOC4bO6A/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formData).toString(),
        }
      );

      console.log("Request sent.");
      navigate("/");
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-2xl pt-10 mx-6">
        Fill Out this form and we'll be in touch with you soon!
      </h3>
      <div className="w-full  border-gray-100 pt-20">
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-1/2 min-w-96 bg-white shadow-md rounded-lg p-6 space-y-6"
        >
          <div>
            <label
              htmlFor="Name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Enter your name:
            </label>
            <input
              type="text"
              name="Name"
              id="Name"
              value={formData.Name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Enter your email:
            </label>
            <input
              type="email"
              name="Email"
              id="Email"
              value={formData.Email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="john.doe@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="Phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Enter your phone:
            </label>
            <input
              type="text"
              name="Phone"
              id="Phone"
              value={formData.Phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="(123) 456-7890"
            />
          </div>

          <div>
            <label
              htmlFor="Subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Enter your subject:
            </label>
            <input
              type="text"
              name="Subject"
              id="Subject"
              value={formData.Subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Subject"
            />
          </div>

          <div>
            <label
              htmlFor="Message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Enter your message:
            </label>
            <textarea
              name="Message"
              id="Message"
              value={formData.Message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Your message..."
              rows="4"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestServices;