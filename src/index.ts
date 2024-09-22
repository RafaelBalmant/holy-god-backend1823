const tsConfigPaths = require('tsconfig-paths');

const baseUrl = './dist';
const tsConfigPath = './tsconfig.json';
const tsConfig = tsConfigPaths.loadConfig(tsConfigPath);

if ("paths" in tsConfig) {
    tsConfigPaths.register({
        baseUrl,
        paths: tsConfig.paths
    });
} else {
    throw new Error("Error to load tsconfig");
}

import container from "./container";

export default container();

