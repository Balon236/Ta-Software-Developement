<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;

class SocialDeterminantsTraumaSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            [
                'number' => 1,
                'question_text' => 'Have you, your family, or friends been victims of violence in your neighborhood, community or school? (For example, robbery, assault, or other violent actions, war or terrorism)',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 2,
                'question_text' => 'Have you ever experienced discrimination? (For example, being mistreated or made to feel inferior or excluded because of your race, ethnicity, gender identity, sexual orientation, religion, learning differences, or disabilities)',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 3,
                'question_text' => 'Have you ever had problems with housing? (For example, being homeless, not having a stable place to live, moved more than two times in a six-month period, faced eviction or foreclosure, or had to live with multiple families or family members)',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 4,
                'question_text' => 'Have you ever worried that you did not have enough food to eat or that the food you had would run out before you could buy more?',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 5,
                'question_text' => 'Have you ever been separated from your parent or caregiver due to foster care or immigration?',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 6,
                'question_text' => 'Have you ever lived with a parent/caregiver who had a serious physical illness or disability?',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
            [
                'number' => 7,
                'question_text' => 'Have you ever lived with a parent or caregiver who died?',
                'options' => 'Yes,No',
                'category_id' => 7
            ],
        ];

        $this->command->info('Seeding Social Determinants of Trauma Questions...');

        foreach ($questions as $question) {
            Question::updateOrCreate(
                [
                    'number' => $question['number'],
                    'category_id' => $question['category_id']
                ],
                $question
            );
            $this->command->info("Seeded question #{$question['number']}");
        }

        $this->command->info('Successfully seeded Social Determinants of Trauma Questions!');
    }
}