# BambooShoots

This is a basic photo uploading site that allows users to login/logout. While logged in a user can upload photos onto the site in a similar manner to Google Photos. The photos can also be deleted by clicking on a picture to view it in a new webpage, and clicking on the trash can icon.

Currently hosted at Vercel: [BambooShoots](https://bamboo-shoots.vercel.app)

### Created With:
  1. Next.js
  2. React
  3. TailWindCSS
  4. Prisma
  5. Postgresql


#### Current Problems(In Deployment Only)

After deploying to Vercel, the max upload size in roughly 4.3mb. Due to this any requests will fail if the size is greater than 4.5mb.