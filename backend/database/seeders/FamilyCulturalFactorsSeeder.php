<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;

class FamilyCulturalFactorsSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            // Family Dynamics
            [
                'number' => 38,
                'question_text' => 'Changes in family structure (divorce, loss of a family member)',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 39,
                'question_text' => 'Exposure to domestic violence, substance abuse, or mental illness in the home',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            
            // Community Context
            [
                'number' => 40,
                'question_text' => 'Living in a high-crime area or experiencing community violence',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 41,
                'question_text' => 'Displacement, homelessness, or unstable living conditions',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            
            // Cultural Considerations
            [
                'number' => 42,
                'question_text' => 'Understanding the student\'s cultural context and its impact on behavior',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 43,
                'question_text' => 'Recognizing stigma surrounding mental health in certain cultures',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
        ];

        $this->command->info('Seeding Family/Cultural Factors Questions (38-43)...');

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

        $this->command->info('Successfully seeded Family/Cultural Factors Questions (38-43)!');
    }
}