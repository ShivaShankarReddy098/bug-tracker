"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";

const EditBug = () => {
  const { id } = useParams(); // Get the bug ID from the URL
  const [bug, setBug] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchBugDetails = async () => {
      const token = localStorage.getItem("token"); // Assuming JWT token in localStorage

      try {
        const response = await fetch(`/api/bugs/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch bug details.");
        }

        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }

        setBug(data.bug);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBugDetails();
  }, [id]);

  // Handle form submission for updating the bug
  const handleUpdate = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const updatedBug = {
      title: e.target.title.value,
      description: e.target.description.value,
      priority: e.target.priority.value,
    };

    try {
      const response = await fetch(`/api/bugs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedBug),
      });

      if (response.ok) {
        const data = await response.json();
        // Redirect to the bug details page after successful update
        router.push(`/dashboard/bug/${data.bug._id}`);
      } else {
        throw new Error("Failed to update the bug.");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Bug</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label htmlFor="title" className="block">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={bug.title}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="description" className="block">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            defaultValue={bug.description}
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="priority" className="block">
            Priority
          </label>
          <select
            id="priority"
            name="priority"
            defaultValue={bug.priority}
            required
            className="w-full p-2 border rounded"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Update Bug
        </button>
      </form>
    </div>
  );
};

export default EditBug;
