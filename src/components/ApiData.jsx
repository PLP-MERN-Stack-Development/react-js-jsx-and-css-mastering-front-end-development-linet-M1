import React, { useState, useEffect } from "react";
import Button from "./Button";

/**
 * ApiData Component
 * Fetches posts from JSONPlaceholder
 * Includes search, pagination, and loading/error states
 */
export default function ApiData() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const postsPerPage = 6;

  // Fetch posts from the API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!res.ok) throw new Error("Failed to fetch posts");
        const data = await res.json();
        setPosts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Filter posts based on search term
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Paginate results
  const startIndex = (page - 1) * postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">Fetched Posts (JSONPlaceholder)</h2>

      {/* Search bar */}
      <input
        type="text"
        placeholder="Search posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border rounded-lg mb-4 dark:bg-gray-700 dark:border-gray-600"
      />

      {/* Loading and error states */}
      {loading && <p className="text-gray-500">Loading posts...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {/* Display posts */}
      {!loading && !error && (
        <ul className="space-y-3">
          {currentPosts.map((post) => (
            <li
              key={post.id}
              className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
            >
              <h3 className="font-semibold text-lg mb-1">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{post.body}</p>
            </li>
          ))}
        </ul>
      )}

      {/* Pagination controls */}
      <div className="flex justify-between mt-6">
        <Button
          variant="secondary"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        <span className="text-gray-500 dark:text-gray-300">Page {page}</span>
        <Button
          variant="secondary"
          onClick={() => setPage((p) => p + 1)}
          disabled={currentPosts.length < postsPerPage}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
