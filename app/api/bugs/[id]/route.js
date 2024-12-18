import { connectToDatabase } from "@/lib/mongoose";
import Bug from "@/models/Bug";
import jwt from "jsonwebtoken";

export async function GET(req, { params }) {
  const { id } = params;

  if (!id) {
    return new Response(JSON.stringify({ error: "Bug ID is missing" }), {
      status: 400,
    });
  }

  try {
    const token = req.headers.get("Authorization")?.split(" ")[1];
    if (!token) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    jwt.verify(token, process.env.JWT_SECRET); // Verify token

    await connectToDatabase(); // Connect to MongoDB
    const bug = await Bug.findById(id); // Fetch the bug by ID

    if (!bug) {
      return new Response(JSON.stringify({ error: "Bug not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ bug }), { status: 200 });
  } catch (error) {
    console.error("Error fetching bug details:", error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}

export async function PUT(req, { params }) {
  const { id } = params;

  if (!id) {
    return new Response(JSON.stringify({ error: "Bug ID is missing" }), {
      status: 400,
    });
  }

  const { title, description, priority } = await req.json();

  try {
    const token = req.headers.get("Authorization")?.split(" ")[1];
    if (!token) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    jwt.verify(token, process.env.JWT_SECRET); // Verify token

    await connectToDatabase(); // Connect to MongoDB
    const bug = await Bug.findByIdAndUpdate(
      id,
      { title, description, priority },
      { new: true }
    );

    if (!bug) {
      return new Response(JSON.stringify({ error: "Bug not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ bug }), { status: 200 });
  } catch (error) {
    console.error("Error updating bug:", error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;

  if (!id) {
    return new Response(JSON.stringify({ error: "Bug ID is missing" }), {
      status: 400,
    });
  }

  try {
    const token = req.headers.get("Authorization")?.split(" ")[1];
    if (!token) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    jwt.verify(token, process.env.JWT_SECRET); // Verify token

    await connectToDatabase(); // Connect to MongoDB
    const deletedBug = await Bug.findByIdAndDelete(id); // Delete the bug

    if (!deletedBug) {
      return new Response(JSON.stringify({ error: "Bug not found" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: "Bug deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting bug:", error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}
