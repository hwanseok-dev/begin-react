/**
 * DOM을 직접 선택해야하는 경우
 * 1. 특정 element의 위치나 크기를 가져올 때
 * 2. 스크롤바 위치를 가져오거나 설정할 때
 * 3. focus를 직접 설정해주어야 할 때
 * 4. video player
 *
 * Component 최적화
 * 1. useMemo : 연산된 결과를 저장
 * 2. useCallBack : 특정 함수를 재사용할 때
 * 3. React.memo : rendering된 결과를 재사용할 때
 *
 * 
 *  reducer : 상태를 업데이트 하는 함수
 * */