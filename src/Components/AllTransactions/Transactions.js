import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../../context/globalContext';
import { InnerLayout } from '../../styles/Layouts';
import { calender, clock, dollar } from '../../utils/Icons';
import { dateFormat, timeFormat } from '../../utils/dateFormat';


function Transactions() {
    const {alltransactionHistory} = useGlobalContext()

    const [...history] = alltransactionHistory()

    return (
        <TransactionStyled>
            <h1>All Transactions</h1>
            {history.map((item) =>{
                const {_id, title, amount, type, date} = item
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                        <div className='time'>
                        <p>{clock} {timeFormat(date)}</p>
                        <div className='date'>
                        <p>{calender} {dateFormat(date)}</p>
                        </div>
                        </div>
                       </div>
                )
            })}
        </TransactionStyled>
    )
}

const TransactionStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    padding:20px;
    margin-top:20px;
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display:inline-flex;
        justify-content: start;
        align-items: center;
        padding :20px;   
        max-width:auto;
        gap:40px;
    }
    .time{
        display:inline-flex;
        justify-content:end;
        margin-left:100px;
    }
    .date{
        display:inline-flex;
        justify-content:end;
        margin-left:50px;
    }
    

`;
export default Transactions