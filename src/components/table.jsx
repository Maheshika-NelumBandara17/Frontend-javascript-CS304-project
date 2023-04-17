import Table from 'react-bootstrap/Table';

function Tablefun() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Serial No</th>
          <th>Provision</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Revenue license should be displayed on Motor vehicles and produced when required</td>
          
        </tr>
        <tr>
          <td>2</td>
          <td>Exceeding speed limit</td>
          
        </tr>
        <tr>
          <td>3</td>
          <td >Non-use of seat belts</td>
          
        </tr>

        <tr>
          <td>4</td>
          <td>Failure to obey Directions and Signals of Police Officers</td>
          
        </tr>

        <tr>
          <td>5</td>
          <td>Halting or Parking on a road</td>
          
        </tr>

        <tr>
          <td>6</td>
          <td>Disobeying Road Rules</td>
          
        </tr>

        <tr>
          <td>7</td>
          <td>....</td>
          
        </tr>
        <tr>
          <td>...</td>
          <td>....</td>
          
        </tr>
        <tr>
          <td>...</td>
          <td>....</td>
          
        </tr>

      </tbody>
    </Table>
  );
}

export default Tablefun;