const { mkdirSync, writeFileSync } = require("node:fs");
const { join } = require("node:path");

// One line, one laugh: a GPS that navigates existential dread.
const LINE =
  "I asked my GPS for the meaning of life. It said: 'In 400 meters, turn left at Regret, then drive straight into your thirties.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
