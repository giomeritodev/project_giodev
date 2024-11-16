/*
  Warnings:

  - You are about to drop the `partners_addresses` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `partnerId` to the `addresses` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "partners_addresses";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_addresses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "public_place" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "number_address" INTEGER NOT NULL,
    "cep" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "cityId" INTEGER NOT NULL,
    "partnerId" INTEGER NOT NULL,
    CONSTRAINT "addresses_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "cities" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "addresses_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "partners" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_addresses" ("cep", "cityId", "complement", "id", "number_address", "public_place", "sector") SELECT "cep", "cityId", "complement", "id", "number_address", "public_place", "sector" FROM "addresses";
DROP TABLE "addresses";
ALTER TABLE "new_addresses" RENAME TO "addresses";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
