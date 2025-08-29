-- CreateEnum
CREATE TYPE "public"."Genre" AS ENUM ('Ciencia_Ficcion', 'Crimen', 'Clasicos_Nacionales', 'Infantil');

-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(50) NOT NULL,
    "surname" VARCHAR(50) NOT NULL,
    "email" TEXT NOT NULL,
    "password" VARCHAR(20) NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "section" "public"."Genre" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Book" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "author" VARCHAR(50) NOT NULL,
    "section" "public"."Genre" NOT NULL,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");
