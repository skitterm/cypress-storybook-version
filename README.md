# To reproduce the issue:

1. Clone the repo
2. Install dependencies (`npm install`)
3. Load the archived storybook (`npm run archive-storybook`)
4. Observe you get the following error:

```bash
npm run archive-storybook

> cypress-storybook-version@0.0.0 archive-storybook
> archive-storybook

@storybook/cli v8.1.0


attention => Storybook now collects completely anonymous telemetry regarding usage.
This information is used to shape Storybook's roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://storybook.js.org/telemetry

info => Serving static files from /Users/somecoolperson/cypress-storybook-version/cypress/downloads/chromatic-archives/archive at /
info => Starting manager..
WARN unable to find package.json for @chromatic-com/shared-e2e
WARN unable to find package.json for start-server-and-test
info => Starting preview..
TypeError: Cannot read properties of null (reading 'init')
    at ./node_modules/@storybook/csf-tools/dist/index.js:17:3363
    at Array.forEach (<anonymous>)
    at enter (./node_modules/@storybook/csf-tools/dist/index.js:17:3176)
    at NodePath._call (./node_modules/@babel/traverse/lib/path/context.js:46:20)
    at NodePath.call (./node_modules/@babel/traverse/lib/path/context.js:36:17)
    at NodePath.visit (./node_modules/@babel/traverse/lib/path/context.js:82:31)
    at TraversalContext.visitQueue (./node_modules/@babel/traverse/lib/context.js:89:16)
    at TraversalContext.visitMultiple (./node_modules/@babel/traverse/lib/context.js:61:17)
    at TraversalContext.visit (./node_modules/@babel/traverse/lib/context.js:110:19)
    at traverseNode (./node_modules/@babel/traverse/lib/traverse-node.js:22:17)

WARN Broken build, fix the error above.
WARN You may need to refresh the browser.
```