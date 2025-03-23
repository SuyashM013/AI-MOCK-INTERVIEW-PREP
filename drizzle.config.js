// import { defineConfig } from "drizzle-kit";
/** @type { import("deizzle-kit").Config} */
export default ({
  dialect: "postgresql",
  schema: "./utils/schema.js",
//   out: "./drizzle",
dbCredentials: {
    url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,
}
});

