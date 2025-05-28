<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            // Remove consultant column if it exists
            if (Schema::hasColumn('users', 'consultant')) {
                $table->dropColumn('consultant');
            }

            // Add contact info
            $table->string('contact')->nullable()->after('email');
            $table->date('dob')->nullable()->after('contact');
            $table->enum('gender', ['male', 'female', 'other'])->nullable()->after('dob');
        });

        // Update ENUM for 'role'
        DB::statement("ALTER TABLE users MODIFY role ENUM('admin', 'manager', 'case_manager', 'client', 'consultant') DEFAULT 'client'");
    }

    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['contact', 'dob', 'gender']);

            // Optionally: add back the consultant column if needed
            // $table->boolean('consultant')->default(false);
        });

        // Revert ENUM changes
        DB::statement("ALTER TABLE users MODIFY role ENUM('admin', 'manager', 'case_manager', 'client') DEFAULT 'client'");
    }
};
