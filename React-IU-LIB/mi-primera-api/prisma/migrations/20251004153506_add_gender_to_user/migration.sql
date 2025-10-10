/*
  Warnings:

  - Added the required column `gender` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."Gender" AS ENUM ('MASCULINO', 'FEMENINO', 'OTRO');

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "gender" "public"."Gender" NOT NULL,
ALTER COLUMN "password" SET DATA TYPE VARCHAR(255);
