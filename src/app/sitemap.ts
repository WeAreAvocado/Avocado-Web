import type { MetadataRoute } from "next";
import { PROJECTS, BLOG_CATEGORIES, SERVICES } from "@/constants";
import { getAllBlogs } from "@/lib/utils";

export const baseUrl = "https://avocadotech.in";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const servicePages = SERVICES.map((service) => {
    return `/services/${service.slug}`;
  });

  const projectsPages = PROJECTS.map((project) => {
    return `/projects/${project.slug}`;
  });

  const blogCategories = BLOG_CATEGORIES.map((category) => {
    return `/blogs/tag/${category.href}`;
  });

  const blogPosts = await getAllBlogs();
  const blogPages = blogPosts.map((blog) => {
    return `/blogs/${blog.slug}`;
  });

  let routes = [
    "",
    "/about",
    "/blogs",
    "/blogs/tag",
    ...blogCategories,
    ...blogPages,
    "/contact",
    ...projectsPages,
    "/services",
    ...servicePages,
    "/works",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes];
}
