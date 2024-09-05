-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Payment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "datePayment" TEXT NOT NULL,
    "entryId" INTEGER NOT NULL,
    "formOfPaymentId" INTEGER NOT NULL,
    "valuePayment" INTEGER NOT NULL,
    CONSTRAINT "Payment_entryId_fkey" FOREIGN KEY ("entryId") REFERENCES "entries" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Payment_formOfPaymentId_fkey" FOREIGN KEY ("formOfPaymentId") REFERENCES "forms_of_payment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Payment" ("datePayment", "entryId", "formOfPaymentId", "id", "valuePayment") SELECT "datePayment", "entryId", "formOfPaymentId", "id", "valuePayment" FROM "Payment";
DROP TABLE "Payment";
ALTER TABLE "new_Payment" RENAME TO "Payment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
