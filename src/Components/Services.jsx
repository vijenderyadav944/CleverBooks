import Section from "./Section";
import { service1 } from "../assets";
import { CleverBooksServices } from "../constants";
import {
  Gradient
} from "./design/Services.jsx";

const Services = () => {
  return (
    <Section className={`bg-zinc-950`} id="how-to-use">
      <div className="container">
        <h1 className="text-5xl text-white text-center font-extrabold mb-28 -mr-20"> Why to Use CleverBooks </h1>

        <div className="relative ml-40 -mr-7">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Heading"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="text-2xl mb-28 font-bold text-white"> Use CleverBooks For Inventory Management Because of </h4>
              <ul className="body-2">
                {CleverBooksServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <p className="ml-4 text-white text-xl">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
