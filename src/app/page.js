import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-dmsans)] ">
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
          <h2>Manage multiple accounts and platforms.</h2>
        </section>
        <section className="bg-yellow-dark pb-0">
          <h2>Maintain a consistent posting schedule.</h2>
          <Image
            src="/illustration-consistent-schedule.webp"
            alt="consistent schedule"
            width={200}
            height={200}
          />
        </section>
        <section className="bg-purple-light py-8">
          <h2 className="text-center">Schedule to social media.</h2>
          <Image
            className="py-2"
            src="/illustration-schedule-posts.webp"
            alt="schedule"
            width={320}
            height={320}
          />
          <p className="px-4">
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </section>
        <section className="bg-purple-dark flex flex-col gap-8 py-6">
          <Image
            className="mx-auto"
            src="/illustration-grow-followers.webp"
            alt="schedule"
            width={240}
            height={240}
          />
          <h2 className="text-white text-3xl text-center px-8 leading-7 font-[500]">
            Grow followers with non-stop content.
          </h2>
        </section>
        <section className="bg-white flex flex-col gap-6 p-6 ">
          <h2 className="text-5xl">
            <span className="relative bottom-1">&gt;</span>56%
          </h2>{" "}
          <p className="text-left text-lg">faster audience growth</p>
          <Image
            src="/illustration-audience-growth.webp"
            alt="faster growth"
            width={170}
            height={170}
          />
        </section>
        <section className="flex flex-col gap-6 bg-yellow-light p-6">
          <h2 className="text-3xl leading-7">
            Create and schedule content{" "}
            <span className="text-purple-dark italic">quicker.</span>
          </h2>
          <Image
            src="/illustration-create-post.webp"
            alt="schedule"
            width={200}
            height={200}
          />
        </section>
        <section className="bg-yellow-dark flex flex-col gap-6 p-6">
          <h2 className="text-3xl leading-7">Write youur content using AI.</h2>
          <Image
            src="/illustration-ai-content.webp"
            alt="ai content"
            width={220}
            height={220}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}
