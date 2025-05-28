<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddFollowupIdAndTypeToTaskRemindersTable extends Migration
{
    public function up()
    {
        Schema::table('task_reminders', function (Blueprint $table) {
            $table->unsignedBigInteger('followup_id')->nullable()->after('id');
            $table->enum('type', ['followup', 'task'])->default('task')->after('followup_id');

            // Add foreign key constraint if appropriate
            $table->foreign('followup_id')->references('id')->on('follow_ups')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::table('task_reminders', function (Blueprint $table) {
            $table->dropForeign(['followup_id']);
            $table->dropColumn(['followup_id', 'type']);
        });
    }
}
