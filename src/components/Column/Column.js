import './Column.scss'
import Task from 'components/Card/Card';
import {mapOrder } from 'utilities/sort'

function Column (props){

    const {column} = props
    const cards  = mapOrder(column.cards,column.cardOrder,'id')
   
    console.log(cards)
    return <>
       <div className="column">
          <header>{column.title}</header>
          <ul className="card-list">
              {cards && cards.map((card , index)=>{
                  return <Task key={index} card={card}></Task>
              })}
              
          </ul>
          <footer>Add another card</footer>
        </div>
    </>
}

export default Column ;