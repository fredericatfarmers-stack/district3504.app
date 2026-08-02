DISTRICT 3504 PHOTO DEPLOYMENT

WHY THE FIRST ATTEMPT SHOWED NO PHOTOS
The Vercel dashboard action used was "Redeploy." That rebuilt the previous
source package. The six photographs were not part of that old package, so the
live photo URLs returned 404 Not Found.

HOW TO DEPLOY THIS PACKAGE
1. Extract this ZIP file completely.
2. Open the extracted district3504-vercel-ready folder.
3. Double-click DEPLOY_TO_VERCEL.cmd.
4. If Vercel asks you to sign in, use frederic.at.farmers@gmail.com.
5. When the window reports SUCCESS, open the site and press Ctrl+F5.

The package is already linked to the existing Vercel project:
district3504-app

The six new photographs are stored in:
public\images\team\

Their filenames include -2026 to prevent the old missing-image response from
being reused by a browser or CDN cache.
