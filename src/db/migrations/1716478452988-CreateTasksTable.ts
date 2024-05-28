import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTasksTable1716478452988 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE tasks (
                id UUID NOT NULL DEFAULT uuid_generate_v4(),
                title VARCHAR(256) NOT NULL,
                description VARCHAR(512) NOT NULL,
                status VARCHAR(50) NOT NULL DEFAULT 'TO_DO',
                expiration_date TIMESTAMP NOT NULL,
                CONSTRAINT task_pk PRIMARY KEY (id)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE tasks`);
    }

}
