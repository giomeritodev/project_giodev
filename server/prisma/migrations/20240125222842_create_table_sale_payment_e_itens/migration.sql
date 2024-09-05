-- CreateTable
CREATE TABLE "sales" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateSale" TEXT NOT NULL,
    "partnerId" INTEGER NOT NULL,
    "typeSale" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "typePayment" INTEGER NOT NULL DEFAULT 1,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "statusPayment" INTEGER NOT NULL DEFAULT 1,
    CONSTRAINT "sales_partnerId_fkey" FOREIGN KEY ("partnerId") REFERENCES "partners" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "itens_sale" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "saleId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "discount" INTEGER NOT NULL,
    CONSTRAINT "itens_sale_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "sales" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "itens_sale_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "payment_sale" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateSale" TEXT NOT NULL,
    "saleId" INTEGER NOT NULL,
    "formOfPaymentId" INTEGER NOT NULL,
    "valuePayment" INTEGER NOT NULL,
    "portion" INTEGER NOT NULL DEFAULT 1,
    "dueDate" TEXT NOT NULL,
    "statusPayment" INTEGER NOT NULL DEFAULT 1,
    "datePayment" TEXT,
    CONSTRAINT "payment_sale_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "sales" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "payment_sale_formOfPaymentId_fkey" FOREIGN KEY ("formOfPaymentId") REFERENCES "forms_of_payment" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
