# State

## Reference Type의 State 사용
state가 변경감지를 할때 값이 참조형이라면 새로운 참조를 만들어 값을 변경해줘야 변경이 감지된다.
반대로 참조값이 바뀌면 내부의 값은 같아도 리렌더링 된다. 그런 경우 useMemo, useCallback, React.memo 등을 이용해 불필요한 리랜더링을 방지할 수 있다.