import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUsers1609614027892 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    await queryRunner.createTable(
      new Table({
        name: `users`,
        columns: [
          {
            name: `id`,
            type: `uuid`,
            unsigned: true,
            isPrimary: true,
            isUnique: true,
            generationStrategy: `uuid`,
            default: `uuid_generate_v4()`,
          },
          {
            name: `name`,
            type: `varchar`,
          },
          {
            name: `email`,
            type: `varchar`,
          },
          {
            name: `password`,
            type: `varchar`,
          },
          {
            name: `created_at`,
            type: `timestamp`,
            default: `now()`,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(`users`);
  }
}
