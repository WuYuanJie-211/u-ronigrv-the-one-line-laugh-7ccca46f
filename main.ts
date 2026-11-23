import { mkdirSync, writeFileSync } from "node:fs";

// The One-Line Laugh — a single funny sentence, at most 200 characters.
const entry =
  "I told my smart fridge I was on a diet, so now it judges me with push notifications and locks the ice cream behind a firmware update and two-factor snack authentication.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
console.log(`Wrote ${entry.length} characters to /output/entry.txt`);
