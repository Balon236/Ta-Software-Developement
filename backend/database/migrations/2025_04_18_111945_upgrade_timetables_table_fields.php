<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('timetables', function (Blueprint $table) {
            $table->dropColumn('schedule');

            $table->string('title')->after('specialty_id');
            $table->date('date')->after('title');
            $table->time('start_time')->after('date');
            $table->time('end_time')->after('start_time');
            $table->string('type')->after('end_time');
            $table->text('description')->nullable()->after('type');
        });
    }

    public function down(): void
    {
        Schema::table('timetables', function (Blueprint $table) {
            $table->dropColumn(['title', 'date', 'start_time', 'end_time', 'type', 'description']);
            $table->json('schedule');
        });
    }
};
