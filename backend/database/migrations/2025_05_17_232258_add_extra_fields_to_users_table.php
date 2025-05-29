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
        Schema::table('users', function (Blueprint $table) {
            $table->enum('language', ['english', 'french'])->default('english');
            $table->enum('marital_status', ['single', 'married'])->default('single');
            $table->string('whatsapp_number')->nullable();
            $table->string('location')->nullable();
        });
    }
    
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['language', 'marital_status', 'whatsapp_number', 'location']);
        });
    }
    
};
