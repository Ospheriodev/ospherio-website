// next-env.d.ts carries this reference too, but it is gitignored and only
// written during `next build`. Checking it in keeps `npm run typecheck`
// working on a fresh clone, where static image imports (the brand logo in
// Header/Footer) would otherwise have no type. Referencing the same types
// package twice is a no-op, so this does not clash with next-env.d.ts.
/// <reference types="next/image-types/global" />
