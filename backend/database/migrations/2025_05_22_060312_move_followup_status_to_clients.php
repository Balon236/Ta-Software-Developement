<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class MoveFollowupStatusToClients extends Migration
{
    public function up()
    {
        Schema::table('clients', function (Blueprint $table) {
            $table->enum('followup_status', ['pending', 'in_progress', 'completed'])->default('pending')->after('is_referred');
        });

        Schema::table('followups', function (Blueprint $table) {
            $table->dropColumn('followup_status');
        });
    }

    public function down()
    {
        Schema::table('followups', function (Blueprint $table) {
            $table->enum('followup_status', ['pending', 'in_progress', 'completed'])->default('pending');
        });

        Schema::table('clients', function (Blueprint $table) {
            $table->dropColumn('followup_status');
        });
    }
}
