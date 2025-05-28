<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::table('referrals', function (Blueprint $table) {
            $table->enum('follow_up_status', ['pending', 'in_progress', 'completed'])->default('pending')->after('date_of_referral');
            $table->text('result')->nullable()->after('follow_up_status');
            $table->enum('action', ['stable', 'no_action_needed', 'action_needed'])->nullable()->after('result');
            $table->text('progress')->nullable()->after('action');
        });
    }

    public function down(): void
    {
        Schema::table('referrals', function (Blueprint $table) {
            $table->dropColumn(['follow_up_status', 'result', 'action', 'progress']);
        });
    }
};
