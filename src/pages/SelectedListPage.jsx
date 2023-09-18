import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import DetailItem from "../components/DetailItem";

const SelectedListPage = () => {
	const nav = useNavigate();
	const selectList = useSelector((state) => state.select.selectedId);
	return (
		<div className="listpage-wrapper">
			<button onClick={() => nav("/")} className="move-btn">
				go back to list page
			</button>
			{selectList.map((item) => (
				<DetailItem id={item} key={item} />
			))}
		</div>
	);
};

export default SelectedListPage;
