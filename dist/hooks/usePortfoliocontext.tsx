import { useContext } from 'react'
import { PortfolioContext } from '../context/portfolioContext'

const usePortfolioContext = () => {
    const context = useContext(PortfolioContext)
    if (context === undefined) {
        throw Error('data in context is undefined')
    } else
    return (
        context
    )
}

export default usePortfolioContext