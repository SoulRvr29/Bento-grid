import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-dmsans)] ">
      <main className="max-lg:flex max-md:flex-col-reverse max-lg:flex-col-reverse gap-8 grid grid-cols-4 max-w-[1120px]">
        <div className="max-md:flex max-md:flex-col gap-8 grid grid-cols-3 grid-rows-[auto,14.5rem,auto] order-1 col-span-3 grid-row ">
          <section className="bg-purple-dark text-white p-10 col-span-2 max-md:-order-2 col-start-1 row-start-1 justify-center">
            <h1 className="max-md:text-5xl text-6xl font-[500] mb-2">
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
          <section className="bg-white row-start-2 overflow-clip">
            <Image
              className="mx-auto drop-shadow-2xl bg-white bg-opacity-30 h"
              src="/illustration-multiple-platforms.webp"
              alt="multiple platforms"
              width={320}
              height={320}
            />
            <h2 className="max-lg:text-2xl text-3xl leading-7 p-2 max-md:leading-5">
              Manage multiple accounts and platforms.
            </h2>
          </section>
          <section className="bg-yellow-dark pb-0  overflow-clip">
            <h2 className="max-md:text-2xl text-3xl leading-7 max-md:leading-5 ">
              Maintain a consistent posting schedule.
            </h2>
            <Image
              src="/illustration-consistent-schedule.webp"
              alt="consistent schedule"
              width={200}
              height={200}
            />
          </section>
          <section className="bg-purple-light py-8 col-start-3 row-span-2 -order-2 max-md:-order-none justify-between overflow-clip relative max-md:items-center ">
            <h2 className="max-md:text-center max-md:text-2xl text-3xl leading-7">
              Schedule to social media.
            </h2>
            <Image
              className="py-2 max-md:static absolute left-6 top-[8rem]"
              src="/illustration-schedule-posts.webp"
              alt="schedule"
              width={320}
              height={320}
            />
            <p className="px-4 max-md:text-center text-start">
              Optimize post timings to publish content at the perfect time for
              your audience.
            </p>
          </section>
          <section className="bg-purple-dark flex flex-row max-md:flex-col items-center gap-8 py-6 col-span-2 order-1">
            <Image
              className="mx-auto"
              src="/illustration-grow-followers.webp"
              alt="schedule"
              width={240}
              height={240}
            />
            <h2 className="text-white text-4xl  max-md:text-center max-md:px-8 leading-8 font-[500]">
              Grow followers with non-stop content.
            </h2>
          </section>
          <section className="bg-white flex flex-col gap-6 p-6 max-md:order-last">
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
        </div>
        <div className="max-md:flex max-md:flex-col gap-8 grid ">
          <section className="flex flex-col gap-6 bg-yellow-light p-6 items-center max-md:items-start">
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
          <section className="bg-yellow-dark flex flex-col gap-6 p-6 items-center max-md:items-start">
            <h2 className="text-4xl leading-7">Write your content using AI.</h2>
            <Image
              src="/illustration-ai-content.webp"
              alt="ai content"
              width={220}
              height={220}
            />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
