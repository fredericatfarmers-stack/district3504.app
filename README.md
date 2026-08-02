# District 3504 — Farmers Insurance Recruiting Site

## Run it locally
```
npm install
npm run dev
```
Then open http://localhost:3000

## Add the real team photos
Save each headshot into `/public/images/team/` using these exact filenames
(already wired up in `data/team.js`):
- david-pucci.jpg
- justin-carter.jpg
- laurie-vasquez.jpg
- lorena-hernandez.jpg
- erika-wilson.jpg
- frederic-st-laurent.jpg

Until a file exists, that card just shows initials — nothing breaks.

## Add an agency page
Open `data/agencies.js` and add one object per agency (template is
commented at the top of the file). Each one automatically gets its own page
at `/agencies/[slug]` — no code changes needed. Put each agency's agent
photos in `/public/images/agencies/[slug]/`.

## Update a Workable link
Open `data/paths.js` and change the `workableUrl` for the program that
changed. Every page pulling from that program updates instantly.

## Set up the Q&A chat assistant
The chat widget calls `/api/chat`, which uses the Anthropic API. In your
Vercel project settings, add an environment variable:
- `ANTHROPIC_API_KEY` = your Anthropic API key

Without this, the chat bubble will show an error when used, but the rest of
the site works fine.

## Deploy to Vercel
1. Push this project to a GitHub repo.
2. In Vercel, import the repo (your account: fredericatfarmers-2688s-projects).
3. Add the `ANTHROPIC_API_KEY` environment variable.
4. Deploy.
5. In your Vercel project, add `farmerstx.com` as a custom domain, then
   follow Vercel's instructions to update the A/CNAME records at GoDaddy
   (this replaces the current A record pointing to GoDaddy's Website Builder).

## No personal contact info
Per design, this site never publishes email addresses or personal calendar
links — every call-to-action routes to a Workable job or application link.
website deployment connected to Vercel
