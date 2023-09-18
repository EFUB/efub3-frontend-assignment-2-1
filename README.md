# efub3-frontend-assignment-2-1
💛 [이펍 프론트엔드 2학기] 1주차 과제 Redux 연습 제출

![Untitled](https://github.com/Cho-Jeongmin/efub3-frontend-assignment-2-1/assets/97157930/770ca4bf-a3d7-4556-ba09-b31b68e2ecd0)


### 일기 페이지
- 간단하게 일기를 작성하는 페이지입니다.
- 일기의 제목과 내용을 Redux-toolkit을 이용하여 저장했습니다.
- Redux-persist를 이용하여, 작성 후 새로고침을 하거나 페이지를 이동하더라도 작성 내용이 그대로 유지되는 것을 볼 수 있습니다.

## 날씨 페이지
- OpenWeather의 Current Weather Data API를 사용하여 현재 날씨 데이터를 가져왔습니다.
- Redux-thunk를 사용하여 비동기 작업으로 처리했습니다.
- 비동기 작업 처리의 상태를 문자열로 저장했습니다.
- pending 일 땐 '날씨 정보 로딩중...', fulfilled 일 땐 '날씨 정보 로딩을 완료했어요.'라는 문구가 뜹니다.
- Redux-persist를 이용하여, 새로고침을 하거나 페이지를 이동하더라도 데이터가 그대로 유지되는 것을 볼 수 있습니다.
