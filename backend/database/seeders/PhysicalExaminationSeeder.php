<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;

class PhysicalExaminationSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            ['number' => 1, 'question_text' => 'Height', 'options' => null, 'category_id' => 2],
            ['number' => 2, 'question_text' => 'Weight', 'options' => null, 'category_id' => 2],
            ['number' => 3, 'question_text' => 'Body Mass Index (BMI)', 'options' => null, 'category_id' => 2],
            ['number' => 4, 'question_text' => 'Menarch', 'options' => null, 'category_id' => 2],
            ['number' => 5, 'question_text' => 'Vision (R, L, ...)', 'options' => null, 'category_id' => 2],
            ['number' => 6, 'question_text' => 'Waist Circumference', 'options' => null, 'category_id' => 2],
            ['number' => 7, 'question_text' => 'Upper Arm Circumferences', 'options' => 'Male,Female', 'category_id' => 2],
            ['number' => 8, 'question_text' => 'E/N/T', 'options' => null, 'category_id' => 2],
            ['number' => 9, 'question_text' => 'Any Observed Physical Condition?', 'options' => null, 'category_id' => 2],
        ];

        foreach ($questions as $q) {
            Question::create($q);
        }
    }
}
