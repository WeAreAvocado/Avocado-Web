import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import { IoSpeedometer } from "react-icons/io5";
import { FaPaintBrush } from "react-icons/fa";
import { IoMdFingerPrint } from "react-icons/io";
import { PROJECTS } from "@/constants";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center gap-16 w-full pt-56"
    >
      <button className="rounded-full font-bold px-10 py-3 text-lg border border-white">
        Projects
      </button>
      <div className="flex flex-col items-center gap-8 w-full">
        <div className="text-6xl font-bold">
          Our designs,{" "}
          <span className="font-instrumentSerif font-normal italic ">
            just check it out.
          </span>
        </div>
        <span className="font-semibold text-[#6E6E6E] text-lg">
          Begin your design journey with avocado tech.
        </span>
      </div>
      <div className="flex justify-center space-x-12 w-full">
        <div className="flex-1 flex flex-col gap-y-16">
          <span className="text-3xl font-bold">Recent Projects</span>

          <div className="flex flex-col items-center gap-y-16">
            {PROJECTS.slice(0, Math.ceil(PROJECTS.length / 2)).map(
              (project, index) => (
                <Link
                  key={index}
                  href={`/projects/${project.slug}`}
                  className="w-11/12 space-y-8 group/project"
                >
                  <div className="relative w-full m-auto h-96 group-hover/project:blur-sm ">
                    <Image
                      src={`/assets/projects/${project.slug}/${project.image.thumbnail}`}
                      alt={project.name}
                      className="w-full h-full rounded-3xl object-cover"
                      fill
                    />
                  </div>
                  <div className="font-bold space-y-4">
                    <span className="text-xl">{project.name}</span>
                    <div className="flex items-center gap-2 text-[#6E6E6E]">
                      <span className="text-sm">{project.year}</span>
                      <GoDotFill className="h-2 w-2" />
                      <span className="text-sm">{project.type}</span>
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center gap-y-16">
          {PROJECTS.slice(Math.ceil(PROJECTS.length / 2)).map(
            (project, index) => (
              <Link
                key={index}
                href={`/projects/${project.slug}`}
                className="w-11/12 space-y-8 group/project"
              >
                <div className="relative w-full m-auto h-96 group-hover/project:blur-sm ">
                  <Image
                    src={`/assets/projects/${project.slug}/${project.image.thumbnail}`}
                    alt={project.name}
                    className="w-full h-full rounded-3xl object-cover"
                    fill
                  />
                </div>
                <div className="font-bold space-y-4">
                  <span className="text-xl">{project.name}</span>
                  <div className="flex items-center gap-2 text-[#6E6E6E]">
                    <span className="text-sm">{project.year}</span>
                    <GoDotFill className="h-2 w-2" />
                    <span className="text-sm">{project.type}</span>
                  </div>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
      <div className="text-6xl font-bold mt-40">
        Reasons you will{" "}
        <span className="font-instrumentSerif font-normal italic ">love</span>{" "}
        us.
      </div>
      <div className="flex gap-12 w-full justify-center">
        <div className="flex-1 rounded-2xl bg-[#121212] flex flex-col items-center gap-16 py-12">
          <IoSpeedometer className="h-16 w-16 text-white" />
          <div className="flex flex-col gap-4 items-center">
            <span className="text-2xl font-bold">Lightning Fast Delivery</span>
            <span className="w-7/12 text-center text-[#6E6E6E] text-md">
              Receive your designs one at a time in just a few days.
            </span>
          </div>
        </div>
        <div className="flex-1 rounded-2xl bg-[#121212] flex flex-col items-center gap-16 py-12">
          <FaPaintBrush className="h-16 w-16 text-white" />
          <div className="flex flex-col gap-4 items-center">
            <span className="text-2xl font-bold">Unlimited Revisions</span>
            <span className="w-7/12 text-center text-[#6E6E6E] text-md">
              Revise your designs until you&apos;re 100% satisfied. No limits.
            </span>
          </div>
        </div>
        <div className="flex-1 rounded-2xl bg-[#121212] flex flex-col items-center gap-16 py-12">
          <IoMdFingerPrint className="h-16 w-16 text-white" />
          <div className="flex flex-col gap-4 items-center">
            <span className="text-2xl font-bold">Unique & All Yours</span>
            <span className="w-7/12 text-center text-[#6E6E6E] text-md">
              All your designs are crafted especially for you.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
