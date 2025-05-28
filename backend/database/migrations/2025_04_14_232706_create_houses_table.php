<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
{
    Schema::create('houses', function (Blueprint $table) {
        $table->id(); // creates an auto-incrementing "id" column
        $table->string('name'); // creates a "name" column (text up to 255 characters)
        $table->string('location'); // creates a "location" column
        $table->decimal('price', 10, 2); // creates a "price" column for money (10 digits total, 2 decimal places)
        $table->text('description')->nullable(); // creates a "description" column, allows null (optional)
        $table->timestamps(); // adds "created_at" and "updated_at" columns
    });
}

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('houses');
    }
};
