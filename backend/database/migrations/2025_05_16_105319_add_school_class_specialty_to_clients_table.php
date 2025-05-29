<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('clients', function (Blueprint $table) {
            $table->foreignId('school_id')->nullable()->after('consultant_id')->constrained()->cascadeOnDelete();
            $table->foreignId('classroom_id')->nullable()->after('school_id')->constrained()->cascadeOnDelete();
            $table->foreignId('specialty_id')->nullable()->after('classroom_id')->constrained()->cascadeOnDelete();
        });
    }

    public function down(): void
    {
        Schema::table('clients', function (Blueprint $table) {
            $table->dropForeign(['school_id']);
            $table->dropForeign(['classroom_id']);
            $table->dropForeign(['specialty_id']);

            $table->dropColumn(['school_id', 'classroom_id', 'specialty_id']);
        });
    }
};
