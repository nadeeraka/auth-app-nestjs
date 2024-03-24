/*
  Warnings:

  - Added the required column `isCompleted` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "isCompleted" BOOLEAN NOT NULL,
ADD COLUMN     "mark" TIMESTAMP(3);
