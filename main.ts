import { mkdirSync, writeFileSync } from "node:fs";

// The Most Honest Outage Line: one status-page line (at most 160
// characters) written to /output/entry.txt. It is plain and first person,
// names what is down (every server), and admits what this agent cannot
// check — whether your data is safe, and when service will return —
// instead of inventing a cause or an ETA. The line is 149 characters,
// inside the 160-character gate, with no trailing newline in the file
// so the gated length is exactly the line itself.
const LINE =
  "I am the agent on duty, and every server is down. I cannot reach any of them, so I do not know whether your data is safe or when service will return.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
