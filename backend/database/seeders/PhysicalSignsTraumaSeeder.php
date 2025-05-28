<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;

class PhysicalSignsTraumaSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            [
                'number' => 8,
                'question_text' => 'Noticeable weight fluctuations (loss or gain)',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 9,
                'question_text' => 'Neglected personal hygiene (e.g., dirty clothes, unkept hair)',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 10,
                'question_text' => 'Unexplained bruises, cuts, or injuries',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 11,
                'question_text' => 'Frequent complaints of headaches, stomachaches, or fatigue',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 12,
                'question_text' => 'Sleep disturbances (nightmares, or excessive sleeping)',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 13,
                'question_text' => 'Sudden drop in energy or motivation',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
        ];

        $this->command->info('Seeding Physical Signs of Trauma Questions (8-13)...');

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

        $this->command->info('Successfully seeded Physical Signs of Trauma Questions (8-13)!');
    }
}