import {GlobalContext} from '../context/GlobalState'
import {useContext} from 'react'

const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const total = transactions.reduce((acc, currVal)=>(acc = acc+currVal.amount), 0).toFixed(2);
    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}

export default Balance
