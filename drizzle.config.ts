import config from "@/lib/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./lib/schema.ts",
  out: "./drizzle",
  dialect: postgresql,
  //driver: "pg",
  dbCredentials: {
    connectionString: config.POSTGRES_URL,
  },
  verbose: true,
  strict: true,
});
