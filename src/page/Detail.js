import React, {useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import {createContent} from '../redux/contentSlice'

const Detail =()=>{
    const {id}= useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const bookList = useSelector((state) => state.bookList);
    const book = bookList.find(book => book.id === Number(id));
    const [content, setContent] = useState('');
    const [isSub, setIsSub] = useState(false);
   

    

    const handleSubmit = ()=>{
       
       //dispatch(createContent({content: content}));
       setIsSub(!isSub);
        
    }

    return(
        <div>
            
           <div>
            <h2>{book.title}</h2>
            <Container>
            {isSub? 
           
            <Content>{content}</Content>
            
             : 
             <>
             <Area value={content} onChange={(e)=>{setContent(e.target.value)}} placeholder='책 읽고 느낀점'/>
             </>}
             </Container>
           
           </div>
           <div>
           <button onClick={handleSubmit}>저장하기</button>
           <button onClick={() => navigate(-1)}>목록</button>
           </div>

        </div>
    )
}

export default Detail;

const Area = styled.textarea`
width: 500px;
height: 300px;
margin-top: 100px;

`

const Content = styled.div`
background-color: whitesmoke;
width: 500px;
height: 300px;
margin-top: 100px;
`

const Container = styled.div`
display: flex;
justify-content: center;
margin-bottom: 50px;
`