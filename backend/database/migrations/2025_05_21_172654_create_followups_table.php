<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFollowupsTable extends Migration
{
    public function up()
    {
        Schema::create('followups', function (Blueprint $table) {
            $table->id();
            $table->foreignId('client_id')->constrained()->onDelete('cascade');

            $table->enum('followup_status', ['pending', 'in_progress', 'completed'])->default('pending');
            $table->enum('priority', ['low', 'medium', 'high'])->default('medium');
            $table->enum('final_status', ['stable', 'action_needed', 'no_action']);

            $table->text('description')->nullable();
            $table->date('start_date')->nullable();
            $table->date('due_date')->nullable();

            $table->string('assignees')->nullable(); // Could be comma-separated user IDs or names
            $table->string('time_estimate')->nullable(); // e.g., "3h", "2d", etc.
            $table->string('summary')->nullable();

            $table->date('completion_date')->nullable();

            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('followups');
    }
}
