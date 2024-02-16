import React, { useMemo, useState } from 'react'

export default function Ejemplo() {
  const names = [
    'Martin',
    'Eric'
  ]

 const [name, setName] = useState(null)

  const getName = () => {
    const random = Math.floor(Math.random() * names.length)
    console.log(names[random])
    return names[random]
  }

  const obtainName = () => {
    setName(getName())
  }

  const clearName = () => {
    setName('')
  }

  return (
    <div>
      <h1>Ejemplo de uso de React.memo</h1>
      <NombresAleatorios name={name} clearName={clearName}/>
      <button onClick={() => obtainName()}>
        Obtener nombre
      </button>
    </div>
  )
}

export const NameComponent = (props) => {
  console.log('Renderizando WrappedEjemplo...')
  return (
    <>
    <h2>
      {props.name || 'No name'}
    </h2>
    <button onClick={() => props.clearName()}>
      Borrar nombre
    </button>
    </>
  )
}

function namesAreEqual(prevProps, nextProps) {
  return prevProps.name === nextProps.name
}

export const NombresAleatorios = useMemo(() => NameComponent, namesAreEqual)