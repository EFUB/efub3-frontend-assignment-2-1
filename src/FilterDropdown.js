import React from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "./filterSlice";

const FilterDropdown = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value)); // 필터 변경 액션 디스패치
  };

  return (
    <select onChange={handleFilterChange}>
      <option value="all">모든 항목</option>
      <option value="completed">완료된 항목</option>
      <option value="active">진행 중인 항목</option>
    </select>
  );
};

export default FilterDropdown;
