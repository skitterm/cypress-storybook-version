/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./cypress/support/commands.js":
/*!*************************************!*\
  !*** ./cypress/support/commands.js ***!
  \*************************************/
/***/ (() => {

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


/***/ }),

/***/ "./node_modules/@chromatic-com/cypress/dist/support.js":
/*!*************************************************************!*\
  !*** ./node_modules/@chromatic-com/cypress/dist/support.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {



var rrwebSnapshot = __webpack_require__(/*! rrweb-snapshot */ "./node_modules/rrweb-snapshot/es/rrweb-snapshot.js");

Cypress.Commands.add("takeSnapshot",e=>{Cypress.config("isTextTerminal")&&cy.document().then(s=>{let r=rrwebSnapshot.snapshot(s);cy.get("@manualSnapshots").then(n=>[...n,{name:e,snapshot:r}]).as("manualSnapshots");});});beforeEach(()=>{Cypress.config("isTextTerminal")&&(cy.wrap([]).as("manualSnapshots"),cy.task("prepareArchives",{action:"setup-network-listener",payload:{allowedDomains:Cypress.env("assetDomains")}}));});afterEach(()=>{Cypress.config("isTextTerminal")&&cy.document().then(e=>{let s=Cypress.env("disableAutoSnapshot")?[]:[{snapshot:rrwebSnapshot.snapshot(e)}];cy.get("@manualSnapshots").then((r=[])=>{cy.url().then(n=>{cy.task("prepareArchives",{action:"save-archives",payload:{testTitlePath:[Cypress.spec.relativeToCommonRoot,...Cypress.currentTest.titlePath],domSnapshots:[...r,...s],chromaticStorybookParams:{...Cypress.env("diffThreshold")&&{diffThreshold:Cypress.env("diffThreshold")},...Cypress.env("delay")&&{delay:Cypress.env("delay")},...Cypress.env("diffIncludeAntiAliasing")&&{diffIncludeAntiAliasing:Cypress.env("diffIncludeAntiAliasing")},...Cypress.env("diffThreshold")&&{diffThreshold:Cypress.env("diffThreshold")},...Cypress.env("forcedColors")&&{forcedColors:Cypress.env("forcedColors")},...Cypress.env("pauseAnimationAtEnd")&&{pauseAnimationAtEnd:Cypress.env("pauseAnimationAtEnd")},...Cypress.env("prefersReducedMotion")&&{prefersReducedMotion:Cypress.env("prefersReducedMotion")},...Cypress.env("cropToViewport")&&{cropToViewport:Cypress.env("cropToViewport")}},pageUrl:n,viewport:{height:Cypress.config("viewportHeight"),width:Cypress.config("viewportWidth")}}});});});});});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=support.js.map

/***/ }),

/***/ "./node_modules/rrweb-snapshot/es/rrweb-snapshot.js":
/*!**********************************************************!*\
  !*** ./node_modules/rrweb-snapshot/es/rrweb-snapshot.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IGNORED_NODE: () => (/* binding */ IGNORED_NODE),
/* harmony export */   Mirror: () => (/* binding */ Mirror),
/* harmony export */   NodeType: () => (/* binding */ NodeType),
/* harmony export */   adaptCssForReplay: () => (/* binding */ adaptCssForReplay),
/* harmony export */   buildNodeWithSN: () => (/* binding */ buildNodeWithSN),
/* harmony export */   classMatchesRegex: () => (/* binding */ classMatchesRegex),
/* harmony export */   cleanupSnapshot: () => (/* binding */ cleanupSnapshot),
/* harmony export */   createCache: () => (/* binding */ createCache),
/* harmony export */   createMirror: () => (/* binding */ createMirror),
/* harmony export */   escapeImportStatement: () => (/* binding */ escapeImportStatement),
/* harmony export */   extractFileExtension: () => (/* binding */ extractFileExtension),
/* harmony export */   fixSafariColons: () => (/* binding */ fixSafariColons),
/* harmony export */   genId: () => (/* binding */ genId),
/* harmony export */   getInputType: () => (/* binding */ getInputType),
/* harmony export */   ignoreAttribute: () => (/* binding */ ignoreAttribute),
/* harmony export */   is2DCanvasBlank: () => (/* binding */ is2DCanvasBlank),
/* harmony export */   isCSSImportRule: () => (/* binding */ isCSSImportRule),
/* harmony export */   isCSSStyleRule: () => (/* binding */ isCSSStyleRule),
/* harmony export */   isElement: () => (/* binding */ isElement),
/* harmony export */   isNativeShadowDom: () => (/* binding */ isNativeShadowDom),
/* harmony export */   isNodeMetaEqual: () => (/* binding */ isNodeMetaEqual),
/* harmony export */   isShadowRoot: () => (/* binding */ isShadowRoot),
/* harmony export */   maskInputValue: () => (/* binding */ maskInputValue),
/* harmony export */   needMaskingText: () => (/* binding */ needMaskingText),
/* harmony export */   rebuild: () => (/* binding */ rebuild),
/* harmony export */   serializeNodeWithId: () => (/* binding */ serializeNodeWithId),
/* harmony export */   snapshot: () => (/* binding */ snapshot),
/* harmony export */   stringifyRule: () => (/* binding */ stringifyRule),
/* harmony export */   stringifyStylesheet: () => (/* binding */ stringifyStylesheet),
/* harmony export */   toLowerCase: () => (/* binding */ toLowerCase),
/* harmony export */   transformAttribute: () => (/* binding */ transformAttribute),
/* harmony export */   visitSnapshot: () => (/* binding */ visitSnapshot)
/* harmony export */ });
var NodeType;
(function (NodeType) {
    NodeType[NodeType["Document"] = 0] = "Document";
    NodeType[NodeType["DocumentType"] = 1] = "DocumentType";
    NodeType[NodeType["Element"] = 2] = "Element";
    NodeType[NodeType["Text"] = 3] = "Text";
    NodeType[NodeType["CDATA"] = 4] = "CDATA";
    NodeType[NodeType["Comment"] = 5] = "Comment";
})(NodeType || (NodeType = {}));

function isElement(n) {
    return n.nodeType === n.ELEMENT_NODE;
}
function isShadowRoot(n) {
    const host = n === null || n === void 0 ? void 0 : n.host;
    return Boolean((host === null || host === void 0 ? void 0 : host.shadowRoot) === n);
}
function isNativeShadowDom(shadowRoot) {
    return Object.prototype.toString.call(shadowRoot) === '[object ShadowRoot]';
}
function fixBrowserCompatibilityIssuesInCSS(cssText) {
    if (cssText.includes(' background-clip: text;') &&
        !cssText.includes(' -webkit-background-clip: text;')) {
        cssText = cssText.replace(/\sbackground-clip:\s*text;/g, ' -webkit-background-clip: text; background-clip: text;');
    }
    return cssText;
}
function escapeImportStatement(rule) {
    const { cssText } = rule;
    if (cssText.split('"').length < 3)
        return cssText;
    const statement = ['@import', `url(${JSON.stringify(rule.href)})`];
    if (rule.layerName === '') {
        statement.push(`layer`);
    }
    else if (rule.layerName) {
        statement.push(`layer(${rule.layerName})`);
    }
    if (rule.supportsText) {
        statement.push(`supports(${rule.supportsText})`);
    }
    if (rule.media.length) {
        statement.push(rule.media.mediaText);
    }
    return statement.join(' ') + ';';
}
function stringifyStylesheet(s) {
    try {
        const rules = s.rules || s.cssRules;
        return rules
            ? fixBrowserCompatibilityIssuesInCSS(Array.from(rules, stringifyRule).join(''))
            : null;
    }
    catch (error) {
        return null;
    }
}
function stringifyRule(rule) {
    let importStringified;
    if (isCSSImportRule(rule)) {
        try {
            importStringified =
                stringifyStylesheet(rule.styleSheet) ||
                    escapeImportStatement(rule);
        }
        catch (error) {
        }
    }
    else if (isCSSStyleRule(rule) && rule.selectorText.includes(':')) {
        return fixSafariColons(rule.cssText);
    }
    return importStringified || rule.cssText;
}
function fixSafariColons(cssStringified) {
    const regex = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
    return cssStringified.replace(regex, '$1\\$2');
}
function isCSSImportRule(rule) {
    return 'styleSheet' in rule;
}
function isCSSStyleRule(rule) {
    return 'selectorText' in rule;
}
class Mirror {
    constructor() {
        this.idNodeMap = new Map();
        this.nodeMetaMap = new WeakMap();
    }
    getId(n) {
        var _a;
        if (!n)
            return -1;
        const id = (_a = this.getMeta(n)) === null || _a === void 0 ? void 0 : _a.id;
        return id !== null && id !== void 0 ? id : -1;
    }
    getNode(id) {
        return this.idNodeMap.get(id) || null;
    }
    getIds() {
        return Array.from(this.idNodeMap.keys());
    }
    getMeta(n) {
        return this.nodeMetaMap.get(n) || null;
    }
    removeNodeFromMap(n) {
        const id = this.getId(n);
        this.idNodeMap.delete(id);
        if (n.childNodes) {
            n.childNodes.forEach((childNode) => this.removeNodeFromMap(childNode));
        }
    }
    has(id) {
        return this.idNodeMap.has(id);
    }
    hasNode(node) {
        return this.nodeMetaMap.has(node);
    }
    add(n, meta) {
        const id = meta.id;
        this.idNodeMap.set(id, n);
        this.nodeMetaMap.set(n, meta);
    }
    replace(id, n) {
        const oldNode = this.getNode(id);
        if (oldNode) {
            const meta = this.nodeMetaMap.get(oldNode);
            if (meta)
                this.nodeMetaMap.set(n, meta);
        }
        this.idNodeMap.set(id, n);
    }
    reset() {
        this.idNodeMap = new Map();
        this.nodeMetaMap = new WeakMap();
    }
}
function createMirror() {
    return new Mirror();
}
function maskInputValue({ element, maskInputOptions, tagName, type, value, maskInputFn, }) {
    let text = value || '';
    const actualType = type && toLowerCase(type);
    if (maskInputOptions[tagName.toLowerCase()] ||
        (actualType && maskInputOptions[actualType])) {
        if (maskInputFn) {
            text = maskInputFn(text, element);
        }
        else {
            text = '*'.repeat(text.length);
        }
    }
    return text;
}
function toLowerCase(str) {
    return str.toLowerCase();
}
const ORIGINAL_ATTRIBUTE_NAME = '__rrweb_original__';
function is2DCanvasBlank(canvas) {
    const ctx = canvas.getContext('2d');
    if (!ctx)
        return true;
    const chunkSize = 50;
    for (let x = 0; x < canvas.width; x += chunkSize) {
        for (let y = 0; y < canvas.height; y += chunkSize) {
            const getImageData = ctx.getImageData;
            const originalGetImageData = ORIGINAL_ATTRIBUTE_NAME in getImageData
                ? getImageData[ORIGINAL_ATTRIBUTE_NAME]
                : getImageData;
            const pixelBuffer = new Uint32Array(originalGetImageData.call(ctx, x, y, Math.min(chunkSize, canvas.width - x), Math.min(chunkSize, canvas.height - y)).data.buffer);
            if (pixelBuffer.some((pixel) => pixel !== 0))
                return false;
        }
    }
    return true;
}
function isNodeMetaEqual(a, b) {
    if (!a || !b || a.type !== b.type)
        return false;
    if (a.type === NodeType.Document)
        return a.compatMode === b.compatMode;
    else if (a.type === NodeType.DocumentType)
        return (a.name === b.name &&
            a.publicId === b.publicId &&
            a.systemId === b.systemId);
    else if (a.type === NodeType.Comment ||
        a.type === NodeType.Text ||
        a.type === NodeType.CDATA)
        return a.textContent === b.textContent;
    else if (a.type === NodeType.Element)
        return (a.tagName === b.tagName &&
            JSON.stringify(a.attributes) ===
                JSON.stringify(b.attributes) &&
            a.isSVG === b.isSVG &&
            a.needBlock === b.needBlock);
    return false;
}
function getInputType(element) {
    const type = element.type;
    return element.hasAttribute('data-rr-is-password')
        ? 'password'
        : type
            ?
                toLowerCase(type)
            : null;
}
function extractFileExtension(path, baseURL) {
    var _a;
    let url;
    try {
        url = new URL(path, baseURL !== null && baseURL !== void 0 ? baseURL : window.location.href);
    }
    catch (err) {
        return null;
    }
    const regex = /\.([0-9a-z]+)(?:$)/i;
    const match = url.pathname.match(regex);
    return (_a = match === null || match === void 0 ? void 0 : match[1]) !== null && _a !== void 0 ? _a : null;
}

let _id = 1;
const tagNameRegex = new RegExp('[^a-z0-9-_:]');
const IGNORED_NODE = -2;
function genId() {
    return _id++;
}
function getValidTagName(element) {
    if (element instanceof HTMLFormElement) {
        return 'form';
    }
    const processedTagName = toLowerCase(element.tagName);
    if (tagNameRegex.test(processedTagName)) {
        return 'div';
    }
    return processedTagName;
}
function extractOrigin(url) {
    let origin = '';
    if (url.indexOf('//') > -1) {
        origin = url.split('/').slice(0, 3).join('/');
    }
    else {
        origin = url.split('/')[0];
    }
    origin = origin.split('?')[0];
    return origin;
}
let canvasService;
let canvasCtx;
const URL_IN_CSS_REF = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm;
const URL_PROTOCOL_MATCH = /^(?:[a-z+]+:)?\/\//i;
const URL_WWW_MATCH = /^www\..*/i;
const DATA_URI = /^(data:)([^,]*),(.*)/i;
function absoluteToStylesheet(cssText, href) {
    return (cssText || '').replace(URL_IN_CSS_REF, (origin, quote1, path1, quote2, path2, path3) => {
        const filePath = path1 || path2 || path3;
        const maybeQuote = quote1 || quote2 || '';
        if (!filePath) {
            return origin;
        }
        if (URL_PROTOCOL_MATCH.test(filePath) || URL_WWW_MATCH.test(filePath)) {
            return `url(${maybeQuote}${filePath}${maybeQuote})`;
        }
        if (DATA_URI.test(filePath)) {
            return `url(${maybeQuote}${filePath}${maybeQuote})`;
        }
        if (filePath[0] === '/') {
            return `url(${maybeQuote}${extractOrigin(href) + filePath}${maybeQuote})`;
        }
        const stack = href.split('/');
        const parts = filePath.split('/');
        stack.pop();
        for (const part of parts) {
            if (part === '.') {
                continue;
            }
            else if (part === '..') {
                stack.pop();
            }
            else {
                stack.push(part);
            }
        }
        return `url(${maybeQuote}${stack.join('/')}${maybeQuote})`;
    });
}
const SRCSET_NOT_SPACES = /^[^ \t\n\r\u000c]+/;
const SRCSET_COMMAS_OR_SPACES = /^[, \t\n\r\u000c]+/;
function getAbsoluteSrcsetString(doc, attributeValue) {
    if (attributeValue.trim() === '') {
        return attributeValue;
    }
    let pos = 0;
    function collectCharacters(regEx) {
        let chars;
        const match = regEx.exec(attributeValue.substring(pos));
        if (match) {
            chars = match[0];
            pos += chars.length;
            return chars;
        }
        return '';
    }
    const output = [];
    while (true) {
        collectCharacters(SRCSET_COMMAS_OR_SPACES);
        if (pos >= attributeValue.length) {
            break;
        }
        let url = collectCharacters(SRCSET_NOT_SPACES);
        if (url.slice(-1) === ',') {
            url = absoluteToDoc(doc, url.substring(0, url.length - 1));
            output.push(url);
        }
        else {
            let descriptorsStr = '';
            url = absoluteToDoc(doc, url);
            let inParens = false;
            while (true) {
                const c = attributeValue.charAt(pos);
                if (c === '') {
                    output.push((url + descriptorsStr).trim());
                    break;
                }
                else if (!inParens) {
                    if (c === ',') {
                        pos += 1;
                        output.push((url + descriptorsStr).trim());
                        break;
                    }
                    else if (c === '(') {
                        inParens = true;
                    }
                }
                else {
                    if (c === ')') {
                        inParens = false;
                    }
                }
                descriptorsStr += c;
                pos += 1;
            }
        }
    }
    return output.join(', ');
}
const cachedDocument = new WeakMap();
function absoluteToDoc(doc, attributeValue) {
    if (!attributeValue || attributeValue.trim() === '') {
        return attributeValue;
    }
    return getHref(doc, attributeValue);
}
function isSVGElement(el) {
    return Boolean(el.tagName === 'svg' || el.ownerSVGElement);
}
function getHref(doc, customHref) {
    let a = cachedDocument.get(doc);
    if (!a) {
        a = doc.createElement('a');
        cachedDocument.set(doc, a);
    }
    if (!customHref) {
        customHref = '';
    }
    else if (customHref.startsWith('blob:') || customHref.startsWith('data:')) {
        return customHref;
    }
    a.setAttribute('href', customHref);
    return a.href;
}
function transformAttribute(doc, tagName, name, value) {
    if (!value) {
        return value;
    }
    if (name === 'src' ||
        (name === 'href' && !(tagName === 'use' && value[0] === '#'))) {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'xlink:href' && value[0] !== '#') {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'background' &&
        (tagName === 'table' || tagName === 'td' || tagName === 'th')) {
        return absoluteToDoc(doc, value);
    }
    else if (name === 'srcset') {
        return getAbsoluteSrcsetString(doc, value);
    }
    else if (name === 'style') {
        return absoluteToStylesheet(value, getHref(doc));
    }
    else if (tagName === 'object' && name === 'data') {
        return absoluteToDoc(doc, value);
    }
    return value;
}
function ignoreAttribute(tagName, name, _value) {
    return (tagName === 'video' || tagName === 'audio') && name === 'autoplay';
}
function _isBlockedElement(element, blockClass, blockSelector) {
    try {
        if (typeof blockClass === 'string') {
            if (element.classList.contains(blockClass)) {
                return true;
            }
        }
        else {
            for (let eIndex = element.classList.length; eIndex--;) {
                const className = element.classList[eIndex];
                if (blockClass.test(className)) {
                    return true;
                }
            }
        }
        if (blockSelector) {
            return element.matches(blockSelector);
        }
    }
    catch (e) {
    }
    return false;
}
function classMatchesRegex(node, regex, checkAncestors) {
    if (!node)
        return false;
    if (node.nodeType !== node.ELEMENT_NODE) {
        if (!checkAncestors)
            return false;
        return classMatchesRegex(node.parentNode, regex, checkAncestors);
    }
    for (let eIndex = node.classList.length; eIndex--;) {
        const className = node.classList[eIndex];
        if (regex.test(className)) {
            return true;
        }
    }
    if (!checkAncestors)
        return false;
    return classMatchesRegex(node.parentNode, regex, checkAncestors);
}
function needMaskingText(node, maskTextClass, maskTextSelector, checkAncestors) {
    try {
        const el = node.nodeType === node.ELEMENT_NODE
            ? node
            : node.parentElement;
        if (el === null)
            return false;
        if (typeof maskTextClass === 'string') {
            if (checkAncestors) {
                if (el.closest(`.${maskTextClass}`))
                    return true;
            }
            else {
                if (el.classList.contains(maskTextClass))
                    return true;
            }
        }
        else {
            if (classMatchesRegex(el, maskTextClass, checkAncestors))
                return true;
        }
        if (maskTextSelector) {
            if (checkAncestors) {
                if (el.closest(maskTextSelector))
                    return true;
            }
            else {
                if (el.matches(maskTextSelector))
                    return true;
            }
        }
    }
    catch (e) {
    }
    return false;
}
function onceIframeLoaded(iframeEl, listener, iframeLoadTimeout) {
    const win = iframeEl.contentWindow;
    if (!win) {
        return;
    }
    let fired = false;
    let readyState;
    try {
        readyState = win.document.readyState;
    }
    catch (error) {
        return;
    }
    if (readyState !== 'complete') {
        const timer = setTimeout(() => {
            if (!fired) {
                listener();
                fired = true;
            }
        }, iframeLoadTimeout);
        iframeEl.addEventListener('load', () => {
            clearTimeout(timer);
            fired = true;
            listener();
        });
        return;
    }
    const blankUrl = 'about:blank';
    if (win.location.href !== blankUrl ||
        iframeEl.src === blankUrl ||
        iframeEl.src === '') {
        setTimeout(listener, 0);
        return iframeEl.addEventListener('load', listener);
    }
    iframeEl.addEventListener('load', listener);
}
function onceStylesheetLoaded(link, listener, styleSheetLoadTimeout) {
    let fired = false;
    let styleSheetLoaded;
    try {
        styleSheetLoaded = link.sheet;
    }
    catch (error) {
        return;
    }
    if (styleSheetLoaded)
        return;
    const timer = setTimeout(() => {
        if (!fired) {
            listener();
            fired = true;
        }
    }, styleSheetLoadTimeout);
    link.addEventListener('load', () => {
        clearTimeout(timer);
        fired = true;
        listener();
    });
}
function serializeNode(n, options) {
    const { doc, mirror, blockClass, blockSelector, needsMask, inlineStylesheet, maskInputOptions = {}, maskTextFn, maskInputFn, dataURLOptions = {}, inlineImages, recordCanvas, keepIframeSrcFn, newlyAddedElement = false, } = options;
    const rootId = getRootId(doc, mirror);
    switch (n.nodeType) {
        case n.DOCUMENT_NODE:
            if (n.compatMode !== 'CSS1Compat') {
                return {
                    type: NodeType.Document,
                    childNodes: [],
                    compatMode: n.compatMode,
                };
            }
            else {
                return {
                    type: NodeType.Document,
                    childNodes: [],
                };
            }
        case n.DOCUMENT_TYPE_NODE:
            return {
                type: NodeType.DocumentType,
                name: n.name,
                publicId: n.publicId,
                systemId: n.systemId,
                rootId,
            };
        case n.ELEMENT_NODE:
            return serializeElementNode(n, {
                doc,
                blockClass,
                blockSelector,
                inlineStylesheet,
                maskInputOptions,
                maskInputFn,
                dataURLOptions,
                inlineImages,
                recordCanvas,
                keepIframeSrcFn,
                newlyAddedElement,
                rootId,
            });
        case n.TEXT_NODE:
            return serializeTextNode(n, {
                doc,
                needsMask,
                maskTextFn,
                rootId,
            });
        case n.CDATA_SECTION_NODE:
            return {
                type: NodeType.CDATA,
                textContent: '',
                rootId,
            };
        case n.COMMENT_NODE:
            return {
                type: NodeType.Comment,
                textContent: n.textContent || '',
                rootId,
            };
        default:
            return false;
    }
}
function getRootId(doc, mirror) {
    if (!mirror.hasNode(doc))
        return undefined;
    const docId = mirror.getId(doc);
    return docId === 1 ? undefined : docId;
}
function serializeTextNode(n, options) {
    var _a;
    const { needsMask, maskTextFn, rootId } = options;
    const parentTagName = n.parentNode && n.parentNode.tagName;
    let textContent = n.textContent;
    const isStyle = parentTagName === 'STYLE' ? true : undefined;
    const isScript = parentTagName === 'SCRIPT' ? true : undefined;
    if (isStyle && textContent) {
        try {
            if (n.nextSibling || n.previousSibling) {
            }
            else if ((_a = n.parentNode.sheet) === null || _a === void 0 ? void 0 : _a.cssRules) {
                textContent = stringifyStylesheet(n.parentNode.sheet);
            }
        }
        catch (err) {
            console.warn(`Cannot get CSS styles from text's parentNode. Error: ${err}`, n);
        }
        textContent = absoluteToStylesheet(textContent, getHref(options.doc));
    }
    if (isScript) {
        textContent = 'SCRIPT_PLACEHOLDER';
    }
    if (!isStyle && !isScript && textContent && needsMask) {
        textContent = maskTextFn
            ? maskTextFn(textContent, n.parentElement)
            : textContent.replace(/[\S]/g, '*');
    }
    return {
        type: NodeType.Text,
        textContent: textContent || '',
        isStyle,
        rootId,
    };
}
function serializeElementNode(n, options) {
    const { doc, blockClass, blockSelector, inlineStylesheet, maskInputOptions = {}, maskInputFn, dataURLOptions = {}, inlineImages, recordCanvas, keepIframeSrcFn, newlyAddedElement = false, rootId, } = options;
    const needBlock = _isBlockedElement(n, blockClass, blockSelector);
    const tagName = getValidTagName(n);
    let attributes = {};
    const len = n.attributes.length;
    for (let i = 0; i < len; i++) {
        const attr = n.attributes[i];
        if (!ignoreAttribute(tagName, attr.name, attr.value)) {
            attributes[attr.name] = transformAttribute(doc, tagName, toLowerCase(attr.name), attr.value);
        }
    }
    if (tagName === 'link' && inlineStylesheet) {
        const stylesheet = Array.from(doc.styleSheets).find((s) => {
            return s.href === n.href;
        });
        let cssText = null;
        if (stylesheet) {
            cssText = stringifyStylesheet(stylesheet);
        }
        if (cssText) {
            delete attributes.rel;
            delete attributes.href;
            attributes._cssText = absoluteToStylesheet(cssText, stylesheet.href);
        }
    }
    if (tagName === 'style' &&
        n.sheet &&
        !(n.innerText || n.textContent || '').trim().length) {
        const cssText = stringifyStylesheet(n.sheet);
        if (cssText) {
            attributes._cssText = absoluteToStylesheet(cssText, getHref(doc));
        }
    }
    if (tagName === 'input' || tagName === 'textarea' || tagName === 'select') {
        const value = n.value;
        const checked = n.checked;
        if (attributes.type !== 'radio' &&
            attributes.type !== 'checkbox' &&
            attributes.type !== 'submit' &&
            attributes.type !== 'button' &&
            value) {
            attributes.value = maskInputValue({
                element: n,
                type: getInputType(n),
                tagName,
                value,
                maskInputOptions,
                maskInputFn,
            });
        }
        else if (checked) {
            attributes.checked = checked;
        }
    }
    if (tagName === 'option') {
        if (n.selected && !maskInputOptions['select']) {
            attributes.selected = true;
        }
        else {
            delete attributes.selected;
        }
    }
    if (tagName === 'canvas' && recordCanvas) {
        if (n.__context === '2d') {
            if (!is2DCanvasBlank(n)) {
                attributes.rr_dataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            }
        }
        else if (!('__context' in n)) {
            const canvasDataURL = n.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            const blankCanvas = document.createElement('canvas');
            blankCanvas.width = n.width;
            blankCanvas.height = n.height;
            const blankCanvasDataURL = blankCanvas.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            if (canvasDataURL !== blankCanvasDataURL) {
                attributes.rr_dataURL = canvasDataURL;
            }
        }
    }
    if (tagName === 'img' && inlineImages) {
        if (!canvasService) {
            canvasService = doc.createElement('canvas');
            canvasCtx = canvasService.getContext('2d');
        }
        const image = n;
        const oldValue = image.crossOrigin;
        image.crossOrigin = 'anonymous';
        const recordInlineImage = () => {
            image.removeEventListener('load', recordInlineImage);
            try {
                canvasService.width = image.naturalWidth;
                canvasService.height = image.naturalHeight;
                canvasCtx.drawImage(image, 0, 0);
                attributes.rr_dataURL = canvasService.toDataURL(dataURLOptions.type, dataURLOptions.quality);
            }
            catch (err) {
                console.warn(`Cannot inline img src=${image.currentSrc}! Error: ${err}`);
            }
            oldValue
                ? (attributes.crossOrigin = oldValue)
                : image.removeAttribute('crossorigin');
        };
        if (image.complete && image.naturalWidth !== 0)
            recordInlineImage();
        else
            image.addEventListener('load', recordInlineImage);
    }
    if (tagName === 'audio' || tagName === 'video') {
        const mediaAttributes = attributes;
        mediaAttributes.rr_mediaState = n.paused
            ? 'paused'
            : 'played';
        mediaAttributes.rr_mediaCurrentTime = n.currentTime;
        mediaAttributes.rr_mediaPlaybackRate = n.playbackRate;
        mediaAttributes.rr_mediaMuted = n.muted;
        mediaAttributes.rr_mediaLoop = n.loop;
        mediaAttributes.rr_mediaVolume = n.volume;
    }
    if (!newlyAddedElement) {
        if (n.scrollLeft) {
            attributes.rr_scrollLeft = n.scrollLeft;
        }
        if (n.scrollTop) {
            attributes.rr_scrollTop = n.scrollTop;
        }
    }
    if (needBlock) {
        const { width, height } = n.getBoundingClientRect();
        attributes = {
            class: attributes.class,
            rr_width: `${width}px`,
            rr_height: `${height}px`,
        };
    }
    if (tagName === 'iframe' && !keepIframeSrcFn(attributes.src)) {
        if (!n.contentDocument) {
            attributes.rr_src = attributes.src;
        }
        delete attributes.src;
    }
    let isCustomElement;
    try {
        if (customElements.get(tagName))
            isCustomElement = true;
    }
    catch (e) {
    }
    return {
        type: NodeType.Element,
        tagName,
        attributes,
        childNodes: [],
        isSVG: isSVGElement(n) || undefined,
        needBlock,
        rootId,
        isCustom: isCustomElement,
    };
}
function lowerIfExists(maybeAttr) {
    if (maybeAttr === undefined || maybeAttr === null) {
        return '';
    }
    else {
        return maybeAttr.toLowerCase();
    }
}
function slimDOMExcluded(sn, slimDOMOptions) {
    if (slimDOMOptions.comment && sn.type === NodeType.Comment) {
        return true;
    }
    else if (sn.type === NodeType.Element) {
        if (slimDOMOptions.script &&
            (sn.tagName === 'script' ||
                (sn.tagName === 'link' &&
                    (sn.attributes.rel === 'preload' ||
                        sn.attributes.rel === 'modulepreload') &&
                    sn.attributes.as === 'script') ||
                (sn.tagName === 'link' &&
                    sn.attributes.rel === 'prefetch' &&
                    typeof sn.attributes.href === 'string' &&
                    extractFileExtension(sn.attributes.href) === 'js'))) {
            return true;
        }
        else if (slimDOMOptions.headFavicon &&
            ((sn.tagName === 'link' && sn.attributes.rel === 'shortcut icon') ||
                (sn.tagName === 'meta' &&
                    (lowerIfExists(sn.attributes.name).match(/^msapplication-tile(image|color)$/) ||
                        lowerIfExists(sn.attributes.name) === 'application-name' ||
                        lowerIfExists(sn.attributes.rel) === 'icon' ||
                        lowerIfExists(sn.attributes.rel) === 'apple-touch-icon' ||
                        lowerIfExists(sn.attributes.rel) === 'shortcut icon')))) {
            return true;
        }
        else if (sn.tagName === 'meta') {
            if (slimDOMOptions.headMetaDescKeywords &&
                lowerIfExists(sn.attributes.name).match(/^description|keywords$/)) {
                return true;
            }
            else if (slimDOMOptions.headMetaSocial &&
                (lowerIfExists(sn.attributes.property).match(/^(og|twitter|fb):/) ||
                    lowerIfExists(sn.attributes.name).match(/^(og|twitter):/) ||
                    lowerIfExists(sn.attributes.name) === 'pinterest')) {
                return true;
            }
            else if (slimDOMOptions.headMetaRobots &&
                (lowerIfExists(sn.attributes.name) === 'robots' ||
                    lowerIfExists(sn.attributes.name) === 'googlebot' ||
                    lowerIfExists(sn.attributes.name) === 'bingbot')) {
                return true;
            }
            else if (slimDOMOptions.headMetaHttpEquiv &&
                sn.attributes['http-equiv'] !== undefined) {
                return true;
            }
            else if (slimDOMOptions.headMetaAuthorship &&
                (lowerIfExists(sn.attributes.name) === 'author' ||
                    lowerIfExists(sn.attributes.name) === 'generator' ||
                    lowerIfExists(sn.attributes.name) === 'framework' ||
                    lowerIfExists(sn.attributes.name) === 'publisher' ||
                    lowerIfExists(sn.attributes.name) === 'progid' ||
                    lowerIfExists(sn.attributes.property).match(/^article:/) ||
                    lowerIfExists(sn.attributes.property).match(/^product:/))) {
                return true;
            }
            else if (slimDOMOptions.headMetaVerification &&
                (lowerIfExists(sn.attributes.name) === 'google-site-verification' ||
                    lowerIfExists(sn.attributes.name) === 'yandex-verification' ||
                    lowerIfExists(sn.attributes.name) === 'csrf-token' ||
                    lowerIfExists(sn.attributes.name) === 'p:domain_verify' ||
                    lowerIfExists(sn.attributes.name) === 'verify-v1' ||
                    lowerIfExists(sn.attributes.name) === 'verification' ||
                    lowerIfExists(sn.attributes.name) === 'shopify-checkout-api-token')) {
                return true;
            }
        }
    }
    return false;
}
function serializeNodeWithId(n, options) {
    const { doc, mirror, blockClass, blockSelector, maskTextClass, maskTextSelector, skipChild = false, inlineStylesheet = true, maskInputOptions = {}, maskTextFn, maskInputFn, slimDOMOptions, dataURLOptions = {}, inlineImages = false, recordCanvas = false, onSerialize, onIframeLoad, iframeLoadTimeout = 5000, onStylesheetLoad, stylesheetLoadTimeout = 5000, keepIframeSrcFn = () => false, newlyAddedElement = false, } = options;
    let { needsMask } = options;
    let { preserveWhiteSpace = true } = options;
    if (!needsMask &&
        n.childNodes) {
        const checkAncestors = needsMask === undefined;
        needsMask = needMaskingText(n, maskTextClass, maskTextSelector, checkAncestors);
    }
    const _serializedNode = serializeNode(n, {
        doc,
        mirror,
        blockClass,
        blockSelector,
        needsMask,
        inlineStylesheet,
        maskInputOptions,
        maskTextFn,
        maskInputFn,
        dataURLOptions,
        inlineImages,
        recordCanvas,
        keepIframeSrcFn,
        newlyAddedElement,
    });
    if (!_serializedNode) {
        console.warn(n, 'not serialized');
        return null;
    }
    let id;
    if (mirror.hasNode(n)) {
        id = mirror.getId(n);
    }
    else if (slimDOMExcluded(_serializedNode, slimDOMOptions) ||
        (!preserveWhiteSpace &&
            _serializedNode.type === NodeType.Text &&
            !_serializedNode.isStyle &&
            !_serializedNode.textContent.replace(/^\s+|\s+$/gm, '').length)) {
        id = IGNORED_NODE;
    }
    else {
        id = genId();
    }
    const serializedNode = Object.assign(_serializedNode, { id });
    mirror.add(n, serializedNode);
    if (id === IGNORED_NODE) {
        return null;
    }
    if (onSerialize) {
        onSerialize(n);
    }
    let recordChild = !skipChild;
    if (serializedNode.type === NodeType.Element) {
        recordChild = recordChild && !serializedNode.needBlock;
        delete serializedNode.needBlock;
        const shadowRoot = n.shadowRoot;
        if (shadowRoot && isNativeShadowDom(shadowRoot))
            serializedNode.isShadowHost = true;
    }
    if ((serializedNode.type === NodeType.Document ||
        serializedNode.type === NodeType.Element) &&
        recordChild) {
        if (slimDOMOptions.headWhitespace &&
            serializedNode.type === NodeType.Element &&
            serializedNode.tagName === 'head') {
            preserveWhiteSpace = false;
        }
        const bypassOptions = {
            doc,
            mirror,
            blockClass,
            blockSelector,
            needsMask,
            maskTextClass,
            maskTextSelector,
            skipChild,
            inlineStylesheet,
            maskInputOptions,
            maskTextFn,
            maskInputFn,
            slimDOMOptions,
            dataURLOptions,
            inlineImages,
            recordCanvas,
            preserveWhiteSpace,
            onSerialize,
            onIframeLoad,
            iframeLoadTimeout,
            onStylesheetLoad,
            stylesheetLoadTimeout,
            keepIframeSrcFn,
        };
        if (serializedNode.type === NodeType.Element &&
            serializedNode.tagName === 'textarea' &&
            serializedNode.attributes.value !== undefined) ;
        else {
            for (const childN of Array.from(n.childNodes)) {
                const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
                if (serializedChildNode) {
                    serializedNode.childNodes.push(serializedChildNode);
                }
            }
        }
        if (isElement(n) && n.shadowRoot) {
            for (const childN of Array.from(n.shadowRoot.childNodes)) {
                const serializedChildNode = serializeNodeWithId(childN, bypassOptions);
                if (serializedChildNode) {
                    isNativeShadowDom(n.shadowRoot) &&
                        (serializedChildNode.isShadow = true);
                    serializedNode.childNodes.push(serializedChildNode);
                }
            }
        }
    }
    if (n.parentNode &&
        isShadowRoot(n.parentNode) &&
        isNativeShadowDom(n.parentNode)) {
        serializedNode.isShadow = true;
    }
    if (serializedNode.type === NodeType.Element &&
        serializedNode.tagName === 'iframe') {
        onceIframeLoaded(n, () => {
            const iframeDoc = n.contentDocument;
            if (iframeDoc && onIframeLoad) {
                const serializedIframeNode = serializeNodeWithId(iframeDoc, {
                    doc: iframeDoc,
                    mirror,
                    blockClass,
                    blockSelector,
                    needsMask,
                    maskTextClass,
                    maskTextSelector,
                    skipChild: false,
                    inlineStylesheet,
                    maskInputOptions,
                    maskTextFn,
                    maskInputFn,
                    slimDOMOptions,
                    dataURLOptions,
                    inlineImages,
                    recordCanvas,
                    preserveWhiteSpace,
                    onSerialize,
                    onIframeLoad,
                    iframeLoadTimeout,
                    onStylesheetLoad,
                    stylesheetLoadTimeout,
                    keepIframeSrcFn,
                });
                if (serializedIframeNode) {
                    onIframeLoad(n, serializedIframeNode);
                }
            }
        }, iframeLoadTimeout);
    }
    if (serializedNode.type === NodeType.Element &&
        serializedNode.tagName === 'link' &&
        typeof serializedNode.attributes.rel === 'string' &&
        (serializedNode.attributes.rel === 'stylesheet' ||
            (serializedNode.attributes.rel === 'preload' &&
                typeof serializedNode.attributes.href === 'string' &&
                extractFileExtension(serializedNode.attributes.href) === 'css'))) {
        onceStylesheetLoaded(n, () => {
            if (onStylesheetLoad) {
                const serializedLinkNode = serializeNodeWithId(n, {
                    doc,
                    mirror,
                    blockClass,
                    blockSelector,
                    needsMask,
                    maskTextClass,
                    maskTextSelector,
                    skipChild: false,
                    inlineStylesheet,
                    maskInputOptions,
                    maskTextFn,
                    maskInputFn,
                    slimDOMOptions,
                    dataURLOptions,
                    inlineImages,
                    recordCanvas,
                    preserveWhiteSpace,
                    onSerialize,
                    onIframeLoad,
                    iframeLoadTimeout,
                    onStylesheetLoad,
                    stylesheetLoadTimeout,
                    keepIframeSrcFn,
                });
                if (serializedLinkNode) {
                    onStylesheetLoad(n, serializedLinkNode);
                }
            }
        }, stylesheetLoadTimeout);
    }
    return serializedNode;
}
function snapshot(n, options) {
    const { mirror = new Mirror(), blockClass = 'rr-block', blockSelector = null, maskTextClass = 'rr-mask', maskTextSelector = null, inlineStylesheet = true, inlineImages = false, recordCanvas = false, maskAllInputs = false, maskTextFn, maskInputFn, slimDOM = false, dataURLOptions, preserveWhiteSpace, onSerialize, onIframeLoad, iframeLoadTimeout, onStylesheetLoad, stylesheetLoadTimeout, keepIframeSrcFn = () => false, } = options || {};
    const maskInputOptions = maskAllInputs === true
        ? {
            color: true,
            date: true,
            'datetime-local': true,
            email: true,
            month: true,
            number: true,
            range: true,
            search: true,
            tel: true,
            text: true,
            time: true,
            url: true,
            week: true,
            textarea: true,
            select: true,
            password: true,
        }
        : maskAllInputs === false
            ? {
                password: true,
            }
            : maskAllInputs;
    const slimDOMOptions = slimDOM === true || slimDOM === 'all'
        ?
            {
                script: true,
                comment: true,
                headFavicon: true,
                headWhitespace: true,
                headMetaDescKeywords: slimDOM === 'all',
                headMetaSocial: true,
                headMetaRobots: true,
                headMetaHttpEquiv: true,
                headMetaAuthorship: true,
                headMetaVerification: true,
            }
        : slimDOM === false
            ? {}
            : slimDOM;
    return serializeNodeWithId(n, {
        doc: n,
        mirror,
        blockClass,
        blockSelector,
        maskTextClass,
        maskTextSelector,
        skipChild: false,
        inlineStylesheet,
        maskInputOptions,
        maskTextFn,
        maskInputFn,
        slimDOMOptions,
        dataURLOptions,
        inlineImages,
        recordCanvas,
        preserveWhiteSpace,
        onSerialize,
        onIframeLoad,
        iframeLoadTimeout,
        onStylesheetLoad,
        stylesheetLoadTimeout,
        keepIframeSrcFn,
        newlyAddedElement: false,
    });
}
function visitSnapshot(node, onVisit) {
    function walk(current) {
        onVisit(current);
        if (current.type === NodeType.Document ||
            current.type === NodeType.Element) {
            current.childNodes.forEach(walk);
        }
    }
    walk(node);
}
function cleanupSnapshot() {
    _id = 1;
}

const commentre = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g;
function parse(css, options = {}) {
    let lineno = 1;
    let column = 1;
    function updatePosition(str) {
        const lines = str.match(/\n/g);
        if (lines) {
            lineno += lines.length;
        }
        const i = str.lastIndexOf('\n');
        column = i === -1 ? column + str.length : str.length - i;
    }
    function position() {
        const start = { line: lineno, column };
        return (node) => {
            node.position = new Position(start);
            whitespace();
            return node;
        };
    }
    class Position {
        constructor(start) {
            this.start = start;
            this.end = { line: lineno, column };
            this.source = options.source;
        }
    }
    Position.prototype.content = css;
    const errorsList = [];
    function error(msg) {
        const err = new Error(`${options.source || ''}:${lineno}:${column}: ${msg}`);
        err.reason = msg;
        err.filename = options.source;
        err.line = lineno;
        err.column = column;
        err.source = css;
        if (options.silent) {
            errorsList.push(err);
        }
        else {
            throw err;
        }
    }
    function stylesheet() {
        const rulesList = rules();
        return {
            type: 'stylesheet',
            stylesheet: {
                source: options.source,
                rules: rulesList,
                parsingErrors: errorsList,
            },
        };
    }
    function open() {
        return match(/^{\s*/);
    }
    function close() {
        return match(/^}/);
    }
    function rules() {
        let node;
        const rules = [];
        whitespace();
        comments(rules);
        while (css.length && css.charAt(0) !== '}' && (node = atrule() || rule())) {
            if (node) {
                rules.push(node);
                comments(rules);
            }
        }
        return rules;
    }
    function match(re) {
        const m = re.exec(css);
        if (!m) {
            return;
        }
        const str = m[0];
        updatePosition(str);
        css = css.slice(str.length);
        return m;
    }
    function whitespace() {
        match(/^\s*/);
    }
    function comments(rules = []) {
        let c;
        while ((c = comment())) {
            if (c) {
                rules.push(c);
            }
            c = comment();
        }
        return rules;
    }
    function comment() {
        const pos = position();
        if ('/' !== css.charAt(0) || '*' !== css.charAt(1)) {
            return;
        }
        let i = 2;
        while ('' !== css.charAt(i) &&
            ('*' !== css.charAt(i) || '/' !== css.charAt(i + 1))) {
            ++i;
        }
        i += 2;
        if ('' === css.charAt(i - 1)) {
            return error('End of comment missing');
        }
        const str = css.slice(2, i - 2);
        column += 2;
        updatePosition(str);
        css = css.slice(i);
        column += 2;
        return pos({
            type: 'comment',
            comment: str,
        });
    }
    function selector() {
        whitespace();
        while (css[0] == '}') {
            error('extra closing bracket');
            css = css.slice(1);
            whitespace();
        }
        const m = match(/^(((?<!\\)"(?:\\"|[^"])*"|(?<!\\)'(?:\\'|[^'])*'|[^{])+)/);
        if (!m) {
            return;
        }
        const cleanedInput = m[0]
            .trim()
            .replace(/\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*\/+/g, '')
            .replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g, (m) => {
            return m.replace(/,/g, '\u200C');
        });
        return customSplit(cleanedInput).map((s) => s.replace(/\u200C/g, ',').trim());
    }
    function customSplit(input) {
        const result = [];
        let currentSegment = '';
        let depthParentheses = 0;
        let depthBrackets = 0;
        let currentStringChar = null;
        for (const char of input) {
            const hasStringEscape = currentSegment.endsWith('\\');
            if (currentStringChar) {
                if (currentStringChar === char && !hasStringEscape) {
                    currentStringChar = null;
                }
            }
            else if (char === '(') {
                depthParentheses++;
            }
            else if (char === ')') {
                depthParentheses--;
            }
            else if (char === '[') {
                depthBrackets++;
            }
            else if (char === ']') {
                depthBrackets--;
            }
            else if ('\'"'.includes(char)) {
                currentStringChar = char;
            }
            if (char === ',' && depthParentheses === 0 && depthBrackets === 0) {
                result.push(currentSegment);
                currentSegment = '';
            }
            else {
                currentSegment += char;
            }
        }
        if (currentSegment) {
            result.push(currentSegment);
        }
        return result;
    }
    function declaration() {
        const pos = position();
        const propMatch = match(/^(\*?[-#\/\*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
        if (!propMatch) {
            return;
        }
        const prop = trim(propMatch[0]);
        if (!match(/^:\s*/)) {
            return error(`property missing ':'`);
        }
        const val = match(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};])+)/);
        const ret = pos({
            type: 'declaration',
            property: prop.replace(commentre, ''),
            value: val ? trim(val[0]).replace(commentre, '') : '',
        });
        match(/^[;\s]*/);
        return ret;
    }
    function declarations() {
        const decls = [];
        if (!open()) {
            return error(`missing '{'`);
        }
        comments(decls);
        let decl;
        while ((decl = declaration())) {
            if (decl !== false) {
                decls.push(decl);
                comments(decls);
            }
            decl = declaration();
        }
        if (!close()) {
            return error(`missing '}'`);
        }
        return decls;
    }
    function keyframe() {
        let m;
        const vals = [];
        const pos = position();
        while ((m = match(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/))) {
            vals.push(m[1]);
            match(/^,\s*/);
        }
        if (!vals.length) {
            return;
        }
        return pos({
            type: 'keyframe',
            values: vals,
            declarations: declarations(),
        });
    }
    function atkeyframes() {
        const pos = position();
        let m = match(/^@([-\w]+)?keyframes\s*/);
        if (!m) {
            return;
        }
        const vendor = m[1];
        m = match(/^([-\w]+)\s*/);
        if (!m) {
            return error('@keyframes missing name');
        }
        const name = m[1];
        if (!open()) {
            return error(`@keyframes missing '{'`);
        }
        let frame;
        let frames = comments();
        while ((frame = keyframe())) {
            frames.push(frame);
            frames = frames.concat(comments());
        }
        if (!close()) {
            return error(`@keyframes missing '}'`);
        }
        return pos({
            type: 'keyframes',
            name,
            vendor,
            keyframes: frames,
        });
    }
    function atsupports() {
        const pos = position();
        const m = match(/^@supports *([^{]+)/);
        if (!m) {
            return;
        }
        const supports = trim(m[1]);
        if (!open()) {
            return error(`@supports missing '{'`);
        }
        const style = comments().concat(rules());
        if (!close()) {
            return error(`@supports missing '}'`);
        }
        return pos({
            type: 'supports',
            supports,
            rules: style,
        });
    }
    function athost() {
        const pos = position();
        const m = match(/^@host\s*/);
        if (!m) {
            return;
        }
        if (!open()) {
            return error(`@host missing '{'`);
        }
        const style = comments().concat(rules());
        if (!close()) {
            return error(`@host missing '}'`);
        }
        return pos({
            type: 'host',
            rules: style,
        });
    }
    function atmedia() {
        const pos = position();
        const m = match(/^@media *([^{]+)/);
        if (!m) {
            return;
        }
        const media = trim(m[1]);
        if (!open()) {
            return error(`@media missing '{'`);
        }
        const style = comments().concat(rules());
        if (!close()) {
            return error(`@media missing '}'`);
        }
        return pos({
            type: 'media',
            media,
            rules: style,
        });
    }
    function atcustommedia() {
        const pos = position();
        const m = match(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);
        if (!m) {
            return;
        }
        return pos({
            type: 'custom-media',
            name: trim(m[1]),
            media: trim(m[2]),
        });
    }
    function atpage() {
        const pos = position();
        const m = match(/^@page */);
        if (!m) {
            return;
        }
        const sel = selector() || [];
        if (!open()) {
            return error(`@page missing '{'`);
        }
        let decls = comments();
        let decl;
        while ((decl = declaration())) {
            decls.push(decl);
            decls = decls.concat(comments());
        }
        if (!close()) {
            return error(`@page missing '}'`);
        }
        return pos({
            type: 'page',
            selectors: sel,
            declarations: decls,
        });
    }
    function atdocument() {
        const pos = position();
        const m = match(/^@([-\w]+)?document *([^{]+)/);
        if (!m) {
            return;
        }
        const vendor = trim(m[1]);
        const doc = trim(m[2]);
        if (!open()) {
            return error(`@document missing '{'`);
        }
        const style = comments().concat(rules());
        if (!close()) {
            return error(`@document missing '}'`);
        }
        return pos({
            type: 'document',
            document: doc,
            vendor,
            rules: style,
        });
    }
    function atfontface() {
        const pos = position();
        const m = match(/^@font-face\s*/);
        if (!m) {
            return;
        }
        if (!open()) {
            return error(`@font-face missing '{'`);
        }
        let decls = comments();
        let decl;
        while ((decl = declaration())) {
            decls.push(decl);
            decls = decls.concat(comments());
        }
        if (!close()) {
            return error(`@font-face missing '}'`);
        }
        return pos({
            type: 'font-face',
            declarations: decls,
        });
    }
    const atimport = _compileAtrule('import');
    const atcharset = _compileAtrule('charset');
    const atnamespace = _compileAtrule('namespace');
    function _compileAtrule(name) {
        const re = new RegExp('^@' +
            name +
            '\\s*((?:' +
            [
                '(?<!\\\\)"(?:\\\\"|[^"])*"',
                "(?<!\\\\)'(?:\\\\'|[^'])*'",
                '[^;]',
            ].join('|') +
            ')+);');
        return () => {
            const pos = position();
            const m = match(re);
            if (!m) {
                return;
            }
            const ret = { type: name };
            ret[name] = m[1].trim();
            return pos(ret);
        };
    }
    function atrule() {
        if (css[0] !== '@') {
            return;
        }
        return (atkeyframes() ||
            atmedia() ||
            atcustommedia() ||
            atsupports() ||
            atimport() ||
            atcharset() ||
            atnamespace() ||
            atdocument() ||
            atpage() ||
            athost() ||
            atfontface());
    }
    function rule() {
        const pos = position();
        const sel = selector();
        if (!sel) {
            return error('selector missing');
        }
        comments();
        return pos({
            type: 'rule',
            selectors: sel,
            declarations: declarations(),
        });
    }
    return addParent(stylesheet());
}
function trim(str) {
    return str ? str.replace(/^\s+|\s+$/g, '') : '';
}
function addParent(obj, parent) {
    const isNode = obj && typeof obj.type === 'string';
    const childParent = isNode ? obj : parent;
    for (const k of Object.keys(obj)) {
        const value = obj[k];
        if (Array.isArray(value)) {
            value.forEach((v) => {
                addParent(v, childParent);
            });
        }
        else if (value && typeof value === 'object') {
            addParent(value, childParent);
        }
    }
    if (isNode) {
        Object.defineProperty(obj, 'parent', {
            configurable: true,
            writable: true,
            enumerable: false,
            value: parent || null,
        });
    }
    return obj;
}

const tagMap = {
    script: 'noscript',
    altglyph: 'altGlyph',
    altglyphdef: 'altGlyphDef',
    altglyphitem: 'altGlyphItem',
    animatecolor: 'animateColor',
    animatemotion: 'animateMotion',
    animatetransform: 'animateTransform',
    clippath: 'clipPath',
    feblend: 'feBlend',
    fecolormatrix: 'feColorMatrix',
    fecomponenttransfer: 'feComponentTransfer',
    fecomposite: 'feComposite',
    feconvolvematrix: 'feConvolveMatrix',
    fediffuselighting: 'feDiffuseLighting',
    fedisplacementmap: 'feDisplacementMap',
    fedistantlight: 'feDistantLight',
    fedropshadow: 'feDropShadow',
    feflood: 'feFlood',
    fefunca: 'feFuncA',
    fefuncb: 'feFuncB',
    fefuncg: 'feFuncG',
    fefuncr: 'feFuncR',
    fegaussianblur: 'feGaussianBlur',
    feimage: 'feImage',
    femerge: 'feMerge',
    femergenode: 'feMergeNode',
    femorphology: 'feMorphology',
    feoffset: 'feOffset',
    fepointlight: 'fePointLight',
    fespecularlighting: 'feSpecularLighting',
    fespotlight: 'feSpotLight',
    fetile: 'feTile',
    feturbulence: 'feTurbulence',
    foreignobject: 'foreignObject',
    glyphref: 'glyphRef',
    lineargradient: 'linearGradient',
    radialgradient: 'radialGradient',
};
function getTagName(n) {
    let tagName = tagMap[n.tagName] ? tagMap[n.tagName] : n.tagName;
    if (tagName === 'link' && n.attributes._cssText) {
        tagName = 'style';
    }
    return tagName;
}
function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
const MEDIA_SELECTOR = /(max|min)-device-(width|height)/;
const MEDIA_SELECTOR_GLOBAL = new RegExp(MEDIA_SELECTOR.source, 'g');
const HOVER_SELECTOR = /([^\\]):hover/;
const HOVER_SELECTOR_GLOBAL = new RegExp(HOVER_SELECTOR.source, 'g');
function adaptCssForReplay(cssText, cache) {
    const cachedStyle = cache === null || cache === void 0 ? void 0 : cache.stylesWithHoverClass.get(cssText);
    if (cachedStyle)
        return cachedStyle;
    const ast = parse(cssText, {
        silent: true,
    });
    if (!ast.stylesheet) {
        return cssText;
    }
    const selectors = [];
    const medias = [];
    function getSelectors(rule) {
        if ('selectors' in rule && rule.selectors) {
            rule.selectors.forEach((selector) => {
                if (HOVER_SELECTOR.test(selector)) {
                    selectors.push(selector);
                }
            });
        }
        if ('media' in rule && rule.media && MEDIA_SELECTOR.test(rule.media)) {
            medias.push(rule.media);
        }
        if ('rules' in rule && rule.rules) {
            rule.rules.forEach(getSelectors);
        }
    }
    getSelectors(ast.stylesheet);
    let result = cssText;
    if (selectors.length > 0) {
        const selectorMatcher = new RegExp(selectors
            .filter((selector, index) => selectors.indexOf(selector) === index)
            .sort((a, b) => b.length - a.length)
            .map((selector) => {
            return escapeRegExp(selector);
        })
            .join('|'), 'g');
        result = result.replace(selectorMatcher, (selector) => {
            const newSelector = selector.replace(HOVER_SELECTOR_GLOBAL, '$1.\\:hover');
            return `${selector}, ${newSelector}`;
        });
    }
    if (medias.length > 0) {
        const mediaMatcher = new RegExp(medias
            .filter((media, index) => medias.indexOf(media) === index)
            .sort((a, b) => b.length - a.length)
            .map((media) => {
            return escapeRegExp(media);
        })
            .join('|'), 'g');
        result = result.replace(mediaMatcher, (media) => {
            return media.replace(MEDIA_SELECTOR_GLOBAL, '$1-$2');
        });
    }
    cache === null || cache === void 0 ? void 0 : cache.stylesWithHoverClass.set(cssText, result);
    return result;
}
function createCache() {
    const stylesWithHoverClass = new Map();
    return {
        stylesWithHoverClass,
    };
}
function buildNode(n, options) {
    var _a;
    const { doc, hackCss, cache } = options;
    switch (n.type) {
        case NodeType.Document:
            return doc.implementation.createDocument(null, '', null);
        case NodeType.DocumentType:
            return doc.implementation.createDocumentType(n.name || 'html', n.publicId, n.systemId);
        case NodeType.Element: {
            const tagName = getTagName(n);
            let node;
            if (n.isSVG) {
                node = doc.createElementNS('http://www.w3.org/2000/svg', tagName);
            }
            else {
                if (n.isCustom &&
                    ((_a = doc.defaultView) === null || _a === void 0 ? void 0 : _a.customElements) &&
                    !doc.defaultView.customElements.get(n.tagName))
                    doc.defaultView.customElements.define(n.tagName, class extends doc.defaultView.HTMLElement {
                    });
                node = doc.createElement(tagName);
            }
            const specialAttributes = {};
            for (const name in n.attributes) {
                if (!Object.prototype.hasOwnProperty.call(n.attributes, name)) {
                    continue;
                }
                let value = n.attributes[name];
                if (tagName === 'option' &&
                    name === 'selected' &&
                    value === false) {
                    continue;
                }
                if (value === null) {
                    continue;
                }
                if (value === true)
                    value = '';
                if (name.startsWith('rr_')) {
                    specialAttributes[name] = value;
                    continue;
                }
                const isTextarea = tagName === 'textarea' && name === 'value';
                const isRemoteOrDynamicCss = tagName === 'style' && name === '_cssText';
                if (isRemoteOrDynamicCss && hackCss && typeof value === 'string') {
                    value = adaptCssForReplay(value, cache);
                }
                if ((isTextarea || isRemoteOrDynamicCss) && typeof value === 'string') {
                    node.appendChild(doc.createTextNode(value));
                    n.childNodes = [];
                    continue;
                }
                try {
                    if (n.isSVG && name === 'xlink:href') {
                        node.setAttributeNS('http://www.w3.org/1999/xlink', name, value.toString());
                    }
                    else if (name === 'onload' ||
                        name === 'onclick' ||
                        name.substring(0, 7) === 'onmouse') {
                        node.setAttribute('_' + name, value.toString());
                    }
                    else if (tagName === 'meta' &&
                        n.attributes['http-equiv'] === 'Content-Security-Policy' &&
                        name === 'content') {
                        node.setAttribute('csp-content', value.toString());
                        continue;
                    }
                    else if (tagName === 'link' &&
                        (n.attributes.rel === 'preload' ||
                            n.attributes.rel === 'modulepreload') &&
                        n.attributes.as === 'script') {
                    }
                    else if (tagName === 'link' &&
                        n.attributes.rel === 'prefetch' &&
                        typeof n.attributes.href === 'string' &&
                        n.attributes.href.endsWith('.js')) {
                    }
                    else if (tagName === 'img' &&
                        n.attributes.srcset &&
                        n.attributes.rr_dataURL) {
                        node.setAttribute('rrweb-original-srcset', n.attributes.srcset);
                    }
                    else {
                        node.setAttribute(name, value.toString());
                    }
                }
                catch (error) {
                }
            }
            for (const name in specialAttributes) {
                const value = specialAttributes[name];
                if (tagName === 'canvas' && name === 'rr_dataURL') {
                    const image = document.createElement('img');
                    image.onload = () => {
                        const ctx = node.getContext('2d');
                        if (ctx) {
                            ctx.drawImage(image, 0, 0, image.width, image.height);
                        }
                    };
                    image.src = value.toString();
                    if (node.RRNodeType)
                        node.rr_dataURL = value.toString();
                }
                else if (tagName === 'img' && name === 'rr_dataURL') {
                    const image = node;
                    if (!image.currentSrc.startsWith('data:')) {
                        image.setAttribute('rrweb-original-src', n.attributes.src);
                        image.src = value.toString();
                    }
                }
                if (name === 'rr_width') {
                    node.style.width = value.toString();
                }
                else if (name === 'rr_height') {
                    node.style.height = value.toString();
                }
                else if (name === 'rr_mediaCurrentTime' &&
                    typeof value === 'number') {
                    node.currentTime = value;
                }
                else if (name === 'rr_mediaState') {
                    switch (value) {
                        case 'played':
                            node
                                .play()
                                .catch((e) => console.warn('media playback error', e));
                            break;
                        case 'paused':
                            node.pause();
                            break;
                    }
                }
                else if (name === 'rr_mediaPlaybackRate' &&
                    typeof value === 'number') {
                    node.playbackRate = value;
                }
                else if (name === 'rr_mediaMuted' && typeof value === 'boolean') {
                    node.muted = value;
                }
                else if (name === 'rr_mediaLoop' && typeof value === 'boolean') {
                    node.loop = value;
                }
                else if (name === 'rr_mediaVolume' && typeof value === 'number') {
                    node.volume = value;
                }
            }
            if (n.isShadowHost) {
                if (!node.shadowRoot) {
                    node.attachShadow({ mode: 'open' });
                }
                else {
                    while (node.shadowRoot.firstChild) {
                        node.shadowRoot.removeChild(node.shadowRoot.firstChild);
                    }
                }
            }
            return node;
        }
        case NodeType.Text:
            return doc.createTextNode(n.isStyle && hackCss
                ? adaptCssForReplay(n.textContent, cache)
                : n.textContent);
        case NodeType.CDATA:
            return doc.createCDATASection(n.textContent);
        case NodeType.Comment:
            return doc.createComment(n.textContent);
        default:
            return null;
    }
}
function buildNodeWithSN(n, options) {
    const { doc, mirror, skipChild = false, hackCss = true, afterAppend, cache, } = options;
    if (mirror.has(n.id)) {
        const nodeInMirror = mirror.getNode(n.id);
        const meta = mirror.getMeta(nodeInMirror);
        if (isNodeMetaEqual(meta, n))
            return mirror.getNode(n.id);
    }
    let node = buildNode(n, { doc, hackCss, cache });
    if (!node) {
        return null;
    }
    if (n.rootId && mirror.getNode(n.rootId) !== doc) {
        mirror.replace(n.rootId, doc);
    }
    if (n.type === NodeType.Document) {
        doc.close();
        doc.open();
        if (n.compatMode === 'BackCompat' &&
            n.childNodes &&
            n.childNodes[0].type !== NodeType.DocumentType) {
            if (n.childNodes[0].type === NodeType.Element &&
                'xmlns' in n.childNodes[0].attributes &&
                n.childNodes[0].attributes.xmlns === 'http://www.w3.org/1999/xhtml') {
                doc.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">');
            }
            else {
                doc.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">');
            }
        }
        node = doc;
    }
    mirror.add(node, n);
    if ((n.type === NodeType.Document || n.type === NodeType.Element) &&
        !skipChild) {
        for (const childN of n.childNodes) {
            const childNode = buildNodeWithSN(childN, {
                doc,
                mirror,
                skipChild: false,
                hackCss,
                afterAppend,
                cache,
            });
            if (!childNode) {
                console.warn('Failed to rebuild', childN);
                continue;
            }
            if (childN.isShadow && isElement(node) && node.shadowRoot) {
                node.shadowRoot.appendChild(childNode);
            }
            else if (n.type === NodeType.Document &&
                childN.type == NodeType.Element) {
                const htmlElement = childNode;
                let body = null;
                htmlElement.childNodes.forEach((child) => {
                    if (child.nodeName === 'BODY')
                        body = child;
                });
                if (body) {
                    htmlElement.removeChild(body);
                    node.appendChild(childNode);
                    htmlElement.appendChild(body);
                }
                else {
                    node.appendChild(childNode);
                }
            }
            else {
                node.appendChild(childNode);
            }
            if (afterAppend) {
                afterAppend(childNode, childN.id);
            }
        }
    }
    return node;
}
function visit(mirror, onVisit) {
    function walk(node) {
        onVisit(node);
    }
    for (const id of mirror.getIds()) {
        if (mirror.has(id)) {
            walk(mirror.getNode(id));
        }
    }
}
function handleScroll(node, mirror) {
    const n = mirror.getMeta(node);
    if ((n === null || n === void 0 ? void 0 : n.type) !== NodeType.Element) {
        return;
    }
    const el = node;
    for (const name in n.attributes) {
        if (!(Object.prototype.hasOwnProperty.call(n.attributes, name) &&
            name.startsWith('rr_'))) {
            continue;
        }
        const value = n.attributes[name];
        if (name === 'rr_scrollLeft') {
            el.scrollLeft = value;
        }
        if (name === 'rr_scrollTop') {
            el.scrollTop = value;
        }
    }
}
function rebuild(n, options) {
    const { doc, onVisit, hackCss = true, afterAppend, cache, mirror = new Mirror(), } = options;
    const node = buildNodeWithSN(n, {
        doc,
        mirror,
        skipChild: false,
        hackCss,
        afterAppend,
        cache,
    });
    visit(mirror, (visitedNode) => {
        if (onVisit) {
            onVisit(visitedNode);
        }
        handleScroll(visitedNode, mirror);
    });
    return node;
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./cypress/support/e2e.js ***!
  \********************************/


__webpack_require__(/*! ./commands */ "./cypress/support/commands.js");
__webpack_require__(/*! @chromatic-com/cypress/support */ "./node_modules/@chromatic-com/cypress/dist/support.js");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZTJlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN4QmE7O0FBRWIsb0JBQW9CLG1CQUFPLENBQUMsMEVBQWdCOztBQUU1Qyx3Q0FBd0MseURBQXlELGdDQUFnQywwQ0FBMEMsa0JBQWtCLDBCQUEwQixHQUFHLEVBQUUsZ0JBQWdCLGdHQUFnRyx5Q0FBeUMsNENBQTRDLElBQUksRUFBRSxlQUFlLHlEQUF5RCw4Q0FBOEMsbUNBQW1DLEVBQUUseUNBQXlDLGtCQUFrQiwyQkFBMkIsZ0NBQWdDLHNJQUFzSSxrQ0FBa0MsMkNBQTJDLDJCQUEyQiwyQkFBMkIsNkNBQTZDLCtEQUErRCxtQ0FBbUMsMkNBQTJDLGtDQUFrQyx5Q0FBeUMseUNBQXlDLHVEQUF1RCwwQ0FBMEMseURBQXlELG9DQUFvQyw4Q0FBOEMscUJBQXFCLGdGQUFnRixHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQzVrRDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw0QkFBNEI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQsMERBQTBEO0FBQzFELDZEQUE2RCxxQ0FBcUMsc0JBQXNCO0FBQ3hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQSx5Q0FBeUMsMEJBQTBCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGVBQWU7QUFDL0M7QUFDQTtBQUNBLG1DQUFtQyxrQkFBa0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsK0RBQStEO0FBQ3pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0Qyx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFdBQVcsRUFBRSxTQUFTLEVBQUUsV0FBVztBQUM3RDtBQUNBO0FBQ0EsMEJBQTBCLFdBQVcsRUFBRSxTQUFTLEVBQUUsV0FBVztBQUM3RDtBQUNBO0FBQ0EsMEJBQTBCLFdBQVcsRUFBRSwrQkFBK0IsRUFBRSxXQUFXO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsV0FBVztBQUNoRSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELFNBQVM7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsY0FBYztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZLDBGQUEwRiw4Q0FBOEMsNEVBQTRFO0FBQ2hPO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0NBQWdDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGLElBQUk7QUFDckY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVFQUF1RSxrQ0FBa0Msb0ZBQW9GO0FBQ3pNO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxpQkFBaUIsV0FBVyxJQUFJO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnQkFBZ0I7QUFDaEM7QUFDQTtBQUNBLHlCQUF5QixNQUFNO0FBQy9CLDBCQUEwQixPQUFPO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBJQUEwSSw4REFBOEQsK01BQStNO0FBQ25hLFVBQVUsWUFBWTtBQUN0QixVQUFVLDRCQUE0QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDREQUE0RCxJQUFJO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDRaQUE0WjtBQUN4YTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFCQUFxQixHQUFHLE9BQU8sR0FBRyxPQUFPLElBQUksSUFBSTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEVBQTRFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsNERBQTRELElBQUk7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFNBQVMsSUFBSSxZQUFZO0FBQy9DLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzQkFBc0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzRUFBc0U7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHFCQUFxQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJFQUEyRTtBQUN2RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRTZmOzs7Ozs7O1VDN2dFN2Y7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ1VBQSxtQkFBQTtBQUVBQSxtQkFBQSxnRyIsInNvdXJjZXMiOlsid2VicGFjazovL2N5cHJlc3Mtc3Rvcnlib29rLXZlcnNpb24vLi9jeXByZXNzL3N1cHBvcnQvY29tbWFuZHMuanMiLCJ3ZWJwYWNrOi8vY3lwcmVzcy1zdG9yeWJvb2stdmVyc2lvbi8uL25vZGVfbW9kdWxlcy9AY2hyb21hdGljLWNvbS9jeXByZXNzL2Rpc3Qvc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly9jeXByZXNzLXN0b3J5Ym9vay12ZXJzaW9uLy4vbm9kZV9tb2R1bGVzL3Jyd2ViLXNuYXBzaG90L2VzL3Jyd2ViLXNuYXBzaG90LmpzIiwid2VicGFjazovL2N5cHJlc3Mtc3Rvcnlib29rLXZlcnNpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY3lwcmVzcy1zdG9yeWJvb2stdmVyc2lvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY3lwcmVzcy1zdG9yeWJvb2stdmVyc2lvbi93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2N5cHJlc3Mtc3Rvcnlib29rLXZlcnNpb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jeXByZXNzLXN0b3J5Ym9vay12ZXJzaW9uLy4vY3lwcmVzcy9zdXBwb3J0L2UyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuLy8gVGhpcyBleGFtcGxlIGNvbW1hbmRzLmpzIHNob3dzIHlvdSBob3cgdG9cbi8vIGNyZWF0ZSB2YXJpb3VzIGN1c3RvbSBjb21tYW5kcyBhbmQgb3ZlcndyaXRlXG4vLyBleGlzdGluZyBjb21tYW5kcy5cbi8vXG4vLyBGb3IgbW9yZSBjb21wcmVoZW5zaXZlIGV4YW1wbGVzIG9mIGN1c3RvbVxuLy8gY29tbWFuZHMgcGxlYXNlIHJlYWQgbW9yZSBoZXJlOlxuLy8gaHR0cHM6Ly9vbi5jeXByZXNzLmlvL2N1c3RvbS1jb21tYW5kc1xuLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vXG4vL1xuLy8gLS0gVGhpcyBpcyBhIHBhcmVudCBjb21tYW5kIC0tXG4vLyBDeXByZXNzLkNvbW1hbmRzLmFkZCgnbG9naW4nLCAoZW1haWwsIHBhc3N3b3JkKSA9PiB7IC4uLiB9KVxuLy9cbi8vXG4vLyAtLSBUaGlzIGlzIGEgY2hpbGQgY29tbWFuZCAtLVxuLy8gQ3lwcmVzcy5Db21tYW5kcy5hZGQoJ2RyYWcnLCB7IHByZXZTdWJqZWN0OiAnZWxlbWVudCd9LCAoc3ViamVjdCwgb3B0aW9ucykgPT4geyAuLi4gfSlcbi8vXG4vL1xuLy8gLS0gVGhpcyBpcyBhIGR1YWwgY29tbWFuZCAtLVxuLy8gQ3lwcmVzcy5Db21tYW5kcy5hZGQoJ2Rpc21pc3MnLCB7IHByZXZTdWJqZWN0OiAnb3B0aW9uYWwnfSwgKHN1YmplY3QsIG9wdGlvbnMpID0+IHsgLi4uIH0pXG4vL1xuLy9cbi8vIC0tIFRoaXMgd2lsbCBvdmVyd3JpdGUgYW4gZXhpc3RpbmcgY29tbWFuZCAtLVxuLy8gQ3lwcmVzcy5Db21tYW5kcy5vdmVyd3JpdGUoJ3Zpc2l0JywgKG9yaWdpbmFsRm4sIHVybCwgb3B0aW9ucykgPT4geyAuLi4gfSkiLCIndXNlIHN0cmljdCc7XG5cbnZhciBycndlYlNuYXBzaG90ID0gcmVxdWlyZSgncnJ3ZWItc25hcHNob3QnKTtcblxuQ3lwcmVzcy5Db21tYW5kcy5hZGQoXCJ0YWtlU25hcHNob3RcIixlPT57Q3lwcmVzcy5jb25maWcoXCJpc1RleHRUZXJtaW5hbFwiKSYmY3kuZG9jdW1lbnQoKS50aGVuKHM9PntsZXQgcj1ycndlYlNuYXBzaG90LnNuYXBzaG90KHMpO2N5LmdldChcIkBtYW51YWxTbmFwc2hvdHNcIikudGhlbihuPT5bLi4ubix7bmFtZTplLHNuYXBzaG90OnJ9XSkuYXMoXCJtYW51YWxTbmFwc2hvdHNcIik7fSk7fSk7YmVmb3JlRWFjaCgoKT0+e0N5cHJlc3MuY29uZmlnKFwiaXNUZXh0VGVybWluYWxcIikmJihjeS53cmFwKFtdKS5hcyhcIm1hbnVhbFNuYXBzaG90c1wiKSxjeS50YXNrKFwicHJlcGFyZUFyY2hpdmVzXCIse2FjdGlvbjpcInNldHVwLW5ldHdvcmstbGlzdGVuZXJcIixwYXlsb2FkOnthbGxvd2VkRG9tYWluczpDeXByZXNzLmVudihcImFzc2V0RG9tYWluc1wiKX19KSk7fSk7YWZ0ZXJFYWNoKCgpPT57Q3lwcmVzcy5jb25maWcoXCJpc1RleHRUZXJtaW5hbFwiKSYmY3kuZG9jdW1lbnQoKS50aGVuKGU9PntsZXQgcz1DeXByZXNzLmVudihcImRpc2FibGVBdXRvU25hcHNob3RcIik/W106W3tzbmFwc2hvdDpycndlYlNuYXBzaG90LnNuYXBzaG90KGUpfV07Y3kuZ2V0KFwiQG1hbnVhbFNuYXBzaG90c1wiKS50aGVuKChyPVtdKT0+e2N5LnVybCgpLnRoZW4obj0+e2N5LnRhc2soXCJwcmVwYXJlQXJjaGl2ZXNcIix7YWN0aW9uOlwic2F2ZS1hcmNoaXZlc1wiLHBheWxvYWQ6e3Rlc3RUaXRsZVBhdGg6W0N5cHJlc3Muc3BlYy5yZWxhdGl2ZVRvQ29tbW9uUm9vdCwuLi5DeXByZXNzLmN1cnJlbnRUZXN0LnRpdGxlUGF0aF0sZG9tU25hcHNob3RzOlsuLi5yLC4uLnNdLGNocm9tYXRpY1N0b3J5Ym9va1BhcmFtczp7Li4uQ3lwcmVzcy5lbnYoXCJkaWZmVGhyZXNob2xkXCIpJiZ7ZGlmZlRocmVzaG9sZDpDeXByZXNzLmVudihcImRpZmZUaHJlc2hvbGRcIil9LC4uLkN5cHJlc3MuZW52KFwiZGVsYXlcIikmJntkZWxheTpDeXByZXNzLmVudihcImRlbGF5XCIpfSwuLi5DeXByZXNzLmVudihcImRpZmZJbmNsdWRlQW50aUFsaWFzaW5nXCIpJiZ7ZGlmZkluY2x1ZGVBbnRpQWxpYXNpbmc6Q3lwcmVzcy5lbnYoXCJkaWZmSW5jbHVkZUFudGlBbGlhc2luZ1wiKX0sLi4uQ3lwcmVzcy5lbnYoXCJkaWZmVGhyZXNob2xkXCIpJiZ7ZGlmZlRocmVzaG9sZDpDeXByZXNzLmVudihcImRpZmZUaHJlc2hvbGRcIil9LC4uLkN5cHJlc3MuZW52KFwiZm9yY2VkQ29sb3JzXCIpJiZ7Zm9yY2VkQ29sb3JzOkN5cHJlc3MuZW52KFwiZm9yY2VkQ29sb3JzXCIpfSwuLi5DeXByZXNzLmVudihcInBhdXNlQW5pbWF0aW9uQXRFbmRcIikmJntwYXVzZUFuaW1hdGlvbkF0RW5kOkN5cHJlc3MuZW52KFwicGF1c2VBbmltYXRpb25BdEVuZFwiKX0sLi4uQ3lwcmVzcy5lbnYoXCJwcmVmZXJzUmVkdWNlZE1vdGlvblwiKSYme3ByZWZlcnNSZWR1Y2VkTW90aW9uOkN5cHJlc3MuZW52KFwicHJlZmVyc1JlZHVjZWRNb3Rpb25cIil9LC4uLkN5cHJlc3MuZW52KFwiY3JvcFRvVmlld3BvcnRcIikmJntjcm9wVG9WaWV3cG9ydDpDeXByZXNzLmVudihcImNyb3BUb1ZpZXdwb3J0XCIpfX0scGFnZVVybDpuLHZpZXdwb3J0OntoZWlnaHQ6Q3lwcmVzcy5jb25maWcoXCJ2aWV3cG9ydEhlaWdodFwiKSx3aWR0aDpDeXByZXNzLmNvbmZpZyhcInZpZXdwb3J0V2lkdGhcIil9fX0pO30pO30pO30pO30pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b3V0LmpzLm1hcFxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3VwcG9ydC5qcy5tYXAiLCJ2YXIgTm9kZVR5cGU7XHJcbihmdW5jdGlvbiAoTm9kZVR5cGUpIHtcclxuICAgIE5vZGVUeXBlW05vZGVUeXBlW1wiRG9jdW1lbnRcIl0gPSAwXSA9IFwiRG9jdW1lbnRcIjtcclxuICAgIE5vZGVUeXBlW05vZGVUeXBlW1wiRG9jdW1lbnRUeXBlXCJdID0gMV0gPSBcIkRvY3VtZW50VHlwZVwiO1xyXG4gICAgTm9kZVR5cGVbTm9kZVR5cGVbXCJFbGVtZW50XCJdID0gMl0gPSBcIkVsZW1lbnRcIjtcclxuICAgIE5vZGVUeXBlW05vZGVUeXBlW1wiVGV4dFwiXSA9IDNdID0gXCJUZXh0XCI7XHJcbiAgICBOb2RlVHlwZVtOb2RlVHlwZVtcIkNEQVRBXCJdID0gNF0gPSBcIkNEQVRBXCI7XHJcbiAgICBOb2RlVHlwZVtOb2RlVHlwZVtcIkNvbW1lbnRcIl0gPSA1XSA9IFwiQ29tbWVudFwiO1xyXG59KShOb2RlVHlwZSB8fCAoTm9kZVR5cGUgPSB7fSkpO1xuXG5mdW5jdGlvbiBpc0VsZW1lbnQobikge1xyXG4gICAgcmV0dXJuIG4ubm9kZVR5cGUgPT09IG4uRUxFTUVOVF9OT0RFO1xyXG59XHJcbmZ1bmN0aW9uIGlzU2hhZG93Um9vdChuKSB7XHJcbiAgICBjb25zdCBob3N0ID0gbiA9PT0gbnVsbCB8fCBuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuLmhvc3Q7XHJcbiAgICByZXR1cm4gQm9vbGVhbigoaG9zdCA9PT0gbnVsbCB8fCBob3N0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBob3N0LnNoYWRvd1Jvb3QpID09PSBuKTtcclxufVxyXG5mdW5jdGlvbiBpc05hdGl2ZVNoYWRvd0RvbShzaGFkb3dSb290KSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHNoYWRvd1Jvb3QpID09PSAnW29iamVjdCBTaGFkb3dSb290XSc7XHJcbn1cclxuZnVuY3Rpb24gZml4QnJvd3NlckNvbXBhdGliaWxpdHlJc3N1ZXNJbkNTUyhjc3NUZXh0KSB7XHJcbiAgICBpZiAoY3NzVGV4dC5pbmNsdWRlcygnIGJhY2tncm91bmQtY2xpcDogdGV4dDsnKSAmJlxyXG4gICAgICAgICFjc3NUZXh0LmluY2x1ZGVzKCcgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7JykpIHtcclxuICAgICAgICBjc3NUZXh0ID0gY3NzVGV4dC5yZXBsYWNlKC9cXHNiYWNrZ3JvdW5kLWNsaXA6XFxzKnRleHQ7L2csICcgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7IGJhY2tncm91bmQtY2xpcDogdGV4dDsnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjc3NUZXh0O1xyXG59XHJcbmZ1bmN0aW9uIGVzY2FwZUltcG9ydFN0YXRlbWVudChydWxlKSB7XHJcbiAgICBjb25zdCB7IGNzc1RleHQgfSA9IHJ1bGU7XHJcbiAgICBpZiAoY3NzVGV4dC5zcGxpdCgnXCInKS5sZW5ndGggPCAzKVxyXG4gICAgICAgIHJldHVybiBjc3NUZXh0O1xyXG4gICAgY29uc3Qgc3RhdGVtZW50ID0gWydAaW1wb3J0JywgYHVybCgke0pTT04uc3RyaW5naWZ5KHJ1bGUuaHJlZil9KWBdO1xyXG4gICAgaWYgKHJ1bGUubGF5ZXJOYW1lID09PSAnJykge1xyXG4gICAgICAgIHN0YXRlbWVudC5wdXNoKGBsYXllcmApO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocnVsZS5sYXllck5hbWUpIHtcclxuICAgICAgICBzdGF0ZW1lbnQucHVzaChgbGF5ZXIoJHtydWxlLmxheWVyTmFtZX0pYCk7XHJcbiAgICB9XHJcbiAgICBpZiAocnVsZS5zdXBwb3J0c1RleHQpIHtcclxuICAgICAgICBzdGF0ZW1lbnQucHVzaChgc3VwcG9ydHMoJHtydWxlLnN1cHBvcnRzVGV4dH0pYCk7XHJcbiAgICB9XHJcbiAgICBpZiAocnVsZS5tZWRpYS5sZW5ndGgpIHtcclxuICAgICAgICBzdGF0ZW1lbnQucHVzaChydWxlLm1lZGlhLm1lZGlhVGV4dCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RhdGVtZW50LmpvaW4oJyAnKSArICc7JztcclxufVxyXG5mdW5jdGlvbiBzdHJpbmdpZnlTdHlsZXNoZWV0KHMpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcnVsZXMgPSBzLnJ1bGVzIHx8IHMuY3NzUnVsZXM7XHJcbiAgICAgICAgcmV0dXJuIHJ1bGVzXHJcbiAgICAgICAgICAgID8gZml4QnJvd3NlckNvbXBhdGliaWxpdHlJc3N1ZXNJbkNTUyhBcnJheS5mcm9tKHJ1bGVzLCBzdHJpbmdpZnlSdWxlKS5qb2luKCcnKSlcclxuICAgICAgICAgICAgOiBudWxsO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc3RyaW5naWZ5UnVsZShydWxlKSB7XHJcbiAgICBsZXQgaW1wb3J0U3RyaW5naWZpZWQ7XHJcbiAgICBpZiAoaXNDU1NJbXBvcnRSdWxlKHJ1bGUpKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaW1wb3J0U3RyaW5naWZpZWQgPVxyXG4gICAgICAgICAgICAgICAgc3RyaW5naWZ5U3R5bGVzaGVldChydWxlLnN0eWxlU2hlZXQpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgZXNjYXBlSW1wb3J0U3RhdGVtZW50KHJ1bGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc0NTU1N0eWxlUnVsZShydWxlKSAmJiBydWxlLnNlbGVjdG9yVGV4dC5pbmNsdWRlcygnOicpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZpeFNhZmFyaUNvbG9ucyhydWxlLmNzc1RleHQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGltcG9ydFN0cmluZ2lmaWVkIHx8IHJ1bGUuY3NzVGV4dDtcclxufVxyXG5mdW5jdGlvbiBmaXhTYWZhcmlDb2xvbnMoY3NzU3RyaW5naWZpZWQpIHtcclxuICAgIGNvbnN0IHJlZ2V4ID0gLyhcXFsoPzpbXFx3LV0rKVteXFxcXF0pKDooPzpbXFx3LV0rKVxcXSkvZ207XHJcbiAgICByZXR1cm4gY3NzU3RyaW5naWZpZWQucmVwbGFjZShyZWdleCwgJyQxXFxcXCQyJyk7XHJcbn1cclxuZnVuY3Rpb24gaXNDU1NJbXBvcnRSdWxlKHJ1bGUpIHtcclxuICAgIHJldHVybiAnc3R5bGVTaGVldCcgaW4gcnVsZTtcclxufVxyXG5mdW5jdGlvbiBpc0NTU1N0eWxlUnVsZShydWxlKSB7XHJcbiAgICByZXR1cm4gJ3NlbGVjdG9yVGV4dCcgaW4gcnVsZTtcclxufVxyXG5jbGFzcyBNaXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5pZE5vZGVNYXAgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlTWV0YU1hcCA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICB9XHJcbiAgICBnZXRJZChuKSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGlmICghbilcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIGNvbnN0IGlkID0gKF9hID0gdGhpcy5nZXRNZXRhKG4pKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuaWQ7XHJcbiAgICAgICAgcmV0dXJuIGlkICE9PSBudWxsICYmIGlkICE9PSB2b2lkIDAgPyBpZCA6IC0xO1xyXG4gICAgfVxyXG4gICAgZ2V0Tm9kZShpZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkTm9kZU1hcC5nZXQoaWQpIHx8IG51bGw7XHJcbiAgICB9XHJcbiAgICBnZXRJZHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5pZE5vZGVNYXAua2V5cygpKTtcclxuICAgIH1cclxuICAgIGdldE1ldGEobikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVNZXRhTWFwLmdldChuKSB8fCBudWxsO1xyXG4gICAgfVxyXG4gICAgcmVtb3ZlTm9kZUZyb21NYXAobikge1xyXG4gICAgICAgIGNvbnN0IGlkID0gdGhpcy5nZXRJZChuKTtcclxuICAgICAgICB0aGlzLmlkTm9kZU1hcC5kZWxldGUoaWQpO1xyXG4gICAgICAgIGlmIChuLmNoaWxkTm9kZXMpIHtcclxuICAgICAgICAgICAgbi5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkTm9kZSkgPT4gdGhpcy5yZW1vdmVOb2RlRnJvbU1hcChjaGlsZE5vZGUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoYXMoaWQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZE5vZGVNYXAuaGFzKGlkKTtcclxuICAgIH1cclxuICAgIGhhc05vZGUobm9kZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVNZXRhTWFwLmhhcyhub2RlKTtcclxuICAgIH1cclxuICAgIGFkZChuLCBtZXRhKSB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBtZXRhLmlkO1xyXG4gICAgICAgIHRoaXMuaWROb2RlTWFwLnNldChpZCwgbik7XHJcbiAgICAgICAgdGhpcy5ub2RlTWV0YU1hcC5zZXQobiwgbWV0YSk7XHJcbiAgICB9XHJcbiAgICByZXBsYWNlKGlkLCBuKSB7XHJcbiAgICAgICAgY29uc3Qgb2xkTm9kZSA9IHRoaXMuZ2V0Tm9kZShpZCk7XHJcbiAgICAgICAgaWYgKG9sZE5vZGUpIHtcclxuICAgICAgICAgICAgY29uc3QgbWV0YSA9IHRoaXMubm9kZU1ldGFNYXAuZ2V0KG9sZE5vZGUpO1xyXG4gICAgICAgICAgICBpZiAobWV0YSlcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZU1ldGFNYXAuc2V0KG4sIG1ldGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlkTm9kZU1hcC5zZXQoaWQsIG4pO1xyXG4gICAgfVxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5pZE5vZGVNYXAgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlTWV0YU1hcCA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlTWlycm9yKCkge1xyXG4gICAgcmV0dXJuIG5ldyBNaXJyb3IoKTtcclxufVxyXG5mdW5jdGlvbiBtYXNrSW5wdXRWYWx1ZSh7IGVsZW1lbnQsIG1hc2tJbnB1dE9wdGlvbnMsIHRhZ05hbWUsIHR5cGUsIHZhbHVlLCBtYXNrSW5wdXRGbiwgfSkge1xyXG4gICAgbGV0IHRleHQgPSB2YWx1ZSB8fCAnJztcclxuICAgIGNvbnN0IGFjdHVhbFR5cGUgPSB0eXBlICYmIHRvTG93ZXJDYXNlKHR5cGUpO1xyXG4gICAgaWYgKG1hc2tJbnB1dE9wdGlvbnNbdGFnTmFtZS50b0xvd2VyQ2FzZSgpXSB8fFxyXG4gICAgICAgIChhY3R1YWxUeXBlICYmIG1hc2tJbnB1dE9wdGlvbnNbYWN0dWFsVHlwZV0pKSB7XHJcbiAgICAgICAgaWYgKG1hc2tJbnB1dEZuKSB7XHJcbiAgICAgICAgICAgIHRleHQgPSBtYXNrSW5wdXRGbih0ZXh0LCBlbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRleHQgPSAnKicucmVwZWF0KHRleHQubGVuZ3RoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGV4dDtcclxufVxyXG5mdW5jdGlvbiB0b0xvd2VyQ2FzZShzdHIpIHtcclxuICAgIHJldHVybiBzdHIudG9Mb3dlckNhc2UoKTtcclxufVxyXG5jb25zdCBPUklHSU5BTF9BVFRSSUJVVEVfTkFNRSA9ICdfX3Jyd2ViX29yaWdpbmFsX18nO1xyXG5mdW5jdGlvbiBpczJEQ2FudmFzQmxhbmsoY2FudmFzKSB7XHJcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGlmICghY3R4KVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgY29uc3QgY2h1bmtTaXplID0gNTA7XHJcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGNhbnZhcy53aWR0aDsgeCArPSBjaHVua1NpemUpIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGNhbnZhcy5oZWlnaHQ7IHkgKz0gY2h1bmtTaXplKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdldEltYWdlRGF0YSA9IGN0eC5nZXRJbWFnZURhdGE7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsR2V0SW1hZ2VEYXRhID0gT1JJR0lOQUxfQVRUUklCVVRFX05BTUUgaW4gZ2V0SW1hZ2VEYXRhXHJcbiAgICAgICAgICAgICAgICA/IGdldEltYWdlRGF0YVtPUklHSU5BTF9BVFRSSUJVVEVfTkFNRV1cclxuICAgICAgICAgICAgICAgIDogZ2V0SW1hZ2VEYXRhO1xyXG4gICAgICAgICAgICBjb25zdCBwaXhlbEJ1ZmZlciA9IG5ldyBVaW50MzJBcnJheShvcmlnaW5hbEdldEltYWdlRGF0YS5jYWxsKGN0eCwgeCwgeSwgTWF0aC5taW4oY2h1bmtTaXplLCBjYW52YXMud2lkdGggLSB4KSwgTWF0aC5taW4oY2h1bmtTaXplLCBjYW52YXMuaGVpZ2h0IC0geSkpLmRhdGEuYnVmZmVyKTtcclxuICAgICAgICAgICAgaWYgKHBpeGVsQnVmZmVyLnNvbWUoKHBpeGVsKSA9PiBwaXhlbCAhPT0gMCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZnVuY3Rpb24gaXNOb2RlTWV0YUVxdWFsKGEsIGIpIHtcclxuICAgIGlmICghYSB8fCAhYiB8fCBhLnR5cGUgIT09IGIudHlwZSlcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICBpZiAoYS50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudClcclxuICAgICAgICByZXR1cm4gYS5jb21wYXRNb2RlID09PSBiLmNvbXBhdE1vZGU7XHJcbiAgICBlbHNlIGlmIChhLnR5cGUgPT09IE5vZGVUeXBlLkRvY3VtZW50VHlwZSlcclxuICAgICAgICByZXR1cm4gKGEubmFtZSA9PT0gYi5uYW1lICYmXHJcbiAgICAgICAgICAgIGEucHVibGljSWQgPT09IGIucHVibGljSWQgJiZcclxuICAgICAgICAgICAgYS5zeXN0ZW1JZCA9PT0gYi5zeXN0ZW1JZCk7XHJcbiAgICBlbHNlIGlmIChhLnR5cGUgPT09IE5vZGVUeXBlLkNvbW1lbnQgfHxcclxuICAgICAgICBhLnR5cGUgPT09IE5vZGVUeXBlLlRleHQgfHxcclxuICAgICAgICBhLnR5cGUgPT09IE5vZGVUeXBlLkNEQVRBKVxyXG4gICAgICAgIHJldHVybiBhLnRleHRDb250ZW50ID09PSBiLnRleHRDb250ZW50O1xyXG4gICAgZWxzZSBpZiAoYS50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KVxyXG4gICAgICAgIHJldHVybiAoYS50YWdOYW1lID09PSBiLnRhZ05hbWUgJiZcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoYS5hdHRyaWJ1dGVzKSA9PT1cclxuICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGIuYXR0cmlidXRlcykgJiZcclxuICAgICAgICAgICAgYS5pc1NWRyA9PT0gYi5pc1NWRyAmJlxyXG4gICAgICAgICAgICBhLm5lZWRCbG9jayA9PT0gYi5uZWVkQmxvY2spO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIGdldElucHV0VHlwZShlbGVtZW50KSB7XHJcbiAgICBjb25zdCB0eXBlID0gZWxlbWVudC50eXBlO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLXJyLWlzLXBhc3N3b3JkJylcclxuICAgICAgICA/ICdwYXNzd29yZCdcclxuICAgICAgICA6IHR5cGVcclxuICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgdG9Mb3dlckNhc2UodHlwZSlcclxuICAgICAgICAgICAgOiBudWxsO1xyXG59XHJcbmZ1bmN0aW9uIGV4dHJhY3RGaWxlRXh0ZW5zaW9uKHBhdGgsIGJhc2VVUkwpIHtcclxuICAgIHZhciBfYTtcclxuICAgIGxldCB1cmw7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHVybCA9IG5ldyBVUkwocGF0aCwgYmFzZVVSTCAhPT0gbnVsbCAmJiBiYXNlVVJMICE9PSB2b2lkIDAgPyBiYXNlVVJMIDogd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVnZXggPSAvXFwuKFswLTlhLXpdKykoPzokKS9pO1xyXG4gICAgY29uc3QgbWF0Y2ggPSB1cmwucGF0aG5hbWUubWF0Y2gocmVnZXgpO1xyXG4gICAgcmV0dXJuIChfYSA9IG1hdGNoID09PSBudWxsIHx8IG1hdGNoID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtYXRjaFsxXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbnVsbDtcclxufVxuXG5sZXQgX2lkID0gMTtcclxuY29uc3QgdGFnTmFtZVJlZ2V4ID0gbmV3IFJlZ0V4cCgnW15hLXowLTktXzpdJyk7XHJcbmNvbnN0IElHTk9SRURfTk9ERSA9IC0yO1xyXG5mdW5jdGlvbiBnZW5JZCgpIHtcclxuICAgIHJldHVybiBfaWQrKztcclxufVxyXG5mdW5jdGlvbiBnZXRWYWxpZFRhZ05hbWUoZWxlbWVudCkge1xyXG4gICAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gJ2Zvcm0nO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcHJvY2Vzc2VkVGFnTmFtZSA9IHRvTG93ZXJDYXNlKGVsZW1lbnQudGFnTmFtZSk7XHJcbiAgICBpZiAodGFnTmFtZVJlZ2V4LnRlc3QocHJvY2Vzc2VkVGFnTmFtZSkpIHtcclxuICAgICAgICByZXR1cm4gJ2Rpdic7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJvY2Vzc2VkVGFnTmFtZTtcclxufVxyXG5mdW5jdGlvbiBleHRyYWN0T3JpZ2luKHVybCkge1xyXG4gICAgbGV0IG9yaWdpbiA9ICcnO1xyXG4gICAgaWYgKHVybC5pbmRleE9mKCcvLycpID4gLTEpIHtcclxuICAgICAgICBvcmlnaW4gPSB1cmwuc3BsaXQoJy8nKS5zbGljZSgwLCAzKS5qb2luKCcvJyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBvcmlnaW4gPSB1cmwuc3BsaXQoJy8nKVswXTtcclxuICAgIH1cclxuICAgIG9yaWdpbiA9IG9yaWdpbi5zcGxpdCgnPycpWzBdO1xyXG4gICAgcmV0dXJuIG9yaWdpbjtcclxufVxyXG5sZXQgY2FudmFzU2VydmljZTtcclxubGV0IGNhbnZhc0N0eDtcclxuY29uc3QgVVJMX0lOX0NTU19SRUYgPSAvdXJsXFwoKD86KCcpKFteJ10qKSd8KFwiKSguKj8pXCJ8KFteKV0qKSlcXCkvZ207XHJcbmNvbnN0IFVSTF9QUk9UT0NPTF9NQVRDSCA9IC9eKD86W2EteitdKzopP1xcL1xcLy9pO1xyXG5jb25zdCBVUkxfV1dXX01BVENIID0gL153d3dcXC4uKi9pO1xyXG5jb25zdCBEQVRBX1VSSSA9IC9eKGRhdGE6KShbXixdKiksKC4qKS9pO1xyXG5mdW5jdGlvbiBhYnNvbHV0ZVRvU3R5bGVzaGVldChjc3NUZXh0LCBocmVmKSB7XHJcbiAgICByZXR1cm4gKGNzc1RleHQgfHwgJycpLnJlcGxhY2UoVVJMX0lOX0NTU19SRUYsIChvcmlnaW4sIHF1b3RlMSwgcGF0aDEsIHF1b3RlMiwgcGF0aDIsIHBhdGgzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoMSB8fCBwYXRoMiB8fCBwYXRoMztcclxuICAgICAgICBjb25zdCBtYXliZVF1b3RlID0gcXVvdGUxIHx8IHF1b3RlMiB8fCAnJztcclxuICAgICAgICBpZiAoIWZpbGVQYXRoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvcmlnaW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChVUkxfUFJPVE9DT0xfTUFUQ0gudGVzdChmaWxlUGF0aCkgfHwgVVJMX1dXV19NQVRDSC50ZXN0KGZpbGVQYXRoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYHVybCgke21heWJlUXVvdGV9JHtmaWxlUGF0aH0ke21heWJlUXVvdGV9KWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChEQVRBX1VSSS50ZXN0KGZpbGVQYXRoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYHVybCgke21heWJlUXVvdGV9JHtmaWxlUGF0aH0ke21heWJlUXVvdGV9KWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaWxlUGF0aFswXSA9PT0gJy8nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgdXJsKCR7bWF5YmVRdW90ZX0ke2V4dHJhY3RPcmlnaW4oaHJlZikgKyBmaWxlUGF0aH0ke21heWJlUXVvdGV9KWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN0YWNrID0gaHJlZi5zcGxpdCgnLycpO1xyXG4gICAgICAgIGNvbnN0IHBhcnRzID0gZmlsZVBhdGguc3BsaXQoJy8nKTtcclxuICAgICAgICBzdGFjay5wb3AoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgcGFydHMpIHtcclxuICAgICAgICAgICAgaWYgKHBhcnQgPT09ICcuJykge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xyXG4gICAgICAgICAgICAgICAgc3RhY2sucG9wKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKHBhcnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBgdXJsKCR7bWF5YmVRdW90ZX0ke3N0YWNrLmpvaW4oJy8nKX0ke21heWJlUXVvdGV9KWA7XHJcbiAgICB9KTtcclxufVxyXG5jb25zdCBTUkNTRVRfTk9UX1NQQUNFUyA9IC9eW14gXFx0XFxuXFxyXFx1MDAwY10rLztcclxuY29uc3QgU1JDU0VUX0NPTU1BU19PUl9TUEFDRVMgPSAvXlssIFxcdFxcblxcclxcdTAwMGNdKy87XHJcbmZ1bmN0aW9uIGdldEFic29sdXRlU3Jjc2V0U3RyaW5nKGRvYywgYXR0cmlidXRlVmFsdWUpIHtcclxuICAgIGlmIChhdHRyaWJ1dGVWYWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xyXG4gICAgfVxyXG4gICAgbGV0IHBvcyA9IDA7XHJcbiAgICBmdW5jdGlvbiBjb2xsZWN0Q2hhcmFjdGVycyhyZWdFeCkge1xyXG4gICAgICAgIGxldCBjaGFycztcclxuICAgICAgICBjb25zdCBtYXRjaCA9IHJlZ0V4LmV4ZWMoYXR0cmlidXRlVmFsdWUuc3Vic3RyaW5nKHBvcykpO1xyXG4gICAgICAgIGlmIChtYXRjaCkge1xyXG4gICAgICAgICAgICBjaGFycyA9IG1hdGNoWzBdO1xyXG4gICAgICAgICAgICBwb3MgKz0gY2hhcnMubGVuZ3RoO1xyXG4gICAgICAgICAgICByZXR1cm4gY2hhcnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIGNvbnN0IG91dHB1dCA9IFtdO1xyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICBjb2xsZWN0Q2hhcmFjdGVycyhTUkNTRVRfQ09NTUFTX09SX1NQQUNFUyk7XHJcbiAgICAgICAgaWYgKHBvcyA+PSBhdHRyaWJ1dGVWYWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB1cmwgPSBjb2xsZWN0Q2hhcmFjdGVycyhTUkNTRVRfTk9UX1NQQUNFUyk7XHJcbiAgICAgICAgaWYgKHVybC5zbGljZSgtMSkgPT09ICcsJykge1xyXG4gICAgICAgICAgICB1cmwgPSBhYnNvbHV0ZVRvRG9jKGRvYywgdXJsLnN1YnN0cmluZygwLCB1cmwubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaCh1cmwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGRlc2NyaXB0b3JzU3RyID0gJyc7XHJcbiAgICAgICAgICAgIHVybCA9IGFic29sdXRlVG9Eb2MoZG9jLCB1cmwpO1xyXG4gICAgICAgICAgICBsZXQgaW5QYXJlbnMgPSBmYWxzZTtcclxuICAgICAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBhdHRyaWJ1dGVWYWx1ZS5jaGFyQXQocG9zKTtcclxuICAgICAgICAgICAgICAgIGlmIChjID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKCh1cmwgKyBkZXNjcmlwdG9yc1N0cikudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpblBhcmVucykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjID09PSAnLCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zICs9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKCh1cmwgKyBkZXNjcmlwdG9yc1N0cikudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGMgPT09ICcoJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpblBhcmVucyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT09ICcpJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpblBhcmVucyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0b3JzU3RyICs9IGM7XHJcbiAgICAgICAgICAgICAgICBwb3MgKz0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvdXRwdXQuam9pbignLCAnKTtcclxufVxyXG5jb25zdCBjYWNoZWREb2N1bWVudCA9IG5ldyBXZWFrTWFwKCk7XHJcbmZ1bmN0aW9uIGFic29sdXRlVG9Eb2MoZG9jLCBhdHRyaWJ1dGVWYWx1ZSkge1xyXG4gICAgaWYgKCFhdHRyaWJ1dGVWYWx1ZSB8fCBhdHRyaWJ1dGVWYWx1ZS50cmltKCkgPT09ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuIGF0dHJpYnV0ZVZhbHVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGdldEhyZWYoZG9jLCBhdHRyaWJ1dGVWYWx1ZSk7XHJcbn1cclxuZnVuY3Rpb24gaXNTVkdFbGVtZW50KGVsKSB7XHJcbiAgICByZXR1cm4gQm9vbGVhbihlbC50YWdOYW1lID09PSAnc3ZnJyB8fCBlbC5vd25lclNWR0VsZW1lbnQpO1xyXG59XHJcbmZ1bmN0aW9uIGdldEhyZWYoZG9jLCBjdXN0b21IcmVmKSB7XHJcbiAgICBsZXQgYSA9IGNhY2hlZERvY3VtZW50LmdldChkb2MpO1xyXG4gICAgaWYgKCFhKSB7XHJcbiAgICAgICAgYSA9IGRvYy5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgY2FjaGVkRG9jdW1lbnQuc2V0KGRvYywgYSk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWN1c3RvbUhyZWYpIHtcclxuICAgICAgICBjdXN0b21IcmVmID0gJyc7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChjdXN0b21IcmVmLnN0YXJ0c1dpdGgoJ2Jsb2I6JykgfHwgY3VzdG9tSHJlZi5zdGFydHNXaXRoKCdkYXRhOicpKSB7XHJcbiAgICAgICAgcmV0dXJuIGN1c3RvbUhyZWY7XHJcbiAgICB9XHJcbiAgICBhLnNldEF0dHJpYnV0ZSgnaHJlZicsIGN1c3RvbUhyZWYpO1xyXG4gICAgcmV0dXJuIGEuaHJlZjtcclxufVxyXG5mdW5jdGlvbiB0cmFuc2Zvcm1BdHRyaWJ1dGUoZG9jLCB0YWdOYW1lLCBuYW1lLCB2YWx1ZSkge1xyXG4gICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuICAgIGlmIChuYW1lID09PSAnc3JjJyB8fFxyXG4gICAgICAgIChuYW1lID09PSAnaHJlZicgJiYgISh0YWdOYW1lID09PSAndXNlJyAmJiB2YWx1ZVswXSA9PT0gJyMnKSkpIHtcclxuICAgICAgICByZXR1cm4gYWJzb2x1dGVUb0RvYyhkb2MsIHZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG5hbWUgPT09ICd4bGluazpocmVmJyAmJiB2YWx1ZVswXSAhPT0gJyMnKSB7XHJcbiAgICAgICAgcmV0dXJuIGFic29sdXRlVG9Eb2MoZG9jLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChuYW1lID09PSAnYmFja2dyb3VuZCcgJiZcclxuICAgICAgICAodGFnTmFtZSA9PT0gJ3RhYmxlJyB8fCB0YWdOYW1lID09PSAndGQnIHx8IHRhZ05hbWUgPT09ICd0aCcpKSB7XHJcbiAgICAgICAgcmV0dXJuIGFic29sdXRlVG9Eb2MoZG9jLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChuYW1lID09PSAnc3Jjc2V0Jykge1xyXG4gICAgICAgIHJldHVybiBnZXRBYnNvbHV0ZVNyY3NldFN0cmluZyhkb2MsIHZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKG5hbWUgPT09ICdzdHlsZScpIHtcclxuICAgICAgICByZXR1cm4gYWJzb2x1dGVUb1N0eWxlc2hlZXQodmFsdWUsIGdldEhyZWYoZG9jKSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0YWdOYW1lID09PSAnb2JqZWN0JyAmJiBuYW1lID09PSAnZGF0YScpIHtcclxuICAgICAgICByZXR1cm4gYWJzb2x1dGVUb0RvYyhkb2MsIHZhbHVlKTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG5mdW5jdGlvbiBpZ25vcmVBdHRyaWJ1dGUodGFnTmFtZSwgbmFtZSwgX3ZhbHVlKSB7XHJcbiAgICByZXR1cm4gKHRhZ05hbWUgPT09ICd2aWRlbycgfHwgdGFnTmFtZSA9PT0gJ2F1ZGlvJykgJiYgbmFtZSA9PT0gJ2F1dG9wbGF5JztcclxufVxyXG5mdW5jdGlvbiBfaXNCbG9ja2VkRWxlbWVudChlbGVtZW50LCBibG9ja0NsYXNzLCBibG9ja1NlbGVjdG9yKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgYmxvY2tDbGFzcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGJsb2NrQ2xhc3MpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgZUluZGV4ID0gZWxlbWVudC5jbGFzc0xpc3QubGVuZ3RoOyBlSW5kZXgtLTspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NMaXN0W2VJbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tDbGFzcy50ZXN0KGNsYXNzTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYmxvY2tTZWxlY3Rvcikge1xyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5tYXRjaGVzKGJsb2NrU2VsZWN0b3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZnVuY3Rpb24gY2xhc3NNYXRjaGVzUmVnZXgobm9kZSwgcmVnZXgsIGNoZWNrQW5jZXN0b3JzKSB7XHJcbiAgICBpZiAoIW5vZGUpXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgaWYgKG5vZGUubm9kZVR5cGUgIT09IG5vZGUuRUxFTUVOVF9OT0RFKSB7XHJcbiAgICAgICAgaWYgKCFjaGVja0FuY2VzdG9ycylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBjbGFzc01hdGNoZXNSZWdleChub2RlLnBhcmVudE5vZGUsIHJlZ2V4LCBjaGVja0FuY2VzdG9ycyk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBlSW5kZXggPSBub2RlLmNsYXNzTGlzdC5sZW5ndGg7IGVJbmRleC0tOykge1xyXG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZSA9IG5vZGUuY2xhc3NMaXN0W2VJbmRleF07XHJcbiAgICAgICAgaWYgKHJlZ2V4LnRlc3QoY2xhc3NOYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoIWNoZWNrQW5jZXN0b3JzKVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIHJldHVybiBjbGFzc01hdGNoZXNSZWdleChub2RlLnBhcmVudE5vZGUsIHJlZ2V4LCBjaGVja0FuY2VzdG9ycyk7XHJcbn1cclxuZnVuY3Rpb24gbmVlZE1hc2tpbmdUZXh0KG5vZGUsIG1hc2tUZXh0Q2xhc3MsIG1hc2tUZXh0U2VsZWN0b3IsIGNoZWNrQW5jZXN0b3JzKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGVsID0gbm9kZS5ub2RlVHlwZSA9PT0gbm9kZS5FTEVNRU5UX05PREVcclxuICAgICAgICAgICAgPyBub2RlXHJcbiAgICAgICAgICAgIDogbm9kZS5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIGlmIChlbCA9PT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICh0eXBlb2YgbWFza1RleHRDbGFzcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgaWYgKGNoZWNrQW5jZXN0b3JzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwuY2xvc2VzdChgLiR7bWFza1RleHRDbGFzc31gKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMobWFza1RleHRDbGFzcykpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChjbGFzc01hdGNoZXNSZWdleChlbCwgbWFza1RleHRDbGFzcywgY2hlY2tBbmNlc3RvcnMpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtYXNrVGV4dFNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGVja0FuY2VzdG9ycykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLmNsb3Nlc3QobWFza1RleHRTZWxlY3RvcikpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwubWF0Y2hlcyhtYXNrVGV4dFNlbGVjdG9yKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZnVuY3Rpb24gb25jZUlmcmFtZUxvYWRlZChpZnJhbWVFbCwgbGlzdGVuZXIsIGlmcmFtZUxvYWRUaW1lb3V0KSB7XHJcbiAgICBjb25zdCB3aW4gPSBpZnJhbWVFbC5jb250ZW50V2luZG93O1xyXG4gICAgaWYgKCF3aW4pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgZmlyZWQgPSBmYWxzZTtcclxuICAgIGxldCByZWFkeVN0YXRlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICByZWFkeVN0YXRlID0gd2luLmRvY3VtZW50LnJlYWR5U3RhdGU7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAocmVhZHlTdGF0ZSAhPT0gJ2NvbXBsZXRlJykge1xyXG4gICAgICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZmlyZWQpIHtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgICAgICBmaXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBpZnJhbWVMb2FkVGltZW91dCk7XHJcbiAgICAgICAgaWZyYW1lRWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgICAgICAgZmlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBsaXN0ZW5lcigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGJsYW5rVXJsID0gJ2Fib3V0OmJsYW5rJztcclxuICAgIGlmICh3aW4ubG9jYXRpb24uaHJlZiAhPT0gYmxhbmtVcmwgfHxcclxuICAgICAgICBpZnJhbWVFbC5zcmMgPT09IGJsYW5rVXJsIHx8XHJcbiAgICAgICAgaWZyYW1lRWwuc3JjID09PSAnJykge1xyXG4gICAgICAgIHNldFRpbWVvdXQobGlzdGVuZXIsIDApO1xyXG4gICAgICAgIHJldHVybiBpZnJhbWVFbC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgbGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gICAgaWZyYW1lRWwuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGxpc3RlbmVyKTtcclxufVxyXG5mdW5jdGlvbiBvbmNlU3R5bGVzaGVldExvYWRlZChsaW5rLCBsaXN0ZW5lciwgc3R5bGVTaGVldExvYWRUaW1lb3V0KSB7XHJcbiAgICBsZXQgZmlyZWQgPSBmYWxzZTtcclxuICAgIGxldCBzdHlsZVNoZWV0TG9hZGVkO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBzdHlsZVNoZWV0TG9hZGVkID0gbGluay5zaGVldDtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChzdHlsZVNoZWV0TG9hZGVkKVxyXG4gICAgICAgIHJldHVybjtcclxuICAgIGNvbnN0IHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCFmaXJlZCkge1xyXG4gICAgICAgICAgICBsaXN0ZW5lcigpO1xyXG4gICAgICAgICAgICBmaXJlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgc3R5bGVTaGVldExvYWRUaW1lb3V0KTtcclxuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xyXG4gICAgICAgIGZpcmVkID0gdHJ1ZTtcclxuICAgICAgICBsaXN0ZW5lcigpO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gc2VyaWFsaXplTm9kZShuLCBvcHRpb25zKSB7XHJcbiAgICBjb25zdCB7IGRvYywgbWlycm9yLCBibG9ja0NsYXNzLCBibG9ja1NlbGVjdG9yLCBuZWVkc01hc2ssIGlubGluZVN0eWxlc2hlZXQsIG1hc2tJbnB1dE9wdGlvbnMgPSB7fSwgbWFza1RleHRGbiwgbWFza0lucHV0Rm4sIGRhdGFVUkxPcHRpb25zID0ge30sIGlubGluZUltYWdlcywgcmVjb3JkQ2FudmFzLCBrZWVwSWZyYW1lU3JjRm4sIG5ld2x5QWRkZWRFbGVtZW50ID0gZmFsc2UsIH0gPSBvcHRpb25zO1xyXG4gICAgY29uc3Qgcm9vdElkID0gZ2V0Um9vdElkKGRvYywgbWlycm9yKTtcclxuICAgIHN3aXRjaCAobi5ub2RlVHlwZSkge1xyXG4gICAgICAgIGNhc2Ugbi5ET0NVTUVOVF9OT0RFOlxyXG4gICAgICAgICAgICBpZiAobi5jb21wYXRNb2RlICE9PSAnQ1NTMUNvbXBhdCcpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogTm9kZVR5cGUuRG9jdW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlczogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGF0TW9kZTogbi5jb21wYXRNb2RlLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogTm9kZVR5cGUuRG9jdW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGROb2RlczogW10sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSBuLkRPQ1VNRU5UX1RZUEVfTk9ERTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE5vZGVUeXBlLkRvY3VtZW50VHlwZSxcclxuICAgICAgICAgICAgICAgIG5hbWU6IG4ubmFtZSxcclxuICAgICAgICAgICAgICAgIHB1YmxpY0lkOiBuLnB1YmxpY0lkLFxyXG4gICAgICAgICAgICAgICAgc3lzdGVtSWQ6IG4uc3lzdGVtSWQsXHJcbiAgICAgICAgICAgICAgICByb290SWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBuLkVMRU1FTlRfTk9ERTpcclxuICAgICAgICAgICAgcmV0dXJuIHNlcmlhbGl6ZUVsZW1lbnROb2RlKG4sIHtcclxuICAgICAgICAgICAgICAgIGRvYyxcclxuICAgICAgICAgICAgICAgIGJsb2NrQ2xhc3MsXHJcbiAgICAgICAgICAgICAgICBibG9ja1NlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgaW5saW5lU3R5bGVzaGVldCxcclxuICAgICAgICAgICAgICAgIG1hc2tJbnB1dE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBtYXNrSW5wdXRGbixcclxuICAgICAgICAgICAgICAgIGRhdGFVUkxPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgaW5saW5lSW1hZ2VzLFxyXG4gICAgICAgICAgICAgICAgcmVjb3JkQ2FudmFzLFxyXG4gICAgICAgICAgICAgICAga2VlcElmcmFtZVNyY0ZuLFxyXG4gICAgICAgICAgICAgICAgbmV3bHlBZGRlZEVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICByb290SWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGNhc2Ugbi5URVhUX05PREU6XHJcbiAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVUZXh0Tm9kZShuLCB7XHJcbiAgICAgICAgICAgICAgICBkb2MsXHJcbiAgICAgICAgICAgICAgICBuZWVkc01hc2ssXHJcbiAgICAgICAgICAgICAgICBtYXNrVGV4dEZuLFxyXG4gICAgICAgICAgICAgICAgcm9vdElkLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBjYXNlIG4uQ0RBVEFfU0VDVElPTl9OT0RFOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTm9kZVR5cGUuQ0RBVEEsXHJcbiAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogJycsXHJcbiAgICAgICAgICAgICAgICByb290SWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgY2FzZSBuLkNPTU1FTlRfTk9ERTpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IE5vZGVUeXBlLkNvbW1lbnQsXHJcbiAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogbi50ZXh0Q29udGVudCB8fCAnJyxcclxuICAgICAgICAgICAgICAgIHJvb3RJZCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0Um9vdElkKGRvYywgbWlycm9yKSB7XHJcbiAgICBpZiAoIW1pcnJvci5oYXNOb2RlKGRvYykpXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGRvY0lkID0gbWlycm9yLmdldElkKGRvYyk7XHJcbiAgICByZXR1cm4gZG9jSWQgPT09IDEgPyB1bmRlZmluZWQgOiBkb2NJZDtcclxufVxyXG5mdW5jdGlvbiBzZXJpYWxpemVUZXh0Tm9kZShuLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBjb25zdCB7IG5lZWRzTWFzaywgbWFza1RleHRGbiwgcm9vdElkIH0gPSBvcHRpb25zO1xyXG4gICAgY29uc3QgcGFyZW50VGFnTmFtZSA9IG4ucGFyZW50Tm9kZSAmJiBuLnBhcmVudE5vZGUudGFnTmFtZTtcclxuICAgIGxldCB0ZXh0Q29udGVudCA9IG4udGV4dENvbnRlbnQ7XHJcbiAgICBjb25zdCBpc1N0eWxlID0gcGFyZW50VGFnTmFtZSA9PT0gJ1NUWUxFJyA/IHRydWUgOiB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBpc1NjcmlwdCA9IHBhcmVudFRhZ05hbWUgPT09ICdTQ1JJUFQnID8gdHJ1ZSA6IHVuZGVmaW5lZDtcclxuICAgIGlmIChpc1N0eWxlICYmIHRleHRDb250ZW50KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKG4ubmV4dFNpYmxpbmcgfHwgbi5wcmV2aW91c1NpYmxpbmcpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgoX2EgPSBuLnBhcmVudE5vZGUuc2hlZXQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jc3NSdWxlcykge1xyXG4gICAgICAgICAgICAgICAgdGV4dENvbnRlbnQgPSBzdHJpbmdpZnlTdHlsZXNoZWV0KG4ucGFyZW50Tm9kZS5zaGVldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYENhbm5vdCBnZXQgQ1NTIHN0eWxlcyBmcm9tIHRleHQncyBwYXJlbnROb2RlLiBFcnJvcjogJHtlcnJ9YCwgbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHRDb250ZW50ID0gYWJzb2x1dGVUb1N0eWxlc2hlZXQodGV4dENvbnRlbnQsIGdldEhyZWYob3B0aW9ucy5kb2MpKTtcclxuICAgIH1cclxuICAgIGlmIChpc1NjcmlwdCkge1xyXG4gICAgICAgIHRleHRDb250ZW50ID0gJ1NDUklQVF9QTEFDRUhPTERFUic7XHJcbiAgICB9XHJcbiAgICBpZiAoIWlzU3R5bGUgJiYgIWlzU2NyaXB0ICYmIHRleHRDb250ZW50ICYmIG5lZWRzTWFzaykge1xyXG4gICAgICAgIHRleHRDb250ZW50ID0gbWFza1RleHRGblxyXG4gICAgICAgICAgICA/IG1hc2tUZXh0Rm4odGV4dENvbnRlbnQsIG4ucGFyZW50RWxlbWVudClcclxuICAgICAgICAgICAgOiB0ZXh0Q29udGVudC5yZXBsYWNlKC9bXFxTXS9nLCAnKicpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBOb2RlVHlwZS5UZXh0LFxyXG4gICAgICAgIHRleHRDb250ZW50OiB0ZXh0Q29udGVudCB8fCAnJyxcclxuICAgICAgICBpc1N0eWxlLFxyXG4gICAgICAgIHJvb3RJZCxcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gc2VyaWFsaXplRWxlbWVudE5vZGUobiwgb3B0aW9ucykge1xyXG4gICAgY29uc3QgeyBkb2MsIGJsb2NrQ2xhc3MsIGJsb2NrU2VsZWN0b3IsIGlubGluZVN0eWxlc2hlZXQsIG1hc2tJbnB1dE9wdGlvbnMgPSB7fSwgbWFza0lucHV0Rm4sIGRhdGFVUkxPcHRpb25zID0ge30sIGlubGluZUltYWdlcywgcmVjb3JkQ2FudmFzLCBrZWVwSWZyYW1lU3JjRm4sIG5ld2x5QWRkZWRFbGVtZW50ID0gZmFsc2UsIHJvb3RJZCwgfSA9IG9wdGlvbnM7XHJcbiAgICBjb25zdCBuZWVkQmxvY2sgPSBfaXNCbG9ja2VkRWxlbWVudChuLCBibG9ja0NsYXNzLCBibG9ja1NlbGVjdG9yKTtcclxuICAgIGNvbnN0IHRhZ05hbWUgPSBnZXRWYWxpZFRhZ05hbWUobik7XHJcbiAgICBsZXQgYXR0cmlidXRlcyA9IHt9O1xyXG4gICAgY29uc3QgbGVuID0gbi5hdHRyaWJ1dGVzLmxlbmd0aDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBjb25zdCBhdHRyID0gbi5hdHRyaWJ1dGVzW2ldO1xyXG4gICAgICAgIGlmICghaWdub3JlQXR0cmlidXRlKHRhZ05hbWUsIGF0dHIubmFtZSwgYXR0ci52YWx1ZSkpIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlc1thdHRyLm5hbWVdID0gdHJhbnNmb3JtQXR0cmlidXRlKGRvYywgdGFnTmFtZSwgdG9Mb3dlckNhc2UoYXR0ci5uYW1lKSwgYXR0ci52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRhZ05hbWUgPT09ICdsaW5rJyAmJiBpbmxpbmVTdHlsZXNoZWV0KSB7XHJcbiAgICAgICAgY29uc3Qgc3R5bGVzaGVldCA9IEFycmF5LmZyb20oZG9jLnN0eWxlU2hlZXRzKS5maW5kKChzKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzLmhyZWYgPT09IG4uaHJlZjtcclxuICAgICAgICB9KTtcclxuICAgICAgICBsZXQgY3NzVGV4dCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHN0eWxlc2hlZXQpIHtcclxuICAgICAgICAgICAgY3NzVGV4dCA9IHN0cmluZ2lmeVN0eWxlc2hlZXQoc3R5bGVzaGVldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjc3NUZXh0KSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBhdHRyaWJ1dGVzLnJlbDtcclxuICAgICAgICAgICAgZGVsZXRlIGF0dHJpYnV0ZXMuaHJlZjtcclxuICAgICAgICAgICAgYXR0cmlidXRlcy5fY3NzVGV4dCA9IGFic29sdXRlVG9TdHlsZXNoZWV0KGNzc1RleHQsIHN0eWxlc2hlZXQuaHJlZik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRhZ05hbWUgPT09ICdzdHlsZScgJiZcclxuICAgICAgICBuLnNoZWV0ICYmXHJcbiAgICAgICAgIShuLmlubmVyVGV4dCB8fCBuLnRleHRDb250ZW50IHx8ICcnKS50cmltKCkubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3QgY3NzVGV4dCA9IHN0cmluZ2lmeVN0eWxlc2hlZXQobi5zaGVldCk7XHJcbiAgICAgICAgaWYgKGNzc1RleHQpIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlcy5fY3NzVGV4dCA9IGFic29sdXRlVG9TdHlsZXNoZWV0KGNzc1RleHQsIGdldEhyZWYoZG9jKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRhZ05hbWUgPT09ICdpbnB1dCcgfHwgdGFnTmFtZSA9PT0gJ3RleHRhcmVhJyB8fCB0YWdOYW1lID09PSAnc2VsZWN0Jykge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gbi52YWx1ZTtcclxuICAgICAgICBjb25zdCBjaGVja2VkID0gbi5jaGVja2VkO1xyXG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLnR5cGUgIT09ICdyYWRpbycgJiZcclxuICAgICAgICAgICAgYXR0cmlidXRlcy50eXBlICE9PSAnY2hlY2tib3gnICYmXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMudHlwZSAhPT0gJ3N1Ym1pdCcgJiZcclxuICAgICAgICAgICAgYXR0cmlidXRlcy50eXBlICE9PSAnYnV0dG9uJyAmJlxyXG4gICAgICAgICAgICB2YWx1ZSkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnZhbHVlID0gbWFza0lucHV0VmFsdWUoe1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogbixcclxuICAgICAgICAgICAgICAgIHR5cGU6IGdldElucHV0VHlwZShuKSxcclxuICAgICAgICAgICAgICAgIHRhZ05hbWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIG1hc2tJbnB1dE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICBtYXNrSW5wdXRGbixcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlcy5jaGVja2VkID0gY2hlY2tlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGFnTmFtZSA9PT0gJ29wdGlvbicpIHtcclxuICAgICAgICBpZiAobi5zZWxlY3RlZCAmJiAhbWFza0lucHV0T3B0aW9uc1snc2VsZWN0J10pIHtcclxuICAgICAgICAgICAgYXR0cmlidXRlcy5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkZWxldGUgYXR0cmlidXRlcy5zZWxlY3RlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGFnTmFtZSA9PT0gJ2NhbnZhcycgJiYgcmVjb3JkQ2FudmFzKSB7XHJcbiAgICAgICAgaWYgKG4uX19jb250ZXh0ID09PSAnMmQnKSB7XHJcbiAgICAgICAgICAgIGlmICghaXMyRENhbnZhc0JsYW5rKG4pKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnJyX2RhdGFVUkwgPSBuLnRvRGF0YVVSTChkYXRhVVJMT3B0aW9ucy50eXBlLCBkYXRhVVJMT3B0aW9ucy5xdWFsaXR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghKCdfX2NvbnRleHQnIGluIG4pKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhc0RhdGFVUkwgPSBuLnRvRGF0YVVSTChkYXRhVVJMT3B0aW9ucy50eXBlLCBkYXRhVVJMT3B0aW9ucy5xdWFsaXR5KTtcclxuICAgICAgICAgICAgY29uc3QgYmxhbmtDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICAgICAgYmxhbmtDYW52YXMud2lkdGggPSBuLndpZHRoO1xyXG4gICAgICAgICAgICBibGFua0NhbnZhcy5oZWlnaHQgPSBuLmhlaWdodDtcclxuICAgICAgICAgICAgY29uc3QgYmxhbmtDYW52YXNEYXRhVVJMID0gYmxhbmtDYW52YXMudG9EYXRhVVJMKGRhdGFVUkxPcHRpb25zLnR5cGUsIGRhdGFVUkxPcHRpb25zLnF1YWxpdHkpO1xyXG4gICAgICAgICAgICBpZiAoY2FudmFzRGF0YVVSTCAhPT0gYmxhbmtDYW52YXNEYXRhVVJMKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnJyX2RhdGFVUkwgPSBjYW52YXNEYXRhVVJMO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKHRhZ05hbWUgPT09ICdpbWcnICYmIGlubGluZUltYWdlcykge1xyXG4gICAgICAgIGlmICghY2FudmFzU2VydmljZSkge1xyXG4gICAgICAgICAgICBjYW52YXNTZXJ2aWNlID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICBjYW52YXNDdHggPSBjYW52YXNTZXJ2aWNlLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbjtcclxuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IGltYWdlLmNyb3NzT3JpZ2luO1xyXG4gICAgICAgIGltYWdlLmNyb3NzT3JpZ2luID0gJ2Fub255bW91cyc7XHJcbiAgICAgICAgY29uc3QgcmVjb3JkSW5saW5lSW1hZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGltYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZWNvcmRJbmxpbmVJbWFnZSk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjYW52YXNTZXJ2aWNlLndpZHRoID0gaW1hZ2UubmF0dXJhbFdpZHRoO1xyXG4gICAgICAgICAgICAgICAgY2FudmFzU2VydmljZS5oZWlnaHQgPSBpbWFnZS5uYXR1cmFsSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgY2FudmFzQ3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCk7XHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnJyX2RhdGFVUkwgPSBjYW52YXNTZXJ2aWNlLnRvRGF0YVVSTChkYXRhVVJMT3B0aW9ucy50eXBlLCBkYXRhVVJMT3B0aW9ucy5xdWFsaXR5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYENhbm5vdCBpbmxpbmUgaW1nIHNyYz0ke2ltYWdlLmN1cnJlbnRTcmN9ISBFcnJvcjogJHtlcnJ9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2xkVmFsdWVcclxuICAgICAgICAgICAgICAgID8gKGF0dHJpYnV0ZXMuY3Jvc3NPcmlnaW4gPSBvbGRWYWx1ZSlcclxuICAgICAgICAgICAgICAgIDogaW1hZ2UucmVtb3ZlQXR0cmlidXRlKCdjcm9zc29yaWdpbicpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGltYWdlLmNvbXBsZXRlICYmIGltYWdlLm5hdHVyYWxXaWR0aCAhPT0gMClcclxuICAgICAgICAgICAgcmVjb3JkSW5saW5lSW1hZ2UoKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCByZWNvcmRJbmxpbmVJbWFnZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGFnTmFtZSA9PT0gJ2F1ZGlvJyB8fCB0YWdOYW1lID09PSAndmlkZW8nKSB7XHJcbiAgICAgICAgY29uc3QgbWVkaWFBdHRyaWJ1dGVzID0gYXR0cmlidXRlcztcclxuICAgICAgICBtZWRpYUF0dHJpYnV0ZXMucnJfbWVkaWFTdGF0ZSA9IG4ucGF1c2VkXHJcbiAgICAgICAgICAgID8gJ3BhdXNlZCdcclxuICAgICAgICAgICAgOiAncGxheWVkJztcclxuICAgICAgICBtZWRpYUF0dHJpYnV0ZXMucnJfbWVkaWFDdXJyZW50VGltZSA9IG4uY3VycmVudFRpbWU7XHJcbiAgICAgICAgbWVkaWFBdHRyaWJ1dGVzLnJyX21lZGlhUGxheWJhY2tSYXRlID0gbi5wbGF5YmFja1JhdGU7XHJcbiAgICAgICAgbWVkaWFBdHRyaWJ1dGVzLnJyX21lZGlhTXV0ZWQgPSBuLm11dGVkO1xyXG4gICAgICAgIG1lZGlhQXR0cmlidXRlcy5ycl9tZWRpYUxvb3AgPSBuLmxvb3A7XHJcbiAgICAgICAgbWVkaWFBdHRyaWJ1dGVzLnJyX21lZGlhVm9sdW1lID0gbi52b2x1bWU7XHJcbiAgICB9XHJcbiAgICBpZiAoIW5ld2x5QWRkZWRFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKG4uc2Nyb2xsTGVmdCkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnJyX3Njcm9sbExlZnQgPSBuLnNjcm9sbExlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChuLnNjcm9sbFRvcCkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnJyX3Njcm9sbFRvcCA9IG4uc2Nyb2xsVG9wO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChuZWVkQmxvY2spIHtcclxuICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IG4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICAgICAgYXR0cmlidXRlcyA9IHtcclxuICAgICAgICAgICAgY2xhc3M6IGF0dHJpYnV0ZXMuY2xhc3MsXHJcbiAgICAgICAgICAgIHJyX3dpZHRoOiBgJHt3aWR0aH1weGAsXHJcbiAgICAgICAgICAgIHJyX2hlaWdodDogYCR7aGVpZ2h0fXB4YCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgaWYgKHRhZ05hbWUgPT09ICdpZnJhbWUnICYmICFrZWVwSWZyYW1lU3JjRm4oYXR0cmlidXRlcy5zcmMpKSB7XHJcbiAgICAgICAgaWYgKCFuLmNvbnRlbnREb2N1bWVudCkge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnJyX3NyYyA9IGF0dHJpYnV0ZXMuc3JjO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgYXR0cmlidXRlcy5zcmM7XHJcbiAgICB9XHJcbiAgICBsZXQgaXNDdXN0b21FbGVtZW50O1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAoY3VzdG9tRWxlbWVudHMuZ2V0KHRhZ05hbWUpKVxyXG4gICAgICAgICAgICBpc0N1c3RvbUVsZW1lbnQgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogTm9kZVR5cGUuRWxlbWVudCxcclxuICAgICAgICB0YWdOYW1lLFxyXG4gICAgICAgIGF0dHJpYnV0ZXMsXHJcbiAgICAgICAgY2hpbGROb2RlczogW10sXHJcbiAgICAgICAgaXNTVkc6IGlzU1ZHRWxlbWVudChuKSB8fCB1bmRlZmluZWQsXHJcbiAgICAgICAgbmVlZEJsb2NrLFxyXG4gICAgICAgIHJvb3RJZCxcclxuICAgICAgICBpc0N1c3RvbTogaXNDdXN0b21FbGVtZW50LFxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBsb3dlcklmRXhpc3RzKG1heWJlQXR0cikge1xyXG4gICAgaWYgKG1heWJlQXR0ciA9PT0gdW5kZWZpbmVkIHx8IG1heWJlQXR0ciA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBtYXliZUF0dHIudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzbGltRE9NRXhjbHVkZWQoc24sIHNsaW1ET01PcHRpb25zKSB7XHJcbiAgICBpZiAoc2xpbURPTU9wdGlvbnMuY29tbWVudCAmJiBzbi50eXBlID09PSBOb2RlVHlwZS5Db21tZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzbi50eXBlID09PSBOb2RlVHlwZS5FbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKHNsaW1ET01PcHRpb25zLnNjcmlwdCAmJlxyXG4gICAgICAgICAgICAoc24udGFnTmFtZSA9PT0gJ3NjcmlwdCcgfHxcclxuICAgICAgICAgICAgICAgIChzbi50YWdOYW1lID09PSAnbGluaycgJiZcclxuICAgICAgICAgICAgICAgICAgICAoc24uYXR0cmlidXRlcy5yZWwgPT09ICdwcmVsb2FkJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzbi5hdHRyaWJ1dGVzLnJlbCA9PT0gJ21vZHVsZXByZWxvYWQnKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNuLmF0dHJpYnV0ZXMuYXMgPT09ICdzY3JpcHQnKSB8fFxyXG4gICAgICAgICAgICAgICAgKHNuLnRhZ05hbWUgPT09ICdsaW5rJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNuLmF0dHJpYnV0ZXMucmVsID09PSAncHJlZmV0Y2gnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZW9mIHNuLmF0dHJpYnV0ZXMuaHJlZiA9PT0gJ3N0cmluZycgJiZcclxuICAgICAgICAgICAgICAgICAgICBleHRyYWN0RmlsZUV4dGVuc2lvbihzbi5hdHRyaWJ1dGVzLmhyZWYpID09PSAnanMnKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNsaW1ET01PcHRpb25zLmhlYWRGYXZpY29uICYmXHJcbiAgICAgICAgICAgICgoc24udGFnTmFtZSA9PT0gJ2xpbmsnICYmIHNuLmF0dHJpYnV0ZXMucmVsID09PSAnc2hvcnRjdXQgaWNvbicpIHx8XHJcbiAgICAgICAgICAgICAgICAoc24udGFnTmFtZSA9PT0gJ21ldGEnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKS5tYXRjaCgvXm1zYXBwbGljYXRpb24tdGlsZShpbWFnZXxjb2xvcikkLykgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAnYXBwbGljYXRpb24tbmFtZScgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLnJlbCkgPT09ICdpY29uJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMucmVsKSA9PT0gJ2FwcGxlLXRvdWNoLWljb24nIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5yZWwpID09PSAnc2hvcnRjdXQgaWNvbicpKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNuLnRhZ05hbWUgPT09ICdtZXRhJykge1xyXG4gICAgICAgICAgICBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFEZXNjS2V5d29yZHMgJiZcclxuICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKS5tYXRjaCgvXmRlc2NyaXB0aW9ufGtleXdvcmRzJC8pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkTWV0YVNvY2lhbCAmJlxyXG4gICAgICAgICAgICAgICAgKGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5wcm9wZXJ0eSkubWF0Y2goL14ob2d8dHdpdHRlcnxmYik6LykgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkubWF0Y2goL14ob2d8dHdpdHRlcik6LykgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICdwaW50ZXJlc3QnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFSb2JvdHMgJiZcclxuICAgICAgICAgICAgICAgIChsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICdyb2JvdHMnIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAnZ29vZ2xlYm90JyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ2Jpbmdib3QnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZE1ldGFIdHRwRXF1aXYgJiZcclxuICAgICAgICAgICAgICAgIHNuLmF0dHJpYnV0ZXNbJ2h0dHAtZXF1aXYnXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkTWV0YUF1dGhvcnNoaXAgJiZcclxuICAgICAgICAgICAgICAgIChsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICdhdXRob3InIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAnZ2VuZXJhdG9yJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ2ZyYW1ld29yaycgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICdwdWJsaXNoZXInIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAncHJvZ2lkJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5wcm9wZXJ0eSkubWF0Y2goL15hcnRpY2xlOi8pIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLnByb3BlcnR5KS5tYXRjaCgvXnByb2R1Y3Q6LykpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChzbGltRE9NT3B0aW9ucy5oZWFkTWV0YVZlcmlmaWNhdGlvbiAmJlxyXG4gICAgICAgICAgICAgICAgKGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ2dvb2dsZS1zaXRlLXZlcmlmaWNhdGlvbicgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICd5YW5kZXgtdmVyaWZpY2F0aW9uJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ2NzcmYtdG9rZW4nIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAncDpkb21haW5fdmVyaWZ5JyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGxvd2VySWZFeGlzdHMoc24uYXR0cmlidXRlcy5uYW1lKSA9PT0gJ3ZlcmlmeS12MScgfHxcclxuICAgICAgICAgICAgICAgICAgICBsb3dlcklmRXhpc3RzKHNuLmF0dHJpYnV0ZXMubmFtZSkgPT09ICd2ZXJpZmljYXRpb24nIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgbG93ZXJJZkV4aXN0cyhzbi5hdHRyaWJ1dGVzLm5hbWUpID09PSAnc2hvcGlmeS1jaGVja291dC1hcGktdG9rZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZnVuY3Rpb24gc2VyaWFsaXplTm9kZVdpdGhJZChuLCBvcHRpb25zKSB7XHJcbiAgICBjb25zdCB7IGRvYywgbWlycm9yLCBibG9ja0NsYXNzLCBibG9ja1NlbGVjdG9yLCBtYXNrVGV4dENsYXNzLCBtYXNrVGV4dFNlbGVjdG9yLCBza2lwQ2hpbGQgPSBmYWxzZSwgaW5saW5lU3R5bGVzaGVldCA9IHRydWUsIG1hc2tJbnB1dE9wdGlvbnMgPSB7fSwgbWFza1RleHRGbiwgbWFza0lucHV0Rm4sIHNsaW1ET01PcHRpb25zLCBkYXRhVVJMT3B0aW9ucyA9IHt9LCBpbmxpbmVJbWFnZXMgPSBmYWxzZSwgcmVjb3JkQ2FudmFzID0gZmFsc2UsIG9uU2VyaWFsaXplLCBvbklmcmFtZUxvYWQsIGlmcmFtZUxvYWRUaW1lb3V0ID0gNTAwMCwgb25TdHlsZXNoZWV0TG9hZCwgc3R5bGVzaGVldExvYWRUaW1lb3V0ID0gNTAwMCwga2VlcElmcmFtZVNyY0ZuID0gKCkgPT4gZmFsc2UsIG5ld2x5QWRkZWRFbGVtZW50ID0gZmFsc2UsIH0gPSBvcHRpb25zO1xyXG4gICAgbGV0IHsgbmVlZHNNYXNrIH0gPSBvcHRpb25zO1xyXG4gICAgbGV0IHsgcHJlc2VydmVXaGl0ZVNwYWNlID0gdHJ1ZSB9ID0gb3B0aW9ucztcclxuICAgIGlmICghbmVlZHNNYXNrICYmXHJcbiAgICAgICAgbi5jaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgY29uc3QgY2hlY2tBbmNlc3RvcnMgPSBuZWVkc01hc2sgPT09IHVuZGVmaW5lZDtcclxuICAgICAgICBuZWVkc01hc2sgPSBuZWVkTWFza2luZ1RleHQobiwgbWFza1RleHRDbGFzcywgbWFza1RleHRTZWxlY3RvciwgY2hlY2tBbmNlc3RvcnMpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgX3NlcmlhbGl6ZWROb2RlID0gc2VyaWFsaXplTm9kZShuLCB7XHJcbiAgICAgICAgZG9jLFxyXG4gICAgICAgIG1pcnJvcixcclxuICAgICAgICBibG9ja0NsYXNzLFxyXG4gICAgICAgIGJsb2NrU2VsZWN0b3IsXHJcbiAgICAgICAgbmVlZHNNYXNrLFxyXG4gICAgICAgIGlubGluZVN0eWxlc2hlZXQsXHJcbiAgICAgICAgbWFza0lucHV0T3B0aW9ucyxcclxuICAgICAgICBtYXNrVGV4dEZuLFxyXG4gICAgICAgIG1hc2tJbnB1dEZuLFxyXG4gICAgICAgIGRhdGFVUkxPcHRpb25zLFxyXG4gICAgICAgIGlubGluZUltYWdlcyxcclxuICAgICAgICByZWNvcmRDYW52YXMsXHJcbiAgICAgICAga2VlcElmcmFtZVNyY0ZuLFxyXG4gICAgICAgIG5ld2x5QWRkZWRFbGVtZW50LFxyXG4gICAgfSk7XHJcbiAgICBpZiAoIV9zZXJpYWxpemVkTm9kZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihuLCAnbm90IHNlcmlhbGl6ZWQnKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGxldCBpZDtcclxuICAgIGlmIChtaXJyb3IuaGFzTm9kZShuKSkge1xyXG4gICAgICAgIGlkID0gbWlycm9yLmdldElkKG4pO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoc2xpbURPTUV4Y2x1ZGVkKF9zZXJpYWxpemVkTm9kZSwgc2xpbURPTU9wdGlvbnMpIHx8XHJcbiAgICAgICAgKCFwcmVzZXJ2ZVdoaXRlU3BhY2UgJiZcclxuICAgICAgICAgICAgX3NlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLlRleHQgJiZcclxuICAgICAgICAgICAgIV9zZXJpYWxpemVkTm9kZS5pc1N0eWxlICYmXHJcbiAgICAgICAgICAgICFfc2VyaWFsaXplZE5vZGUudGV4dENvbnRlbnQucmVwbGFjZSgvXlxccyt8XFxzKyQvZ20sICcnKS5sZW5ndGgpKSB7XHJcbiAgICAgICAgaWQgPSBJR05PUkVEX05PREU7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZCA9IGdlbklkKCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXJpYWxpemVkTm9kZSA9IE9iamVjdC5hc3NpZ24oX3NlcmlhbGl6ZWROb2RlLCB7IGlkIH0pO1xyXG4gICAgbWlycm9yLmFkZChuLCBzZXJpYWxpemVkTm9kZSk7XHJcbiAgICBpZiAoaWQgPT09IElHTk9SRURfTk9ERSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKG9uU2VyaWFsaXplKSB7XHJcbiAgICAgICAgb25TZXJpYWxpemUobik7XHJcbiAgICB9XHJcbiAgICBsZXQgcmVjb3JkQ2hpbGQgPSAhc2tpcENoaWxkO1xyXG4gICAgaWYgKHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpIHtcclxuICAgICAgICByZWNvcmRDaGlsZCA9IHJlY29yZENoaWxkICYmICFzZXJpYWxpemVkTm9kZS5uZWVkQmxvY2s7XHJcbiAgICAgICAgZGVsZXRlIHNlcmlhbGl6ZWROb2RlLm5lZWRCbG9jaztcclxuICAgICAgICBjb25zdCBzaGFkb3dSb290ID0gbi5zaGFkb3dSb290O1xyXG4gICAgICAgIGlmIChzaGFkb3dSb290ICYmIGlzTmF0aXZlU2hhZG93RG9tKHNoYWRvd1Jvb3QpKVxyXG4gICAgICAgICAgICBzZXJpYWxpemVkTm9kZS5pc1NoYWRvd0hvc3QgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKChzZXJpYWxpemVkTm9kZS50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudCB8fFxyXG4gICAgICAgIHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpICYmXHJcbiAgICAgICAgcmVjb3JkQ2hpbGQpIHtcclxuICAgICAgICBpZiAoc2xpbURPTU9wdGlvbnMuaGVhZFdoaXRlc3BhY2UgJiZcclxuICAgICAgICAgICAgc2VyaWFsaXplZE5vZGUudHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCAmJlxyXG4gICAgICAgICAgICBzZXJpYWxpemVkTm9kZS50YWdOYW1lID09PSAnaGVhZCcpIHtcclxuICAgICAgICAgICAgcHJlc2VydmVXaGl0ZVNwYWNlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGJ5cGFzc09wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGRvYyxcclxuICAgICAgICAgICAgbWlycm9yLFxyXG4gICAgICAgICAgICBibG9ja0NsYXNzLFxyXG4gICAgICAgICAgICBibG9ja1NlbGVjdG9yLFxyXG4gICAgICAgICAgICBuZWVkc01hc2ssXHJcbiAgICAgICAgICAgIG1hc2tUZXh0Q2xhc3MsXHJcbiAgICAgICAgICAgIG1hc2tUZXh0U2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHNraXBDaGlsZCxcclxuICAgICAgICAgICAgaW5saW5lU3R5bGVzaGVldCxcclxuICAgICAgICAgICAgbWFza0lucHV0T3B0aW9ucyxcclxuICAgICAgICAgICAgbWFza1RleHRGbixcclxuICAgICAgICAgICAgbWFza0lucHV0Rm4sXHJcbiAgICAgICAgICAgIHNsaW1ET01PcHRpb25zLFxyXG4gICAgICAgICAgICBkYXRhVVJMT3B0aW9ucyxcclxuICAgICAgICAgICAgaW5saW5lSW1hZ2VzLFxyXG4gICAgICAgICAgICByZWNvcmRDYW52YXMsXHJcbiAgICAgICAgICAgIHByZXNlcnZlV2hpdGVTcGFjZSxcclxuICAgICAgICAgICAgb25TZXJpYWxpemUsXHJcbiAgICAgICAgICAgIG9uSWZyYW1lTG9hZCxcclxuICAgICAgICAgICAgaWZyYW1lTG9hZFRpbWVvdXQsXHJcbiAgICAgICAgICAgIG9uU3R5bGVzaGVldExvYWQsXHJcbiAgICAgICAgICAgIHN0eWxlc2hlZXRMb2FkVGltZW91dCxcclxuICAgICAgICAgICAga2VlcElmcmFtZVNyY0ZuLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQgJiZcclxuICAgICAgICAgICAgc2VyaWFsaXplZE5vZGUudGFnTmFtZSA9PT0gJ3RleHRhcmVhJyAmJlxyXG4gICAgICAgICAgICBzZXJpYWxpemVkTm9kZS5hdHRyaWJ1dGVzLnZhbHVlICE9PSB1bmRlZmluZWQpIDtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZE4gb2YgQXJyYXkuZnJvbShuLmNoaWxkTm9kZXMpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkQ2hpbGROb2RlID0gc2VyaWFsaXplTm9kZVdpdGhJZChjaGlsZE4sIGJ5cGFzc09wdGlvbnMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlcmlhbGl6ZWRDaGlsZE5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVkTm9kZS5jaGlsZE5vZGVzLnB1c2goc2VyaWFsaXplZENoaWxkTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzRWxlbWVudChuKSAmJiBuLnNoYWRvd1Jvb3QpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZE4gb2YgQXJyYXkuZnJvbShuLnNoYWRvd1Jvb3QuY2hpbGROb2RlcykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRDaGlsZE5vZGUgPSBzZXJpYWxpemVOb2RlV2l0aElkKGNoaWxkTiwgYnlwYXNzT3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VyaWFsaXplZENoaWxkTm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlzTmF0aXZlU2hhZG93RG9tKG4uc2hhZG93Um9vdCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNlcmlhbGl6ZWRDaGlsZE5vZGUuaXNTaGFkb3cgPSB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXJpYWxpemVkTm9kZS5jaGlsZE5vZGVzLnB1c2goc2VyaWFsaXplZENoaWxkTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobi5wYXJlbnROb2RlICYmXHJcbiAgICAgICAgaXNTaGFkb3dSb290KG4ucGFyZW50Tm9kZSkgJiZcclxuICAgICAgICBpc05hdGl2ZVNoYWRvd0RvbShuLnBhcmVudE5vZGUpKSB7XHJcbiAgICAgICAgc2VyaWFsaXplZE5vZGUuaXNTaGFkb3cgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQgJiZcclxuICAgICAgICBzZXJpYWxpemVkTm9kZS50YWdOYW1lID09PSAnaWZyYW1lJykge1xyXG4gICAgICAgIG9uY2VJZnJhbWVMb2FkZWQobiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpZnJhbWVEb2MgPSBuLmNvbnRlbnREb2N1bWVudDtcclxuICAgICAgICAgICAgaWYgKGlmcmFtZURvYyAmJiBvbklmcmFtZUxvYWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWRJZnJhbWVOb2RlID0gc2VyaWFsaXplTm9kZVdpdGhJZChpZnJhbWVEb2MsIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2M6IGlmcmFtZURvYyxcclxuICAgICAgICAgICAgICAgICAgICBtaXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tDbGFzcyxcclxuICAgICAgICAgICAgICAgICAgICBibG9ja1NlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgICAgIG5lZWRzTWFzayxcclxuICAgICAgICAgICAgICAgICAgICBtYXNrVGV4dENsYXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tUZXh0U2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgc2tpcENoaWxkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBpbmxpbmVTdHlsZXNoZWV0LFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tJbnB1dE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFza1RleHRGbixcclxuICAgICAgICAgICAgICAgICAgICBtYXNrSW5wdXRGbixcclxuICAgICAgICAgICAgICAgICAgICBzbGltRE9NT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhVVJMT3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBpbmxpbmVJbWFnZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjb3JkQ2FudmFzLFxyXG4gICAgICAgICAgICAgICAgICAgIHByZXNlcnZlV2hpdGVTcGFjZSxcclxuICAgICAgICAgICAgICAgICAgICBvblNlcmlhbGl6ZSxcclxuICAgICAgICAgICAgICAgICAgICBvbklmcmFtZUxvYWQsXHJcbiAgICAgICAgICAgICAgICAgICAgaWZyYW1lTG9hZFRpbWVvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdHlsZXNoZWV0TG9hZCxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZXNoZWV0TG9hZFRpbWVvdXQsXHJcbiAgICAgICAgICAgICAgICAgICAga2VlcElmcmFtZVNyY0ZuLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VyaWFsaXplZElmcmFtZU5vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBvbklmcmFtZUxvYWQobiwgc2VyaWFsaXplZElmcmFtZU5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgaWZyYW1lTG9hZFRpbWVvdXQpO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlcmlhbGl6ZWROb2RlLnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQgJiZcclxuICAgICAgICBzZXJpYWxpemVkTm9kZS50YWdOYW1lID09PSAnbGluaycgJiZcclxuICAgICAgICB0eXBlb2Ygc2VyaWFsaXplZE5vZGUuYXR0cmlidXRlcy5yZWwgPT09ICdzdHJpbmcnICYmXHJcbiAgICAgICAgKHNlcmlhbGl6ZWROb2RlLmF0dHJpYnV0ZXMucmVsID09PSAnc3R5bGVzaGVldCcgfHxcclxuICAgICAgICAgICAgKHNlcmlhbGl6ZWROb2RlLmF0dHJpYnV0ZXMucmVsID09PSAncHJlbG9hZCcgJiZcclxuICAgICAgICAgICAgICAgIHR5cGVvZiBzZXJpYWxpemVkTm9kZS5hdHRyaWJ1dGVzLmhyZWYgPT09ICdzdHJpbmcnICYmXHJcbiAgICAgICAgICAgICAgICBleHRyYWN0RmlsZUV4dGVuc2lvbihzZXJpYWxpemVkTm9kZS5hdHRyaWJ1dGVzLmhyZWYpID09PSAnY3NzJykpKSB7XHJcbiAgICAgICAgb25jZVN0eWxlc2hlZXRMb2FkZWQobiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAob25TdHlsZXNoZWV0TG9hZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZExpbmtOb2RlID0gc2VyaWFsaXplTm9kZVdpdGhJZChuLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pcnJvcixcclxuICAgICAgICAgICAgICAgICAgICBibG9ja0NsYXNzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrU2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICAgICAgbmVlZHNNYXNrLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tUZXh0Q2xhc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFza1RleHRTZWxlY3RvcixcclxuICAgICAgICAgICAgICAgICAgICBza2lwQ2hpbGQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZVN0eWxlc2hlZXQsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFza0lucHV0T3B0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBtYXNrVGV4dEZuLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tJbnB1dEZuLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaW1ET01PcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFVUkxPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIGlubGluZUltYWdlcyxcclxuICAgICAgICAgICAgICAgICAgICByZWNvcmRDYW52YXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJlc2VydmVXaGl0ZVNwYWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VyaWFsaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uSWZyYW1lTG9hZCxcclxuICAgICAgICAgICAgICAgICAgICBpZnJhbWVMb2FkVGltZW91dCxcclxuICAgICAgICAgICAgICAgICAgICBvblN0eWxlc2hlZXRMb2FkLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlc2hlZXRMb2FkVGltZW91dCxcclxuICAgICAgICAgICAgICAgICAgICBrZWVwSWZyYW1lU3JjRm4sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChzZXJpYWxpemVkTGlua05vZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBvblN0eWxlc2hlZXRMb2FkKG4sIHNlcmlhbGl6ZWRMaW5rTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCBzdHlsZXNoZWV0TG9hZFRpbWVvdXQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNlcmlhbGl6ZWROb2RlO1xyXG59XHJcbmZ1bmN0aW9uIHNuYXBzaG90KG4sIG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IHsgbWlycm9yID0gbmV3IE1pcnJvcigpLCBibG9ja0NsYXNzID0gJ3JyLWJsb2NrJywgYmxvY2tTZWxlY3RvciA9IG51bGwsIG1hc2tUZXh0Q2xhc3MgPSAncnItbWFzaycsIG1hc2tUZXh0U2VsZWN0b3IgPSBudWxsLCBpbmxpbmVTdHlsZXNoZWV0ID0gdHJ1ZSwgaW5saW5lSW1hZ2VzID0gZmFsc2UsIHJlY29yZENhbnZhcyA9IGZhbHNlLCBtYXNrQWxsSW5wdXRzID0gZmFsc2UsIG1hc2tUZXh0Rm4sIG1hc2tJbnB1dEZuLCBzbGltRE9NID0gZmFsc2UsIGRhdGFVUkxPcHRpb25zLCBwcmVzZXJ2ZVdoaXRlU3BhY2UsIG9uU2VyaWFsaXplLCBvbklmcmFtZUxvYWQsIGlmcmFtZUxvYWRUaW1lb3V0LCBvblN0eWxlc2hlZXRMb2FkLCBzdHlsZXNoZWV0TG9hZFRpbWVvdXQsIGtlZXBJZnJhbWVTcmNGbiA9ICgpID0+IGZhbHNlLCB9ID0gb3B0aW9ucyB8fCB7fTtcclxuICAgIGNvbnN0IG1hc2tJbnB1dE9wdGlvbnMgPSBtYXNrQWxsSW5wdXRzID09PSB0cnVlXHJcbiAgICAgICAgPyB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB0cnVlLFxyXG4gICAgICAgICAgICBkYXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAnZGF0ZXRpbWUtbG9jYWwnOiB0cnVlLFxyXG4gICAgICAgICAgICBlbWFpbDogdHJ1ZSxcclxuICAgICAgICAgICAgbW9udGg6IHRydWUsXHJcbiAgICAgICAgICAgIG51bWJlcjogdHJ1ZSxcclxuICAgICAgICAgICAgcmFuZ2U6IHRydWUsXHJcbiAgICAgICAgICAgIHNlYXJjaDogdHJ1ZSxcclxuICAgICAgICAgICAgdGVsOiB0cnVlLFxyXG4gICAgICAgICAgICB0ZXh0OiB0cnVlLFxyXG4gICAgICAgICAgICB0aW1lOiB0cnVlLFxyXG4gICAgICAgICAgICB1cmw6IHRydWUsXHJcbiAgICAgICAgICAgIHdlZWs6IHRydWUsXHJcbiAgICAgICAgICAgIHRleHRhcmVhOiB0cnVlLFxyXG4gICAgICAgICAgICBzZWxlY3Q6IHRydWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgICA6IG1hc2tBbGxJbnB1dHMgPT09IGZhbHNlXHJcbiAgICAgICAgICAgID8ge1xyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRydWUsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOiBtYXNrQWxsSW5wdXRzO1xyXG4gICAgY29uc3Qgc2xpbURPTU9wdGlvbnMgPSBzbGltRE9NID09PSB0cnVlIHx8IHNsaW1ET00gPT09ICdhbGwnXHJcbiAgICAgICAgP1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzY3JpcHQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaGVhZEZhdmljb246IHRydWUsXHJcbiAgICAgICAgICAgICAgICBoZWFkV2hpdGVzcGFjZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGhlYWRNZXRhRGVzY0tleXdvcmRzOiBzbGltRE9NID09PSAnYWxsJyxcclxuICAgICAgICAgICAgICAgIGhlYWRNZXRhU29jaWFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaGVhZE1ldGFSb2JvdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBoZWFkTWV0YUh0dHBFcXVpdjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGhlYWRNZXRhQXV0aG9yc2hpcDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGhlYWRNZXRhVmVyaWZpY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgOiBzbGltRE9NID09PSBmYWxzZVxyXG4gICAgICAgICAgICA/IHt9XHJcbiAgICAgICAgICAgIDogc2xpbURPTTtcclxuICAgIHJldHVybiBzZXJpYWxpemVOb2RlV2l0aElkKG4sIHtcclxuICAgICAgICBkb2M6IG4sXHJcbiAgICAgICAgbWlycm9yLFxyXG4gICAgICAgIGJsb2NrQ2xhc3MsXHJcbiAgICAgICAgYmxvY2tTZWxlY3RvcixcclxuICAgICAgICBtYXNrVGV4dENsYXNzLFxyXG4gICAgICAgIG1hc2tUZXh0U2VsZWN0b3IsXHJcbiAgICAgICAgc2tpcENoaWxkOiBmYWxzZSxcclxuICAgICAgICBpbmxpbmVTdHlsZXNoZWV0LFxyXG4gICAgICAgIG1hc2tJbnB1dE9wdGlvbnMsXHJcbiAgICAgICAgbWFza1RleHRGbixcclxuICAgICAgICBtYXNrSW5wdXRGbixcclxuICAgICAgICBzbGltRE9NT3B0aW9ucyxcclxuICAgICAgICBkYXRhVVJMT3B0aW9ucyxcclxuICAgICAgICBpbmxpbmVJbWFnZXMsXHJcbiAgICAgICAgcmVjb3JkQ2FudmFzLFxyXG4gICAgICAgIHByZXNlcnZlV2hpdGVTcGFjZSxcclxuICAgICAgICBvblNlcmlhbGl6ZSxcclxuICAgICAgICBvbklmcmFtZUxvYWQsXHJcbiAgICAgICAgaWZyYW1lTG9hZFRpbWVvdXQsXHJcbiAgICAgICAgb25TdHlsZXNoZWV0TG9hZCxcclxuICAgICAgICBzdHlsZXNoZWV0TG9hZFRpbWVvdXQsXHJcbiAgICAgICAga2VlcElmcmFtZVNyY0ZuLFxyXG4gICAgICAgIG5ld2x5QWRkZWRFbGVtZW50OiBmYWxzZSxcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHZpc2l0U25hcHNob3Qobm9kZSwgb25WaXNpdCkge1xyXG4gICAgZnVuY3Rpb24gd2FsayhjdXJyZW50KSB7XHJcbiAgICAgICAgb25WaXNpdChjdXJyZW50KTtcclxuICAgICAgICBpZiAoY3VycmVudC50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudCB8fFxyXG4gICAgICAgICAgICBjdXJyZW50LnR5cGUgPT09IE5vZGVUeXBlLkVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY3VycmVudC5jaGlsZE5vZGVzLmZvckVhY2god2Fsayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd2Fsayhub2RlKTtcclxufVxyXG5mdW5jdGlvbiBjbGVhbnVwU25hcHNob3QoKSB7XHJcbiAgICBfaWQgPSAxO1xyXG59XG5cbmNvbnN0IGNvbW1lbnRyZSA9IC9cXC9cXCpbXipdKlxcKisoW14vKl1bXipdKlxcKispKlxcLy9nO1xyXG5mdW5jdGlvbiBwYXJzZShjc3MsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgbGV0IGxpbmVubyA9IDE7XHJcbiAgICBsZXQgY29sdW1uID0gMTtcclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVBvc2l0aW9uKHN0cikge1xyXG4gICAgICAgIGNvbnN0IGxpbmVzID0gc3RyLm1hdGNoKC9cXG4vZyk7XHJcbiAgICAgICAgaWYgKGxpbmVzKSB7XHJcbiAgICAgICAgICAgIGxpbmVubyArPSBsaW5lcy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGkgPSBzdHIubGFzdEluZGV4T2YoJ1xcbicpO1xyXG4gICAgICAgIGNvbHVtbiA9IGkgPT09IC0xID8gY29sdW1uICsgc3RyLmxlbmd0aCA6IHN0ci5sZW5ndGggLSBpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcG9zaXRpb24oKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB7IGxpbmU6IGxpbmVubywgY29sdW1uIH07XHJcbiAgICAgICAgcmV0dXJuIChub2RlKSA9PiB7XHJcbiAgICAgICAgICAgIG5vZGUucG9zaXRpb24gPSBuZXcgUG9zaXRpb24oc3RhcnQpO1xyXG4gICAgICAgICAgICB3aGl0ZXNwYWNlKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBjbGFzcyBQb3NpdGlvbiB7XHJcbiAgICAgICAgY29uc3RydWN0b3Ioc3RhcnQpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLmVuZCA9IHsgbGluZTogbGluZW5vLCBjb2x1bW4gfTtcclxuICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBvcHRpb25zLnNvdXJjZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBQb3NpdGlvbi5wcm90b3R5cGUuY29udGVudCA9IGNzcztcclxuICAgIGNvbnN0IGVycm9yc0xpc3QgPSBbXTtcclxuICAgIGZ1bmN0aW9uIGVycm9yKG1zZykge1xyXG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcihgJHtvcHRpb25zLnNvdXJjZSB8fCAnJ306JHtsaW5lbm99OiR7Y29sdW1ufTogJHttc2d9YCk7XHJcbiAgICAgICAgZXJyLnJlYXNvbiA9IG1zZztcclxuICAgICAgICBlcnIuZmlsZW5hbWUgPSBvcHRpb25zLnNvdXJjZTtcclxuICAgICAgICBlcnIubGluZSA9IGxpbmVubztcclxuICAgICAgICBlcnIuY29sdW1uID0gY29sdW1uO1xyXG4gICAgICAgIGVyci5zb3VyY2UgPSBjc3M7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuc2lsZW50KSB7XHJcbiAgICAgICAgICAgIGVycm9yc0xpc3QucHVzaChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHN0eWxlc2hlZXQoKSB7XHJcbiAgICAgICAgY29uc3QgcnVsZXNMaXN0ID0gcnVsZXMoKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0eXBlOiAnc3R5bGVzaGVldCcsXHJcbiAgICAgICAgICAgIHN0eWxlc2hlZXQ6IHtcclxuICAgICAgICAgICAgICAgIHNvdXJjZTogb3B0aW9ucy5zb3VyY2UsXHJcbiAgICAgICAgICAgICAgICBydWxlczogcnVsZXNMaXN0LFxyXG4gICAgICAgICAgICAgICAgcGFyc2luZ0Vycm9yczogZXJyb3JzTGlzdCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb3BlbigpIHtcclxuICAgICAgICByZXR1cm4gbWF0Y2goL157XFxzKi8pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xvc2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoKC9efS8pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcnVsZXMoKSB7XHJcbiAgICAgICAgbGV0IG5vZGU7XHJcbiAgICAgICAgY29uc3QgcnVsZXMgPSBbXTtcclxuICAgICAgICB3aGl0ZXNwYWNlKCk7XHJcbiAgICAgICAgY29tbWVudHMocnVsZXMpO1xyXG4gICAgICAgIHdoaWxlIChjc3MubGVuZ3RoICYmIGNzcy5jaGFyQXQoMCkgIT09ICd9JyAmJiAobm9kZSA9IGF0cnVsZSgpIHx8IHJ1bGUoKSkpIHtcclxuICAgICAgICAgICAgaWYgKG5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHJ1bGVzLnB1c2gobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBjb21tZW50cyhydWxlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJ1bGVzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gbWF0Y2gocmUpIHtcclxuICAgICAgICBjb25zdCBtID0gcmUuZXhlYyhjc3MpO1xyXG4gICAgICAgIGlmICghbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN0ciA9IG1bMF07XHJcbiAgICAgICAgdXBkYXRlUG9zaXRpb24oc3RyKTtcclxuICAgICAgICBjc3MgPSBjc3Muc2xpY2Uoc3RyLmxlbmd0aCk7XHJcbiAgICAgICAgcmV0dXJuIG07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB3aGl0ZXNwYWNlKCkge1xyXG4gICAgICAgIG1hdGNoKC9eXFxzKi8pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY29tbWVudHMocnVsZXMgPSBbXSkge1xyXG4gICAgICAgIGxldCBjO1xyXG4gICAgICAgIHdoaWxlICgoYyA9IGNvbW1lbnQoKSkpIHtcclxuICAgICAgICAgICAgaWYgKGMpIHtcclxuICAgICAgICAgICAgICAgIHJ1bGVzLnB1c2goYyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYyA9IGNvbW1lbnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJ1bGVzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY29tbWVudCgpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBwb3NpdGlvbigpO1xyXG4gICAgICAgIGlmICgnLycgIT09IGNzcy5jaGFyQXQoMCkgfHwgJyonICE9PSBjc3MuY2hhckF0KDEpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGkgPSAyO1xyXG4gICAgICAgIHdoaWxlICgnJyAhPT0gY3NzLmNoYXJBdChpKSAmJlxyXG4gICAgICAgICAgICAoJyonICE9PSBjc3MuY2hhckF0KGkpIHx8ICcvJyAhPT0gY3NzLmNoYXJBdChpICsgMSkpKSB7XHJcbiAgICAgICAgICAgICsraTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaSArPSAyO1xyXG4gICAgICAgIGlmICgnJyA9PT0gY3NzLmNoYXJBdChpIC0gMSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKCdFbmQgb2YgY29tbWVudCBtaXNzaW5nJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN0ciA9IGNzcy5zbGljZSgyLCBpIC0gMik7XHJcbiAgICAgICAgY29sdW1uICs9IDI7XHJcbiAgICAgICAgdXBkYXRlUG9zaXRpb24oc3RyKTtcclxuICAgICAgICBjc3MgPSBjc3Muc2xpY2UoaSk7XHJcbiAgICAgICAgY29sdW1uICs9IDI7XHJcbiAgICAgICAgcmV0dXJuIHBvcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdjb21tZW50JyxcclxuICAgICAgICAgICAgY29tbWVudDogc3RyLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2VsZWN0b3IoKSB7XHJcbiAgICAgICAgd2hpdGVzcGFjZSgpO1xyXG4gICAgICAgIHdoaWxlIChjc3NbMF0gPT0gJ30nKSB7XHJcbiAgICAgICAgICAgIGVycm9yKCdleHRyYSBjbG9zaW5nIGJyYWNrZXQnKTtcclxuICAgICAgICAgICAgY3NzID0gY3NzLnNsaWNlKDEpO1xyXG4gICAgICAgICAgICB3aGl0ZXNwYWNlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvXigoKD88IVxcXFwpXCIoPzpcXFxcXCJ8W15cIl0pKlwifCg/PCFcXFxcKScoPzpcXFxcJ3xbXiddKSonfFtee10pKykvKTtcclxuICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjbGVhbmVkSW5wdXQgPSBtWzBdXHJcbiAgICAgICAgICAgIC50cmltKClcclxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcL1xcKihbXipdfFtcXHJcXG5dfChcXCorKFteKi9dfFtcXHJcXG5dKSkpKlxcKlxcLysvZywgJycpXHJcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cIig/OlxcXFxcInxbXlwiXSkqXCJ8Jyg/OlxcXFwnfFteJ10pKicvZywgKG0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG0ucmVwbGFjZSgvLC9nLCAnXFx1MjAwQycpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBjdXN0b21TcGxpdChjbGVhbmVkSW5wdXQpLm1hcCgocykgPT4gcy5yZXBsYWNlKC9cXHUyMDBDL2csICcsJykudHJpbSgpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGN1c3RvbVNwbGl0KGlucHV0KSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTZWdtZW50ID0gJyc7XHJcbiAgICAgICAgbGV0IGRlcHRoUGFyZW50aGVzZXMgPSAwO1xyXG4gICAgICAgIGxldCBkZXB0aEJyYWNrZXRzID0gMDtcclxuICAgICAgICBsZXQgY3VycmVudFN0cmluZ0NoYXIgPSBudWxsO1xyXG4gICAgICAgIGZvciAoY29uc3QgY2hhciBvZiBpbnB1dCkge1xyXG4gICAgICAgICAgICBjb25zdCBoYXNTdHJpbmdFc2NhcGUgPSBjdXJyZW50U2VnbWVudC5lbmRzV2l0aCgnXFxcXCcpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFN0cmluZ0NoYXIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3RyaW5nQ2hhciA9PT0gY2hhciAmJiAhaGFzU3RyaW5nRXNjYXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFN0cmluZ0NoYXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09ICcoJykge1xyXG4gICAgICAgICAgICAgICAgZGVwdGhQYXJlbnRoZXNlcysrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09ICcpJykge1xyXG4gICAgICAgICAgICAgICAgZGVwdGhQYXJlbnRoZXNlcy0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09ICdbJykge1xyXG4gICAgICAgICAgICAgICAgZGVwdGhCcmFja2V0cysrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoYXIgPT09ICddJykge1xyXG4gICAgICAgICAgICAgICAgZGVwdGhCcmFja2V0cy0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKCdcXCdcIicuaW5jbHVkZXMoY2hhcikpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmdDaGFyID0gY2hhcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2hhciA9PT0gJywnICYmIGRlcHRoUGFyZW50aGVzZXMgPT09IDAgJiYgZGVwdGhCcmFja2V0cyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goY3VycmVudFNlZ21lbnQpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFNlZ21lbnQgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTZWdtZW50ICs9IGNoYXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTZWdtZW50KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnRTZWdtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlY2xhcmF0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgcHJvcE1hdGNoID0gbWF0Y2goL14oXFwqP1stI1xcL1xcKlxcXFxcXHddKyhcXFtbMC05YS16Xy1dK1xcXSk/KVxccyovKTtcclxuICAgICAgICBpZiAoIXByb3BNYXRjaCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHByb3AgPSB0cmltKHByb3BNYXRjaFswXSk7XHJcbiAgICAgICAgaWYgKCFtYXRjaCgvXjpcXHMqLykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKGBwcm9wZXJ0eSBtaXNzaW5nICc6J2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2YWwgPSBtYXRjaCgvXigoPzonKD86XFxcXCd8LikqPyd8XCIoPzpcXFxcXCJ8LikqP1wifFxcKFteXFwpXSo/XFwpfFtefTtdKSspLyk7XHJcbiAgICAgICAgY29uc3QgcmV0ID0gcG9zKHtcclxuICAgICAgICAgICAgdHlwZTogJ2RlY2xhcmF0aW9uJyxcclxuICAgICAgICAgICAgcHJvcGVydHk6IHByb3AucmVwbGFjZShjb21tZW50cmUsICcnKSxcclxuICAgICAgICAgICAgdmFsdWU6IHZhbCA/IHRyaW0odmFsWzBdKS5yZXBsYWNlKGNvbW1lbnRyZSwgJycpIDogJycsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWF0Y2goL15bO1xcc10qLyk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlY2xhcmF0aW9ucygpIHtcclxuICAgICAgICBjb25zdCBkZWNscyA9IFtdO1xyXG4gICAgICAgIGlmICghb3BlbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihgbWlzc2luZyAneydgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29tbWVudHMoZGVjbHMpO1xyXG4gICAgICAgIGxldCBkZWNsO1xyXG4gICAgICAgIHdoaWxlICgoZGVjbCA9IGRlY2xhcmF0aW9uKCkpKSB7XHJcbiAgICAgICAgICAgIGlmIChkZWNsICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgZGVjbHMucHVzaChkZWNsKTtcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzKGRlY2xzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkZWNsID0gZGVjbGFyYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFjbG9zZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihgbWlzc2luZyAnfSdgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRlY2xzO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24ga2V5ZnJhbWUoKSB7XHJcbiAgICAgICAgbGV0IG07XHJcbiAgICAgICAgY29uc3QgdmFscyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHBvc2l0aW9uKCk7XHJcbiAgICAgICAgd2hpbGUgKChtID0gbWF0Y2goL14oKFxcZCtcXC5cXGQrfFxcLlxcZCt8XFxkKyklP3xbYS16XSspXFxzKi8pKSkge1xyXG4gICAgICAgICAgICB2YWxzLnB1c2gobVsxXSk7XHJcbiAgICAgICAgICAgIG1hdGNoKC9eLFxccyovKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF2YWxzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3Moe1xyXG4gICAgICAgICAgICB0eXBlOiAna2V5ZnJhbWUnLFxyXG4gICAgICAgICAgICB2YWx1ZXM6IHZhbHMsXHJcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uczogZGVjbGFyYXRpb25zKCksXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdGtleWZyYW1lcygpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBwb3NpdGlvbigpO1xyXG4gICAgICAgIGxldCBtID0gbWF0Y2goL15AKFstXFx3XSspP2tleWZyYW1lc1xccyovKTtcclxuICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2ZW5kb3IgPSBtWzFdO1xyXG4gICAgICAgIG0gPSBtYXRjaCgvXihbLVxcd10rKVxccyovKTtcclxuICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKCdAa2V5ZnJhbWVzIG1pc3NpbmcgbmFtZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuYW1lID0gbVsxXTtcclxuICAgICAgICBpZiAoIW9wZW4oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoYEBrZXlmcmFtZXMgbWlzc2luZyAneydgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZyYW1lO1xyXG4gICAgICAgIGxldCBmcmFtZXMgPSBjb21tZW50cygpO1xyXG4gICAgICAgIHdoaWxlICgoZnJhbWUgPSBrZXlmcmFtZSgpKSkge1xyXG4gICAgICAgICAgICBmcmFtZXMucHVzaChmcmFtZSk7XHJcbiAgICAgICAgICAgIGZyYW1lcyA9IGZyYW1lcy5jb25jYXQoY29tbWVudHMoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghY2xvc2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoYEBrZXlmcmFtZXMgbWlzc2luZyAnfSdgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdrZXlmcmFtZXMnLFxyXG4gICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICB2ZW5kb3IsXHJcbiAgICAgICAgICAgIGtleWZyYW1lczogZnJhbWVzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXRzdXBwb3J0cygpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBwb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvXkBzdXBwb3J0cyAqKFtee10rKS8pO1xyXG4gICAgICAgIGlmICghbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN1cHBvcnRzID0gdHJpbShtWzFdKTtcclxuICAgICAgICBpZiAoIW9wZW4oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoYEBzdXBwb3J0cyBtaXNzaW5nICd7J2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdHlsZSA9IGNvbW1lbnRzKCkuY29uY2F0KHJ1bGVzKCkpO1xyXG4gICAgICAgIGlmICghY2xvc2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoYEBzdXBwb3J0cyBtaXNzaW5nICd9J2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zKHtcclxuICAgICAgICAgICAgdHlwZTogJ3N1cHBvcnRzJyxcclxuICAgICAgICAgICAgc3VwcG9ydHMsXHJcbiAgICAgICAgICAgIHJ1bGVzOiBzdHlsZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF0aG9zdCgpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBwb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvXkBob3N0XFxzKi8pO1xyXG4gICAgICAgIGlmICghbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghb3BlbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihgQGhvc3QgbWlzc2luZyAneydgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBjb21tZW50cygpLmNvbmNhdChydWxlcygpKTtcclxuICAgICAgICBpZiAoIWNsb3NlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yKGBAaG9zdCBtaXNzaW5nICd9J2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zKHtcclxuICAgICAgICAgICAgdHlwZTogJ2hvc3QnLFxyXG4gICAgICAgICAgICBydWxlczogc3R5bGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdG1lZGlhKCkge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoKC9eQG1lZGlhICooW157XSspLyk7XHJcbiAgICAgICAgaWYgKCFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgbWVkaWEgPSB0cmltKG1bMV0pO1xyXG4gICAgICAgIGlmICghb3BlbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihgQG1lZGlhIG1pc3NpbmcgJ3snYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN0eWxlID0gY29tbWVudHMoKS5jb25jYXQocnVsZXMoKSk7XHJcbiAgICAgICAgaWYgKCFjbG9zZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihgQG1lZGlhIG1pc3NpbmcgJ30nYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwb3Moe1xyXG4gICAgICAgICAgICB0eXBlOiAnbWVkaWEnLFxyXG4gICAgICAgICAgICBtZWRpYSxcclxuICAgICAgICAgICAgcnVsZXM6IHN0eWxlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXRjdXN0b21tZWRpYSgpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBwb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvXkBjdXN0b20tbWVkaWFcXHMrKC0tW15cXHNdKylcXHMqKFteeztdKyk7Lyk7XHJcbiAgICAgICAgaWYgKCFtKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdjdXN0b20tbWVkaWEnLFxyXG4gICAgICAgICAgICBuYW1lOiB0cmltKG1bMV0pLFxyXG4gICAgICAgICAgICBtZWRpYTogdHJpbShtWzJdKSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGF0cGFnZSgpIHtcclxuICAgICAgICBjb25zdCBwb3MgPSBwb3NpdGlvbigpO1xyXG4gICAgICAgIGNvbnN0IG0gPSBtYXRjaCgvXkBwYWdlICovKTtcclxuICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzZWwgPSBzZWxlY3RvcigpIHx8IFtdO1xyXG4gICAgICAgIGlmICghb3BlbigpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihgQHBhZ2UgbWlzc2luZyAneydgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRlY2xzID0gY29tbWVudHMoKTtcclxuICAgICAgICBsZXQgZGVjbDtcclxuICAgICAgICB3aGlsZSAoKGRlY2wgPSBkZWNsYXJhdGlvbigpKSkge1xyXG4gICAgICAgICAgICBkZWNscy5wdXNoKGRlY2wpO1xyXG4gICAgICAgICAgICBkZWNscyA9IGRlY2xzLmNvbmNhdChjb21tZW50cygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFjbG9zZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihgQHBhZ2UgbWlzc2luZyAnfSdgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBvcyh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdwYWdlJyxcclxuICAgICAgICAgICAgc2VsZWN0b3JzOiBzZWwsXHJcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uczogZGVjbHMsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdGRvY3VtZW50KCkge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoKC9eQChbLVxcd10rKT9kb2N1bWVudCAqKFtee10rKS8pO1xyXG4gICAgICAgIGlmICghbSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHZlbmRvciA9IHRyaW0obVsxXSk7XHJcbiAgICAgICAgY29uc3QgZG9jID0gdHJpbShtWzJdKTtcclxuICAgICAgICBpZiAoIW9wZW4oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoYEBkb2N1bWVudCBtaXNzaW5nICd7J2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdHlsZSA9IGNvbW1lbnRzKCkuY29uY2F0KHJ1bGVzKCkpO1xyXG4gICAgICAgIGlmICghY2xvc2UoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoYEBkb2N1bWVudCBtaXNzaW5nICd9J2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zKHtcclxuICAgICAgICAgICAgdHlwZTogJ2RvY3VtZW50JyxcclxuICAgICAgICAgICAgZG9jdW1lbnQ6IGRvYyxcclxuICAgICAgICAgICAgdmVuZG9yLFxyXG4gICAgICAgICAgICBydWxlczogc3R5bGUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhdGZvbnRmYWNlKCkge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3QgbSA9IG1hdGNoKC9eQGZvbnQtZmFjZVxccyovKTtcclxuICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9wZW4oKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoYEBmb250LWZhY2UgbWlzc2luZyAneydgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGRlY2xzID0gY29tbWVudHMoKTtcclxuICAgICAgICBsZXQgZGVjbDtcclxuICAgICAgICB3aGlsZSAoKGRlY2wgPSBkZWNsYXJhdGlvbigpKSkge1xyXG4gICAgICAgICAgICBkZWNscy5wdXNoKGRlY2wpO1xyXG4gICAgICAgICAgICBkZWNscyA9IGRlY2xzLmNvbmNhdChjb21tZW50cygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFjbG9zZSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlcnJvcihgQGZvbnQtZmFjZSBtaXNzaW5nICd9J2ApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zKHtcclxuICAgICAgICAgICAgdHlwZTogJ2ZvbnQtZmFjZScsXHJcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uczogZGVjbHMsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBhdGltcG9ydCA9IF9jb21waWxlQXRydWxlKCdpbXBvcnQnKTtcclxuICAgIGNvbnN0IGF0Y2hhcnNldCA9IF9jb21waWxlQXRydWxlKCdjaGFyc2V0Jyk7XHJcbiAgICBjb25zdCBhdG5hbWVzcGFjZSA9IF9jb21waWxlQXRydWxlKCduYW1lc3BhY2UnKTtcclxuICAgIGZ1bmN0aW9uIF9jb21waWxlQXRydWxlKG5hbWUpIHtcclxuICAgICAgICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJ15AJyArXHJcbiAgICAgICAgICAgIG5hbWUgK1xyXG4gICAgICAgICAgICAnXFxcXHMqKCg/OicgK1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAnKD88IVxcXFxcXFxcKVwiKD86XFxcXFxcXFxcInxbXlwiXSkqXCInLFxyXG4gICAgICAgICAgICAgICAgXCIoPzwhXFxcXFxcXFwpJyg/OlxcXFxcXFxcJ3xbXiddKSonXCIsXHJcbiAgICAgICAgICAgICAgICAnW147XScsXHJcbiAgICAgICAgICAgIF0uam9pbignfCcpICtcclxuICAgICAgICAgICAgJykrKTsnKTtcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwb3MgPSBwb3NpdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zdCBtID0gbWF0Y2gocmUpO1xyXG4gICAgICAgICAgICBpZiAoIW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByZXQgPSB7IHR5cGU6IG5hbWUgfTtcclxuICAgICAgICAgICAgcmV0W25hbWVdID0gbVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBwb3MocmV0KTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYXRydWxlKCkge1xyXG4gICAgICAgIGlmIChjc3NbMF0gIT09ICdAJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAoYXRrZXlmcmFtZXMoKSB8fFxyXG4gICAgICAgICAgICBhdG1lZGlhKCkgfHxcclxuICAgICAgICAgICAgYXRjdXN0b21tZWRpYSgpIHx8XHJcbiAgICAgICAgICAgIGF0c3VwcG9ydHMoKSB8fFxyXG4gICAgICAgICAgICBhdGltcG9ydCgpIHx8XHJcbiAgICAgICAgICAgIGF0Y2hhcnNldCgpIHx8XHJcbiAgICAgICAgICAgIGF0bmFtZXNwYWNlKCkgfHxcclxuICAgICAgICAgICAgYXRkb2N1bWVudCgpIHx8XHJcbiAgICAgICAgICAgIGF0cGFnZSgpIHx8XHJcbiAgICAgICAgICAgIGF0aG9zdCgpIHx8XHJcbiAgICAgICAgICAgIGF0Zm9udGZhY2UoKSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBydWxlKCkge1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IHBvc2l0aW9uKCk7XHJcbiAgICAgICAgY29uc3Qgc2VsID0gc2VsZWN0b3IoKTtcclxuICAgICAgICBpZiAoIXNlbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZXJyb3IoJ3NlbGVjdG9yIG1pc3NpbmcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29tbWVudHMoKTtcclxuICAgICAgICByZXR1cm4gcG9zKHtcclxuICAgICAgICAgICAgdHlwZTogJ3J1bGUnLFxyXG4gICAgICAgICAgICBzZWxlY3RvcnM6IHNlbCxcclxuICAgICAgICAgICAgZGVjbGFyYXRpb25zOiBkZWNsYXJhdGlvbnMoKSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBhZGRQYXJlbnQoc3R5bGVzaGVldCgpKTtcclxufVxyXG5mdW5jdGlvbiB0cmltKHN0cikge1xyXG4gICAgcmV0dXJuIHN0ciA/IHN0ci5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCAnJykgOiAnJztcclxufVxyXG5mdW5jdGlvbiBhZGRQYXJlbnQob2JqLCBwYXJlbnQpIHtcclxuICAgIGNvbnN0IGlzTm9kZSA9IG9iaiAmJiB0eXBlb2Ygb2JqLnR5cGUgPT09ICdzdHJpbmcnO1xyXG4gICAgY29uc3QgY2hpbGRQYXJlbnQgPSBpc05vZGUgPyBvYmogOiBwYXJlbnQ7XHJcbiAgICBmb3IgKGNvbnN0IGsgb2YgT2JqZWN0LmtleXMob2JqKSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gb2JqW2tdO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhZGRQYXJlbnQodiwgY2hpbGRQYXJlbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBhZGRQYXJlbnQodmFsdWUsIGNoaWxkUGFyZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoaXNOb2RlKSB7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgJ3BhcmVudCcsIHtcclxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOiBwYXJlbnQgfHwgbnVsbCxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmo7XHJcbn1cblxuY29uc3QgdGFnTWFwID0ge1xyXG4gICAgc2NyaXB0OiAnbm9zY3JpcHQnLFxyXG4gICAgYWx0Z2x5cGg6ICdhbHRHbHlwaCcsXHJcbiAgICBhbHRnbHlwaGRlZjogJ2FsdEdseXBoRGVmJyxcclxuICAgIGFsdGdseXBoaXRlbTogJ2FsdEdseXBoSXRlbScsXHJcbiAgICBhbmltYXRlY29sb3I6ICdhbmltYXRlQ29sb3InLFxyXG4gICAgYW5pbWF0ZW1vdGlvbjogJ2FuaW1hdGVNb3Rpb24nLFxyXG4gICAgYW5pbWF0ZXRyYW5zZm9ybTogJ2FuaW1hdGVUcmFuc2Zvcm0nLFxyXG4gICAgY2xpcHBhdGg6ICdjbGlwUGF0aCcsXHJcbiAgICBmZWJsZW5kOiAnZmVCbGVuZCcsXHJcbiAgICBmZWNvbG9ybWF0cml4OiAnZmVDb2xvck1hdHJpeCcsXHJcbiAgICBmZWNvbXBvbmVudHRyYW5zZmVyOiAnZmVDb21wb25lbnRUcmFuc2ZlcicsXHJcbiAgICBmZWNvbXBvc2l0ZTogJ2ZlQ29tcG9zaXRlJyxcclxuICAgIGZlY29udm9sdmVtYXRyaXg6ICdmZUNvbnZvbHZlTWF0cml4JyxcclxuICAgIGZlZGlmZnVzZWxpZ2h0aW5nOiAnZmVEaWZmdXNlTGlnaHRpbmcnLFxyXG4gICAgZmVkaXNwbGFjZW1lbnRtYXA6ICdmZURpc3BsYWNlbWVudE1hcCcsXHJcbiAgICBmZWRpc3RhbnRsaWdodDogJ2ZlRGlzdGFudExpZ2h0JyxcclxuICAgIGZlZHJvcHNoYWRvdzogJ2ZlRHJvcFNoYWRvdycsXHJcbiAgICBmZWZsb29kOiAnZmVGbG9vZCcsXHJcbiAgICBmZWZ1bmNhOiAnZmVGdW5jQScsXHJcbiAgICBmZWZ1bmNiOiAnZmVGdW5jQicsXHJcbiAgICBmZWZ1bmNnOiAnZmVGdW5jRycsXHJcbiAgICBmZWZ1bmNyOiAnZmVGdW5jUicsXHJcbiAgICBmZWdhdXNzaWFuYmx1cjogJ2ZlR2F1c3NpYW5CbHVyJyxcclxuICAgIGZlaW1hZ2U6ICdmZUltYWdlJyxcclxuICAgIGZlbWVyZ2U6ICdmZU1lcmdlJyxcclxuICAgIGZlbWVyZ2Vub2RlOiAnZmVNZXJnZU5vZGUnLFxyXG4gICAgZmVtb3JwaG9sb2d5OiAnZmVNb3JwaG9sb2d5JyxcclxuICAgIGZlb2Zmc2V0OiAnZmVPZmZzZXQnLFxyXG4gICAgZmVwb2ludGxpZ2h0OiAnZmVQb2ludExpZ2h0JyxcclxuICAgIGZlc3BlY3VsYXJsaWdodGluZzogJ2ZlU3BlY3VsYXJMaWdodGluZycsXHJcbiAgICBmZXNwb3RsaWdodDogJ2ZlU3BvdExpZ2h0JyxcclxuICAgIGZldGlsZTogJ2ZlVGlsZScsXHJcbiAgICBmZXR1cmJ1bGVuY2U6ICdmZVR1cmJ1bGVuY2UnLFxyXG4gICAgZm9yZWlnbm9iamVjdDogJ2ZvcmVpZ25PYmplY3QnLFxyXG4gICAgZ2x5cGhyZWY6ICdnbHlwaFJlZicsXHJcbiAgICBsaW5lYXJncmFkaWVudDogJ2xpbmVhckdyYWRpZW50JyxcclxuICAgIHJhZGlhbGdyYWRpZW50OiAncmFkaWFsR3JhZGllbnQnLFxyXG59O1xyXG5mdW5jdGlvbiBnZXRUYWdOYW1lKG4pIHtcclxuICAgIGxldCB0YWdOYW1lID0gdGFnTWFwW24udGFnTmFtZV0gPyB0YWdNYXBbbi50YWdOYW1lXSA6IG4udGFnTmFtZTtcclxuICAgIGlmICh0YWdOYW1lID09PSAnbGluaycgJiYgbi5hdHRyaWJ1dGVzLl9jc3NUZXh0KSB7XHJcbiAgICAgICAgdGFnTmFtZSA9ICdzdHlsZSc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFnTmFtZTtcclxufVxyXG5mdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1suKis/XiR7fSgpfFtcXF1cXFxcXS9nLCAnXFxcXCQmJyk7XHJcbn1cclxuY29uc3QgTUVESUFfU0VMRUNUT1IgPSAvKG1heHxtaW4pLWRldmljZS0od2lkdGh8aGVpZ2h0KS87XHJcbmNvbnN0IE1FRElBX1NFTEVDVE9SX0dMT0JBTCA9IG5ldyBSZWdFeHAoTUVESUFfU0VMRUNUT1Iuc291cmNlLCAnZycpO1xyXG5jb25zdCBIT1ZFUl9TRUxFQ1RPUiA9IC8oW15cXFxcXSk6aG92ZXIvO1xyXG5jb25zdCBIT1ZFUl9TRUxFQ1RPUl9HTE9CQUwgPSBuZXcgUmVnRXhwKEhPVkVSX1NFTEVDVE9SLnNvdXJjZSwgJ2cnKTtcclxuZnVuY3Rpb24gYWRhcHRDc3NGb3JSZXBsYXkoY3NzVGV4dCwgY2FjaGUpIHtcclxuICAgIGNvbnN0IGNhY2hlZFN0eWxlID0gY2FjaGUgPT09IG51bGwgfHwgY2FjaGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhY2hlLnN0eWxlc1dpdGhIb3ZlckNsYXNzLmdldChjc3NUZXh0KTtcclxuICAgIGlmIChjYWNoZWRTdHlsZSlcclxuICAgICAgICByZXR1cm4gY2FjaGVkU3R5bGU7XHJcbiAgICBjb25zdCBhc3QgPSBwYXJzZShjc3NUZXh0LCB7XHJcbiAgICAgICAgc2lsZW50OiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgICBpZiAoIWFzdC5zdHlsZXNoZWV0KSB7XHJcbiAgICAgICAgcmV0dXJuIGNzc1RleHQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZWxlY3RvcnMgPSBbXTtcclxuICAgIGNvbnN0IG1lZGlhcyA9IFtdO1xyXG4gICAgZnVuY3Rpb24gZ2V0U2VsZWN0b3JzKHJ1bGUpIHtcclxuICAgICAgICBpZiAoJ3NlbGVjdG9ycycgaW4gcnVsZSAmJiBydWxlLnNlbGVjdG9ycykge1xyXG4gICAgICAgICAgICBydWxlLnNlbGVjdG9ycy5mb3JFYWNoKChzZWxlY3RvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKEhPVkVSX1NFTEVDVE9SLnRlc3Qoc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0b3JzLnB1c2goc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCdtZWRpYScgaW4gcnVsZSAmJiBydWxlLm1lZGlhICYmIE1FRElBX1NFTEVDVE9SLnRlc3QocnVsZS5tZWRpYSkpIHtcclxuICAgICAgICAgICAgbWVkaWFzLnB1c2gocnVsZS5tZWRpYSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgncnVsZXMnIGluIHJ1bGUgJiYgcnVsZS5ydWxlcykge1xyXG4gICAgICAgICAgICBydWxlLnJ1bGVzLmZvckVhY2goZ2V0U2VsZWN0b3JzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRTZWxlY3RvcnMoYXN0LnN0eWxlc2hlZXQpO1xyXG4gICAgbGV0IHJlc3VsdCA9IGNzc1RleHQ7XHJcbiAgICBpZiAoc2VsZWN0b3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBzZWxlY3Rvck1hdGNoZXIgPSBuZXcgUmVnRXhwKHNlbGVjdG9yc1xyXG4gICAgICAgICAgICAuZmlsdGVyKChzZWxlY3RvciwgaW5kZXgpID0+IHNlbGVjdG9ycy5pbmRleE9mKHNlbGVjdG9yKSA9PT0gaW5kZXgpXHJcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoKVxyXG4gICAgICAgICAgICAubWFwKChzZWxlY3RvcikgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gZXNjYXBlUmVnRXhwKHNlbGVjdG9yKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuam9pbignfCcpLCAnZycpO1xyXG4gICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKHNlbGVjdG9yTWF0Y2hlciwgKHNlbGVjdG9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1NlbGVjdG9yID0gc2VsZWN0b3IucmVwbGFjZShIT1ZFUl9TRUxFQ1RPUl9HTE9CQUwsICckMS5cXFxcOmhvdmVyJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtzZWxlY3Rvcn0sICR7bmV3U2VsZWN0b3J9YDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmIChtZWRpYXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGNvbnN0IG1lZGlhTWF0Y2hlciA9IG5ldyBSZWdFeHAobWVkaWFzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKG1lZGlhLCBpbmRleCkgPT4gbWVkaWFzLmluZGV4T2YobWVkaWEpID09PSBpbmRleClcclxuICAgICAgICAgICAgLnNvcnQoKGEsIGIpID0+IGIubGVuZ3RoIC0gYS5sZW5ndGgpXHJcbiAgICAgICAgICAgIC5tYXAoKG1lZGlhKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBlc2NhcGVSZWdFeHAobWVkaWEpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5qb2luKCd8JyksICdnJyk7XHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UobWVkaWFNYXRjaGVyLCAobWVkaWEpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIG1lZGlhLnJlcGxhY2UoTUVESUFfU0VMRUNUT1JfR0xPQkFMLCAnJDEtJDInKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNhY2hlID09PSBudWxsIHx8IGNhY2hlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYWNoZS5zdHlsZXNXaXRoSG92ZXJDbGFzcy5zZXQoY3NzVGV4dCwgcmVzdWx0KTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlQ2FjaGUoKSB7XHJcbiAgICBjb25zdCBzdHlsZXNXaXRoSG92ZXJDbGFzcyA9IG5ldyBNYXAoKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgc3R5bGVzV2l0aEhvdmVyQ2xhc3MsXHJcbiAgICB9O1xyXG59XHJcbmZ1bmN0aW9uIGJ1aWxkTm9kZShuLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgX2E7XHJcbiAgICBjb25zdCB7IGRvYywgaGFja0NzcywgY2FjaGUgfSA9IG9wdGlvbnM7XHJcbiAgICBzd2l0Y2ggKG4udHlwZSkge1xyXG4gICAgICAgIGNhc2UgTm9kZVR5cGUuRG9jdW1lbnQ6XHJcbiAgICAgICAgICAgIHJldHVybiBkb2MuaW1wbGVtZW50YXRpb24uY3JlYXRlRG9jdW1lbnQobnVsbCwgJycsIG51bGwpO1xyXG4gICAgICAgIGNhc2UgTm9kZVR5cGUuRG9jdW1lbnRUeXBlOlxyXG4gICAgICAgICAgICByZXR1cm4gZG9jLmltcGxlbWVudGF0aW9uLmNyZWF0ZURvY3VtZW50VHlwZShuLm5hbWUgfHwgJ2h0bWwnLCBuLnB1YmxpY0lkLCBuLnN5c3RlbUlkKTtcclxuICAgICAgICBjYXNlIE5vZGVUeXBlLkVsZW1lbnQ6IHtcclxuICAgICAgICAgICAgY29uc3QgdGFnTmFtZSA9IGdldFRhZ05hbWUobik7XHJcbiAgICAgICAgICAgIGxldCBub2RlO1xyXG4gICAgICAgICAgICBpZiAobi5pc1NWRykge1xyXG4gICAgICAgICAgICAgICAgbm9kZSA9IGRvYy5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgdGFnTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobi5pc0N1c3RvbSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICgoX2EgPSBkb2MuZGVmYXVsdFZpZXcpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jdXN0b21FbGVtZW50cykgJiZcclxuICAgICAgICAgICAgICAgICAgICAhZG9jLmRlZmF1bHRWaWV3LmN1c3RvbUVsZW1lbnRzLmdldChuLnRhZ05hbWUpKVxyXG4gICAgICAgICAgICAgICAgICAgIGRvYy5kZWZhdWx0Vmlldy5jdXN0b21FbGVtZW50cy5kZWZpbmUobi50YWdOYW1lLCBjbGFzcyBleHRlbmRzIGRvYy5kZWZhdWx0Vmlldy5IVE1MRWxlbWVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBub2RlID0gZG9jLmNyZWF0ZUVsZW1lbnQodGFnTmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3Qgc3BlY2lhbEF0dHJpYnV0ZXMgPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBuYW1lIGluIG4uYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobi5hdHRyaWJ1dGVzLCBuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gbi5hdHRyaWJ1dGVzW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhZ05hbWUgPT09ICdvcHRpb24nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZSA9PT0gJ3NlbGVjdGVkJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IHRydWUpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgoJ3JyXycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BlY2lhbEF0dHJpYnV0ZXNbbmFtZV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGlzVGV4dGFyZWEgPSB0YWdOYW1lID09PSAndGV4dGFyZWEnICYmIG5hbWUgPT09ICd2YWx1ZSc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpc1JlbW90ZU9yRHluYW1pY0NzcyA9IHRhZ05hbWUgPT09ICdzdHlsZScgJiYgbmFtZSA9PT0gJ19jc3NUZXh0JztcclxuICAgICAgICAgICAgICAgIGlmIChpc1JlbW90ZU9yRHluYW1pY0NzcyAmJiBoYWNrQ3NzICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGFkYXB0Q3NzRm9yUmVwbGF5KHZhbHVlLCBjYWNoZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoKGlzVGV4dGFyZWEgfHwgaXNSZW1vdGVPckR5bmFtaWNDc3MpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGRvYy5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG4uY2hpbGROb2RlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobi5pc1NWRyAmJiBuYW1lID09PSAneGxpbms6aHJlZicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRBdHRyaWJ1dGVOUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycsIG5hbWUsIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lID09PSAnb25sb2FkJyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID09PSAnb25jbGljaycgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZS5zdWJzdHJpbmcoMCwgNykgPT09ICdvbm1vdXNlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnXycgKyBuYW1lLCB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGFnTmFtZSA9PT0gJ21ldGEnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uYXR0cmlidXRlc1snaHR0cC1lcXVpdiddID09PSAnQ29udGVudC1TZWN1cml0eS1Qb2xpY3knICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPT09ICdjb250ZW50Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgnY3NwLWNvbnRlbnQnLCB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhZ05hbWUgPT09ICdsaW5rJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAobi5hdHRyaWJ1dGVzLnJlbCA9PT0gJ3ByZWxvYWQnIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuLmF0dHJpYnV0ZXMucmVsID09PSAnbW9kdWxlcHJlbG9hZCcpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uYXR0cmlidXRlcy5hcyA9PT0gJ3NjcmlwdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGFnTmFtZSA9PT0gJ2xpbmsnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG4uYXR0cmlidXRlcy5yZWwgPT09ICdwcmVmZXRjaCcgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZW9mIG4uYXR0cmlidXRlcy5ocmVmID09PSAnc3RyaW5nJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuLmF0dHJpYnV0ZXMuaHJlZi5lbmRzV2l0aCgnLmpzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodGFnTmFtZSA9PT0gJ2ltZycgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgbi5hdHRyaWJ1dGVzLnNyY3NldCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuLmF0dHJpYnV0ZXMucnJfZGF0YVVSTCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZSgncnJ3ZWItb3JpZ2luYWwtc3Jjc2V0Jywgbi5hdHRyaWJ1dGVzLnNyY3NldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgaW4gc3BlY2lhbEF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gc3BlY2lhbEF0dHJpYnV0ZXNbbmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZiAodGFnTmFtZSA9PT0gJ2NhbnZhcycgJiYgbmFtZSA9PT0gJ3JyX2RhdGFVUkwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IG5vZGUuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN0eCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlLnNyYyA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5vZGUuUlJOb2RlVHlwZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5ycl9kYXRhVVJMID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRhZ05hbWUgPT09ICdpbWcnICYmIG5hbWUgPT09ICdycl9kYXRhVVJMJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gbm9kZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWltYWdlLmN1cnJlbnRTcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3Jyd2ViLW9yaWdpbmFsLXNyYycsIG4uYXR0cmlidXRlcy5zcmMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZS5zcmMgPSB2YWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAncnJfd2lkdGgnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zdHlsZS53aWR0aCA9IHZhbHVlLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lID09PSAncnJfaGVpZ2h0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gdmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUgPT09ICdycl9tZWRpYUN1cnJlbnRUaW1lJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmN1cnJlbnRUaW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lID09PSAncnJfbWVkaWFTdGF0ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BsYXllZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS53YXJuKCdtZWRpYSBwbGF5YmFjayBlcnJvcicsIGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwYXVzZWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXVzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gJ3JyX21lZGlhUGxheWJhY2tSYXRlJyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLnBsYXliYWNrUmF0ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gJ3JyX21lZGlhTXV0ZWQnICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5tdXRlZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobmFtZSA9PT0gJ3JyX21lZGlhTG9vcCcgJiYgdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmxvb3AgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUgPT09ICdycl9tZWRpYVZvbHVtZScgJiYgdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUudm9sdW1lID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG4uaXNTaGFkb3dIb3N0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW5vZGUuc2hhZG93Um9vdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG5vZGUuc2hhZG93Um9vdC5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2hhZG93Um9vdC5yZW1vdmVDaGlsZChub2RlLnNoYWRvd1Jvb3QuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXNlIE5vZGVUeXBlLlRleHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBkb2MuY3JlYXRlVGV4dE5vZGUobi5pc1N0eWxlICYmIGhhY2tDc3NcclxuICAgICAgICAgICAgICAgID8gYWRhcHRDc3NGb3JSZXBsYXkobi50ZXh0Q29udGVudCwgY2FjaGUpXHJcbiAgICAgICAgICAgICAgICA6IG4udGV4dENvbnRlbnQpO1xyXG4gICAgICAgIGNhc2UgTm9kZVR5cGUuQ0RBVEE6XHJcbiAgICAgICAgICAgIHJldHVybiBkb2MuY3JlYXRlQ0RBVEFTZWN0aW9uKG4udGV4dENvbnRlbnQpO1xyXG4gICAgICAgIGNhc2UgTm9kZVR5cGUuQ29tbWVudDpcclxuICAgICAgICAgICAgcmV0dXJuIGRvYy5jcmVhdGVDb21tZW50KG4udGV4dENvbnRlbnQpO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGJ1aWxkTm9kZVdpdGhTTihuLCBvcHRpb25zKSB7XHJcbiAgICBjb25zdCB7IGRvYywgbWlycm9yLCBza2lwQ2hpbGQgPSBmYWxzZSwgaGFja0NzcyA9IHRydWUsIGFmdGVyQXBwZW5kLCBjYWNoZSwgfSA9IG9wdGlvbnM7XHJcbiAgICBpZiAobWlycm9yLmhhcyhuLmlkKSkge1xyXG4gICAgICAgIGNvbnN0IG5vZGVJbk1pcnJvciA9IG1pcnJvci5nZXROb2RlKG4uaWQpO1xyXG4gICAgICAgIGNvbnN0IG1ldGEgPSBtaXJyb3IuZ2V0TWV0YShub2RlSW5NaXJyb3IpO1xyXG4gICAgICAgIGlmIChpc05vZGVNZXRhRXF1YWwobWV0YSwgbikpXHJcbiAgICAgICAgICAgIHJldHVybiBtaXJyb3IuZ2V0Tm9kZShuLmlkKTtcclxuICAgIH1cclxuICAgIGxldCBub2RlID0gYnVpbGROb2RlKG4sIHsgZG9jLCBoYWNrQ3NzLCBjYWNoZSB9KTtcclxuICAgIGlmICghbm9kZSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgaWYgKG4ucm9vdElkICYmIG1pcnJvci5nZXROb2RlKG4ucm9vdElkKSAhPT0gZG9jKSB7XHJcbiAgICAgICAgbWlycm9yLnJlcGxhY2Uobi5yb290SWQsIGRvYyk7XHJcbiAgICB9XHJcbiAgICBpZiAobi50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudCkge1xyXG4gICAgICAgIGRvYy5jbG9zZSgpO1xyXG4gICAgICAgIGRvYy5vcGVuKCk7XHJcbiAgICAgICAgaWYgKG4uY29tcGF0TW9kZSA9PT0gJ0JhY2tDb21wYXQnICYmXHJcbiAgICAgICAgICAgIG4uY2hpbGROb2RlcyAmJlxyXG4gICAgICAgICAgICBuLmNoaWxkTm9kZXNbMF0udHlwZSAhPT0gTm9kZVR5cGUuRG9jdW1lbnRUeXBlKSB7XHJcbiAgICAgICAgICAgIGlmIChuLmNoaWxkTm9kZXNbMF0udHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCAmJlxyXG4gICAgICAgICAgICAgICAgJ3htbG5zJyBpbiBuLmNoaWxkTm9kZXNbMF0uYXR0cmlidXRlcyAmJlxyXG4gICAgICAgICAgICAgICAgbi5jaGlsZE5vZGVzWzBdLmF0dHJpYnV0ZXMueG1sbnMgPT09ICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJykge1xyXG4gICAgICAgICAgICAgICAgZG9jLndyaXRlKCc8IURPQ1RZUEUgaHRtbCBQVUJMSUMgXCItLy9XM0MvL0RURCBYSFRNTCAxLjAgVHJhbnNpdGlvbmFsLy9FTlwiIFwiXCI+Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkb2Mud3JpdGUoJzwhRE9DVFlQRSBodG1sIFBVQkxJQyBcIi0vL1czQy8vRFREIEhUTUwgNC4wIFRyYW5zaXRpb25hbC8vRU5cIiBcIlwiPicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG5vZGUgPSBkb2M7XHJcbiAgICB9XHJcbiAgICBtaXJyb3IuYWRkKG5vZGUsIG4pO1xyXG4gICAgaWYgKChuLnR5cGUgPT09IE5vZGVUeXBlLkRvY3VtZW50IHx8IG4udHlwZSA9PT0gTm9kZVR5cGUuRWxlbWVudCkgJiZcclxuICAgICAgICAhc2tpcENoaWxkKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZE4gb2Ygbi5jaGlsZE5vZGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkTm9kZSA9IGJ1aWxkTm9kZVdpdGhTTihjaGlsZE4sIHtcclxuICAgICAgICAgICAgICAgIGRvYyxcclxuICAgICAgICAgICAgICAgIG1pcnJvcixcclxuICAgICAgICAgICAgICAgIHNraXBDaGlsZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBoYWNrQ3NzLFxyXG4gICAgICAgICAgICAgICAgYWZ0ZXJBcHBlbmQsXHJcbiAgICAgICAgICAgICAgICBjYWNoZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICghY2hpbGROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byByZWJ1aWxkJywgY2hpbGROKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjaGlsZE4uaXNTaGFkb3cgJiYgaXNFbGVtZW50KG5vZGUpICYmIG5vZGUuc2hhZG93Um9vdCkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zaGFkb3dSb290LmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobi50eXBlID09PSBOb2RlVHlwZS5Eb2N1bWVudCAmJlxyXG4gICAgICAgICAgICAgICAgY2hpbGROLnR5cGUgPT0gTm9kZVR5cGUuRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaHRtbEVsZW1lbnQgPSBjaGlsZE5vZGU7XHJcbiAgICAgICAgICAgICAgICBsZXQgYm9keSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBodG1sRWxlbWVudC5jaGlsZE5vZGVzLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5vZGVOYW1lID09PSAnQk9EWScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkgPSBjaGlsZDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICAgICAgICAgICAgICBodG1sRWxlbWVudC5yZW1vdmVDaGlsZChib2R5KTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEVsZW1lbnQuYXBwZW5kQ2hpbGQoYm9keSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmFwcGVuZENoaWxkKGNoaWxkTm9kZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFmdGVyQXBwZW5kKSB7XHJcbiAgICAgICAgICAgICAgICBhZnRlckFwcGVuZChjaGlsZE5vZGUsIGNoaWxkTi5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbm9kZTtcclxufVxyXG5mdW5jdGlvbiB2aXNpdChtaXJyb3IsIG9uVmlzaXQpIHtcclxuICAgIGZ1bmN0aW9uIHdhbGsobm9kZSkge1xyXG4gICAgICAgIG9uVmlzaXQobm9kZSk7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGlkIG9mIG1pcnJvci5nZXRJZHMoKSkge1xyXG4gICAgICAgIGlmIChtaXJyb3IuaGFzKGlkKSkge1xyXG4gICAgICAgICAgICB3YWxrKG1pcnJvci5nZXROb2RlKGlkKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGhhbmRsZVNjcm9sbChub2RlLCBtaXJyb3IpIHtcclxuICAgIGNvbnN0IG4gPSBtaXJyb3IuZ2V0TWV0YShub2RlKTtcclxuICAgIGlmICgobiA9PT0gbnVsbCB8fCBuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuLnR5cGUpICE9PSBOb2RlVHlwZS5FbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZWwgPSBub2RlO1xyXG4gICAgZm9yIChjb25zdCBuYW1lIGluIG4uYXR0cmlidXRlcykge1xyXG4gICAgICAgIGlmICghKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChuLmF0dHJpYnV0ZXMsIG5hbWUpICYmXHJcbiAgICAgICAgICAgIG5hbWUuc3RhcnRzV2l0aCgncnJfJykpKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB2YWx1ZSA9IG4uYXR0cmlidXRlc1tuYW1lXTtcclxuICAgICAgICBpZiAobmFtZSA9PT0gJ3JyX3Njcm9sbExlZnQnKSB7XHJcbiAgICAgICAgICAgIGVsLnNjcm9sbExlZnQgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG5hbWUgPT09ICdycl9zY3JvbGxUb3AnKSB7XHJcbiAgICAgICAgICAgIGVsLnNjcm9sbFRvcCA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiByZWJ1aWxkKG4sIG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IHsgZG9jLCBvblZpc2l0LCBoYWNrQ3NzID0gdHJ1ZSwgYWZ0ZXJBcHBlbmQsIGNhY2hlLCBtaXJyb3IgPSBuZXcgTWlycm9yKCksIH0gPSBvcHRpb25zO1xyXG4gICAgY29uc3Qgbm9kZSA9IGJ1aWxkTm9kZVdpdGhTTihuLCB7XHJcbiAgICAgICAgZG9jLFxyXG4gICAgICAgIG1pcnJvcixcclxuICAgICAgICBza2lwQ2hpbGQ6IGZhbHNlLFxyXG4gICAgICAgIGhhY2tDc3MsXHJcbiAgICAgICAgYWZ0ZXJBcHBlbmQsXHJcbiAgICAgICAgY2FjaGUsXHJcbiAgICB9KTtcclxuICAgIHZpc2l0KG1pcnJvciwgKHZpc2l0ZWROb2RlKSA9PiB7XHJcbiAgICAgICAgaWYgKG9uVmlzaXQpIHtcclxuICAgICAgICAgICAgb25WaXNpdCh2aXNpdGVkTm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhbmRsZVNjcm9sbCh2aXNpdGVkTm9kZSwgbWlycm9yKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbn1cblxuZXhwb3J0IHsgSUdOT1JFRF9OT0RFLCBNaXJyb3IsIE5vZGVUeXBlLCBhZGFwdENzc0ZvclJlcGxheSwgYnVpbGROb2RlV2l0aFNOLCBjbGFzc01hdGNoZXNSZWdleCwgY2xlYW51cFNuYXBzaG90LCBjcmVhdGVDYWNoZSwgY3JlYXRlTWlycm9yLCBlc2NhcGVJbXBvcnRTdGF0ZW1lbnQsIGV4dHJhY3RGaWxlRXh0ZW5zaW9uLCBmaXhTYWZhcmlDb2xvbnMsIGdlbklkLCBnZXRJbnB1dFR5cGUsIGlnbm9yZUF0dHJpYnV0ZSwgaXMyRENhbnZhc0JsYW5rLCBpc0NTU0ltcG9ydFJ1bGUsIGlzQ1NTU3R5bGVSdWxlLCBpc0VsZW1lbnQsIGlzTmF0aXZlU2hhZG93RG9tLCBpc05vZGVNZXRhRXF1YWwsIGlzU2hhZG93Um9vdCwgbWFza0lucHV0VmFsdWUsIG5lZWRNYXNraW5nVGV4dCwgcmVidWlsZCwgc2VyaWFsaXplTm9kZVdpdGhJZCwgc25hcHNob3QsIHN0cmluZ2lmeVJ1bGUsIHN0cmluZ2lmeVN0eWxlc2hlZXQsIHRvTG93ZXJDYXNlLCB0cmFuc2Zvcm1BdHRyaWJ1dGUsIHZpc2l0U25hcHNob3QgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbi8vIFRoaXMgZXhhbXBsZSBzdXBwb3J0L2UyZS5qcyBpcyBwcm9jZXNzZWQgYW5kXG4vLyBsb2FkZWQgYXV0b21hdGljYWxseSBiZWZvcmUgeW91ciB0ZXN0IGZpbGVzLlxuLy9cbi8vIFRoaXMgaXMgYSBncmVhdCBwbGFjZSB0byBwdXQgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gYW5kXG4vLyBiZWhhdmlvciB0aGF0IG1vZGlmaWVzIEN5cHJlc3MuXG4vL1xuLy8gWW91IGNhbiBjaGFuZ2UgdGhlIGxvY2F0aW9uIG9mIHRoaXMgZmlsZSBvciB0dXJuIG9mZlxuLy8gYXV0b21hdGljYWxseSBzZXJ2aW5nIHN1cHBvcnQgZmlsZXMgd2l0aCB0aGVcbi8vICdzdXBwb3J0RmlsZScgY29uZmlndXJhdGlvbiBvcHRpb24uXG4vL1xuLy8gWW91IGNhbiByZWFkIG1vcmUgaGVyZTpcbi8vIGh0dHBzOi8vb24uY3lwcmVzcy5pby9jb25maWd1cmF0aW9uXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuXG4vLyBJbXBvcnQgY29tbWFuZHMuanMgdXNpbmcgRVMyMDE1IHN5bnRheDpcbmltcG9ydCAnLi9jb21tYW5kcydcbi8vIGN5cHJlc3Mvc3VwcG9ydC9lMmUuanNcbmltcG9ydCBcIkBjaHJvbWF0aWMtY29tL2N5cHJlc3Mvc3VwcG9ydFwiO1xuXG4vLyBBbHRlcm5hdGl2ZWx5IHlvdSBjYW4gdXNlIENvbW1vbkpTIHN5bnRheDpcbi8vIHJlcXVpcmUoJy4vY29tbWFuZHMnKSJdLCJuYW1lcyI6WyJyZXF1aXJlIl0sInNvdXJjZVJvb3QiOiIifQ==