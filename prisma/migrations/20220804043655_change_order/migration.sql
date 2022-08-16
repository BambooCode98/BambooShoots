-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_url_fkey";

-- DropForeignKey
ALTER TABLE "Video" DROP CONSTRAINT "Video_url_fkey";

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_url_fkey" FOREIGN KEY ("url") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_url_fkey" FOREIGN KEY ("url") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
