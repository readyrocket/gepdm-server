import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUsers1612615129382 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: `users`,
        columns: [
          {
            name: `id`,
            type: `varchar`,
            unsigned: true,
            isPrimary: true,
            isGenerated: true,
            generationStrategy: `uuid`,
            default: `uuid_generate_v4()`,
          },
          {
            name: `name`,
            type: `varchar`,
          },
          {
            name: `email`,
            type: `vachar`,
          },
          {
            name: `password`,
            type: `varchar`,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(`users`);
  }
}
