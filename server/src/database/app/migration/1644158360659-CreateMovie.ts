import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMovie1644156960075 implements MigrationInterface {
  public movieTable: Table = new Table({
    name: "movies",
    columns: [
      {
        name: "id",
        type: `integer`,
        isPrimary: true,
        isGenerated: true,
        generationStrategy: "increment",
        isNullable: false,
      },
      {
        name: "categoryName",
        type: "varchar",
        isNullable: false,
      },
      {
        name: "listMovies",
        type: "varchar",
        isNullable: false,
      },
    ],
  });

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(this.movieTable, true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("movies");
  }
}
