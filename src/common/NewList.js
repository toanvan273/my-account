import React from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { newListState, inprogressListState } from '../recoil/listState'

const NewList = () => {
    const newList = useRecoilValue(newListState)
    const setInprogress = useSetRecoilState(inprogressListState)
    const handleClick = id =>() => {
        setInprogress(id)
    }
    // console.log('newList', newList)
    return (
        <div className='col'>
            <h3>New</h3>
            <ul>
                {newList.map((item) =>(
                    <li key={item.id} className="d-flex">
                        <span>{item.content}</span> 
                        <button 
                        onClick={handleClick(item.id)}
                        >In-Progress</button>
                    </li>
                ))

                }
            </ul>
        </div>
    )
}

export default NewList