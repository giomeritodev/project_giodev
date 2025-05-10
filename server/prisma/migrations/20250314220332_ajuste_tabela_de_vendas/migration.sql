/*
  Warnings:

  - Added the required column `statusPaymentId` to the `sales` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_sales" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateSale" TEXT NOT NULL,
    "partnerId" INTEGER NOT NULL,
    "typeSale" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "typePayment" INTEGER NOT NULL DEFAULT 1,
    "statusPaymentId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "sales_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "partners" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "sales_statusPaymentId_fkey" FOREIGN KEY ("statusPaymentId") REFERENCES "status-payments" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_sales" ("createdAt", "dateSale", "id", "partnerId", "status", "typePayment", "typeSale", "updatedAt") SELECT "createdAt", "dateSale", "id", "partnerId", "status", "typePayment", "typeSale", "updatedAt" FROM "sales";
DROP TABLE "sales";
ALTER TABLE "new_sales" RENAME TO "sales";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
