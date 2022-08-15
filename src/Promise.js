
import fetch from 'node-fetch'


const pr = async () => {
    const res = await fetch('https://www.naver.com/abvooo')
    if(res.ok){
        console.log(res.ok)
        return res
    }
    else {
        throw new Error('Invalid URL')
    }
}
console.log(fetch)

pr().then((d)=>console.log(d)).catch((e)=>{
    console.log("-------------------")
    console.log(e)
    console.log("-------------------")
})

console.log("1234234")


setTimeout(()=>{
    console.log("123412341234")
},3000)