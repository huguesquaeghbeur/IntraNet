using Microsoft.EntityFrameworkCore.Migrations;

namespace IntraNetAPI.Migrations
{
    public partial class SecondMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bills_Collaborators_CollaboratorId",
                table: "Bills");

            migrationBuilder.DropForeignKey(
                name: "FK_Holidays_Collaborators_CollaboratorId",
                table: "Holidays");

            migrationBuilder.DropForeignKey(
                name: "FK_Spents_Missions_MissionId",
                table: "Spents");

            migrationBuilder.AlterColumn<int>(
                name: "MissionId",
                table: "Spents",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AlterColumn<int>(
                name: "CollaboratorId",
                table: "Holidays",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsActive",
                table: "Collaborators",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AlterColumn<int>(
                name: "CollaboratorId",
                table: "Bills",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Bills_Collaborators_CollaboratorId",
                table: "Bills",
                column: "CollaboratorId",
                principalTable: "Collaborators",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Holidays_Collaborators_CollaboratorId",
                table: "Holidays",
                column: "CollaboratorId",
                principalTable: "Collaborators",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Spents_Missions_MissionId",
                table: "Spents",
                column: "MissionId",
                principalTable: "Missions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bills_Collaborators_CollaboratorId",
                table: "Bills");

            migrationBuilder.DropForeignKey(
                name: "FK_Holidays_Collaborators_CollaboratorId",
                table: "Holidays");

            migrationBuilder.DropForeignKey(
                name: "FK_Spents_Missions_MissionId",
                table: "Spents");

            migrationBuilder.DropColumn(
                name: "IsActive",
                table: "Collaborators");

            migrationBuilder.AlterColumn<int>(
                name: "MissionId",
                table: "Spents",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "CollaboratorId",
                table: "Holidays",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "CollaboratorId",
                table: "Bills",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Bills_Collaborators_CollaboratorId",
                table: "Bills",
                column: "CollaboratorId",
                principalTable: "Collaborators",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Holidays_Collaborators_CollaboratorId",
                table: "Holidays",
                column: "CollaboratorId",
                principalTable: "Collaborators",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Spents_Missions_MissionId",
                table: "Spents",
                column: "MissionId",
                principalTable: "Missions",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
