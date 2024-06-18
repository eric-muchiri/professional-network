import { db, pool } from "@/lib/db";
import { users } from "@/lib/schema";
import { eq } from "drizzle-orm";

const JOB_TITLES = [
  "Full stack Developer",
  "Back End Developer",
  "Front end Developer",
  "DevOps Engineer",
  "Data Scientist",
  "Project Manager",
  "Blockchain Developer",
];

async function main() {
  const res = await db.query.users.findMany();
  for (let user of res) {
    const randomidx = Math.floor(Math.random() * JOB_TITLES.length);
    await db
      .update(users)
      .set({ jobTitle: JOB_TITLES[randomidx] })
      .where(eq(users.id, user.id));
  }
  pool.end();
}

main();
