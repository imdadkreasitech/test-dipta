import React from 'react'
import { useState } from 'react'
import LatihanList from './latihan/LatihanList'

function App() {
  const [bebas, setBebas] = React.useState(0)
  // let bebas = 0
  const a = 10
    // function tambah() {
    //   setBebas(bebas + 1)
    //  }
    function kurang() {
      setBebas(bebas - 1)
      // bebas = bebas - 1
      // console.log(bebas)
    }

    const tambah = () => {
      setBebas(bebas + 1)
      // bebas = bebas + 1
      // console.log(bebas)
    }
    const [name, setName] = useState('Dipta')
        function gantiName() {

      if (name === 'Fendi') {
        setName('Dipta')
      }else {
        setName('Fendi')
      }
    }

  return (
  <>
  <div>hello dipta</div>
  <div>{bebas}</div>
  <button onClick={() => tambah()}>Tambah</button>
  <button onClick={() => kurang()}>Kurang</button>
  <div>{a}</div>

  <div>{name}</div>
  <button onClick={() => gantiName()}>Click Name</button>

  </>
  )
}

export default App