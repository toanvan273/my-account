import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { inprogressListState , completedListState} from '../recoil/listState';

const InProgressList = () => {
    const inprogressList = useRecoilValue(inprogressListState)
    const setCompleted = useSetRecoilState(completedListState)
    // console.log('inprogressList',setCompleted)
    const handleClick = id => () => {
      setCompleted(id)
    }
    return (
        <div className='col'>
      <h3>In-Progress</h3>
      <ul>
        {inprogressList.map((item) => (
          <li key={item.id} className="d-flex">
            <span>{item.content}</span>
            <button className="ms-3"
            onClick={ handleClick(item.id)}
            >Completed</button>
          </li>
        ))}
      </ul>
    </div>
    )
}

export default InProgressList