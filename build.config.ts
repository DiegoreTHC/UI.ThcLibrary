// build.config.ts
import { defineBuildConfig } from "unbuild";

export default defineBuildConfig({
  entries: ["./src/module"],
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
    inlineDependencies: true,
    esbuild: {
      minify: true, // ✅ Minify output
      target: "esnext",
      legalComments: "none" // Remove license comments if not needed
    }
  }
});
