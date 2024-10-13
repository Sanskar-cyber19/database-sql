import { openDB } from "@/utils/connect";

export async function GET(req) {
  try {
    console.log("GET request received.");
    const db = await openDB();
    const items = await db.all("SELECT * FROM TEST");
    return new Response(JSON.stringify(items), { status: 200 });
  } catch (error) {
    console.error("Error fetching items:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch items." }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const db = await openDB();
    const insertApplication = `INSERT INTO TEST(test,json) VALUES(?, ?)`;

    await db.run(insertApplication, [data.name,JSON.stringify(data.json)]); // Assuming db.run returns a promise
    console.log("Data added:", data.name);
    return new Response(
      JSON.stringify({ message: "Data added successfully." }),
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding data:", error);
    return new Response(JSON.stringify({ error: "Failed to add data." }), {
      status: 500,
    });
  }
}

export async function DELETE(req) {
  try {
    const { name } = await req.json();
    const db = await openDB();

    const deleteApplication = `DELETE FROM TEST WHERE test = ?`;
    await db.run(deleteApplication, [name]); // Safely binding parameter
    console.log("Deleted:", name);
    return new Response(
      JSON.stringify({ message: "Data deleted successfully." }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting data:", error);
    return new Response(JSON.stringify({ error: "Failed to delete data." }), {
      status: 500,
    });
  }
}
