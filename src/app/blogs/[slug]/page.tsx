import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import Image from "next/image";
import { getAllBlogs, getBlogData, formatDate } from "@/lib/utils";

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

const BlogPostPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const blog = await getBlogData(slug);

  if (!blog) {
    notFound();
  }

  const { content, data } = blog;
  return (
    <div className="min-h-[25rem] text-white mt-8 md:mt-44 flex flex-col items-center gap-8 max-w-screen-lg 2xl:max-w-screen-xl m-auto px-4">
      <Link
        href="/blogs"
        className="flex items-center gap-2 hover:underline w-full"
      >
        <IoArrowBack className="h-5 w-5 text-brand" />
        <span className="font-medium">Back</span>
      </Link>
      <div className="min-w-full space-y-6">
        <h1 className="text-4xl md:text-6xl font-semibold">{data.title}</h1>
        <p className="text-[#C6C6C6] text-medium">
          {data.category} &#x2022; {formatDate(data.publishedAt)}
        </p>
      </div>
      <Image
        height={1500}
        width={1500}
        src={data.image}
        alt={data.title}
        className="rounded-lg"
      />
      <div
        className="
        prose 
        prose-headings:text-white 
        prose-headings:font-semibold 
        prose-h1:text-6xl 
        md:prose-h1:text-7xl 
        prose-h2:text-5xl 
        md:prose-h2:text-6xl 
        prose-h3:text-4xl 
        md:prose-h3:text-5xl 
        prose-h4:text-3xl 
        md:prose-h4:text-4xl 
        prose-h5:text-2xl 
        md:prose-h5:text-3xl 
        prose-h6:text-xl 
        md:prose-h6:text-2xl 
        prose-p:text-lg 
        md:prose-p:text-xl 
        prose-p:text-[#C7C7C7] 
        prose-a:text-brand 
        prose-ol:text-[#C7C7C7] 
        prose-ul:text-[#C7C7C7] 
        prose-li:text-[#C7C7C7] 
        min-w-full
      "
      >
        <MDXRemote source={content} />
      </div>
    </div>
  );
};

export default BlogPostPage;
