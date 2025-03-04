"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

type BlogPost = {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage?: { asset?: { _ref?: string }; alt?: string };
  categories?: { title: string }[];
  publishedAt: string;
  author?: { name: string };
};

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id, title, slug, mainImage{asset, alt}, publishedAt, 
          author->{name}, 
          categories[]-> {title}
        }`;
        const data = await client.fetch(query);
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen text-white p-6 mb-32">
      <Link href="/" className="text-gray-400 hover:text-white">
        &larr; Back to home
      </Link>

      {/*  */}
      <div className="justify-center">
        <h2 className="text-2xl  mt-6">Our Blog</h2>

        {loading ? (
          <p className="mt-6 text-gray-400">Loading blogs...</p>
        ) : blogs.length === 0 ? (
          <p className="mt-6 text-gray-400">No blog posts available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {blogs.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="block"
              >
                <div className="bg-[#0a0a0a] border border-gray-800 rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-200">
                  {/* Image Display */}
                  {post.mainImage?.asset && (
                    <Image
                      src={urlFor(post.mainImage.asset).url()}
                      alt={post.mainImage.alt || post.title}
                      width={600}
                      height={400}
                      className="w-full h-56 object-cover"
                    />
                  )}

                  <div className="p-4">
                    {/* Categories & Date */}
                    <div className="flex justify-between text-gray-400 text-xs">
                      <span>
                        {post.categories?.map((c) => c.title).join(", ") ||
                          "Uncategorized"}
                      </span>
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold mt-2">{post.title}</h3>

                    {/* Author */}
                    {post.author?.name && (
                      <p className="text-sm text-gray-500 mt-1">
                        By {post.author.name}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
