"use client";

import { FormEvent } from "react";
import AnimatedButton from "@/components/AnimatedButton";

export default function ContactForm() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    alert("This form is still in construction!");
  }

  return (
    <form
      className="flex min-w-[80%] flex-col gap-y-6 rounded-md bg-secondary p-8 sm:min-w-[400px]"
      onSubmit={onSubmit}
    >
      <h3 className="text-2xl text-textPrimary">Send me a message</h3>
      <input
        className="w-full rounded-sm bg-primary px-3 py-2 text-textPrimary outline-none focus:outline-accent"
        type="text"
        placeholder="Name"
      />
      <input
        className="w-full rounded-sm bg-primary px-3 py-2 text-textPrimary outline-none focus:outline-accent"
        type="text"
        placeholder="Email"
      />
      <input
        className="w-full rounded-sm bg-primary px-3 py-2 text-textPrimary outline-none focus:outline-accent"
        type="text"
        placeholder="Subject"
      />
      <textarea
        className="min-h-[120px] rounded-sm bg-primary px-3 py-2 text-textPrimary outline-none focus:outline-accent"
        placeholder="Message"
      ></textarea>

      <AnimatedButton className={"mt-3 w-fit"} text={"Send email"} />
      <p className="-mt-3 text-red">In construction!</p>
    </form>
  );
}
