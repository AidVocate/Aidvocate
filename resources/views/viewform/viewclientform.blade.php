<h1>View Client Form</h1>

<table>
  <tr>
    <th>FirstName</th>
    <th>LastName</th>
    <th>DateOfBirth</th>
  </tr>
  @foreach ($clientForm as $empdata)
  <tr>
    <td>{{ $empdata->FirstName}}</td>
    <td>{{ $empdata->LastName}}</td>
    <td>{{ $empdata->DateOfBirth}}</td>
  </tr>
  @endforeach
</table>