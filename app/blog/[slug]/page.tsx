import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { PortableText, PortableTextBlock } from "@portabletext/react";

type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: { asset?: { _ref?: string }; alt?: string };
  categories?: { title: string }[];
  publishedAt: string;
  author?: { name: string };
  body?: PortableTextBlock[]; // Portable Text content
};

async function getBlogPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id, title, slug, mainImage, publishedAt, body,
    author->{name},
    categories[]->{title}
  }`;
  return client.fetch(query, { slug });
}

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug =  (await params).slug;
  const post: BlogPost =  await getBlogPost(slug);

  if (!post) {
    return (
      <div className="text-white text-center mt-10">Blog post not found.</div>
    );
  }

  return (
    <div className="min-h-screen text-white p-6 mb-32">
      <Link href="/blog" className="text-gray-400 hover:text-white">
        &larr; Back{" "}
      </Link>

      <div className="container mx-auto max-w-4xl justify-start">
        <h1 className="text-3xl mt-4">{post.title}</h1>

        {/* Blog Meta */}
        <div className="flex items-center text-gray-400 text-sm mt-2 mb-6">
          <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
          {post.author?.name && (
            <span className="ml-6">By {post.author.name}</span>
          )}
        </div>

        {/* Blog Image */}
        {post.mainImage && (
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.mainImage.alt || post.title}
            width={600}
            height={450}
            className="w-full h-auto mt-4 rounded-lg "
          />
        )}

        {/* Blog Content */}
        <div className="my-8">
          <PortableText value={post.body || []}  />
        </div>
      </div>
    </div>
  );
}
