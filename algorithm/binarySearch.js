const binarySearch = (arr, target) => {
    arr.sort((a,b)=>a-b)
    let left = 0;
    let right = arr.length - 1;
    let mid;

    while(left<=right){
        mid = Math.floor((left+right)/2)

        if(target === arr[mid]) return mid;
        else if(target < arr[mid]) right = mid - 1;
        else left = mid + 1; 
    }

    return -1;
}

console.log(`Result : ${binarySearch([1,3,5,9,100,350,700], 100)}`)
console.log(`Result : ${binarySearch([1,3,5,9,100,700,350], 1)}`)
console.log(`Result : ${binarySearch([1,3,5,9,100,350,700], 350)}`)
console.log(`Result : ${binarySearch([1,3,5,9,100,350,700], 700)}`)
console.log(`Result : ${binarySearch([1,3,5,9,100,700,350], 99)}`)