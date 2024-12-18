import { connectToDatabase } from "@/lib/mongoose";
import Bug from "@/models/Bug";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const token = req.headers.get("Authorization")?.split(" ")[1];
    if (!token) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    const { title, description, priority } = await req.json();

    if (!title || !description || !priority) {
      return new Response(
        JSON.stringify({ error: "All fields are required." }),
        {
          status: 400,
        }
      );
    }

    await connectToDatabase();
    const bug = new Bug({ title, description, priority, userId });
    await bug.save();

    return new Response(
      JSON.stringify({ message: "Bug created successfully!" }),
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error creating bug:", error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}
