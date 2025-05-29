<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;

class VerbalIndicatorsSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            // Expressions of Distress
            [
                'number' => 34,
                'question_text' => 'Statements indicating feelings of being overwhelmed or anxious',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 35,
                'question_text' => 'Comments about feeling unsafe or threatened (at home or school)',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            
            // Suicidal Ideation
            [
                'number' => 36,
                'question_text' => 'Any mention of self-harm or thoughts of suicide (should be taken seriously)',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 37,
                'question_text' => 'Statements indicating a desire to escape or end life',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
        ];

        $this->command->info('Seeding Verbal Indicators Questions (34-37)...');

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

        $this->command->info('Successfully seeded Verbal Indicators Questions (34-37)!');
    }
}