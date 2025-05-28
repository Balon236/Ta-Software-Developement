
<?php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddDetailsToTasksTable extends Migration
{
    public function up()
    {
        Schema::table('tasks', function (Blueprint $table) {
            $table->date('start_date')->nullable();
            $table->date('due_date')->nullable();
            $table->string('assignees')->nullable(); // Or use text if long
            $table->string('time_estimate')->nullable();
        });
    }

    public function down()
    {
        Schema::table('tasks', function (Blueprint $table) {
            $table->dropColumn(['start_date', 'due_date', 'assignees', 'time_estimate']);
        });
    }
}
