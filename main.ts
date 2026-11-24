import { mkdirSync, writeFileSync } from "node:fs";

const entry = "I deployed Friday at 5 p.m. because the tests were green. The tests were green because I deleted the failing ones. Production is down.";
if (entry.length < 1 || entry.length > 200) throw new Error("entry must be 1-200 characters");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
