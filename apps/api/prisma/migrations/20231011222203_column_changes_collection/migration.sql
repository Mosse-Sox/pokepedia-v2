/*
  Warnings:

  - Added the required column `is_normal` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_shiny` to the `Collection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pokemon_id` to the `Collection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Collection" ADD COLUMN     "is_normal" BOOLEAN NOT NULL,
ADD COLUMN     "is_shiny" BOOLEAN NOT NULL,
ADD COLUMN     "pokemon_id" INTEGER NOT NULL;
