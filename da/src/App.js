import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const url = "http://127.0.0.1:8000/api/Shoe/";
  const [shoe, setShoe] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setShoe(data));
  }, []);
  return (
    <div>
      <h1>Da Shoe List</h1>
      <div>
        {shoe.map((s) => (
          <ul>
            <li>{`Size: ${s.size}`}</li>
            <li>{`Brand: ${s.brand_name}`}</li>
            <li>{`Manufacturer: ${s.manufacturer}`}</li>
            <li>{`Color: ${s.color}`}</li>
            <li>{`Material: ${s.material}`}</li>
            <li>{`Shoe Type: ${s.shoe_type}`}</li>
            <li>{`Fasten Type: ${s.fasten_type}`}</li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default App;

// class ShoeApp extends React.Component {
//   url = "http://127.0.0.1:8000/api/Shoe/";
//   constructor(props) {
//     super(props);
//     this.state = { shoe: [] };
//   }
//   componentDidMount() {
//     fetch(this.url)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(this.state.shoe);
//         this.setState({ shoe: data.results });
//       });
//   }
//   render() {
//     return (
//       <div>
//         <h1>Da Shoe List</h1>
//         <ul>
//           {shoe.map((s, key) => (
//             <li key={key}>{s}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

// export default ShoeApp;
