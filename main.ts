const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

// One line, one laugh: a GPS that navigates existential dread.
// The punch lands on the GPS's own arrival announcement: the
// destination was your thirties all along.
const LINE =
  "I asked my GPS for the meaning of life. It said: 'In 400 meters, turn left at Regret. You have arrived at your thirties.'";

// The bounty caps the entry at 200 characters on exactly one line.
// Fail loudly instead of ever writing an entry that breaks the gate.
if (LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(
    `entry must be one line of at most 200 characters, got ${LINE.length} characters`
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
