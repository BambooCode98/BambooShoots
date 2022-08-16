/*
  Warnings:

  - Added the required column `url` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `url` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_image_pid_fkey";

-- DropForeignKey
ALTER TABLE "Video" DROP CONSTRAINT "Video_video_pid_fkey";

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "url" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "url" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_url_fkey" FOREIGN KEY ("url") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_url_fkey" FOREIGN KEY ("url") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
