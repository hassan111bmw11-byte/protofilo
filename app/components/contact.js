"use client";
import { useState } from "react";
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="p-10 mr-25 w-100 bg-gray-900 mt-10 rounded snap-start">
      <h2 className="text-2xl font-bold mb-6">Contact</h2>
      <div className="flex flex-col gap-3 max-w-md">
        <input
          className="border p-2 bg-zinc-800 border-zinc-600/50"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border p-2  bg-zinc-800 border-zinc-600/50"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          className="border p-2  bg-zinc-800 border-zinc-600/50"
          placeholder="Message"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button className="bg-linear-to-b from-blue-900 to-blue-950 text-white py-2 rounded hover:bg-linear-to-b hover:from-blue-600 hover:to-blue-500 transition duration-900">
          Send
        </button>
      </div>
    </section>
  );
}