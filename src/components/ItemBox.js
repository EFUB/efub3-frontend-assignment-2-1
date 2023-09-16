import styled from "styled-components";
import heart from "../assets/ic_heart.png";
import heart_full from "../assets/ic_heart_red.png";
import cart from "../assets/ic_cart.png";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { likeItem, unLikeItem } from "../redux/likeSlice";

const ItemBox = ({ item, curLikeList }) => {
  const dispatch = useDispatch();

  const handleLikeItem = () => {
    dispatch(likeItem(item));
  };
  const handleUnLikeItem = () => {
    dispatch(unLikeItem(item.id));
  };

  // 좋아요 목록에서 해당 아이템이 있는지 확인
  const isLiked = curLikeList.some(
    (likeListItem) => likeListItem.id === item.id
  );

  return (
    <Wrapper>
      <ItemImage src={item.image} />
      <ItemInfo>
        <div>
          <ItemTitle>{item.title}</ItemTitle>
          <ItemPrice>{item.price}</ItemPrice>
        </div>
        {isLiked ? (
          <img
            src={heart_full}
            style={{ width: "30px" }}
            onClick={handleUnLikeItem}
          />
        ) : (
          <img src={heart} style={{ width: "30px" }} onClick={handleLikeItem} />
        )}
      </ItemInfo>
    </Wrapper>
  );
};

export default ItemBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemImage = styled.img`
  width: 100%;
  cursor: pointer;
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 10px;
`;

const ItemTitle = styled.div`
  margin: 10px 0;
`;

const ItemPrice = styled.div`
  font-weight: 600;
`;
