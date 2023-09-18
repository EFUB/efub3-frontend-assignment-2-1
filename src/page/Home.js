import React from 'react'
import {useState, useRef} from 'react'
import { useSelector } from 'react-redux';
import BookList from '../component/BookList'
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/bookSlice'
import styled from 'styled-components';

const Home =()=>{
const [title, setTitle] = useState();
const dispatch = useDispatch(); 
const titleInput = useRef();
const [dataId, setDataId] = useState(0);

// useSelector를 사용하여 Redux store로부터 데이터를 읽음
const bookList = useSelector((state) => state.bookList);

const handleSubmit = () => {
    if (title.length < 1) {
        titleInput.current.focus();
      return;
    }
    dispatch(createBook({ title, id:dataId}));
    setDataId(dataId + 1);
  
   setTitle('')
  };
    return(
        <div>

            <h3>독서 기록지</h3>
        <input value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder='제목'/>
        <button onClick={handleSubmit}>저장하기</button>
        <List>
         <BookList list={bookList} />
         </List>
        </div>
    )
}

export default Home;

const List = styled.div`
 display: flex;
  align-items: center; /* 수직 가운데 정렬 */
  justify-content: center; 

`