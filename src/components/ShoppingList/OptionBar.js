import { styled } from "styled-components";
import popular from "../../assets/Group 9.png";
import disablePopluar from "../../assets/disablePopular.png";
import chair from "../../assets/Group 2.png";
import ableChair from "../../assets/focusChair.png";
import table from "../../assets/Group 4.png";
import ableTable from "../../assets/focusTable.png";
import armChair from "../../assets/Group 6.png";
import ableArmChair from "../../assets/focusArmChair.png";
import bed from "../../assets/Group 8.png";
import ableBed from "../../assets/focusBed.png";
import Contents from "./Contents";

const OptionBar = () => {
  let option_list = [
    { option: "popular", ableSrc: popular, disableSrc: disablePopluar },
    { option: "chair", ableSrc: ableChair, disableSrc: chair },
    { option: "table", ableSrc: ableTable, disableSrc: table },
    { option: "armchair", ableSrc: ableArmChair, disableSrc: armChair },
    { option: "bed", ableSrc: ableBed, disableSrc: bed },
  ];

  return (
    <OptionContainer>
      {option_list.map((el, idx) => (
        <Contents
          key={idx}
          option={el.option}
          text={el.option}
          ableSrc={el.ableSrc}
          disableSrc={el.disableSrc}
        />
      ))}
    </OptionContainer>
  );
};

const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export default OptionBar;
