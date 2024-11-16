/*
  Warnings:

  - Added the required column `decription` to the `partners_addresses` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_partners_addresses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "decription" TEXT NOT NULL,
    "partnerId" INTEGER NOT NULL,
    "addressId" INTEGER NOT NULL,
    CONSTRAINT "partners_addresses_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "partners" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "partners_addresses_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "addresses" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_partners_addresses" ("addressId", "id", "partnerId") SELECT "addressId", "id", "partnerId" FROM "partners_addresses";
DROP TABLE "partners_addresses";
ALTER TABLE "new_partners_addresses" RENAME TO "partners_addresses";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
