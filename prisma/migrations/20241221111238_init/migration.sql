-- CreateTable
CREATE TABLE "POI" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "positionX" REAL NOT NULL,
    "positionY" REAL NOT NULL,
    "imageSrc" TEXT NOT NULL,
    "header" TEXT NOT NULL,
    "text" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "DynamicText" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL
);
