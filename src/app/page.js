import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-dmsans)]">
      <main className="flex flex-col gap-8">
        <section className="bg-purple-dark text-white p-10">
          <h1 className="text-5xl font-[500] mb-2">
            Social Media <span className="text-yellow-dark">10x</span>{" "}
            <span className="italic">Faster </span>
            with AI
          </h1>
          <Image
            className="mx-auto -mb-2"
            src="/illustration-five-stars.webp"
            alt="stars"
            width={200}
            height={200}
          />
          <p>Over 4,000 5-star reviews</p>
        </section>
        <section className="bg-white">
          <Image
            className="mx-auto drop-shadow-2xl bg-white bg-opacity-30"
            src="/illustration-multiple-platforms.webp"
            alt="multiple platforms"
            width={320}
            height={320}
          />
          <p className="font-[600] text-left text-2xl leading-6">
            Manage multiple accounts and platforms.
          </p>
        </section>
        <section></section>
        <section></section>
        <section></section>
      </main>
      <Footer />
    </div>
  );
}
