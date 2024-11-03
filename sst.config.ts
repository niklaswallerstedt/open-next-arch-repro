import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

const OPEN_NEXT_AWS_VERSION = "3.2.0" as const;

export default {
  config() {
    return {
      name: "open-next-arch-repro",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const buildCommand =
        `sst bind --stage ${app.stage} "pnpx @opennextjs/aws@${OPEN_NEXT_AWS_VERSION} build"` as const;

      const site = new NextjsSite(stack, "site", {
        buildCommand,
      });

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
