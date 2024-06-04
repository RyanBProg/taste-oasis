"use client";

import React, { FormEvent } from "react";
import { useState } from "react";

export default function BookingForm() {
  const initialFormData = {
    name: "",
    email: "",
    number: "",
    message: "",
  };

  const [formInputs, setFormInputs] = useState(initialFormData);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/send", {
        method: "POST",
      });

      if (response.ok) {
        alert("Submission successful");
        setFormInputs(initialFormData);
      } else {
        alert("Submission failed");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Submission failed");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <input
        type="text"
        name="name"
        id="name"
        value={formInputs.name}
        onChange={handleChange}
        className="form-input"
        required
      />

      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        value={formInputs.email}
        onChange={handleChange}
        className="form-input"
        required
      />

      <label htmlFor="number" className="form-label">
        Phone Number
      </label>
      <input
        type="text"
        name="number"
        id="number"
        value={formInputs.number}
        onChange={handleChange}
        className="form-input"
        required
      />

      <label htmlFor="message" className="form-label">
        Message
      </label>
      <textarea
        name="message"
        id="message"
        rows={4}
        className="form-input"
        value={formInputs.message}
        onChange={handleChange}
        required
        placeholder="Add you message here..."></textarea>
      <button
        type="submit"
        className="btn bg-orange-400 text-gray-50 font-semibold p-4 rounded-md mt-2 hover:bg-orange-500">
        Submit
      </button>
    </form>
  );
}
