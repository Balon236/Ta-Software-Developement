<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;

class ParentalContactSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            ['number' => 1, 'question_text' => 'Full Names of Parents/Guardian'],
            ['number' => 2, 'question_text' => 'Phone Number'],
            ['number' => 3, 'question_text' => 'Relationship'],
            ['number' => 4, 'question_text' => 'Occupation'],
            ['number' => 5, 'question_text' => 'WhatsApp Number'],
            ['number' => 6, 'question_text' => 'Email'],
            ['number' => 7, 'question_text' => 'Home Address'],
        ];

        foreach ($questions as $question) {
            Question::create([
                'number' => $question['number'],
                'question_text' => $question['question_text'],
                'category_id' => 3,
            ]);
        }
    }
}
