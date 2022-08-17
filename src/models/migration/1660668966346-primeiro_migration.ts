import { MigrationInterface, QueryRunner } from "typeorm"

export class primeiroMigration1660668966346 implements MigrationInterface {
  name = "primeiroMigration1660668966346"

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "login" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_0e29aa96b7d3fb812ff43fcfcd3" PRIMARY KEY ("id"))`
    )
    await queryRunner.query(
      `CREATE TABLE "movie" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "gender" character varying NOT NULL, "classification" character varying NOT NULL, "subtitle" character varying NOT NULL, "image" character varying NOT NULL, "releaseDate" TIMESTAMP NOT NULL, "director" character varying NOT NULL, "writer" character varying NOT NULL, "studio" character varying NOT NULL, "actors" character varying NOT NULL, "resume" character varying NOT NULL, "awards" character varying NOT NULL, "note" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, "updated_at" TIMESTAMP NOT NULL DEFAULT ('now'::text)::timestamp(6) with time zone, CONSTRAINT "PK_cb3bb4d61cf764dc035cbedd422" PRIMARY KEY ("id"))`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "movie"`)
    await queryRunner.query(`DROP TABLE "login"`)
  }
}
