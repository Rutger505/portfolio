import Header from "@/components/header";
import Footer from "@/components/footer";
import mePicture from "../../public/me.webp";
import Image from "next/image";
import LanguageIcon from "@/components/icons/languageIcon";

export default function Home() {
  return (
    <>
      <Header />
      <main className=" px-spacing ">
        <Image
          className="h-96 w-96 rounded-full"
          src={mePicture}
          alt={"A picture of me"}
        />
        <LanguageIcon className={"h-8 text-textPrimary"} />
      </main>
      <Footer />
    </>
  );
}
