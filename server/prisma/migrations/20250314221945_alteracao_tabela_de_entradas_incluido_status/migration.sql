/*
  Warnings:

  - Added the required column `status` to the `entries` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_entries" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateEntry" TEXT NOT NULL,
    "numberDocument" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,
    "partnerId" INTEGER NOT NULL,
    "statusPaymentId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "entries_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "partners" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "entries_statusPaymentId_fkey" FOREIGN KEY ("statusPaymentId") REFERENCES "status-payments" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_entries" ("createdAt", "dateEntry", "id", "numberDocument", "partnerId", "statusPaymentId", "updatedAt") SELECT "createdAt", "dateEntry", "id", "numberDocument", "partnerId", "statusPaymentId", "updatedAt" FROM "entries";
DROP TABLE "entries";
ALTER TABLE "new_entries" RENAME TO "entries";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
