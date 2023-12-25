import Header from "@/components/header";
import Footer from "@/components/footer";
import AboutMe from "@/components/aboutMe";
import LandingPage from "@/components/landingPage";

export default function Home() {
  return (
    <>
      <Header />
      <main className=" px-spacing ">
        <LandingPage />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}
