"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { completeSoftNavigation } from "next/dist/client/components/segment-cache/navigation";
import { containsCSSVariable } from "framer-motion";
export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // SendEmail

  const SendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_SERVICES_ID,
      "template_yx6w718",
      data,
      process.env.NEXT_PUBLIC_EMAILJS_API_KEY
    )
    console.log(response);
    e.target.reset();
  };


  return (
    <section
      id="contact"
      className="p-10 mr-25 w-100 bg-gray-900 mt-10 rounded snap-start"
    >
      <h2 className="text-2xl font-bold mb-6">Contact</h2>
      <form onSubmit={SendEmail} className="flex flex-col gap-3 max-w-md">
        <input
          className="border p-2 bg-zinc-800 border-zinc-600/50"
          placeholder="Name"
          name="name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="border p-2  bg-zinc-800 border-zinc-600/50"
          placeholder="Email"
          name="email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          className="border p-2  bg-zinc-800 border-zinc-600/50"
          placeholder="Message"
          name="message"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button  className="bg-linear-to-b from-blue-900 to-blue-950 text-white py-2 rounded hover:bg-linear-to-b hover:from-blue-600 hover:to-blue-500 transition duration-900">
          Send
        </button>
      </form>
    </section>
  );
}
