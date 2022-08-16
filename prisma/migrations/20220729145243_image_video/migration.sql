-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "image_pid" TEXT NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Video" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "video_pid" TEXT NOT NULL,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Image_image_pid_key" ON "Image"("image_pid");

-- CreateIndex
CREATE UNIQUE INDEX "Video_video_pid_key" ON "Video"("video_pid");

-- AddForeignKey
ALTER TABLE "Image" ADD CONSTRAINT "Image_image_pid_fkey" FOREIGN KEY ("image_pid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Video" ADD CONSTRAINT "Video_video_pid_fkey" FOREIGN KEY ("video_pid") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
