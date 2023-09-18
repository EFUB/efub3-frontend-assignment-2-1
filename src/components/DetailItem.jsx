import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSelect, removeSelect } from "../store/selectSlice";
import axios from "axios";

const DetailItem = ({ id }) => {
	const [currentData, setCurrentData] = useState({});
	const getDetail = async (id) => {
		const res = await axios.get(`https://reqres.in/api/users/${id}`);
		return Promise.resolve(res);
	};
	const getExtraDetail = async (id) => {
		const res = await axios.get(`https://reqres.in/api/extra/${id}`);
		return Promise.resolve(res);
	};
	useEffect(() => {
		getDetail(id).then((res) => {
			const info1 = { ...res.data.data };
			getExtraDetail(id).then((res) => {
				const info2 = { ...res.data.data };
				setCurrentData({ ...info1, ...info2 });
			});
		});
	}, [id]);

	const dispatch = useDispatch();
	const selectList = useSelector((state) => state.select.selectedId);
	const handleChange = (event, id) => {
		if (event.target.checked === true) dispatch(addSelect(id));
		else if (event.target.checked === false) dispatch(removeSelect(id));
	};

	return (
		<>
			{currentData && (
				<div key={currentData.id} className="selected-user-container">
					<input
						type="checkbox"
						className="user-checkbox"
						checked={selectList.includes(currentData.id) ? true : false}
						onChange={(event) => handleChange(event, currentData.id)}
					/>
					<div className="user-profile-circle">
						<img src={currentData.avatar} className="user-profile-image" />
					</div>
					<div className="user-name">
						{currentData.first_name} {currentData.last_name}
						<span> ({currentData.year})</span>
						<br />
						<a href={`mailto:${currentData.email}`} className="user-email">
							{currentData.email}
						</a>
					</div>
					<div style={{ backgroundColor: currentData.color, padding: "10px" }}>
						{currentData.name}({currentData.pantone_value})
					</div>
				</div>
			)}
		</>
	);
};

export default DetailItem;
