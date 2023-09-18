# efub3-frontend-assignment-2-1

💛 [이펍 프론트엔드 2학기] 1주차 과제 Redux 연습 제출

## 기능 설명

### 장바구니

- Redux-toolkit을 활용하여 `shoppingSlice` 생성
- 장바구니에 추가하는 putCart 리듀서, 장바구니에서 삭제하는 removeCart 리듀서 생성
- 전체 금액은 `useSelector`와 `reduce` 함수를 사용하여 구현
- Redux-persist를 사용하여 새로고침 및 페이지 이동 시에도 전역 유지 구현

#### 동작 로직

상품 3가지를 보여주고, 개수 선택 후 카트 이모지를 누르면 장바구니에 담긴다.
추가한 상품이 이미 장바구니에 있는 경우 현재 담긴 개수에 추가한 상품 개수를 더한다.
`id`를 0(소금빵), 1(망고케이크), 2(마카롱)으로 설정하여 삭제 시 `id`를 비교하고 `number` state에서 삭제한다.

### 메모장

- Redux-toolkit을 활용하여 `MemoSlice` 생성
- 메모장에 추가하는 `addMemo` 리듀서, 메모장에서 삭제하는 `removeMemo` 리듀서 생성
- 메모 작성 날짜 출력 및 스크롤바 숨김 처리
- Redux-persist를 사용하여 새로고침 및 페이지 이동 시에도 전역 유지 구현

#### 동작 로직

입력 form에 메모 작성 후 제출하면 리덕스로 객체 배열(`memos`)에 저장된다.
X 버튼 클릭 시 removeMemo 리듀서가 호출되어 id 비교 후 해당 메모가 삭제된다.
`id`는 `Math.random` 함수를 활용하여 랜덤 아이디를 생성하고 부여했다.

### 결과물 사진

![](https://github.com/EFUB/efub3-frontend-assignment-2-1/assets/100225783/8b6bf0e6-4047-4dc8-854f-4ac2afe85f84)
