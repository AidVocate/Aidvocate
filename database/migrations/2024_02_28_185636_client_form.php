<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('ClientForm', function (Blueprint $table) {
            $table->id('FormID');
            $table->foreignId('id')->constrained('accounts')->onDelete('cascade');
            $table->string('FirstName');
            $table->string('LastName');
            $table->date('DateOfBirth');
            $table->string('Address');
            $table->string('Phone');
            $table->boolean('Voicemail');
            $table->string('CaseRole');
            $table->string('PlaintiffNames');
            $table->string('DefendantNames');
            $table->string('OtherPersons');
            $table->date('CourtDate');
            $table->timestamp('CourtTime');
            $table->string('CourtNature');
            $table->boolean('CourtDocuments');
            $table->boolean('Interpreter');
            $table->string('InterpreterLanguage');
            $table->string('CaseDescription');
            $table->string('CaseQuestionOne');
            $table->string('CaseQuestionTwo');
            $table->string('CaseQuestionThree');
            $table->boolean('PendingCases');
            $table->string('OpposingRep');
            $table->boolean('CurrentAssistance');
            $table->boolean('PreviousAssistance');
            $table->string('PreviousDescription');
            $table->boolean('FirstTime');
            $table->string('Signature');
            $table->string('PrintName');
            $table->date('SignedDate');


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
