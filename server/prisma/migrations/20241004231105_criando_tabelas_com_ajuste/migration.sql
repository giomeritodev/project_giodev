/*
  Warnings:

  - You are about to drop the column `type` on the `partners` table. All the data in the column will be lost.
  - Added the required column `typePartnerId` to the `partners` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "type_partners" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_partners" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cpfOrCnpj" TEXT NOT NULL,
    "typePartnerId" INTEGER NOT NULL,
    "fone" TEXT NOT NULL,
    CONSTRAINT "partners_typePartnerId_fkey" FOREIGN KEY ("typePartnerId") REFERENCES "type_partners" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_partners" ("cpfOrCnpj", "fone", "id", "name") SELECT "cpfOrCnpj", "fone", "id", "name" FROM "partners";
DROP TABLE "partners";
ALTER TABLE "new_partners" RENAME TO "partners";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
