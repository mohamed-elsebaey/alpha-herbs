import pool from "../db"; // Import the connection pool

interface User {
  id: number;
  name: string;
  email: string;
}

export const ServerComponent = async () => {
  const id = 270;
  try {
    const data = await pool
      .promise()
      .query("SELECT * FROM users WHERE id = ? ", id);

    // Assuming data[0] contains user objects
    const users: User[] = data[0] as User[];

    return (
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-gray-800">Users</h1>
        <ul className="mt-4">
          {users.map((user: User) => (
            <li key={user.id} className="text-lg text-gray-600">
              {user.id} -- {user.name} ------ {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error("Error fetching users:", error);
    console.log("*********************************");
    console.log("Error fetching users:", error);
    console.log("*********************************");
  }
};
