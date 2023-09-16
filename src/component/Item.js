import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteBook } from '../redux/bookSlice'
import store from '../redux/store';
import BookList from '../component/BookList'

const Item =({item, id})=>{

    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    const contentList = useSelector((state) => state.contentList);

    const handleRemove = () => {
       
        if (window.confirm(`${item.id + 1} 번째 책을 정말 삭제하시겠습니까?`)) {
            dispatch(deleteBook({ targetId: item.id }));
        }
      };

     

      const goDetail = ()=>{
        navigate(`./detail/${id}`)}

    return(
       <List>
        <Detail  onClick={goDetail}>
        {item.title}
        
        </Detail>
        <div>
        <Btn onClick={handleRemove}>삭제하기</Btn>
        </div>
       </List>

        
    )
}

export default Item;

const List = styled.div`
background-color: whitesmoke;
width: 500px;
height: 50px;
margin-top: 10px;
display: flex;
justify-content: center;
text-align: center;
`

const Btn = styled.button`
width: 100px;
height: 30px;
margin-left: 50px;
`

const Detail = styled.div`
cursor: pointer;
display: flex;
text-align: center;
`