<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;

class PeerTeacherResponseSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            // Peer Feedback
            [
                'number' => 48,
                'question_text' => 'Comments from classmates about noticeable changes in behavior',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 49,
                'question_text' => 'Peer reports of bullying or social exclusion',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            
            // Teacher Observation
            [
                'number' => 50,
                'question_text' => 'Notable changes in engagement, participation, or classroom behavior',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 51,
                'question_text' => 'Concerns raised by teachers regarding a student\'s emotional state',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            
            // Response to Support
            [
                'number' => 52,
                'question_text' => 'Willingness to discuss feelings or seek help when prompted',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 53,
                'question_text' => 'Engagement in counseling or support services offered at school',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
        ];

        $this->command->info('Seeding Peer/Teacher/Response Questions (48-53)...');

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

        $this->command->info('Successfully seeded Peer/Teacher/Response Questions (48-53)!');
    }
}