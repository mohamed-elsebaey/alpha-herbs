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

// executeQuery("CREATE TABLE blogs_likes ( id INT AUTO_INCREMENT PRIMARY KEY,user_id INT,article_id INT,FOREIGN KEY (user_id) REFERENCES users(id),FOREIGN KEY (article_id) REFERENCES blogs(id));");

// step 3#

export async function getAllBlogs() {
  const blogs = await executeQuery("SELECT * FROM blogs");
  return blogs;
}
export async function getAuthorDataById(id: any) {
  const authorData = await executeQuery(
    "SELECT name,profilePath FROM users WHERE id = ?",
    [id]
  );
  return authorData;
}
export async function getNamesOfThoseWhoLikedTheArticleByBlogId(id: any) {
  const namesOfThoseWhoLikedTheArticle: any = await executeQuery(
    "SELECT users.name,users.email FROM blogs_likes INNER JOIN users ON blogs_likes.user_id = users.id WHERE blogs_likes.article_id = ?",
    [id]
  );
  return namesOfThoseWhoLikedTheArticle;
}

export async function getUserIdByEmail(userEmail: any) {
  const userId = await executeQuery(
    "SELECT id FROM users WHERE email = ?",[userEmail]
  );
  return userId
}
export async function getArticleLikeStateByUserIdArticleId(userId: any , articleId: any) {
  const likeState = await executeQuery("SELECT id FROM blogs_likes WHERE user_id = ? AND article_id = ? ",[userId,articleId]);
  if(likeState.length == 0) {
    executeQuery("INSERT INTO blogs_likes (user_id,article_id) VALUES (?,?)",[userId,articleId]);
  }else{
    executeQuery("DELETE FROM blogs_likes WHERE user_id = ? AND article_id = ? ",[userId,articleId]);
  }
}

// --------------------------------------------------------------

export async function addNowUser(
  email: string,
  password: string,
  verCode: Number
) {
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

  await executeQuery(
    "INSERT INTO users (email, password, verCode) VALUES (?, ?,?)",
    [email, hashedPassword, verCode]
  );

  // return { message: "User created successfully" };
  return {};
}
// ---------------------------------------------------------------------------------------

export async function userDataAuthentication(email: string, password: string) {
  const existingUser = await executeQuery(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (existingUser.length == 0) {
    return { errors: { email: "* Invalid email " } };
  }

  const user: any = existingUser[0];
  const isPasswordMatch = await bcrypt.compare(password, user.password);

  if (!isPasswordMatch) {
    return { errors: { password: "* Incorrect password" } };
  }

  return {};
}

// ---------------------------------------------------------------------------------------

export async function getUserDataFromDB(email: string) {
  const existingUser = await executeQuery(
    "SELECT * FROM users WHERE email = ?",
    [email]
  );

  if (existingUser.length == 0) {
    return { errors: { email: "* Invalid email " } };
  }

  const user = existingUser[0];

  return user;
}
// ---------------------------------------------------------------------------------------

export async function updateUserProfileData(
  email: String,
  name: string,
  phone: String,
  country: String,
  profilePath: String
) {
  const UpdateData = await executeQuery(
    "UPDATE users SET name = ? , phone = ? , country = ? , profilePath = ? WHERE email = ?",
    [name, phone, country, profilePath, email]
  );

  
  return UpdateData;
}
