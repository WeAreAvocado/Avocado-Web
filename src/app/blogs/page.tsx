import {
  formatDate,
  getAllBlogs,
  getBlogCategoryData,
  getLatestBlogs,
} from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { BLOG_CATEGORIES } from "@/constants";

const BlogPostPage = async () => {
  const blogs = await getAllBlogs();

  const latestBlogs = await getLatestBlogs(blogs);

  const categorizedBlogs = await getBlogCategoryData(blogs);

  return (
    <div className="min-h-[25rem] text-white flex flex-col items-center gap-8 max-w-screen-lg 2xl:max-w-screen-xl m-auto px-4">
      <div className="min-w-full space-y-8 mt-28 md:mt-44 md:space-y-12">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl md:text-5xl font-bold">Latest</h1>
          <Link href={`/blogs/tag/all`} className="text-[#B8B8B8] text-lg">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {latestBlogs.map((blog) => (
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
      <div className="flex flex-col gap-28 mt-24">
        {Object.keys(categorizedBlogs).map((category) => (
          <div key={category} className="min-w-full space-y-8 md:space-y-12">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl md:text-5xl font-bold">{category}</h1>
              <Link
                href={`/blogs/tag/${
                  BLOG_CATEGORIES.find((c) => c.name === category)?.href
                }`}
                className="text-[#B8B8B8] text-lg"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
              {categorizedBlogs[category].map((blog, i) => (
                <Link
                  key={blog.slug}
                  href={`/blogs/${blog.slug}`}
                  className={`flex flex-col gap-4 w-full bg-[#222222]/80 rounded-xl p-3 cursor-read-more cursor-none ${
                    i === 0 && categorizedBlogs[category].length >= 3
                      ? "md:row-span-2 md:col-span-2"
                      : ""
                  }`}
                >
                  <div
                    className={`relative w-full h-60 rounded-lg overflow-hidden ${
                      i === 0 && categorizedBlogs[category].length >= 3
                        ? "md:h-[39rem]"
                        : ""
                    }`}
                  >
                    <Image
                      src={blog?.data?.image}
                      alt={blog?.data?.title}
                      className={`object-cover w-full h-full`}
                      fill
                    />
                  </div>
                  <div
                    className={`text-[#747474] font-semibold ${
                      i === 0 && categorizedBlogs[category].length >= 3
                        ? "md:text-xl"
                        : ""
                    }`}
                  >
                    {blog?.data?.category}
                  </div>
                  <div
                    className={`font-bold text-lg line-clamp-2 w-full ${
                      i === 0 && categorizedBlogs[category].length >= 3
                        ? "md:!text-3xl"
                        : ""
                    }`}
                  >
                    {blog?.data?.title}
                  </div>
                  <div
                    className={`text-[#C6C6C6] text-sm font-semibold ${
                      i === 0 && categorizedBlogs[category].length >= 3
                        ? "md:text-xl"
                        : ""
                    }`}
                  >
                    {formatDate(blog?.data?.publishedAt)}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPostPage;
