<h1>this is Create legal need form</h1>

<h2>Add Client Form</h2>
<form action="/newclientform" method="POST">
    @csrf
    <label for="id">Account ID:</label><br>
    <input type="text" id="id" name="id"><br><br>

    <label for="FirstName">First Name:</label><br>
    <input type="text" id="FirstName" name="FirstName"><br><br>
    @error('FirstName')
        <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
    @enderror

    <label for="LastName">Last Name:</label><br>
    <input type="text" id="LastName" name="LastName"><br><br>
    @error('LastName')
    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
    @enderror

    <label for="DateOfBirth">Date of Birth:</label><br>
    <input type="date" id="DateOfBirth" name="DateOfBirth"><br><br>
    @error('DateOfBirth')
    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
    @enderror

    <label for="Address">Address:</label><br>
    <input type="text" id="Address" name="Address"><br><br>
    @error('Address')
    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
    @enderror

    <label for="Phone">Phone:</label><br>
    <input type="text" id="Phone" name="Phone"><br><br>
    @error('Phone')
    <p class="text-red-500 text-xs mt-1">{{ $message }}</p>
    @enderror

    <label for="Voicemail">Voicemail:</label><br>
    <select id="Voicemail" name="Voicemail">
        <option value="1">Yes</option>
        <option value="0">No</option>
    </select><br><br>

    <label for="CaseRole">Case Role:</label><br>
<select name="CaseRole" id="CaseRole">
    <option value="Plaintiff">Plaintiff</option>
    <option value="Defendant">Defendant</option>
</select>

    <label for="PlaintiffNames">Plaintiff Names:</label><br>
    <input type="text" id="PlaintiffNames" name="PlaintiffNames"><br><br>

    <label for="DefendantNames">Defendant Names:</label><br>
    <input type="text" id="DefendantNames" name="DefendantNames"><br><br>

    <label for="OtherPersons">Other Person:</label><br>
    <input type="text" id="OtherPersons" name="OtherPersons"><br><br>

    <label for="CourtDate">Court Date:</label><br>
    <input type="date" id="CourtDate" name="CourtDate"><br><br>

    <label for="CourtTime">Court Time:</label><br>
    <input type="time" id="CourtTime" name="CourtTime"><br><br>

    <label for="CourtNature">Court Nature:</label><br>
    <select name="CourtNature" id="CourtNature">
        <option value="">Please Select</option>
        <option value="Trial">Trial</option>
        <option value="Mediation">Mediation</option>
        <option value="Pre-TrialConferences">Pre-TrialConferences</option>
        <option value="Other">Other</option>
    </select> <br><br>

    <label for="CourtDocuments">Court Documents:</label><br>
    <label for="CourtDocumentsYes">Yes</label>
    <input type="radio" id="CourtDocumentsYes" name="CourtDocuments" value="1">
    <label for="CourtDocumentsNo">No</label>
    <input type="radio" id="CourtDocumentsNo" name="CourtDocuments" value="0" checked><br><br>

    <label for="Interpreter">Interpreter :</label><br>
    <label for="InterpreterYes">Yes</label>
    <input type="radio" id="InterpreterYes" name="Interpreter" value="1">
    <label for="InterpreterNo">No</label>
    <input type="radio" id="InterpreterNo" name="Interpreter" value="0" checked><br><br>

    <label for="InterpreterLanguage">Interpreter Language:</label><br>
    <input type="text" id="InterpreterLanguage" name="InterpreterLanguage"><br><br>

    <!-- Case Description -->
    <label for="CaseDescription">Case Description:</label><br>
    <textarea id="CaseDescription" name="CaseDescription" rows="4" cols="50"></textarea><br><br>

    <!-- Case Question One -->
    <label for="CaseQuestionOne">Case Question One:</label><br>
    <input type="text" id="CaseQuestionOne" name="CaseQuestionOne"><br><br>

    <!-- Case Question Two -->
    <label for="CaseQuestionTwo">Case Question Two:</label><br>
    <input type="text" id="CaseQuestionTwo" name="CaseQuestionTwo"><br><br>

    <!-- Case Question Three -->
    <label for="CaseQuestionThree">Case Question Three:</label><br>
    <input type="text" id="CaseQuestionThree" name="CaseQuestionThree"><br><br>

    <!-- Pending Cases -->
    <label for="PendingCases">Pending Cases:</label><br>
    <input type="checkbox" id="PendingCases" name="PendingCases" value="1"><br><br>

    <!-- Opposing Representative -->
    <label for="OpposingRep">Opposing Representative:</label><br>
    <input type="text" id="OpposingRep" name="OpposingRep"><br><br>

    <!-- Current Assistance -->
    <label for="CurrentAssistance">Current Assistance:</label><br>
    <select id="CurrentAssistance" name="CurrentAssistance">
        <option value="1">Yes</option>
        <option value="0">No</option>
        <option value="2">Unsure</option>
    </select><br><br>

    <!-- Previous Assistance -->
    <label for="PreviousAssistance">Previous Assistance:</label><br>
    <input type="checkbox" id="PreviousAssistance" name="PreviousAssistance" value="1"><br><br>

    <!-- Previous Assistance Description -->
    <label for="PreviousDescription">Previous Assistance Description:</label><br>
    <textarea id="PreviousDescription" name="PreviousDescription" rows="4" cols="50"></textarea><br><br>

    <!-- First Time -->
    <label for="FirstTime">First Time:</label><br>
    <input type="checkbox" id="FirstTime" name="FirstTime" value="1"><br><br>

    <!-- Signature -->
    <label for="Signature">Signature:</label><br>
    <input type="text" id="Signature" name="Signature"><br><br>

    <!-- Print Name -->
    <label for="PrintName">Print Name:</label><br>
    <input type="text" id="PrintName" name="PrintName"><br><br>

    <!-- Signed Date -->
    <label for="SignedDate">Signed Date:</label><br>
    <input type="date" id="SignedDate" name="SignedDate"><br><br>




    <button type="submit">Submit</button>
</form>
