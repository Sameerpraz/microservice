// remoteEntry.js
import { load } from "some-library-for-module-federation";

// Define which modules are shared between micro-frontends
const sharedModules = {
  "shared-module": "1.0.0",
};

// Expose components or modules for remote use
const exposeComponents = {
  "./Header": "./src/Header.jsx",
  "./Footer": "./src/Footer.jsx",
};

// Initialize the remote module
load(sharedModules, exposeComponents);
