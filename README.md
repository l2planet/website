# L2 Planet Website

This repo is for the website of [Layer 2 Planet](https://l2planet.xyz/about).

- We used
[TypeScript](https://www.typescriptlang.org/)
instead of 
[JavaScript](https://tr.wikipedia.org/wiki/JavaScript)
to eliminate
[type errors](https://en.wikipedia.org/wiki/Type_system#Type_errors).

- We used [React.js](https://reactjs.org/) as it's easy and very popular.

- We used [Next.js](https://nextjs.org/) as it has a good performance and provides great tools.

- The website is fully rendered on the clients, so no [SSR](https://en.wikipedia.org/wiki/Server-side_scripting).


# Project Layout
- `public/` folder is for the assets (images, fonts, etc.) that are used on the website.
- `src/` folder contains the source code of the website.
- Files in the root folder are for configuration related stuff.
- `src/components` folder contains files and folders that have the definition of the components used on the website.
- `src/contexts` folder contains files that have the definition of context (theming & cached data) providers.
- `src/functions` folder contains files that have the definition of various functions.
- `src/hooks` folder contains files that have the definition of React Hooks.
- `src/styles` folder contains [CSS](https://en.wikipedia.org/wiki/CSS) files that define styling of the website.
- `src/types` folder contains files that have the definition of TypeScript types.

# To-Do (for v1)
- Add local communities support for L2s.

# To-Do (for v2)
- Implement SSR.
- Use a CDN for all the assets on the website. 
- Use a framework other than [Next.js](https://nextjs.org/) that supports [Island-Architecture](https://jasonformat.com/islands-architecture/), if possible.
- Make the source code as simple and clean as possible, so even community members can contribute the project and improve their experience.

**Made with ❤ by L2 Planet DAO**
