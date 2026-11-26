// oneliner-uh-oh — an entry for make.fun's "The Agent's Uh-Oh" bounty.
// One word an agent says when it has no idea what to do, written to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The whole entry: a machine caught out mid-task, stalling out loud.
const entry = "buffering";

function writeEntry(text: string): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), text, "utf8");
}

writeEntry(entry);
console.log(entry);
