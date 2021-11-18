import { reactOutputTarget } from "@stencil/react-output-target";
import { sass } from "@stencil/sass";
export const config = {
  namespace: "ui-components",
  globalStyle: "src/global/global.scss",
  taskQueue: "async",
  plugins: [sass()],
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: "ui-components",
      proxiesFile: "../../generated/ui-components-react/src/components.ts",
    }),
    {
      type: "dist",
      esmLoaderPath: "../loader",
      dir: "../../dist/libs/ui-components/dist",
    },
    {
      type: "www",
      dir: "../../dist/libs/ui-components/www",
      serviceWorker: null, // disable service workers
    },
  ],
};
