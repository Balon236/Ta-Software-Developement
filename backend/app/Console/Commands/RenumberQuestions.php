<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Question;

class RenumberQuestions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'questions:renumber';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Renumber all questions from 1 to N';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $questions = Question::orderBy('id')->get();

        foreach ($questions as $index => $q) {
            $q->number = $index + 1;
            $q->save();
        }

        $this->info("Questions renumbered successfully.");
    }
}
