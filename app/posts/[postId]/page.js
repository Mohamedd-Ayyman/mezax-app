export default async function postDetailsPage({ params }) {
  const { postId } = await params;
  const response = await fetch(`https://dummyjson.com/posts/${postId}`, {
    next: {
      revalidate: 120,
    },
  });
  const post = await response.json();
  //   console.log("========", postId);
  return (
    <div>
      <h1>Post Details</h1>

      <div key={postId} className="space-y-6 my-5">
        <div
          key={postId}
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
      </div>
    </div>
  );
}
