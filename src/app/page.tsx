import Header from "@/components/header";
import Footer from "@/components/footer";
import AboutMe from "@/components/aboutMe";

export default function Home() {
  return (
    <>
      <Header />
      <main className=" px-spacing ">
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}
