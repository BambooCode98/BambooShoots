/*
  Warnings:

  - Added the required column `image_blob` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `video_blob` to the `Video` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "image_blob" BYTEA NOT NULL,
ALTER COLUMN "image_pid" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Video" ADD COLUMN     "video_blob" BYTEA NOT NULL,
ALTER COLUMN "video_pid" DROP NOT NULL;
