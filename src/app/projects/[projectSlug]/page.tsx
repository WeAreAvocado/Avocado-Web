import { PROJECTS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { IoArrowForward, IoArrowBack } from "react-icons/io5";

export const dynamic = "force-static";

interface IProps {
  params: { projectSlug: string };
}

export default function ProjectPage({ params: { projectSlug } }: IProps) {
  const project = PROJECTS.find((project) => project.slug === projectSlug);
  if (!project) {
    throw new Error(`Project not found : ${projectSlug}`);
  }
  return (
    <div className="flex flex-col gap-12 md:gap-20 items-center max-w-screen-xl 2xl:max-w-screen-2xl m-auto px-4">
      <nav className="flex mt-32 md:mt-44 items-center justify-between gap-16 w-full">
        <Link href="/" className="flex items-center gap-2 hover:underline">
          <IoArrowBack className="h-5 w-5 text-brand" />
          <span className="font-medium">Back</span>
        </Link>
        <span className="flex-grow hidden md:block text-center font-instrumentSerif italic text-5xl">
          {project.name}
        </span>
        {project.link && (
          <Link
            href={project.link}
            className="flex items-center gap-2 hover:underline"
          >
            <span className="font-medium">Website</span>
            <IoArrowForward className="h-5 w-5 text-brand" />
          </Link>
        )}
      </nav>
      <span className="md:hidden flex-grow text-center font-instrumentSerif italic text-5xl">
        {project.name}
      </span>
      <div className="w-full flex flex-col-reverse md:flex-row gap-16">
        <div className={`flex flex-grow gap-6 flex-col`}>
          {project.image.main?.map((image, index) => (
            <Image
              key={index}
              src={`/assets/projects/${project.slug}/${image}`}
              alt="Starting Main image"
              width={800}
              height={600}
              quality={100}
              className="rounded-lg border border-[#999999] shadow-xl w-full h-full"
            />
          ))}
        </div>

        <div className="md:sticky md:top-[12rem] md:w-96 w-full space-y-12 md:border-l border-[#999999] md:pl-4 max-h-[50rem] mr-16">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xl">{project.type}</span>
              <span>{project.year}</span>
            </div>
            <hr className="h-[2px] mx-auto my-4 bg-brand border-0 rounded" />
          </div>
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-xl font-instrumentSerif italic">
                Project Overview
              </span>
              <hr className="h-[2px] mx-auto my-4 bg-brand border-0 rounded" />
            </div>
            <div>{project.description}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
