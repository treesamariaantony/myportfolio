import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-primary flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/"
        method="POST"
        className="flex flex-col max-w-[600px] gap-2"
      >
        <div>
          <p className="text-white text-3xl font-bold inline border-b-4 border-pink-700">
            Contact
          </p>
          <p className="text-gray-300 py-3">
            Submit the form below or email me at - anthony1.ajami@epita.fr
          </p>
        </div>

        <input
          type="text"
          name="name"
          placeholder="Name"
          className="p-2 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 rounded-md"
        />
        <textarea
          name="message"
          id="message-text-area"
          placeholder="Your message here..."
          rows={10}
          className="p-2 rounded-md"
        ></textarea>
        <button className="hover:bg-pink-600 text-white px-4 py-3 my-8 mx-auto flex items-center rounded-md border-2 border-pink-600 font-semibold">
          Let's collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
