/*
  Warnings:

  - You are about to drop the column `statusPayment` on the `sales` table. All the data in the column will be lost.
  - You are about to drop the column `statusPayment` on the `payment_sale` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `entries` table. All the data in the column will be lost.
  - Added the required column `statusPaymentId` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `statusPaymentId` to the `payment_sale` table without a default value. This is not possible if the table is not empty.

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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "sales_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "partners" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_sales" ("createdAt", "dateSale", "id", "partnerId", "status", "typePayment", "typeSale", "updatedAt") SELECT "createdAt", "dateSale", "id", "partnerId", "status", "typePayment", "typeSale", "updatedAt" FROM "sales";
DROP TABLE "sales";
ALTER TABLE "new_sales" RENAME TO "sales";
CREATE TABLE "new_Payment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "datePayment" TEXT NOT NULL,
    "entryId" INTEGER NOT NULL,
    "formOfPaymentId" INTEGER NOT NULL,
    "statusPaymentId" INTEGER NOT NULL,
    "valuePayment" INTEGER NOT NULL,
    CONSTRAINT "Payment_entryId_fkey" FOREIGN KEY ("entryId") REFERENCES "entries" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Payment_formOfPaymentId_fkey" FOREIGN KEY ("formOfPaymentId") REFERENCES "forms_of_payment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Payment_statusPaymentId_fkey" FOREIGN KEY ("statusPaymentId") REFERENCES "status-payments" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Payment" ("datePayment", "entryId", "formOfPaymentId", "id", "valuePayment") SELECT "datePayment", "entryId", "formOfPaymentId", "id", "valuePayment" FROM "Payment";
DROP TABLE "Payment";
ALTER TABLE "new_Payment" RENAME TO "Payment";
CREATE TABLE "new_payment_sale" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateSale" TEXT NOT NULL,
    "saleId" INTEGER NOT NULL,
    "formOfPaymentId" INTEGER NOT NULL,
    "valuePayment" INTEGER NOT NULL,
    "portion" INTEGER NOT NULL DEFAULT 1,
    "dueDate" TEXT NOT NULL,
    "statusPaymentId" INTEGER NOT NULL,
    "datePayment" TEXT,
    CONSTRAINT "payment_sale_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "sales" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "payment_sale_formOfPaymentId_fkey" FOREIGN KEY ("formOfPaymentId") REFERENCES "forms_of_payment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "payment_sale_statusPaymentId_fkey" FOREIGN KEY ("statusPaymentId") REFERENCES "status-payments" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_payment_sale" ("datePayment", "dateSale", "dueDate", "formOfPaymentId", "id", "portion", "saleId", "valuePayment") SELECT "datePayment", "dateSale", "dueDate", "formOfPaymentId", "id", "portion", "saleId", "valuePayment" FROM "payment_sale";
DROP TABLE "payment_sale";
ALTER TABLE "new_payment_sale" RENAME TO "payment_sale";
CREATE TABLE "new_entries" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateEntry" TEXT NOT NULL,
    "numberDocument" INTEGER NOT NULL,
    "partnerId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "entries_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "partners" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_entries" ("createdAt", "dateEntry", "id", "numberDocument", "partnerId", "updatedAt") SELECT "createdAt", "dateEntry", "id", "numberDocument", "partnerId", "updatedAt" FROM "entries";
DROP TABLE "entries";
ALTER TABLE "new_entries" RENAME TO "entries";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
