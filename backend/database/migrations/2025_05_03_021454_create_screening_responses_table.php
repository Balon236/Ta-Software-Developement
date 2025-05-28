<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('screening_responses', function (Blueprint $table) {
            $table->id();
            $table->foreignId('screen_record_id')->constrained()->cascadeOnDelete();
            $table->foreignId('question_id')->constrained()->cascadeOnDelete();
            $table->text('answer');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('screening_responses');
    }
};
