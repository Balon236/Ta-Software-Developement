<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Demographic Data',
                'cat_text' => 'Details about student’s basic identity',
            ],
            [
                'name' => 'Physical Examination',
                'cat_text' => 'Summary of student’s health/physical status',
            ],
            [
                'name' => 'Parental Contact',
                'cat_text' => 'Parental or guardian information',
            ],
            [
                'name' => 'Academic History and Expectation',
                'cat_text' => 'Past school records and future goals',
            ],
            [
                'name' => 'Pediatric ACES',
                'cat_text' => 'Childhood traumatic experiences check',
            ],
            [
                'name' => 'Final Question and Summary',
                'cat_text' => 'Closing review',
            ],
            [
                'name' => 'Comprehensive Checklist for Trauma and Mental Issues',
                'cat_text' => 'Detailed psychological screening',
            ],
        ];

        foreach ($categories as $category) {
            Category::create($category);
        }
    }
}
