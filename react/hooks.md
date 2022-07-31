# React Hooks

## useContext (Context API)
props를 Global하게 사용할수 있도록 해주는 hook

```javascript
import React, {createContext, useState} from 'react';

//createContext로 context 정의, context 이름과 초기값을 설정한다
export const TestContext = createContext({
    name: '',
    setNameHandler: (name:string) => {}
});

const TestContextProvider = ({children}) => {
    const [name, setName] = useState('');
    const setNameHandler = (name:string) => setName(name)

    return(
        //context 사용 범위 지정, value에 사용할 context를 넣어준다.(객체형태)
        <TestContext.Provider value={{name, setNameHandler}}>
            {chiildren}
        </TestContext.Provider>ß
    )

}
```

```javascript
import {useContext} from 'react';
import {TestContext} from './TestContext';

const Slider = () => {
    //useContext에 정의한 context를 인자로 넣어서 값을 불러온다.
    const {name, setNameHanlder} = useContext(TestContext);

    return <></>;
}

```

useReducer를 사용해 Action에 따른 상태관리도 가능

```javscript
//reducer 함수 정의
const reducer = (state, action) => {
    switch(action.type) {
        case "INCREASE" :
            return {
                ...state,
                count : action.value
            };
        default :
            throw new Error()
    }
}
...
const [ state, contextDispatch] = useReducer(reducer, initialState);

//이후 Provider의 value에 해당 state의 값과, discpatch를 넣어줌
...
value={{ count:state.count, contextDispatch}}

//사용시에는
const { count, contextDispatch} = useContext(Context);

contextDispatch({ type:"INCREASE", value : count+1})


```