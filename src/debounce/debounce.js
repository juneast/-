
const debounce = (callback, delay) => {
    let timer;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(()=>callback(...args), delay);
    }
}


//use

// const onChangeHandler = useCallback(
//     ()=>debounce(()=>console.log('debounce'),500), [])

const deFunc = debounce(()=>console.log('1'), 2000)

deFunc()
deFunc()
deFunc()
deFunc()
