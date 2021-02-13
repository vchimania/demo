import logo from './logo.svg';
import './App.css';
import Count from './Count';
import Search from './Search';

function App() {
  return (
    <>
    <div className="App">
      <table>
      <tr>
        <th>Name</th>
        <th>City</th>
      </tr>
      <tr>
      <td>Vini</td>
      <td>Bhopal</td>
      </tr>
      <tr>
      <td>Vini</td>
      <td>Bhopal</td>
      </tr>
      <tr>
      <td>Vini</td>
      <td>Bhopal</td>
      </tr>
      </table>
      <Count/>
      <Search/>
    </div>
    </>
  );
}

export default App;
