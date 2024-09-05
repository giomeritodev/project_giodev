-- CreateTable
CREATE TABLE "partners" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cpfOrCnpj" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "fone" TEXT NOT NULL
);
