import { useState, useRef } from "react";

export default function Controlled() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name) {
      nameRef.current.focus();
      return;
    }
    if (!form.email) {
      emailRef.current.focus();
      return;
    }
    if (!form.message) {
      messageRef.current.focus();
      return;
    }
    console.log("form - ", form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        ref={nameRef}
        className="border rounded-2xl p-2 my-3"
        value={form.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        ref={emailRef}
        className="border rounded-2xl p-2 my-3"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <textarea
        name="message"
        ref={messageRef}
        className="border rounded-2xl p-2 my-3"
        value={form.message}
        onChange={handleChange}
        placeholder="Message"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
