import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetUsers } from "../store/userSlice";
import { addSelect, removeSelect, clearSelect } from "../store/selectSlice";

const ListPage = () => {
	const nav = useNavigate();
	const dispatch = useDispatch();

	const pageInfo = {
		first_page: 1,
		last_page: 2,
	};
	const [currentPage, setCurrentPage] = useState(1);

	const status = useSelector((state) => state.user.status);
	const userList = useSelector((state) => state.user.data);
	const getList = async () => {
		dispatch(asyncGetUsers(currentPage));
	};
	useEffect(() => {
		getList();
	}, [currentPage]);

	const selectList = useSelector((state) => state.select.selectedId);
	const handleChange = (event, id) => {
		if (event.target.checked === true) dispatch(addSelect(id));
		else if (event.target.checked === false) dispatch(removeSelect(id));
	};

	return (
		<div className="listpage-wrapper">
			<button onClick={() => nav("/selected")} className="move-btn">
				go to selected page
			</button>
			<br />
			<button onClick={getList}>click to fetch</button>
			<div>
				현재 fetch 상태 : <strong>{status}</strong>
			</div>
			<div className="page-controller">
				{currentPage !== pageInfo.first_page && (
					<button onClick={() => setCurrentPage(currentPage - 1)}>{`<`}</button>
				)}
				<span>&nbsp; {currentPage} 페이지 &nbsp;</span>
				{currentPage !== pageInfo.last_page && (
					<button onClick={() => setCurrentPage(currentPage + 1)}>{`>`}</button>
				)}
			</div>
			<div className="selected-flex-container">
				<div>{selectList.length}개 선택됨</div>
				<button onClick={() => dispatch(clearSelect())}>
					clear checked item
				</button>
			</div>
			<br />
			<div className="userlist-wrapper">
				{userList.length === 0 ? (
					<div>결과가 없습니다</div>
				) : (
					userList.map((item) => (
						<div key={item.id} className="user-container">
							<input
								type="checkbox"
								className="user-checkbox"
								checked={selectList.includes(item.id) ? true : false}
								onChange={(event) => handleChange(event, item.id)}
							/>
							<div className="user-profile-circle">
								<img src={item.avatar} className="user-profile-image" />
							</div>
							<div className="user-name">
								{item.first_name} {item.last_name}
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default ListPage;
