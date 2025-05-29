<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;

class FinalScreeningQuestionSeeder extends Seeder
{
    public function run(): void
    {
        $question = [
            'number' => 1, // Starting at 1 since this is a new category
            'question_text' => 'Do you believe that these experiences have affected your Education, Relationships, health or other aspects of your life?',
            'options' => 'So Much,Some,Add',
            'category_id' => 6
        ];

        $this->command->info('Seeding Final Screening Question for Category 6...');

        Question::updateOrCreate(
            [
                'number' => $question['number'],
                'category_id' => $question['category_id']
            ],
            $question
        );

        $this->command->info("Seeded final question: {$question['question_text']}");
        $this->command->info('Options: '.$question['options']);
        $this->command->info('Successfully seeded Final Screening Question!');
    }
}