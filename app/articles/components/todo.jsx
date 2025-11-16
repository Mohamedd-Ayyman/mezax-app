"use client";

import { useEffect, useState } from "react";

export default function Todo() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-xl text-indigo-600 font-semibold">
          Loading posts...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Recent Posts
        </h1>

        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200"
            >
              <div className="flex items-start justify-between mb-3">
                <h2 className="text-2xl font-semibold text-gray-800 flex-1">
                  {post.title}
                </h2>
                <div className="flex items-center gap-2 ml-4">
                  <span className="text-sm text-gray-500">
                    ❤️ {post.reactions.likes}
                  </span>
                  <span className="text-sm text-gray-500">👁️ {post.views}</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-4">{post.body}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-100 text-indigo-700 text-sm rounded-full font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 pt-3 border-t border-gray-100">
                <span>User ID: {post.userId}</span>
                <span>Post #{post.id}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
