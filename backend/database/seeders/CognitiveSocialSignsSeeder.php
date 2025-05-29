<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;

class CognitiveSocialSignsSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            // Cognitive Signs - Negative Thought Patterns
            [
                'number' => 28,
                'question_text' => 'Expressions of self-doubt or negative self-talk',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 29,
                'question_text' => 'Preoccupation with traumatic events or negative outcomes',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            
            // Social Signs - Withdrawal
            [
                'number' => 30,
                'question_text' => 'Lack of interest in friendships or group activities',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 31,
                'question_text' => 'Difficulty maintaining relationships with peers',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            
            // Social Signs - Conflict
            [
                'number' => 32,
                'question_text' => 'Increased instances of bullying, fighting, or arguments',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 33,
                'question_text' => 'Distrust or defiance towards teachers or authority figures',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
        ];

        $this->command->info('Seeding Cognitive/Social Signs Questions (28-33)...');

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

        $this->command->info('Successfully seeded Cognitive/Social Signs Questions (28-33)!');
    }
}