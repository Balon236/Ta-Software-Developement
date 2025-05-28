<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTaskRemindersTable extends Migration
{
    public function up()
    {
        Schema::create('task_reminders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('task_id');
            $table->date('due_date');
            $table->enum('priority', ['low', 'medium', 'high'])->default('medium');
            $table->enum('status', ['done', 'not done'])->default('not done');
            $table->timestamps();

            $table->foreign('task_id')->references('id')->on('tasks')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('task_reminders');
    }
}
