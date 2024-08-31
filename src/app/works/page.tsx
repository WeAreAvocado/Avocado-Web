"use client";

import { GRAPHIC_DESIGN, PROJECTS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { IoClose } from "react-icons/io5";

const WorksPage = () => {
  const [active, setActive] = useState<"projects" | "graphic-design">(
    "projects"
  );
  const [modalState, setModalState] = useState({
    isOpen: false,
    imageUrl: "",
  });

  const openModalWithImage = (imageUrl: string) => {
    setModalState({
      isOpen: true,
      imageUrl: imageUrl,
    });
  };

  return (
    <div className="mt-16 md:mt-44 flex flex-col max-w-screen-xl 2xl:max-w-screen-2xl m-auto px-4">
      <div className="space-y-4">
        <div className="flex gap-8 md:gap-12 text-xl md:text-4xl">
          <span
            className={`cursor-pointer ${
              active === "projects" ? "text-white" : "text-neutral-400"
            }`}
            onClick={() => {
              setActive("projects");
            }}
          >
            Projects
          </span>
          <span
            className={`cursor-pointer ${
              active === "graphic-design" ? "text-white" : "text-neutral-400"
            }`}
            onClick={() => {
              setActive("graphic-design");
            }}
          >
            Graphic Design
          </span>
        </div>
        <hr />
      </div>

      {active === "projects" && (
        <div className="md:flex md:justify-center space-y-16 gap-12 w-full px-4">
          <div className="md:flex-1 flex flex-col px-4 gap-44">
            <div />
            <div className="flex flex-col items-center gap-16">
              {PROJECTS.slice(0, Math.ceil(PROJECTS.length / 2)).map(
                (project, index) => (
                  <Link
                    key={index}
                    href={`/projects/${project.slug}`}
                    className="w-11/12 space-y-8 group/project"
                  >
                    <div className="relative w-full m-auto h-56 md:h-96 group-hover/project:blur-sm">
                      <Image
                        src={`/assets/projects/${project.slug}/${project.image.thumbnail}`}
                        alt={project.name}
                        className="w-full h-full rounded-3xl object-cover"
                        fill
                      />
                    </div>
                    <div className="font-bold flex justify-between items-center">
                      <div className="space-y-4">
                        <span className="text-xl">{project.name}</span>
                        <div className="flex items-center gap-2 text-[#6E6E6E]">
                          <span className="text-sm">{project.year}</span>
                          <GoDotFill className="h-2 w-2" />
                          <span className="text-sm">{project.type}</span>
                        </div>
                      </div>
                      <div className="bg-white h-12 w-12 rounded-full group-hover/project:flex justify-center items-center cursor-pointer hidden">
                        <MdOutlineArrowOutward className="h-6 w-6 text-black" />
                      </div>
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="md:flex-1 flex flex-col items-center px-4 gap-16">
            {PROJECTS.slice(Math.ceil(PROJECTS.length / 2)).map(
              (project, index) => (
                <Link
                  key={index}
                  href={`/projects/${project.slug}`}
                  className="w-11/12 space-y-8 group/project"
                >
                  <div className="relative w-full m-auto h-56 md:h-96 group-hover/project:blur-sm">
                    <Image
                      src={`/assets/projects/${project.slug}/${project.image.thumbnail}`}
                      alt={project.name}
                      className="w-full h-full rounded-3xl object-cover"
                      fill
                    />
                  </div>
                  <div className="font-bold flex justify-between items-center">
                    <div className="space-y-4">
                      <span className="text-xl">{project.name}</span>
                      <div className="flex items-center gap-2 text-[#6E6E6E]">
                        <span className="text-sm">{project.year}</span>
                        <GoDotFill className="h-2 w-2" />
                        <span className="text-sm">{project.type}</span>
                      </div>
                    </div>
                    <div className="bg-white h-12 w-12 rounded-full group-hover/project:flex justify-center items-center cursor-pointer hidden">
                      <MdOutlineArrowOutward className="h-6 w-6 text-black" />
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      )}

      {active === "graphic-design" && (
        <>
          <div className="md:flex md:justify-center space-y-16 gap-12 w-full px-4">
            <div className="md:flex-1 flex flex-col gap-16 md:gap-44">
              <div />
              <div className="flex flex-col items-center gap-16">
                {GRAPHIC_DESIGN.slice(
                  0,
                  Math.ceil(GRAPHIC_DESIGN.length / 2)
                ).map((gd, index) => (
                  <div
                    key={index}
                    className="relative w-full m-auto h-56 md:h-96  cursor-pointer"
                    onClick={() => openModalWithImage(gd.href)}
                  >
                    <Image
                      src={`/assets/graphic-design/${gd.href}`}
                      alt={gd.name}
                      className="w-full h-full rounded-3xl object-cover"
                      fill
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="md:flex-1 flex flex-col items-center gap-16">
              {GRAPHIC_DESIGN.slice(Math.ceil(GRAPHIC_DESIGN.length / 2)).map(
                (gd, index) => (
                  <div
                    key={index}
                    className="relative w-full m-auto h-56 md:h-96 cursor-pointer"
                    onClick={() => openModalWithImage(gd.href)}
                  >
                    <Image
                      src={`/assets/graphic-design/${gd.href}`}
                      alt={gd.name}
                      className="w-full h-full rounded-3xl object-cover"
                      fill
                    />
                  </div>
                )
              )}
            </div>
          </div>
          <Dialog
            open={modalState.isOpen}
            onClose={() => setModalState({ ...modalState, isOpen: false })}
            className="relative z-50"
          >
            <DialogBackdrop className="fixed inset-0 backdrop-blur-lg" />
            <div className="fixed inset-0 overflow-y-auto w-screen">
              <div className="flex min-h-full items-center justify-center">
                <DialogPanel className="relative max-w-10/12 md:max-w-1/2 m-4">
                  {modalState.imageUrl && (
                    <Image
                      src={`/assets/graphic-design/${modalState.imageUrl}`}
                      alt="Opened Image"
                      className="rounded-3xl object-cover"
                      height={1000}
                      width={1000}
                    />
                  )}
                  <IoClose
                    onClick={() =>
                      setModalState({ ...modalState, isOpen: false })
                    }
                    size={28}
                    className="absolute top-4 right-4 text-brand cursor-pointer"
                  />
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        </>
      )}
    </div>
  );
};

export default WorksPage;
