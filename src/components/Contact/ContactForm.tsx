"use client";

import { FormEvent, useEffect, useState } from "react";
import AnimatedButton from "@/components/AnimatedButton";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [nameUnfocused, setNameUnfocused] = useState(false);
  const [emailUnfocused, setEmailUnfocused] = useState(false);
  const [subjectUnfocused, setSubjectUnfocused] = useState(false);
  const [messageUnfocused, setMessageUnfocused] = useState(false);

  function validateForm() {
    return !!name && emailValid && !!subject && !!message;
  }

  function validateEmail() {
    const regExp = /\S+@\S+\.\S+/;
    setEmailValid(regExp.test(email));
  }

  function onInputBlur(e: FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const inputName = e.currentTarget.name;

    switch (inputName) {
      case "name":
        setNameUnfocused(true);
        break;
      case "email":
        setEmailUnfocused(true);
        break;
      case "subject":
        setSubjectUnfocused(true);
        break;
      case "message":
        setMessageUnfocused(true);
        break;
      default:
        throw new Error(`Unknown input name: ${inputName}`);
    }
  }

  useEffect(() => {
    validateEmail();
  }, [email]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validateForm()) {
      setNameUnfocused(true);
      setEmailUnfocused(true);
      setSubjectUnfocused(true);
      setMessageUnfocused(true);
      return;
    }

    // TODO: Send email
    alert("In construction!");
  }

  return (
    <form
      className="flex min-w-[80%] flex-col gap-y-6 rounded-md bg-secondary p-8 sm:min-w-[400px]"
      onSubmit={onSubmit}
    >
      <h3 className="text-2xl text-textPrimary">Send me a message</h3>
      <input
        name="name"
        className={`${
          !name && nameUnfocused ? "outline-red" : "focus:outline-accent"
        } w-full rounded-sm bg-primary px-3 py-2 text-textPrimary outline-none`}
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onBlur={onInputBlur}
      />

      <input
        name="email"
        className={`${
          !emailValid && emailUnfocused ? "outline-red" : "focus:outline-accent"
        } w-full rounded-sm bg-primary px-3 py-2 text-textPrimary outline-none`}
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={onInputBlur}
      />
      <input
        name="subject"
        className={`${
          !subject && subjectUnfocused ? "outline-red" : "focus:outline-accent"
        } w-full rounded-sm bg-primary px-3 py-2 text-textPrimary outline-none`}
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        onBlur={onInputBlur}
      />
      <textarea
        name="message"
        className={`${
          !message && messageUnfocused ? "outline-red" : "focus:outline-accent"
        } min-h-[150px] w-full rounded-sm bg-primary px-3 py-2 text-textPrimary outline-none`}
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onBlur={onInputBlur}
      ></textarea>

      <AnimatedButton className={"mt-3 w-fit"} text={"Send email"} />
      <p className="-mt-3 text-red">In construction!</p>
    </form>
  );
}
