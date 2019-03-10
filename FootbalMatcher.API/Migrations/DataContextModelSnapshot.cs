﻿// <auto-generated />
using System;
using FootbalMatcher.API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace FootbalMatcher.API.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.2-servicing-10034");

            modelBuilder.Entity("FootbalMatcher.API.Models.Game", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("Date");

                    b.Property<string>("Description");

                    b.Property<int>("HostId");

                    b.Property<string>("HostName");

                    b.Property<string>("Location");

                    b.Property<string>("Name");

                    b.Property<int>("Slots");

                    b.HasKey("Id");

                    b.ToTable("Games");
                });

            modelBuilder.Entity("FootbalMatcher.API.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("City");

                    b.Property<DateTime>("Created");

                    b.Property<string>("FavouriteClub");

                    b.Property<int?>("GameId");

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("Username");

                    b.HasKey("Id");

                    b.HasIndex("GameId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("FootbalMatcher.API.Models.Value", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Values");
                });

            modelBuilder.Entity("FootbalMatcher.API.Models.User", b =>
                {
                    b.HasOne("FootbalMatcher.API.Models.Game")
                        .WithMany("Participants")
                        .HasForeignKey("GameId");
                });
#pragma warning restore 612, 618
        }
    }
}
