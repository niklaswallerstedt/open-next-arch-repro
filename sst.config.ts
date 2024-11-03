import { SSTConfig } from "sst";
import { NextjsSite } from "sst/constructs";

export default {
  config() {
    return {
      name: "open-next-arch-repro",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const site = new NextjsSite(stack, "site");

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
