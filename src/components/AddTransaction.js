import {useState} from 'react'
import {GlobalContext} from '../context/GlobalState'
import {useContext} from 'react'

const AddTransaction = () => {
    const [text, settext] = useState('');
    const [amount, setamount] = useState(0);
    const { addTransaction } = useContext(GlobalContext);
    const id = Math.floor(Math.random()*1000000);
    const  addTheData = e => {
        e.preventDefault();
        var data = {
            id: id,
            text,
            amount: +amount
        }
        resetData();
        addTransaction(data);
    }
    const resetData = () => { setamount(0); settext('')}
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={addTheData}>
                <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" placeholder="Enter text..." value={text} onChange={(e)=>{settext(e.target.value)}}/>
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (negative - expense, positive - income)</label
                >
                <input type="number" placeholder="Enter amount..." value={amount} onChange={(e)=>{setamount(e.target.value)}}/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
