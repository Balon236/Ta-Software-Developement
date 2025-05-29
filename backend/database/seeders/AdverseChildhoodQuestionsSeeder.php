<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;

class AdverseChildhoodQuestionsSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            [
                'number' => 7,
                'question_text' => 'Have you ever seen or heard a parent/caregiver being screamed at, sworn at, insulted or humiliated by another adult? Or has your child ever seen or heard a parent/caregiver being slapped, kicked, punched, beaten up or hurt with a weapon?',
                'options' => 'Yes,No',
                'category_id' => 5
            ],
            [
                'number' => 8,
                'question_text' => 'Has any adult in the household often pushed, grabbed, slapped or thrown something at you? Or has any adult in the household ever threatened you in a way that made you afraid that you might be hurt?',
                'options' => 'Yes,No',
                'category_id' => 5
            ],
            [
                'number' => 9,
                'question_text' => 'Have you ever experienced sexual abuse? (For example, anyone touched you or asked you to touch that person in a way that was unwanted, or made you feel uncomfortable, or anyone ever attempted or actually had oral, anal, or vaginal sex with you?)',
                'options' => 'Yes,No',
                'category_id' => 5
            ],
            [
                'number' => 10,
                'question_text' => 'Have there ever been significant changes in the relationship status of your caregiver(s)? (For example, your parent/caregiver got divorced or separated, or a romantic partner moved in or out)',
                'options' => 'Yes,No',
                'category_id' => 5
            ],
        ];

        $this->command->info('Seeding Adverse Childhood Experience Questions...');

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

        $this->command->info('Successfully seeded Adverse Childhood Experience Questions!');
    }
}