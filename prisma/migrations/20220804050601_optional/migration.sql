/*
  Warnings:

  - You are about to drop the column `url` on the `Video` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Video" DROP CONSTRAINT "Video_url_fkey";

-- AlterTable
ALTER TABLE "Image" ALTER COLUMN "url" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Video" DROP COLUMN "url",
ADD COLUMN     "video_url" TEXT;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_video_url_fkey" FOREIGN KEY ("video_url") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
