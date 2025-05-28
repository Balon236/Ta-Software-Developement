<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;

class BehavioralSignsTraumaSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            [
                'number' => 14,
                'question_text' => 'Avoiding social interactions or previously enjoyed activities',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 15,
                'question_text' => 'Spending excessive time alone or in quiet spaces',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 16,
                'question_text' => 'Increased irritability, aggression, or emotional outbursts',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 17,
                'question_text' => 'Sudden drop in academic performance or class participation',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
        ];

        $this->command->info('Seeding Behavioral Signs of Trauma Questions (14-17)...');

        foreach ($questions as $question) {
            Question::updateOrCreate(
                [
                    'number' => $question['number'],
                    'category_id' => $question['category_id']
                ],
                $question
            );
            $this->command->info("Seeded question #{$question['number']}: {$question['question_text']}");
        }

        $this->command->info('Successfully seeded Behavioral Signs of Trauma Questions (14-17)!');
    }
}