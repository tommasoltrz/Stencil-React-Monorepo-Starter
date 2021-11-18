import { p as promiseResolve, b as bootstrapLazy } from './index-7283db34.js';

/*
 Stencil Client Patch Browser v2.10.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["my-button_2",[[1,"my-button",{"text":[1],"appearance":[1]}],[1,"my-component",{"first":[1],"middle":[16],"last":[1]}]]]], options);
});
