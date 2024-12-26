/*
  Warnings:

  - You are about to drop the column `fone` on the `partners` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "contacts" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "fone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "position" TEXT,
    "partnerId" INTEGER NOT NULL,
    CONSTRAINT "contacts_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "partners" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_partners" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cpfOrCnpj" TEXT NOT NULL,
    "typePartnerId" INTEGER NOT NULL,
    CONSTRAINT "partners_typePartnerId_fkey" FOREIGN KEY ("typePartnerId") REFERENCES "type_partners" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_partners" ("cpfOrCnpj", "id", "name", "typePartnerId") SELECT "cpfOrCnpj", "id", "name", "typePartnerId" FROM "partners";
DROP TABLE "partners";
ALTER TABLE "new_partners" RENAME TO "partners";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
