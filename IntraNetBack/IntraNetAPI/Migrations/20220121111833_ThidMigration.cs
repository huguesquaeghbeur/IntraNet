using Microsoft.EntityFrameworkCore.Migrations;

namespace IntraNetAPI.Migrations
{
    public partial class ThidMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Department",
                table: "Collaborators",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Department",
                table: "Collaborators");
        }
    }
}
