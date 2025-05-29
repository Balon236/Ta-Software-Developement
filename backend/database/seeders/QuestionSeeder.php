<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $questions = [
            'Type of Learner (Visual, Auditory, Kinesthetic, Reading/Writing)',
            'What are the things you enjoy doing? (List 3)',
            'What do you want to become as you grow up?',
            'Last Year\'s Performance - First Term (Average/Position)',
            'Last Year\'s Performance - Second Term (Average/Position)',
            'Last Year\'s Performance - Third Term (Average/Position)',
            'Desired Average',
        ];

        foreach ($questions as $index => $text) {
            Question::create([
                'number' => $index + 1,
                'question_text' => $text,
                'options' => null,  // Set to null for all questions
                'category_id' => 4,  // Changed to your category 4
            ]);
        }
    }
}