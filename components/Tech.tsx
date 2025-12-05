import Image from "next/image";
import urlFor from "../lib/urlFor";
import tech from "../schemas/sections/tech";
import { TechType } from "../typings";

function Tech({ techData }: { techData: TechType[] }) {
  return (
    <section id="tech" className="relative py-20 w-full mt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-5">
        <div className="text-center mb-16 slide-up">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-gradient-to-r from-pink-100 to-orange-100 text-pink-700 rounded-full text-sm font-semibold shadow-soft">
              Tech Stack
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Leveraging modern tools and frameworks to build exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-4xl mx-auto justify-items-center items-center">
          {techData.map((tech, index) => {
            return (
              <div
                key={tech._id}
                className="group scale-in hover-lift"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative bg-white p-6 rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 hover:rotate-3 border border-gray-100">
                  <div className="relative w-16 h-16 flex items-center justify-center">
                    <Image
                      src={urlFor(tech.techImage).url()}
                      alt={tech.alt}
                      width={64}
                      height={64}
                      className="h-auto max-w-full object-contain group-hover:scale-125 transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:drop-shadow-lg"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Tech;
