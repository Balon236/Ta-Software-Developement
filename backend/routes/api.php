<?php
namespace App\Http\Controllers\Api;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\HouseController;
//classrooms
use App\Http\Controllers\Api\Classroom\CreatingClassController;
use App\Http\Controllers\Api\Classroom\ViewingClassroomsController;
use App\Http\Controllers\Api\Classroom\AssigningManagerController;
use App\Http\Controllers\Api\Classroom\RemovingManagerController;
use App\Http\Controllers\Api\Classroom\DeletingClassController;
use App\Http\Controllers\Api\Classroom\SearchingClassController;
//specialties
use App\Http\Controllers\Api\Specialty\CreatingSpecialtyController;
use App\Http\Controllers\Api\Specialty\ViewingSpecialtiesController;
use App\Http\Controllers\Api\Specialty\AssigningSpecialtyManagerController;
use App\Http\Controllers\Api\Specialty\RemovingSpecialtyManagerController;
use App\Http\Controllers\Api\Specialty\DeletingSpecialtyController;
use App\Http\Controllers\Api\Specialty\SearchingSpecialtyController;

//timeTables
use App\Http\Controllers\Api\Timetable\CreatingTimetableController;
use App\Http\Controllers\Api\Timetable\ViewingTimetablesController;
use App\Http\Controllers\Api\Timetable\UpdatingTimetableController;
use App\Http\Controllers\Api\Timetable\DeletingTimetableController;

//question
use App\Http\Controllers\Api\QuestionController;

//clients
use App\Http\Controllers\Api\ClientController;

//ScreeningResponse
use App\Http\Controllers\Api\ScreeningResponseController;

//casemanager
use App\Http\Controllers\Api\CaseManagerController;
use App\Http\Controllers\ManagerController;


//Task
use App\Http\Controllers\API\TaskController;

//consultant
use App\Http\Controllers\API\ConsultantController;

//referrals
use App\Http\Controllers\Api\Referral\ReferralController;

//Reminder
use App\Http\Controllers\API\ReminderController;

//task update
use App\Http\Controllers\API\Task\TaskController2;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

//followup
use App\Http\Controllers\API\FollowUp\FilterFollowUpController;
use App\Http\Controllers\API\FollowUp\AddFollowUpTaskController;
use App\Http\Controllers\API\FollowUp\FollowUpController;

use App\Http\Controllers\Api\School\SchoolController;

Route::get('/schools', [SchoolController::class, 'index']);

Route::prefix('classrooms')->group(function () {
    Route::post('/create', CreatingClassController::class);
    Route::get('/view', ViewingClassroomsController::class);
    Route::post('/assign-manager', AssigningManagerController::class);
    Route::post('/remove-manager', RemovingManagerController::class);
    Route::post('/delete', DeletingClassController::class);
    Route::get('/search', SearchingClassController::class);
    Route::get('/by-school/{school_id}', [SearchingClassController::class, 'getClassesBySchool']);

    
});


Route::prefix('specialties')->group(function () {
    Route::post('/create', CreatingSpecialtyController::class);
    Route::get('/view', ViewingSpecialtiesController::class);
    Route::post('/assign-manager', AssigningSpecialtyManagerController::class);
    Route::post('/remove-manager', RemovingSpecialtyManagerController::class);
    Route::post('/delete', DeletingSpecialtyController::class);
    Route::get('/search', SearchingSpecialtyController::class);
});


Route::prefix('timetables')->group(function () {
    Route::post('/create', CreatingTimetableController::class);
    Route::post('/view', ViewingTimetablesController::class);
    Route::post('/update', UpdatingTimetableController::class);
    Route::post('/delete', DeletingTimetableController::class);
});




Route::get('/questions', [QuestionController::class, 'index']);



Route::prefix('screening-responses')->group(function () {
    Route::get('/', [ScreeningResponseController::class, 'index']);
    Route::get('/{id}', [ScreeningResponseController::class, 'show']);
    Route::post('/', [ScreeningResponseController::class, 'store']);
    Route::post('/initial-submit', [ScreeningResponseController::class, 'initialSubmit']); // ✅ New route
    Route::put('/{id}', [ScreeningResponseController::class, 'update']);
    Route::delete('/{id}', [ScreeningResponseController::class, 'destroy']);
    Route::post('/checklist-submit', [ScreeningResponseController::class, 'submitChecklistAnswers']);
});




Route::prefix('clients')->group(function () {
    // Supports: /api/clients?manager_id=3 or just /api/clients
    Route::get('/', [ClientController::class, 'index']);

    // Get single client by ID
    Route::get('/{id}', [ClientController::class, 'show']);

    // Create new client
    Route::post('/', [ClientController::class, 'store']);

    // Update existing client
    Route::put('/{id}', [ClientController::class, 'update']);
    Route::get('/filter/followup-status', [ClientController::class, 'filterByFollowupStatus']);


    // Delete client
    Route::delete('/{id}', [ClientController::class, 'destroy']);

    // Filter by severity
    Route::get('/filter/{level}', [ClientController::class, 'filterBySevierity']);
    Route::get('/followup/completed', [ClientController::class, 'completedFollowupsByManager']);

});

Route::prefix('case-managers')->group(function () {
    Route::get('/', [CaseManagerController::class, 'index']);
    Route::get('/{id}', [CaseManagerController::class, 'show']);
    Route::put('/{id}', [CaseManagerController::class, 'update']);
    Route::delete('/{id}', [CaseManagerController::class, 'destroy']);
    Route::post('/add', [ManagerController::class, 'store']);
});





Route::prefix('task')->group(function () {
    Route::get('/all', [TaskController::class, 'index']);               // View all tasks
    Route::post('/assign', [TaskController::class, 'assign']);          // Assign a task
    Route::post('/unassign', [TaskController::class, 'unassign']);      // Unassign a task
    Route::delete('/{id}', [TaskController::class, 'destroy']);         // Delete task
    Route::get('/assigned', [TaskController::class, 'assignedTasks']);  // View assigned tasks
    Route::post('/create', [TaskController::class, 'store']);  
});





Route::prefix('consultant')->group(function () {
    Route::get('/all', [ConsultantController::class, 'index']);           // View all consultants
    Route::delete('/{id}', [ConsultantController::class, 'destroy']);     // Delete a consultant
    Route::get('/search', [ConsultantController::class, 'search']);       // Search consultants by name/contact
    Route::put('/{id}', [ConsultantController::class, 'update']);         // Update consultant details
});




Route::prefix('referrals')->controller(ReferralController::class)->group(function () {
    Route::get('/', 'index');         // GET /api/referrals?manager_id=1&search=...
    Route::post('/', 'store');        // POST /api/referrals
    Route::delete('/{id}', 'destroy'); // DELETE /api/referrals/{id}
});





Route::prefix('reminder')->group(function () {
    Route::get('/all', [ReminderController::class, 'index']);
    Route::post('/create', [ReminderController::class, 'store']);
    Route::delete('/delete/{id}', [ReminderController::class, 'destroy']);
    Route::get('/not-completed', [ReminderController::class, 'notCompleted']);
    Route::get('/completed', [ReminderController::class, 'completed']);
    Route::get('/fast-approaching', [ReminderController::class, 'fastApproaching']);
    Route::get('/due-today', [ReminderController::class, 'dueToday']);
    Route::post('/done', [ReminderController::class, 'markAsDone']);
    Route::get('/priority/{level}', [ReminderController::class, 'filterByPriority']);


});





Route::prefix('task')->group(function () {
    
    Route::get('/filter', [TaskController2::class, 'filter']);
});






Route::prefix('followup')->group(function () {
    Route::get('/filter', [FilterFollowUpController::class, 'filter']);
    Route::post('/ad', [AddFollowUpTaskController::class, 'store']);
    Route::post('/add', [FollowUpController::class, 'store']);
    Route::get('/filter/priority/{priority}', [FollowUpController::class, 'filterByPriority']); 

    Route::get('/manager/{managerId}', [FollowUpController::class, 'followupsByManager']);


});


Route::post('/houses', [HouseController::class, 'store']);

 