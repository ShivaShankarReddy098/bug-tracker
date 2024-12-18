"use client";
import { useEffect, useState } from "react";
const Dashboard = () => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    const fetchBugs = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch("/api/bugs", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setBugs(data.bugs);
      }
    };

    fetchBugs();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <button
        onClick={() => (window.location.href = "/dashboard/create-bug")}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Create Bug
      </button>
      <ul>
        {bugs.map((bug, index) => (
          <li key={index} className="border p-2 mb-2">
            <strong>{bug.title}</strong>
            <p>{bug.description}</p>
            <a href={`/dashboard/bug/${bug._id}`} className="text-blue-500">
              View Details
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
