import Link from "next/link";
import { HeroType } from "../typings";

function Hero({ heroData }: { heroData: HeroType[] }) {
  return (
    <section className="mt-10">
      <div className="slide-in-left">
        <div className="inline-block mb-4 zoom-in">
          <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-sm font-semibold shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
            Welcome to my portfolio
          </span>
        </div>
        <h1 className="gradient-text text-6xl md:text-7xl font-bold leading-tight hover:scale-105 transition-transform duration-500">
          {heroData[0].title}
        </h1>
        <h2 className="text-gray-800 text-4xl md:text-5xl font-bold max-w-6xl mt-6 slide-up leading-relaxed">
          {heroData[0].subtitle}
        </h2>
        <p className="text-gray-600 mt-8 text-xl max-w-3xl leading-relaxed slide-up">
          {heroData[0].decription}
        </p>
      </div>
      <div className="mt-12 flex gap-4 slide-up">
        <Link
          href="/contact"
          className="group relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold text-lg shadow-elegant hover:shadow-glow transition-all duration-500 hover:scale-110 hover:-translate-y-1 overflow-hidden"
        >
          <span className="relative z-10">Let&apos;s Talk</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        </Link>
        <a
          href="#projects"
          className="py-4 px-8 rounded-xl font-semibold text-lg border-2 border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600 transition-all duration-500 hover:shadow-soft hover:scale-105 hover:-translate-y-1"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}

export default Hero;
