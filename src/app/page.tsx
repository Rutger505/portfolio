import Header from "@/components/Header";
import Footer from "@/components/Footer";
import About from "@/components/About";
import LandingPage from "@/components/LandingPage";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main className=" px-spacing ">
        <LandingPage />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
