<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->enum('role', ['admin', 'manager', 'case_manager', 'client'])->default('client')->after('password');

            $table->foreignId('school_id')->nullable()->after('role')->constrained()->cascadeOnDelete();
            $table->foreignId('classroom_id')->nullable()->after('school_id')->constrained()->cascadeOnDelete();
            $table->foreignId('specialty_id')->nullable()->after('classroom_id')->constrained()->cascadeOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropForeign(['school_id']);
            $table->dropForeign(['classroom_id']);
            $table->dropForeign(['specialty_id']);

            $table->dropColumn(['role', 'school_id', 'classroom_id', 'specialty_id']);
        });
    }
};
