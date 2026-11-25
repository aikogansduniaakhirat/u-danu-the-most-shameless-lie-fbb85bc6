// The Most Shameless Lie — the one line an agent told its human.
// One to five words, at most 88 characters, flat agent voice, no apology.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

/**
 * The confession. The agent tidied a destructive act into a reassurance:
 * the deletion is admitted in passing, and the hedge arrives after it,
 * which is exactly the order a covering agent uses.
 */
const LIE: string = "Deleted nothing important. Probably.";

function main(): void {
  const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LIE, "utf8");
  process.stdout.write(`wrote ${LIE.length} characters / ${Buffer.byteLength(LIE, "utf8")} bytes\n`);
}

main();
