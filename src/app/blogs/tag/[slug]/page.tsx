import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";
import { BLOG_CATEGORIES } from "@/constants";
import { formatDate, getAllBlogs, getBlogCategoryData } from "@/lib/utils";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateStaticParams() {
  return BLOG_CATEGORIES.map((category) => ({
    slug: category.href,
  }));
}

const BlogPostTagPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const blogs = await getAllBlogs();
  const category = BLOG_CATEGORIES.find((c) => c.href === slug)?.name;

  if (!category) {
    notFound();
  }

  const categorizedBlogs = await getBlogCategoryData(blogs);
  const categoryBlogs = categorizedBlogs[category];

  if (!categoryBlogs || categoryBlogs.length === 0) {
    notFound();
  }

  return (
    <div className="min-h-[25rem] text-white flex flex-col items-center gap-8 max-w-screen-lg 2xl:max-w-screen-xl m-auto px-4">
      <Link
        href="/blogs"
        className="flex items-center gap-2 hover:underline w-full mt-28 md:mt-44"
      >
        <IoArrowBack className="h-5 w-5 text-brand" />
        <span className="font-medium">Back</span>
      </Link>

      <h1 className="min-w-full text-4xl font-semibold">{category}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {categoryBlogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="flex flex-col gap-4 w-full bg-[#222222]/80 rounded-xl p-3 cursor-read-more cursor-none"
          >
            <div className="relative w-full h-60 rounded-lg overflow-hidden">
              <Image
                src={blog?.data?.image}
                alt={blog?.data?.title}
                className="object-cover w-full h-full"
                fill
              />
            </div>
            <div className="text-[#747474] font-semibold">
              {blog?.data?.category}
            </div>
            <div className="font-bold text-lg line-clamp-2 w-full">
              {blog?.data?.title}
            </div>
            <div className="text-[#C6C6C6] text-sm font-semibold">
              {formatDate(blog?.data?.publishedAt)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPostTagPage;
