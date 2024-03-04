<h1>List Legal Need</h1>

<table>
    <tr>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Email</td>
        <td>Case Role</td>
        <td>Court Date</td>
        <td>Court Time</td>
        <td>Case Description</td>
    </tr>
    @foreach($legalneed as $legalneed)
        <tr>
            <td>{{$legalneed['FirstName']}}</td>
            <td>{{$legalneed['LastName']}}</td>
            <td>{{$legalneed['Email']}}</td>
            <td>{{$legalneed['CaseRole']}}</td>
            <td>{{$legalneed['CourtDate']}}</td>
            <td>{{$legalneed['CourtTime']}}</td>
            <td>{{$legalneed['CaseDescription']}}</td>
        </tr>
    @endforeach
</table>