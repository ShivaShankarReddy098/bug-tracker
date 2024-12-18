"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Use the `useParams` hook in the App Router

const BugDetails = () => {
  const params = useParams(); // Get params using the hook
  const [bug, setBug] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBug = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await fetch(`/api/bugs/${params.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch bug details");
        }

        const data = await response.json();
        setBug(data.bug);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBug();
  }, [params.id]); // Access the bug ID from the params object

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{bug.title}</h1>
      <p className="mb-2">
        <strong>Description:</strong> {bug.description}
      </p>
      <p className="mb-2">
        <strong>Priority:</strong> {bug.priority}
      </p>
      <p>
        <strong>Created At:</strong> {new Date(bug.createdAt).toLocaleString()}
      </p>
      <button
        onClick={async () => {
          const response = await fetch(`/api/bugs/${params.id}`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });

          if (response.ok) {
            alert("Bug deleted successfully.");
            window.location.href = "/dashboard"; // Redirect to dashboard
          } else {
            alert("Failed to delete bug.");
          }
        }}
        className="bg-red-500 text-white p-2 rounded mt-5"
      >
        Delete Bug
      </button>
      <button
        onClick={() =>
          (window.location.href = `/dashboard/bug/${params.id}/edit`)
        }
        className="bg-blue-500 text-white p-2 rounded ml-2"
      >
        Edit Bug
      </button>
    </div>
  );
};

export default BugDetails;
