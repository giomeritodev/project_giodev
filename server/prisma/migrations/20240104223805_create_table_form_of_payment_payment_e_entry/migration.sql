-- CreateTable
CREATE TABLE "entries" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateEntry" TEXT NOT NULL,
    "numberDocument" INTEGER NOT NULL,
    "partnerId" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "entries_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "partners" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "itens_entry" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "entryId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "shoppingValue" INTEGER NOT NULL,
    CONSTRAINT "itens_entry_entryId_fkey" FOREIGN KEY ("entryId") REFERENCES "entries" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "itens_entry_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "datePayment" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "entryId" INTEGER NOT NULL,
    "formOfPaymentId" INTEGER NOT NULL,
    "valuePayment" INTEGER NOT NULL,
    CONSTRAINT "Payment_entryId_fkey" FOREIGN KEY ("entryId") REFERENCES "entries" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Payment_formOfPaymentId_fkey" FOREIGN KEY ("formOfPaymentId") REFERENCES "forms_of_payment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "forms_of_payment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
