<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;

class AcademicIndicatorsSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            // Academic Decline
            [
                'number' => 44,
                'question_text' => 'Sudden drops in grades or attendance',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 45,
                'question_text' => 'Lack of motivation or engagement in schoolwork',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            
            // Disengagement
            [
                'number' => 46,
                'question_text' => 'Frequent absences or tardiness without valid reasons',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 47,
                'question_text' => 'Lack of participation in classroom discussions or activities',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
        ];

        $this->command->info('Seeding Academic Indicators Questions (44-47)...');

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

        $this->command->info('Successfully seeded Academic Indicators Questions (44-47)!');
    }
}