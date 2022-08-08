


const randomTimePromise =  () => {
    const rd = Math.floor((Math.random())*20 + 990)
    console.log(rd)
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Some text')
        }, rd)
    })
}

function returnValueIfBeforeTimeout (pr){
    const st = setTimeout(()=>{
        throw new Error("TIME OUT!")
    }, 1000)
    return pr().then((it)=>{
        clearTimeout(st)
        return it
    })
}

returnValueIfBeforeTimeout(randomTimePromise).then((it)=>console.log(it))