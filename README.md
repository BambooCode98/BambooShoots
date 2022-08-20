# BambooShoots

This is a basic photo uploading site that allows users to login/logout. While logged in a user can upload photos onto the site in a similar manner to Google Photos. The photos can also be deleted by clicking on a picture to view it in a new webpage, and clicking on the trash can icon.

Currently hosted at Heroku: [BambooShoots](https://bambooshoots.herokuapp).com

#### Current Problems(In Deployment Only)

After deploying to Heroku, the app does not quite work as intended due to the max file upload size being roughly 50kb. However, on a rare occasion larger file sizes can get through. Since everything worked as intended in the local environment, I believe the way Heroku handles requests may be causing the submit events to fail quite often. Another possibility is that the requests are simply failing due to the larger file sizes being posted, and thus blocking the requests causing the Heroku router to time out.