# Starktronix — universe background

The built, deployable site: a scroll-driven flight through a live 3D universe,
with the section pages beside it. Static files only — no build step. Vercel (or
any static host) serves this directory as-is.

    index.html          the homepage, with the flight
    technology.html     the section pages
    capabilities.html
    solutions.html
    network.html
    scale.html
    assets/             the bundle, the textures, the model, the photograph
    vercel.json         clean URLs, so /technology resolves

Live: https://deploy-stage-swart.vercel.app

## Licence

The universe is **Cosmos Journeyer**, licensed **AGPL-3.0-only**. Because this
page is served over a network, everyone it is served to is owed the Corresponding
Source, and it is here:

**https://github.com/matildes-tech/cosmos-journeyer-background**

That repository holds the whole of the work built on top of their engine, plus a
`bootstrap.sh` that reconstructs the build from upstream at the pinned commit.
The footer of every page carries the same offer.

The ship is *"Aircraft Decor"* by [jimbogies](https://sketchfab.com/jimbogies),
**CC-BY-4.0**; that credit is rendered in the page footer, where the licence
requires it to stay. The backdrop photograph is © Starktronix.

Copy throughout is placeholder.
