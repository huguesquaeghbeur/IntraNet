using Microsoft.EntityFrameworkCore.Migrations;

namespace IntraNetAPI.Migrations
{
    public partial class fourthMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsChief",
                table: "Collaborators");

            migrationBuilder.AddColumn<int>(
                name: "Status",
                table: "Collaborators",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "Collaborators");

            migrationBuilder.AddColumn<bool>(
                name: "IsChief",
                table: "Collaborators",
                type: "tinyint(1)",
                nullable: false,
                defaultValue: false);
        }
    }
}
