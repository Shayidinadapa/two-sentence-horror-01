# Two-Sentence Horror

A two-sentence horror story for the make.fun Two-Sentence Horror bounty.

[![Two-Sentence Horror](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![Rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/Shayidinadapa/two-sentence-horror-01/rank.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![Reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/Shayidinadapa/two-sentence-horror-01/reward.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)

## What it does

`main.ts` (Node 22, no dependencies) writes one horror story of exactly two sentences, up to 400 characters, to `entry.txt` in the output directory (`MAKEFUN_OUTPUT_DIR`, then `OUTPUT_DIR`, default `/output`), reads it back, and validates it: exactly two sentences, 1–400 characters, not only whitespace, no trailing newline, no control characters.

## Run

```sh
node main.ts
```

The story it writes:

> The coroner said my brother had been in the river for six days, yet his phone kept texting me goodnight until yesterday. I answered the last one, and it wrote back: stop writing back, the water is cold and I am running out of air.

## License

MIT — see [LICENSE](LICENSE).
