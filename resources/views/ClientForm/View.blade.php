@extends('layout/layout')

@section('title', 'View Client Details')

@section('content')
<div class="container mt-5">
    <h2 class="mb-4">Client Details</h2>

    <div class="row g-3">
        <div class="col-md-6">
            <strong>Account ID:</strong> {{ $FormID->id }}
        </div>

        <div class="col-md-6">
            <strong>First Name:</strong> {{ $FormID->FirstName }}
        </div>

        <div class="col-md-6">
            <strong>Last Name:</strong> {{ $FormID->LastName }}
        </div>

        <div class="col-md-6">
            <strong>Date of Birth:</strong> {{ $FormID->DateOfBirth }}
        </div>

        <div class="col-md-6">
            <strong>Address:</strong> {{ $FormID->Address }}
        </div>

        <div class="col-md-6">
            <strong>Phone:</strong> {{ $FormID->Phone }}
        </div>

        <div class="col-md-6">
            <strong>Voicemail:</strong> {{ $FormID->Voicemail ? 'Yes' : 'No' }}
        </div>

        <div class="col-md-6">
            <strong>Case Role:</strong> {{ $FormID->CaseRole }}
        </div>

        <div class="col-md-6">
            <strong>Plaintiff Names:</strong> {{ $FormID->PlaintiffNames }}
        </div>

        <div class="col-md-6">
            <strong>Defendant Names:</strong> {{ $FormID->DefendantNames }}
        </div>

        <div class="col-md-6">
            <strong>Other Person:</strong> {{ $FormID->OtherPersons }}
        </div>

        <div class="col-md-6">
            <strong>Court Date:</strong> {{ $FormID->CourtDate }}
        </div>

        <div class="col-md-6">
            <strong>Court Time:</strong> {{ $FormID->CourtTime }}
        </div>

        <div class="col-md-6">
            <strong>Court Nature:</strong> {{ $FormID->CourtNature }}
        </div>

        <div class="col-md-6">
            <strong>Court Documents:</strong> {{ $FormID->CourtDocuments ? 'Yes' : 'No' }}
        </div>

        <div class="col-md-6">
            <strong>Interpreter:</strong> {{ $FormID->Interpreter ? 'Yes' : 'No' }}
        </div>

        <div class="col-md-6">
            <strong>Case Description:</strong> {{ $FormID->CaseDescription }}
        </div>

        <div class="col-md-6">
            <strong>Case Question One:</strong> {{ $FormID->CaseQuestionOne }}
        </div>

        <div class="col-md-6">
            <strong>Case Question Two:</strong> {{ $FormID->CaseQuestionTwo }}
        </div>

        <div class="col-md-6">
            <strong>Case Question Three:</strong> {{ $FormID->CaseQuestionThree }}
        </div>

        <div class="col-md-6">
            <strong>Pending Cases:</strong> {{ $FormID->PendingCases ? 'Yes' : 'No' }}
        </div>

        <div class="col-md-6">
            <strong>Opposing Representative:</strong> {{ $FormID->OpposingRep }}
        </div>

        <div class="col-md-6">
            <strong>Current Assistance:</strong> {{ $FormID->CurrentAssistance }}
        </div>

        <div class="col-md-6">
            <strong>Previous Assistance:</strong> {{ $FormID->PreviousAssistance ? 'Yes' : 'No' }}
        </div>

        <div class="col-md-6">
            <strong>First Time:</strong> {{ $FormID->FirstTime ? 'Yes' : 'No' }}
        </div>

        <div class="col-md-6">
            <strong>Signature:</strong> {{ $FormID->Signature }}
        </div>

        <div class="col-md-6">
            <strong>Print Name:</strong> {{ $FormID->PrintName }}
        </div>

        <div class="col-md-6">
            <strong>Signed Date:</strong> {{ $FormID->SignedDate }}
        </div>
    </div>
</div>

@endsection
