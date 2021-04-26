import {GlobalContext} from '../context/GlobalState'
import {useContext} from 'react'

const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);
    const incomeTotal = transactions.reduce((acc, currVal)=>((currVal.amount >0)?acc = acc+currVal.amount : acc), 0).toFixed(2);
    const expenseTotal = Math.abs(transactions.reduce((acc, currVal)=>((currVal.amount <0)? acc = acc + currVal.amount : acc), 0)).toFixed(2);
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${incomeTotal}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">${expenseTotal}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses
