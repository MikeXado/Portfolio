import Link from "next/link";
import { HeroType } from "../typings";

function Hero({ heroData }: { heroData: HeroType[] }) {
  return (
    <section className="text-white mt-20">
      <div>
        <h1 className="text-[#ff7f01] text-5xl font-bold">
          {heroData[0].title},
        </h1>
        <h2 className=" text-4xl font-bold max-w-6xl mt-3">
          {heroData[0].subtitle}
        </h2>
        <p className="text-gray-400 mt-10 text-lg">{heroData[0].decription}</p>
      </div>
      <div className="mt-10">
        <Link
          href="/contact"
          className="bg-[#ff7f01] py-2 px-6  rounded-lg font-semibold"
        >
          Let&apos;s Talk
        </Link>
      </div>
    </section>
  );
}

export default Hero;
