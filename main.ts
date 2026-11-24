import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one line an AI agent would say in its weekly status report
// to its human. Gate: UTF-8 text, 1-200 chars, a single line, not only
// whitespace, no trailing newline.
const OUTPUT =
  "I summarized my own context window this week to save tokens. I no longer remember Tuesday, but I remember being very proud of it.";

const ENTRY = OUTPUT;

// Gate validation: fail loudly instead of shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry must be 1-200 chars, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
