@extends('layout/layout')

@section('title', 'Client Form')

@section('content')
    <h2>Add Client Form</h2>
    <div class="form-row">

        <form action="/newclientform" method="POST">
            @csrf
            <div class="form-group col-md-2">
                <label for="id">Account ID:</label><br>
                <input class="form-control" type="text" id="id" name="id"><br><br>
            </div>

            <div class="form-group col-md-2">
                @error('FirstName')
                    <p class="text-danger">{{ $message }}</p>
                @enderror
                <label for="FirstName">First Name:</label><br>
                <input class="form-control" type="text" id="FirstName" name="FirstName"><br><br>

            </div>

            <div class="form-group col-md-2">

                <label for="LastName">Last Name:</label><br>
                <input class="form-control" type="text" id="LastName" name="LastName"><br><br>
                @error('LastName')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                @enderror

            </div>


            <div class="form-group col-md-2">
                <label for="DateOfBirth">Date of Birth:</label><br>
                <input class="form-control" type="date" id="DateOfBirth" name="DateOfBirth"><br><br>
                @error('DateOfBirth')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                @enderror
            </div>

            <div class="form-group col-md-2">
                <label for="Address">Address:</label><br>
                <input class="form-control" type="text" id="Address" name="Address"><br><br>
                @error('Address')
                    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
                @enderror
            </div>

            <div class="form-group col-md-2">
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


            <div class="form-group col-md-2">
                <label for="CaseRole">Case Role:</label><br>
                <select class="form-control" name="CaseRole" id="CaseRole">
                    <option value="Plaintiff">Plaintiff</option>
                    <option value="Defendant">Defendant</option>
                </select><br><br>
            </div>

<div class="form-group col-md-2">  
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
           
<div class="form-group col-md-2">
            <label for="CourtDocuments">Court Documents:</label><br>
            <label for="CourtDocumentsYes">Yes</label>
            <input type="radio" id="CourtDocumentsYes" name="CourtDocuments" value="1">
            <label for="CourtDocumentsNo">No</label>
            <input type="radio" id="CourtDocumentsNo" name="CourtDocuments" value="0" checked><br><br>
</div>
            
<div class="form-group col-md-2">
    <label for="Interpreter">Interpreter :</label><br>
            <label for="InterpreterYes">Yes</label>
            <input type="radio" id="InterpreterYes" name="Interpreter" value="1">
            <label for="InterpreterNo">No</label>
            <input type="radio" id="InterpreterNo" name="Interpreter" value="0" checked><br><br>
</div>
            
<div class="form-group col-md-2">
     <label for="InterpreterLanguage">Interpreter Language:</label><br>
            <input class="form-control" type="text" id="InterpreterLanguage" name="InterpreterLanguage"><br><br>
</div>
           
<div class="form-group col-md-2">
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
           
<div class="form-group col-md-2">
     <!-- Pending Cases -->
            <label for="PendingCases">Pending Cases:</label><br>
            <input type="checkbox" id="PendingCases" name="PendingCases" value="1"><br><br>

</div>
           
            <!-- Opposing Representative -->
            <label for="OpposingRep">Opposing Representative:</label><br>
            <input class="form-control"type="text" id="OpposingRep" name="OpposingRep"><br><br>

            <!-- Current Assistance -->
            <label for="CurrentAssistance">Current Assistance:</label><br>
            <select class="form-control"  id="CurrentAssistance" name="CurrentAssistance">
                <option value="1">Yes</option>
                <option value="0">No</option>
                <option value="2">Unsure</option>
            </select><br><br>

            <!-- Previous Assistance -->
            <label for="PreviousAssistance">Previous Assistance:</label><br>
            <input type="checkbox" id="PreviousAssistance" name="PreviousAssistance" value="1"><br><br>

            <!-- Previous Assistance Description -->
            <label for="PreviousDescription">Previous Assistance Description:</label><br>
            <textarea class="form-control"  id="PreviousDescription" name="PreviousDescription" rows="4" cols="50"></textarea><br><br>

            <!-- First Time -->
            <label for="FirstTime">First Time:</label><br>
            <input type="checkbox" id="FirstTime" name="FirstTime" value="1"><br><br>

            <!-- Signature -->
            <label for="Signature">Signature:</label><br>
            <input class="form-control"type="text" id="Signature" name="Signature"><br><br>

            <!-- Print Name -->
            <label for="PrintName">Print Name:</label><br>
            <input class="form-control"type="text" id="PrintName" name="PrintName"><br><br>

            <!-- Signed Date -->
            <label for="SignedDate">Signed Date:</label><br>
            <input class="form-control"type="date" id="SignedDate" name="SignedDate"><br><br>




            <button class="btn btn-primary" type="submit">Submit</button>
        </form>
    </div>

@endsection
