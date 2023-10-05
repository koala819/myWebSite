"use client";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Date from "@/components/Date";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const mdxComponents = {
  Image,
};

export function Post({ post }: any) {
  const router = useRouter();

  const MDXContent = useMDXComponent(post.body.code);
  return (
    <div
      className='col-span-12 p-8 lg:col-span-8 font-in prose sm:prose-base md:prose-lg max-w-max
  prose-blockquote:bg-accent/20 
  prose-blockquote:p-2
  prose-blockquote:px-6
  prose-blockquote:border-accent
  prose-blockquote:not-italic
  prose-blockquote:rounded-r-lg

  prose-li:marker:text-accent

  dark:prose-invert
  dark:prose-blockquote:border-accentDark
  dark:prose-blockquote:bg-accentDark/20
  dark:prose-li:marker:text-accentDark

  first-letter:text-3xl
  sm:first-letter:text-5xl
  


  '
    >
      <div className='p-4'>
        <h1 className='font-extrabold text-3xl mb-1'>{post.title}</h1>

        <div className='text-gray-500 font-medium mb-5'>
          <Date dateString={post.date} />
        </div>
      </div>
      <MDXContent components={mdxComponents} />
      <div className='flex items-center justify-center p-8'>
        <Button
          color='primary'
          variant='shadow'
          onClick={() => router.push("/blog")}
        >
          <span>Retour</span>
        </Button>
      </div>
    </div>
  );
}
