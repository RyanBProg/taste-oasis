"use client";

import React, { FormEvent, SyntheticEvent } from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { bookingTimes } from "@/data/bookingTimes";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function BookingForm() {
  const initialFormData = {
    name: "",
    email: "",
    number: "",
  };

  const [formInputs, setFormInputs] = useState(initialFormData);
  const [date, setDate] = useState<Value>(new Date());

  const handleDateChange = (value: Value) => {
    console.log(value);
    setDate(value);
  };

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
        Booking Date
      </label>
      <Calendar
        onClickDay={handleDateChange}
        value={date}
        defaultView="month"
        minDetail="year"
      />

      <label htmlFor="message" className="form-label mt-6">
        Booking Time
      </label>
      <select name="" id="" className="mb-6 border-2">
        <option value="">Select a Date</option>
        {bookingTimes.map((time) => {
          return <option value="">{time}</option>;
        })}
      </select>

      <button
        type="submit"
        className="btn bg-orange-400 text-gray-50 font-semibold p-4 rounded-md mt-2 hover:bg-orange-500">
        Submit
      </button>
    </form>
  );
}
