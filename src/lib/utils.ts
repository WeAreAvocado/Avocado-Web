import fs from "fs";
import matter from "gray-matter";
import { globby } from "globby";

export interface IBlogs {
  slug: string;
  content: string | undefined;
  data:
    | {
        [key: string]: any;
      }
    | undefined;
}

export const formatDate = (date: string) => {
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  let targetDate = new Date(date);

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return fullDate;
};

export const getBlogData = async (slug: string) => {
  const filePath = `src/app/blogs/_content/${slug}.mdx`;

  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return null;
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const blogData = (await matter(rawContent)) as unknown;
  return blogData as IBlogs;
};

export const getAllBlogs = async (): Promise<IBlogs[]> => {
  const posts = await globby(["src/app/blogs/_content/*.mdx"]);

  const allBlogsData = await Promise.all(
    posts.map(async (post) => {
      const slug = post.split("/")[4].split(".")[0];
      const blogData = await getBlogData(slug);

      return {
        slug,
        content: blogData?.content,
        data: blogData?.data,
      };
    })
  );

  return allBlogsData;
};

export const getAboutData = async () => {
  const filePath = "src/app/about/about.mdx";

  const rawContent = fs.readFileSync(filePath, "utf-8");
  return await matter(rawContent);
};

export const getBlogCategoryData = async (
  blogs: IBlogs[]
): Promise<{
  [key: string]: IBlogs[];
}> => {
  const categorizedBlogs: { [key: string]: any[] } = {};

  blogs.forEach((blog) => {
    const category = blog?.data?.category;
    if (!categorizedBlogs[category]) {
      categorizedBlogs[category] = [];
    }
    categorizedBlogs[category].push(blog);
  });

  Object.keys(categorizedBlogs).forEach((category) => {
    categorizedBlogs[category] = categorizedBlogs[category].sort(
      (a, b) =>
        Number(new Date(b.data.publishedAt)) -
        Number(new Date(a.data.publishedAt))
    );
  });

  return categorizedBlogs;
};

export const getLatestBlogs = async (blogs: IBlogs[]) => {
  const latestBlogs = blogs
    .sort(
      (a, b) =>
        Number(new Date(b?.data?.publishedAt ?? "")) -
        Number(new Date(a?.data?.publishedAt ?? ""))
    )
    .slice(0, 6);

  return latestBlogs;
};
