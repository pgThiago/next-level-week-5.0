import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1622413031098 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.createTable(
				new Table({
					name: "users",
					columns: [
						{
							name: "id",
							type: "uuid",
							isPrimary: true,
						},
						{
							name: "email",
							type: "varchar",
						},
						{
							name: "created_at",
							type: "timestamps",
							default: "now()"
						},
						{
							name: "updated_at",
							type: "timestamps",
							default: "now()"
						},
					]
				})
			)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
			await queryRunner.dropTable("users")
    }

}
