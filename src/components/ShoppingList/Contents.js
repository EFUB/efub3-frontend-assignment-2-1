import { styled } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import optionSlice from "../../Redux/optionSlice";

const Contents = ({ option, text, ableSrc, disableSrc }) => {
  // 장바구니에 추가
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.option.value);

  return (
    <CotentContainer
      onClick={() => dispatch(optionSlice.actions.select(option))}
    >
      {selected === option ? <Img src={ableSrc} /> : <Img src={disableSrc} />}
      <Text>{text}</Text>
    </CotentContainer>
  );
};

const CotentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.p`
  margin-top: 0.5rem;
`;

const Img = styled.img`
  width: 2.5rem;
`;

export default Contents;
