import { dataKhodam } from './KhodamData';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('')
  const [checkedKhodam, setCheckedKhodam] = useState('')
  const [resultKhodam, setResultKhodam] = useState('')

  const handleCheckKhodam = () => {
    setCheckedKhodam(name);
    const randomNumber = Math.floor(Math.random() * 200); 
    console.log('khodam ', name, ' adalah ', dataKhodam[randomNumber]);
    setResultKhodam(dataKhodam[randomNumber]) 
  }

  return (
    <div className="App">
      <section className="App-header">
        <img src={'https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2024/06/05/khodamJPG-2452806090.jpg'} width={400} height={150} className="App-logo" alt="logo" style={{marginBottom: 50}} />
        <p>
          CEK KHODAM ONLINE.
        </p>
        <input type="text" style={{borderRadius: 16, height: 30, width: 400, textAlign: 'center', fontSize: 20, marginBottom: 20}} value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={handleCheckKhodam} style={{borderRadius: 8, height: 50, width: 200, fontSize: '1rem', backgroundColor: '#BDBDBD', marginBottom: 20}}>CEK KHODAM</button>
        {name !== '' ? <section style={{borderRadius: 16, backgroundColor: '#E0E0E0', width: 500, color: "black"}}>
          <p>Khodam {checkedKhodam} adalah: </p>
          <p>{resultKhodam}</p>
        </section> : null}
      </section>
    </div>
  );
}

export default App;
