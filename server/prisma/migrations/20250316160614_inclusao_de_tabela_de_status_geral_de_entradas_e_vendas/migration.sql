/*
  Warnings:

  - You are about to drop the column `status` on the `entries` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `sales` table. All the data in the column will be lost.
  - Added the required column `statusId` to the `entries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusId` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "status" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_entries" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateEntry" TEXT NOT NULL,
    "numberDocument" INTEGER NOT NULL,
    "statusId" INTEGER NOT NULL,
    "partnerId" INTEGER NOT NULL,
    "statusPaymentId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "entries_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "status" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "entries_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "partners" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "entries_statusPaymentId_fkey" FOREIGN KEY ("statusPaymentId") REFERENCES "status-payments" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_entries" ("createdAt", "dateEntry", "id", "numberDocument", "partnerId", "statusPaymentId", "updatedAt") SELECT "createdAt", "dateEntry", "id", "numberDocument", "partnerId", "statusPaymentId", "updatedAt" FROM "entries";
DROP TABLE "entries";
ALTER TABLE "new_entries" RENAME TO "entries";
CREATE TABLE "new_sales" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateSale" TEXT NOT NULL,
    "partnerId" INTEGER NOT NULL,
    "typeSale" TEXT NOT NULL,
    "statusId" INTEGER NOT NULL,
    "typePayment" INTEGER NOT NULL DEFAULT 1,
    "statusPaymentId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "sales_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "partners" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "sales_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "status" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "sales_statusPaymentId_fkey" FOREIGN KEY ("statusPaymentId") REFERENCES "status-payments" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_sales" ("createdAt", "dateSale", "id", "partnerId", "statusPaymentId", "typePayment", "typeSale", "updatedAt") SELECT "createdAt", "dateSale", "id", "partnerId", "statusPaymentId", "typePayment", "typeSale", "updatedAt" FROM "sales";
DROP TABLE "sales";
ALTER TABLE "new_sales" RENAME TO "sales";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
