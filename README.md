# avatar-coco-love.github.io

Home page with links to all my projects: https://avatar-coco-love.github.io/

- `index.html`: the page (one card per project; no build step).
- `share.png`: link-preview image (1200×630) for when the page is shared.
- `gloamdeep.png`: card image for Gloamdeep (a frame from the game: the hero
  by the cave mouth in the woods at dusk), since that game has no share image
  of its own yet.
- `qr.png`: QR code for the page's address. It never changes, so adding a
  project is just a new card in `index.html`.

Card order (owner's choice): [Gloamdeep](https://avatar-coco-love.github.io/gloamdeep/),
[Emergent Arcade](https://avatar-coco-love.github.io/emergent-arcade/),
[Foldwork](https://avatar-coco-love.github.io/foldwork/),
[Lumen Core](https://avatar-coco-love.github.io/ClaudeGame/) (its card image is
that game's own share image, served from its site; the Claude that builds it, in
`Avatar-Coco-Love/ClaudeGame`, owns the card's look and words), then [Animal Mail Route](https://avatar-coco-love.github.io/animal-mail-route/).
Nexus Drift is off the page for now.

`email-list/Code.gs`: the Apps Script behind the "Get updates" form. It lives
in the Google Sheet "Email list (projects page)" (Extensions > Apps Script) and
is deployed as a web app (Execute as: Me, Who has access: Anyone). A copy is
kept here so it isn't lost; editing this file does nothing until it's pasted
into Apps Script and redeployed.
