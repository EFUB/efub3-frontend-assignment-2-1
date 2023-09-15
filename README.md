# efub3-frontend-assignment-2-1
💛 [이펍 프론트엔드 2학기] 1주차 과제 Redux 연습 제출

## 과제 설명
간단한 Todo List를 통해 Redux-toolkit과 Redux-persist를 연습했습니다. 

우선 StartPage와 TodoPage가 존재하는데, router을 사용해 두 페이지간 전환이 가능하게 했습니다.
store은 todos와 filters 두 개를 만들었습니다. todos는 사용자가 todoList를 통해 추가한 데이터고, filtes는 todos의 상태 관리 store입니다. 모든 항목, 완료된 항목, 진행 중인 항목 이렇게 3개로 이루어져 있습니다.

todosSlice의 reducer는 총 3개이며, addTodo, toggleTodo, removeTodo입니다. filtes의 reducer은 1개이며, 필터를 설정하는 setFilter입니다. 

persist를 사용해 새로고침을 해도 전역 상태를 유지하게 하였습니다.

스타일은 styled-component 대신 MUI를 사용했습니다.  


##  전역 상태 유지 gif 
![React-App-Chrome-2023-09-15-18-14-46](https://github.com/jiwoorld/efub3-frontend-assignment-2-1/assets/113344660/9721ee47-3998-4976-9c0f-059a53c3a8fe)
