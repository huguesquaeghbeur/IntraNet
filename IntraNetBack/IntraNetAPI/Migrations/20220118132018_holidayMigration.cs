using Microsoft.EntityFrameworkCore.Migrations;

namespace IntraNetAPI.Migrations
{
    public partial class holidayMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "EndOnMorning",
                table: "Holidays",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "HalfDayBreakCount",
                table: "Holidays",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EndOnMorning",
                table: "Holidays");

            migrationBuilder.DropColumn(
                name: "HalfDayBreakCount",
                table: "Holidays");
        }
    }
}
