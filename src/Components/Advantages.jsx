import Section from "./Section";
import { roadmap } from "../constants";
import { grid } from "../assets";
import { Gradient } from "./design/Roadmap";

const Roadmap = () => (
  <Section className="overflow-hidden bg-zinc-900" id="roadmap">
    <div className="container md:pb-10">

      <h1 className="text-white font-bold text-center text-5xl mb-20">Get CleverBooks and Get .....</h1>
      <div className="relative ml-40 -mr-8 grid gap-6 md:grid-cols-2 md:gap-6 md:pb-[7rem]">
        {roadmap.map((item) => {
          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative bg-zinc-950 p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={500}
                    height={500}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      
                    </div>
                  </div>

                  <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="text-3xl h4 mb-4 text-white">{item.title}</h4>
                  <p className="body-2 text-white text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>
    </div>
  </Section>
);

export default Roadmap;
