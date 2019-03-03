using Microsoft.EntityFrameworkCore.Migrations;

namespace FootbalMatcher.API.Migrations
{
    public partial class GameModelFixedAgain : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "HostId",
                table: "Games",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HostId",
                table: "Games");
        }
    }
}
