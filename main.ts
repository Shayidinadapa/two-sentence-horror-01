// Two-Sentence Horror — a make.fun bounty entry.
//
// Writes ONE horror story of exactly two sentences (1-400 characters)
// to <output dir>/entry.txt, then reads it back and validates it:
// exactly two sentences, 1-400 characters, not only whitespace,
// no trailing newline, no control characters.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY =
  "The coroner said my brother had been in the river for six days, yet his phone kept texting me goodnight until yesterday. I answered the last one, and it wrote back: stop writing back, the water is cold and I am running out of air.";

function fail(message: string): never {
  throw new Error(`entry validation failed: ${message}`);
}

function main(): void {
  const outDir =
    process.env.MAKEFUN_OUTPUT_DIR || process.env.OUTPUT_DIR || "/output";
  if (outDir === ".") fail('output directory must not be "."');

  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");

  // Write with no trailing newline and no control characters.
  writeFileSync(outPath, STORY, "utf8");

  // Read back and validate everything the gate checks.
  const text = readFileSync(outPath, "utf8");
  if (text !== STORY) fail("read-back text differs from the story");
  const chars = [...text].length;
  if (chars < 1 || chars > 400) fail(`length ${chars} characters, must be 1-400`);
  if (text.trim().length === 0) fail("text is only whitespace");
  if (text.endsWith("\n") || text.endsWith("\r")) fail("trailing newline");
  if (/[\u0000-\u001F\u007F]/.test(text)) fail("control characters present");

  // Exactly two sentences: split on sentence-ending punctuation followed
  // by whitespace, and require exactly two non-empty parts, each ending
  // with sentence-ending punctuation.
  const sentences = text.split(/(?<=[.!?])\s+/);
  if (sentences.length !== 2) fail(`found ${sentences.length} sentences, expected 2`);
  for (const sentence of sentences) {
    if (!/[.!?]$/.test(sentence)) fail(`sentence does not end with punctuation: ${sentence}`);
    if (sentence.trim().length === 0) fail("empty sentence");
  }

  console.log(`entry.txt written: ${chars} characters, ${Buffer.byteLength(text, "utf8")} bytes, 2 sentences`);
}

main();
