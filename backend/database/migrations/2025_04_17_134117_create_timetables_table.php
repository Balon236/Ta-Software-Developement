<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('timetables', function (Blueprint $table) {
            $table->id();
            $table->foreignId('specialty_id')->constrained()->cascadeOnDelete();
            $table->json('schedule');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('timetables');
    }
};
