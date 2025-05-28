<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;

class AceToolQuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $questions = [
            [
                'number' => 1,
                'question_text' => 'Has any parent/caregiver ever insulted, humiliated, or put you down?',
                'options' => ['Yes','No'],
                'category_id' => 5
            ],
            [
                'number' => 2,
                'question_text' => 'Have you ever lived with a parent/caregiver who had mental health issues? (e.g. depression, schizophrenia, bipolar disorder, PTSD, or an anxiety disorder)',
                'options' => ['Yes','No'],
                'category_id' => 5
            ],
            [
                'number' => 3,
                'question_text' => 'Have you ever lived with a parent/caregiver who went to jail/prison?',
                'options' => ['Yes','No'],
                'category_id' => 5
            ],
            [
                'number' => 4,
                'question_text' => 'Have you ever felt unsupported, unloved and/or unprotected?',
                'options' => ['Yes','No'],
                'category_id' => 5
            ],
            [
                'number' => 5,
                'question_text' => 'Has your biological parent or any caregiver ever had, or currently has a problem with too much alcohol, street drugs or prescription medication use?',
                'options' => ['Yes','No'],
                'category_id' => 5
            ],
            [
                'number' => 6,
                'question_text' => 'Have you ever lacked appropriate care by any caregiver(s)? (e.g. not being protected from unsafe situations, or not cared for when sick or injured even when the resources were available)',
                'options' =>['Yes','No'],
                'category_id' => 5
            ],
        ];

        foreach ($questions as $q) {
            Question::create($q);
        }
    }
}
