<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->integer('number'); // Question number
            $table->text('question_text'); // The question itself
            $table->json('options')->nullable(); // Optional, for multiple choices
            $table->foreignId('category_id')->constrained()->cascadeOnDelete(); // Link to category
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('questions');
    }
};
