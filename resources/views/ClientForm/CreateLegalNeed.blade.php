@extends('layout/layout')

@section('title', 'Client Form')

@section('content')
<div class="container mt-5">
    <h2 class="mb-4">Add Client Form</h2>

        <form action="/newclientform" method="POST" class="row g-3">
            @csrf
            <div class="col-md-6">
                <label for="id">Account ID:</label><br>
                <input class="form-control" type="text" id="id" name="id"><br><br>
            </div>

            <div class="col-md-6">
                @error('FirstName')
                    <p class="text-danger">{{ $message }}</p>
                @enderror
                <label for="FirstName">First Name:</label><br>
                <input class="form-control" type="text" id="FirstName" name="FirstName"><br><br>

            </div>

            <div class="col-md-6">

                <label for="LastName">Last Name:</label><br>
                <input class="form-control" type="text" id="LastName" name="LastName"><br><br>
                @error('LastName')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                @enderror

            </div>


            <div class="col-md-6">
                <label for="DateOfBirth">Date of Birth:</label><br>
                <input class="form-control" type="date" id="DateOfBirth" name="DateOfBirth"><br><br>
                @error('DateOfBirth')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                @enderror
            </div>

            <div class="col-md-6">
                <label for="Address">Address:</label><br>
                <input class="form-control" type="text" id="Address" name="Address"><br><br>
                @error('Address')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                @enderror
            </div>

            <div class="col-md-6">
                <label for="Phone">Phone:</label><br>
                <input class="form-control" type="text" id="Phone" name="Phone"><br><br>
                @error('Phone')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                @enderror

            </div>

            <div class="form-group">
                <label for="Voicemail">Voicemail:</label><br>
                <select class="form-control" id="Voicemail" name="Voicemail">
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select><br><br>
            </div>


            <div class="col-md-6">
                <label for="CaseRole">Case Role:</label><br>
                <select class="form-control" name="CaseRole" id="CaseRole">
                    <option value="Plaintiff">Plaintiff</option>
                    <option value="Defendant">Defendant</option>
                </select><br><br>
            </div>

<div class="col-md-6">  
     <label for="PlaintiffNames">Plaintiff Names:</label><br>
            <input class="form-control" type="text" id="PlaintiffNames" name="PlaintiffNames"><br><br>
</div>
           
            <div class="form-group">
                 <label for="DefendantNames">Defendant Names:</label><br>
            <input class="form-control" type="text" id="DefendantNames" name="DefendantNames"><br><br>
            </div>
           
<div class="form-group">
      <label for="OtherPersons">Other Person:</label><br>
            <input class="form-control" type="text" id="OtherPersons" name="OtherPersons"><br><br>
</div>
          
            <div class="form-group">
<label for="CourtDate">Court Date:</label><br>
            <input class="form-control" type="date" id="CourtDate" name="CourtDate"><br><br>

            </div>
            
            <div class="form-group">
                <label for="CourtTime">Court Time:</label><br>
            <input class="form-control" type="time" id="CourtTime" name="CourtTime"><br><br>
            </div>
            

            <div class="form-group">
                 <label for="CourtNature">Court Nature:</label><br>
            <select class="form-control" name="CourtNature" id="CourtNature">
                <option value="">Please Select</option>
                <option value="Trial">Trial</option>
                <option value="Mediation">Mediation</option>
                <option value="Pre-TrialConferences">Pre-TrialConferences</option>
                <option value="Other">Other</option>
            </select> <br><br>
            </div>
           
<div class="col-md-6">
            <label for="CourtDocuments">Court Documents:</label><br>
            <label for="CourtDocumentsYes">Yes</label>
            <input type="radio" id="CourtDocumentsYes" name="CourtDocuments" value="1">
            <label for="CourtDocumentsNo">No</label>
            <input type="radio" id="CourtDocumentsNo" name="CourtDocuments" value="0" checked><br><br>
</div>
            
<div class="col-md-6">
    <label for="Interpreter">Interpreter :</label><br>
            <label for="InterpreterYes">Yes</label>
            <input type="radio" id="InterpreterYes" name="Interpreter" value="1">
            <label for="InterpreterNo">No</label>
            <input type="radio" id="InterpreterNo" name="Interpreter" value="0" checked><br><br>
</div>
           
<div class="col-md-6">
     <!-- Case Description -->
            <label for="CaseDescription">Case Description:</label><br>
            <textarea class="form-control" id="CaseDescription" name="CaseDescription" rows="4" cols="50"></textarea><br><br>

            <!-- Case Question One -->
            <label for="CaseQuestionOne">Case Question One:</label><br>
            <input class="form-control"  type="text" id="CaseQuestionOne" name="CaseQuestionOne"><br><br>

            <!-- Case Question Two -->
            <label for="CaseQuestionTwo">Case Question Two:</label><br>
            <input class="form-control"  type="text" id="CaseQuestionTwo" name="CaseQuestionTwo"><br><br>

            <!-- Case Question Three -->
            <label for="CaseQuestionThree">Case Question Three:</label><br>
            <input class="form-control"  type="text" id="CaseQuestionThree" name="CaseQuestionThree"><br><br>
</div>
           
<div class="col-md-6">
    <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" id="PendingCases" name="PendingCases" value="1">
        <label class="form-check-label" for="PendingCases">Pending Cases</label>
    </div>
</div>
           
<div class="col-md-6">
    <label for="OpposingRep" class="form-label">Opposing Representative:</label>
    <input type="text" class="form-control" id="OpposingRep" name="OpposingRep">
</div>

<div class="col-md-6">
    <label for="CurrentAssistance" class="form-label">Current Assistance:</label>
    <select class="form-select" id="CurrentAssistance" name="CurrentAssistance">
        <option value="1">Yes</option>
        <option value="0">No</option>
        <option value="2">Unsure</option>
    </select>
</div>

<div class="col-md-6">
    <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" id="PreviousAssistance" name="PreviousAssistance" value="1">
        <label class="form-check-label" for="PreviousAssistance">Previous Assistance</label>
    </div>
</div>

<div class="col-md-6">
    <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" id="FirstTime" name="FirstTime" value="1">
        <label class="form-check-label" for="FirstTime">First Time</label>
    </div>
</div>

<div class="col-md-6">
    <label for="Signature" class="form-label">Signature:</label>
    <input type="text" class="form-control" id="Signature" name="Signature">
</div>

<div class="col-md-6">
    <label for="PrintName" class="form-label">Print Name:</label>
    <input type="text" class="form-control" id="PrintName" name="PrintName">
</div>

<div class="col-md-6">
    <label for="SignedDate" class="form-label">Signed Date:</label>
    <input type="date" class="form-control" id="SignedDate" name="SignedDate">
</div>




            <button class="btn btn-primary" type="submit">Submit</button>
        </form>
    </div>

@endsection
