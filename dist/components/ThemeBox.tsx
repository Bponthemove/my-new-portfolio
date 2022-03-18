import React from 'react'
import usePortfolioContext from '../hooks/usePortfoliocontext'

export const ThemeBox = ({ item }: { item: string }) => {
  const { setTheme } = usePortfolioContext()

  return (
    <div onClick={() => setTheme(item)}>{ item }</div>
  )
}

