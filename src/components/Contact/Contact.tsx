import ContactForm from "@/components/Contact/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className={"py-24 too-big:py-32"}>
      <h2 className="text-5xl font-bold text-textPrimary">Talk to me</h2>
      <div
        className={
          "mt-4 flex flex-wrap justify-between gap-x-7 gap-y-14 lg:flex-nowrap"
        }
      >
        <p className="mt-8 max-w-2xl text-xl text-textSecondary">
          Do not hesitate to contact me through the form here or by direct email
          on rutger.pronk19@gmail.com
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
