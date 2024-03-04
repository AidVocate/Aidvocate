<h1>List Legal Need</h1>

<form action="{{ route('list') }}" method="GET">
    <input type="text" name="search" value="{{ $search }}" placeholder="Case Nature...">
    <button type="submit">Search</button>
</form>

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
    @foreach($data as $item)
        <tr>
            <td>{{$item['FirstName']}}</td>
            <td>{{$item['LastName']}}</td>
            <td>{{$item['Email']}}</td>
            <td>{{$item['CaseRole']}}</td>
            <td>{{$item['CourtDate']}}</td>
            <td>{{$item['CourtTime']}}</td>
            <td>{{$item['CaseDescription']}}</td>
        </tr>
    @endforeach 
</table>