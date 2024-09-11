import Image from "next/image";

const OurStory = () => {
  return (
<div className="flex w-full flex-col md:flex-row gap-4 md:items-center">
  <div className="flex-1">hiiiiiiiiiiiiiiiiii</div>
  <div className="flex-1 w-full md:9/12 flex justify-center">
    <Image
      src="/assets/about/our-story.jpg"
      alt="Our Story"
      width={500}
      height={500}
      className="m-auto rounded-lg px-4"
    />
  </div>
</div>
  )
}

export default OurStory