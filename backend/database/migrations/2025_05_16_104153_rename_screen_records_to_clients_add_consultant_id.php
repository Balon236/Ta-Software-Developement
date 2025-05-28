<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        // Rename the table
        Schema::rename('screen_records', 'clients');

        // Add consultant_id column as foreign key
        Schema::table('clients', function (Blueprint $table) {
            $table->foreignId('consultant_id')
                ->nullable()
                ->after('sevierity') // or wherever appropriate
                ->constrained('users')
                ->cascadeOnDelete();
        });
    }

    public function down(): void
    {
        // Drop foreign key and column
        Schema::table('clients', function (Blueprint $table) {
            $table->dropForeign(['consultant_id']);
            $table->dropColumn('consultant_id');
        });

        // Rename back to original table
        Schema::rename('clients', 'screen_records');
    }
};
