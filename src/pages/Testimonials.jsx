import React, { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const savedTestimonials =
      JSON.parse(localStorage.getItem("testimonials")) || [];
    setTestimonials(savedTestimonials);
  }, []);

  const resetForm = () => {
    setName("");
    setMessage("");
  };

  const addTestimonial = (e) => {
    e.preventDefault();
    const newTestimonial = { name, message };
    const updatedTestimonials = [...testimonials, newTestimonial];
    setTestimonials(updatedTestimonials);
    localStorage.setItem("testimonials", JSON.stringify(updatedTestimonials));
    resetForm();
  };

  return (
    <div>
      <div>
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex gap-2 items-center justify-center border bg-gray-400 rounded-md p-2"
          >
            <p>{testimonial.name}</p>
            <p>{testimonial.message}</p>
          </div>
        ))}
      </div>
      <form onSubmit={addTestimonial}>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          rows={10}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">Add Testimonial</button>
      </form>
    </div>
  );
};

export default Testimonials;
