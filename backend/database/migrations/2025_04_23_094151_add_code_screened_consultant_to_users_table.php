<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('code')->nullable()->after('specialty_id');
            $table->enum('screened', ['yes', 'no'])->default('no')->after('code');
            $table->string('consultant_role')->nullable()->after('screened');
        });
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['code', 'screened', 'consultant_role']);
        });
    }
};
