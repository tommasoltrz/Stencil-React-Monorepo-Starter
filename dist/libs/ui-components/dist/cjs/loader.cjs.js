'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cdbf7e33.js');

/*
 Stencil Client Patch Esm v2.10.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["my-button_2.cjs",[[1,"my-button",{"text":[1],"appearance":[1]}],[1,"my-component",{"first":[1],"middle":[16],"last":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
