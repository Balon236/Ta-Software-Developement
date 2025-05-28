<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;

class DepressionCognitiveSignsSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            // Depression Signs
            [
                'number' => 24,
                'question_text' => 'Persistent feelings of sadness, hopelessness, or despair',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 25,
                'question_text' => 'Expressions of worthlessness or excessive guilt',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            
            // Cognitive Signs - Difficulty Concentrating
            [
                'number' => 26,
                'question_text' => 'Trouble focusing on tasks or completing homework',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 27,
                'question_text' => 'Frequent forgetfulness or disorganization in schoolwork',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
        ];

        $this->command->info('Seeding Depression/Cognitive Signs Questions (24-27)...');

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

        $this->command->info('Successfully seeded Depression/Cognitive Signs Questions (24-27)!');
    }
}