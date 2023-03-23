import Image from "next/image";
import urlFor from "../lib/urlFor";
import tech from "../schemas/sections/tech";
import { TechType } from "../typings";

function Tech({ techData }: { techData: TechType[] }) {
  return (
    <section id="tech" className="bg-[#121212] py-5 w-full mt-24">
      <div className="max-w-7xl mx-auto px-5 ">
        <div className="grid sm:grid-cols-4 grid-cols-3 md:grid-cols-5 gap-y-12  justify-items-center items-center">
          {techData.map((tech) => {
            return (
              <div key={tech._id}>
                <Image
                  src={urlFor(tech.techImage).url()}
                  alt={tech.alt}
                  width={50}
                  height={50}
                  className="h-auto max-w-full"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Tech;
