<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    // GET /api/questions?range=1-10
    public function index(Request $request)
    {
        // Optional: Handle query param like ?range=1-10
        $range = explode('-', $request->get('range', '1-10'));
        $start = (int)($range[0] ?? 1);
        $end = (int)($range[1] ?? 10);

        $questions = Question::whereBetween('id', [$start, $end])->orderBy('number')->get();

        return response()->json($questions);
    }
}
