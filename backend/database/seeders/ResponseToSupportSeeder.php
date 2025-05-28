<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;

class ResponseToSupportSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            // Receptiveness to Help (continued)
            [
                'number' => 54,
                'question_text' => 'Willingness to discuss feelings or seek help when prompted',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 55,
                'question_text' => 'Engagement in counseling or support services offered at school',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            
            // Changes After Support
            [
                'number' => 56,
                'question_text' => 'Monitoring changes in behavior or academic performance after intervention',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 57,
                'question_text' => 'Feedback on the effectiveness of support strategies',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
        ];

        $this->command->info('Seeding Response to Support Questions (54-57)...');

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

        $this->command->info('Successfully seeded Response to Support Questions (54-57)!');
    }
}