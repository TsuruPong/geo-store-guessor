-- CreateTable
CREATE TABLE "Store" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Store_pkey" PRIMARY KEY ("id")
);
