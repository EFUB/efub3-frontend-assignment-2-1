import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "./filterSlice";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

const FilterDropdown = () => {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState("all");

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value;
    dispatch(setFilter(selectedValue));
    setProgress(selectedValue);
  };

  // Redux 상태로부터 레이블 텍스트 가져오기
  const label = useSelector((state) => {
    if (progress === "completed") {
      return "완료된 항목";
    } else if (progress === "active") {
      return "진행 중인 항목";
    } else {
      return "모든 항목";
    }
  });

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={progress}
        label={label}
        onChange={handleFilterChange}
      >
        <MenuItem value="all">모든 항목</MenuItem>
        <MenuItem value="completed">완료된 항목</MenuItem>
        <MenuItem value="active">진행 중인 항목</MenuItem>
      </Select>
    </FormControl>
  );
};

export default FilterDropdown;
