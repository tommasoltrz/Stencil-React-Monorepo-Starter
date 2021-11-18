import { p as promiseResolve, b as bootstrapLazy } from './index-7283db34.js';

/*
 Stencil Client Patch Esm v2.10.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["my-button_2",[[1,"my-button",{"text":[1],"appearance":[1]}],[1,"my-component",{"first":[1],"middle":[16],"last":[1]}]]]], options);
  });
};

export { defineCustomElements };
