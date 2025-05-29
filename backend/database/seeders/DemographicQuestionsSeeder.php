<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Question;

class DemographicQuestionsSeeder extends Seeder
{
    public function run(): void
    {
        $questions = [
            'School Name',
            'Participant Code',
            'Full Names',
            'Class',
            'Date of Birth',
            'Age',
            'Gender',
            'Home Address',
            'Religion',
            'Division',
            'Email',
            'Phone Number',
            'WhatsApp Number',
        ];

        foreach ($questions as $index => $text) {
            Question::create([
                'number'    => $index + 1,
                'question_text'  => $text,
                'options'   => null,
                'category_id' => 1,
            ]);
        }
    }
}
