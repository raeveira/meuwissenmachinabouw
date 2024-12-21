/*
  Warnings:

  - Added the required column `type` to the `DynamicText` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DynamicText" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "type" TEXT NOT NULL
);
INSERT INTO "new_DynamicText" ("content", "id") SELECT "content", "id" FROM "DynamicText";
DROP TABLE "DynamicText";
ALTER TABLE "new_DynamicText" RENAME TO "DynamicText";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
