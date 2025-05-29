<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('clients', function (Blueprint $table) {
            $table->integer('age')->nullable()->after('id'); // adjust 'id' to any existing column
            $table->date('dob')->nullable()->after('age');
            $table->enum('gender', ['male', 'female', 'other'])->nullable()->after('dob');
        });
    }

    public function down(): void
    {
        Schema::table('clients', function (Blueprint $table) {
            $table->dropColumn(['age', 'dob', 'gender']);
        });
    }
};
