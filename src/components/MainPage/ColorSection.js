import styled from "styled-components";
import { useState } from "react";
import { SketchPicker } from "react-color";
import { setBackgroundColor, setBtnColor } from "../../redux/colorSlice";
import { useSelector, useDispatch } from "react-redux";

const ColorSection = ({ isBackgroundColor }) => {
  const color = useSelector((state) => state.color); // store에 저장된 color 가져오기
  const dispatch = useDispatch();
  const [selectedColor, setSelectedColor] = useState("#fff"); // color picker에서 선택한 색상 저장
  const [displayPicker, setDisplayPicker] = useState(false); // color picker 노출 여부

  // 선택 버튼 클릭 시 color picker 보여줌, 선택 완료 버튼 클릭 시 숨김
  const handleSelectClick = () => {
    if (displayPicker) {
      // 배경색상이면
      if (isBackgroundColor) {
        dispatch(setBackgroundColor(selectedColor));
      }
      // 버튼 색상이면 store의 버튼 색상 변경
      else {
        dispatch(setBtnColor(selectedColor));
      }
    }

    setDisplayPicker(!displayPicker);
  };

  // 색상 선택 시 color 변수 업데이트
  const handleColorChange = (selectedColor) => {
    setSelectedColor(selectedColor);
  };

  return (
    <Wrapper>
      <Title>
        {isBackgroundColor
          ? "배경 색상을 선택해주세요"
          : "버튼 색상을 선택해주세요"}
      </Title>
      <SelectBtn color={color.btnColor} onClick={handleSelectClick}>
        {displayPicker ? "선택 완료" : "선택"}
      </SelectBtn>
      {displayPicker && (
        <PickerWrapper>
          <SketchPicker
            color={selectedColor}
            onChange={(color) => handleColorChange(color.hex)}
          />
        </PickerWrapper>
      )}
    </Wrapper>
  );
};

export default ColorSection;

const Wrapper = styled.div`
  width: 50%;
  height: 35px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Title = styled.div`
  font-family: "Pretendard-Regular";
  font-size: 18px;
  text-align: center;
`;

const SelectBtn = styled.button`
  all: unset;
  width: 100px;
  height: 35px;
  border-radius: 40px 80px / 80px 40px;
  background-color: ${(props) => props.color};
  margin-left: 20px;
  font-family: "Pretendard-Regular";
  font-size: 17px;
  text-align: center;
  cursor: pointer;
`;

const PickerWrapper = styled.div`
  z-index: 10;
  position: absolute;
  top: 35px;
  right: 155px;
`;
