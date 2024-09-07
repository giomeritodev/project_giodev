/*
  Warnings:

  - You are about to alter the column `price` on the `products` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Decimal`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "barCode" TEXT,
    "reference" TEXT,
    "name" TEXT NOT NULL,
    "price" DECIMAL NOT NULL,
    "amount" INTEGER NOT NULL DEFAULT 0,
    "unitId" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "products_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "units" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "products_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_products" ("amount", "barCode", "categoryId", "id", "name", "price", "reference", "unitId") SELECT "amount", "barCode", "categoryId", "id", "name", "price", "reference", "unitId" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
CREATE UNIQUE INDEX "products_barCode_key" ON "products"("barCode");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
