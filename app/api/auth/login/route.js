import { connectToDatabase } from "@/lib/mongoose";
import User from "@/models/User";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req, res) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return new Response(
      JSON.stringify({ error: "Email and password are required." }),
      { status: 400 }
    );
  }

  try {
    await connectToDatabase();

    // Find the user in the database
    const user = await User.findOne({ email });
    if (!user) {
      return new Response(
        JSON.stringify({ error: "User not found. Please sign up first." }),
        { status: 404 }
      );
    }

    // Compare the entered password with the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(
        JSON.stringify({ error: "Invalid email or password." }),
        { status: 401 }
      );
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET, // Add JWT_SECRET to `.env.local`
      { expiresIn: "1h" }
    );
    // res.setHeader(
    //   "Set-Cookie",
    //   `token=${token}; HttpOnly; Path=/; Max-Age=3600`
    // );

    return new Response(
      JSON.stringify({ message: "Login successful!", token }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during login:", error);
    return new Response(
      JSON.stringify({ error: "An error occurred during login." }),
      { status: 500 }
    );
  }
}
