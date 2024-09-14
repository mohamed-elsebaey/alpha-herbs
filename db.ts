"use server";
import bcrypt from "bcrypt";

// step 1#

import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const pool = mysql.createPool({
  // your MySQL host
  host: process.env.DB_HOST,
  // your MySQL username
  user: process.env.DB_USER,
  // your MySQL password
  password: process.env.DB_PASSWORD,
  // your MySQL database name
  database: process.env.DB_DATABASE,

  // host: "localhost",
  // user: "root",
  // password: "",
  // database: "finalexam_data",
});

// step 2#

function executeQuery<T>(query: string, values?: any[]): Promise<T[]> {
  return new Promise((resolve, reject) => {
    pool.query(query, values, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results as T[]);
      }
    });
  });
}

// step 3#

export async function getAllBlogs() {
  const blogs = await executeQuery("SELECT * FROM blogs");
  return blogs;
}

// --------------------------------------------------------------

export async function addNowUser(email: string, password: string ,verCode:Number) {
  if (typeof password !== "string") {
    throw new Error("Password must be a string");
  }

  const existingUser = await executeQuery(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (existingUser.length > 0) {
    return { errors: { email: "* Email already exists" } };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await executeQuery("INSERT INTO users (email, password, verCode) VALUES (?, ?,?)", [
    email,
    hashedPassword,
    verCode,
  ]);

  // return { message: "User created successfully" }; 
  return {};
}
