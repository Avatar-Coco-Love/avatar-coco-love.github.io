# avatar-coco-love.github.io

Home page with links to all my projects: https://avatar-coco-love.github.io/

- `index.html`: the page (one card per project; no build step).
- `share.png`: link-preview image (1200×630) for when the page is shared.
- `qr.png`: QR code for the page's address. It never changes, so adding a
  project is just a new card in `index.html`.

Projects: [Emergent Arcade](https://avatar-coco-love.github.io/emergent-arcade/),
[Animal Mail Route](https://avatar-coco-love.github.io/animal-mail-route/).

`email-list/Code.gs`: the Apps Script behind the "Get updates" form. It lives
in the Google Sheet "Email list (projects page)" (Extensions > Apps Script) and
is deployed as a web app (Execute as: Me, Who has access: Anyone). A copy is
kept here so it isn't lost; editing this file does nothing until it's pasted
into Apps Script and redeployed.
