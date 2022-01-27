using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace IntraNetAPI.Migrations
{
    public partial class spentMigrationEnum : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "ExpenseDate",
                table: "Spents",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "FeeType",
                table: "Spents",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ExpenseDate",
                table: "Spents");

            migrationBuilder.DropColumn(
                name: "FeeType",
                table: "Spents");
        }
    }
}
