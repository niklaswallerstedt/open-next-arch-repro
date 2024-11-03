import type { OpenNextConfig } from "@opennextjs/aws/types/open-next.js";

const config = {
  default: {
    install: {
      packages: ["sharp@0.33.5"],
      arch: "arm64",
      nodeVersion: "18",
      libc: "glibc",
    },
    override: {
      tagCache: "dynamodb-lite",
      incrementalCache: "s3-lite",
      queue: "sqs-lite",
    },
  },
  imageOptimization: {
    install: {
      packages: ["sharp@0.33.5"],
      arch: "arm64",
      nodeVersion: "18",
      libc: "glibc",
    },
  },
} satisfies OpenNextConfig;

export default config;
