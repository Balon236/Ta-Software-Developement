<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;

class BehavioralEmotionalSignsSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            // Risk-Taking Behaviors
            [
                'number' => 18,
                'question_text' => 'Engaging in self-harm, substance abuse, or reckless actions',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 19,
                'question_text' => 'Exhibiting defiance or hostility towards authority figures',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            
            // Mood Instability
            [
                'number' => 20,
                'question_text' => 'Frequent or extreme mood swings',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 21,
                'question_text' => 'Overreaction to minor frustrations or triggers',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            
            // Anxiety and Fear
            [
                'number' => 22,
                'question_text' => 'Excessive worry about academic performance, social situations, or home life',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 23,
                'question_text' => 'Signs of panic attacks (e.g., rapid heartbeat, shortness of breath)',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
        ];

        $this->command->info('Seeding Behavioral/Emotional Signs Questions (18-23)...');

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

        $this->command->info('Successfully seeded Behavioral/Emotional Signs Questions (18-23)!');
    }
}