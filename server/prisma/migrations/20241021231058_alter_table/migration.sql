/*
  Warnings:

  - You are about to drop the column `decription` on the `partners_addresses` table. All the data in the column will be lost.
  - Added the required column `description` to the `partners_addresses` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_partners_addresses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
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
