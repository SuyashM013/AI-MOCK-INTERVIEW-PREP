// // import { defineConfig } from "drizzle-kit";
// /** @type { import("deizzle-kit").Config} */
// export default ({
//   dialect: "postgresql",
//   schema: "./utils/schema.js",
// //   out: "./drizzle",
// dbCredentials: {
//     url: process.env.NEXT_PUBLIC_DRIZZLE_DB_URL,
// }
// });
import "dotenv/config";

import { defineConfig } from "drizzle-kit";

console.log('database url shows', process.env.DRIZZLE_DB_URL)
 
export default defineConfig({
  schema: "./utils/schema.js",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DRIZZLE_DB_URL,
  }
});


