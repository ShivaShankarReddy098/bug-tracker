import { connectToDatabase } from "@/lib/mongoose";
import Bug from "@/models/Bug";
import jwt from "jsonwebtoken";

export async function GET(req) {
  try {
    // Verify token
    const token = req.headers.get("Authorization")?.split(" ")[1];
    if (!token) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    await connectToDatabase();
    const bugs = await Bug.find({ userId });

    return new Response(JSON.stringify({ bugs }), { status: 200 });
  } catch (error) {
    console.error("Error fetching bugs:", error);
    return new Response(JSON.stringify({ error: "Something went wrong" }), {
      status: 500,
    });
  }
}
