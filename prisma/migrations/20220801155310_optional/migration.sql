-- AlterTable
ALTER TABLE "Image" ALTER COLUMN "image_blob" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Video" ALTER COLUMN "video_blob" DROP NOT NULL;
