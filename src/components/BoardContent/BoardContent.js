

import { useState , useEffect  } from 'react';
import Column from 'components/Column/Column';
import './BoardContent.scss'
import {initialData} from 'actions/data'
import {isEmpty} from 'lodash'
import {mapOrder} from 'utilities/sort'
function BoardContent (){
    const [board, setBoard ] = useState({})
    const [columns , setColumns ]= useState([])
    
    useEffect(()=>{
        const boardFromDB =  initialData.boards.find(board => board.id === 'board-1');
        if(boardFromDB){
            setBoard(boardFromDB)
            boardFromDB.columns = mapOrder(boardFromDB.columns,boardFromDB.columnOrder,'id')
            setColumns(boardFromDB.columns)
        }
    },[])

    if( isEmpty(board)){
        return <div className='not-found'> Board not found  </div>
    }

    return <>
        <div className="board-content">
            {columns && columns.map((column , index)=>  <Column key={index} column={ column} ></Column>   )}
        </div>
    </>
}

export default BoardContent ;