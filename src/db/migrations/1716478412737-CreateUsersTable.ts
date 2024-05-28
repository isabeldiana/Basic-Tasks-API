import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersTable1716478412737 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "users" (
                id UUID NOT NULL DEFAULT uuid_generate_v4(),
                username VARCHAR(256) NOT NULL,
                password_hash VARCHAR(256) NOT NULL,
                CONSTRAINT users_pk_id PRIMARY KEY (id),
                CONSTRAINT users_un_username UNIQUE (username)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
