import React from 'react'
import NewList from '../common/NewList'
import InProgressList from '../common/InProgressList'
import CompletedList from '../common/CompletedList'
import NewActionInput from '../common/NewActionInput'

export default function Home (){
    return (
        <div className="home-page">
            <div className="container">
                <h1>to-do List</h1>
                <div className="action">
                    <NewActionInput />
                </div>
                <div className="row">
                    <NewList />
                    <InProgressList />
                    <CompletedList />
                </div>
            </div>
        
        </div>
    )
}