import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section
          id={"home"}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-8xl font-bold text-textPrimary">
            Hi, I'm Rutger
          </h1>
          <div className="h-[1200px] w-full bg-accent" />
        </section>
        <section
          id={"about"}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-8xl font-bold text-textPrimary">Hi, I'm about</h1>
          <div className="h-[1200px] w-full bg-accent" />
        </section>
        <section
          id={"projects"}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-8xl font-bold text-textPrimary">
            Hi, I'm projects
          </h1>
          <div className="h-[1200px] w-full bg-accent" />
        </section>
        <section
          id={"contact"}
          className="flex flex-col items-center justify-center"
        >
          <h1 className="text-8xl font-bold text-textPrimary">
            Hi, I'm contact
          </h1>
          <div className="h-[1200px] w-full bg-accent" />
        </section>
      </main>
    </>
  );
}
