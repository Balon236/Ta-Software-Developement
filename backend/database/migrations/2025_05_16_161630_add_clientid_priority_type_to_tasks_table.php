<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddClientidPriorityTypeToTasksTable extends Migration
{
    public function up()
    {
        Schema::table('tasks', function (Blueprint $table) {
            $table->unsignedBigInteger('client_id')->nullable()->after('manager_id');
            $table->enum('priority', ['high', 'medium', 'low'])->default('medium')->after('client_id');
            $table->enum('type', ['general', 'followup'])->default('general')->after('priority');

            $table->foreign('client_id')->references('id')->on('clients')->onDelete('set null');
        });
    }

    public function down()
    {
        Schema::table('tasks', function (Blueprint $table) {
            $table->dropForeign(['client_id']);
            $table->dropColumn(['client_id', 'priority', 'type']);
        });
    }
}
