import './Column.scss'
import Task from 'components/Task/Task';

function Column (){
    return <>
       <div className="column">
          <header>Brain storm</header>
          <ul className="task-list">
                <Task></Task>
          </ul>
          <footer>Add another card</footer>
        </div>
    </>
}

export default Column ;