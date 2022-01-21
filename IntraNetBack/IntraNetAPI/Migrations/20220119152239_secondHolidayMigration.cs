using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace IntraNetAPI.Migrations
{
    public partial class secondHolidayMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bills_Collaborators_CollaboratorId",
                table: "Bills");

            migrationBuilder.DropForeignKey(
                name: "FK_Holidays_Collaborators_CollaboratorId",
                table: "Holidays");

            migrationBuilder.AlterColumn<int>(
                name: "CollaboratorId",
                table: "Holidays",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "LeaveType",
                table: "Holidays",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<int>(
                name: "CollaboratorId",
                table: "Bills",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsSubmitted",
                table: "Bills",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "SubmissionDate",
                table: "Bills",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Bills_Collaborators_CollaboratorId",
                table: "Bills");

            migrationBuilder.DropForeignKey(
                name: "FK_Holidays_Collaborators_CollaboratorId",
                table: "Holidays");

            migrationBuilder.DropColumn(
                name: "LeaveType",
                table: "Holidays");

            migrationBuilder.DropColumn(
                name: "IsSubmitted",
                table: "Bills");

            migrationBuilder.DropColumn(
                name: "SubmissionDate",
                table: "Bills");

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
        }
    }
}
