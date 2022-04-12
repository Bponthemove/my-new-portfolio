import React from 'react'

export const Themes = ({ item, setTheme }: { item: string, setTheme: React.Dispatch<React.SetStateAction<string>> }) => {
  return (
    <div  id={ item }
          onClick={e => setTheme(e.currentTarget.id)}
    >
      { item }
    </div>
  )
}
