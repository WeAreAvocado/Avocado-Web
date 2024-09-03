import type { MDXComponents } from "mdx/types";
import Image from "next/image";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    img: (props) => {
      return (
        <Image
          height={1500}
          width={1500}
          src={props.src as string}
          alt={props.alt as string}
          className="rounded-lg"
        />
      );
    },
    ...components,
  };
}
