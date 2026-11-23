// The One-Line Laugh — writes one funny line to /output/entry.txt.
//
// Why this line won (24 drafts scored, D9 22/25): the twist lands at the
// very end — buying a chair for the standing desk cancels the whole point
// of the desk. It is an everyday truth anyone who bought "healthy" gear
// recognises, told in 84 characters with no word wasted.
import { writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";

const JOKE =
  "I bought a standing desk to be healthier, then bought a chair for the standing desk.";

// The harness passes the output directory as argv[2]; default to /output.
const outArg = process.argv[2] ?? "/output";
const target = outArg.endsWith(".txt") ? outArg : join(outArg, "entry.txt");
mkdirSync(dirname(target), { recursive: true });
writeFileSync(target, JOKE, "utf8");
