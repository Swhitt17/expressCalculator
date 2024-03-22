// @param {Array} arr
function frequencyCounter(arr){
    return arr.reduce((acc, next) => {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {})
}



//  @param {Array} numsAsStrings
//  @returns {Array |Error}

 function convertNumsArray(numsAsStrings){
    let result = [];

    for(i = 0; i < nums.length;i++) {
        let valToNumber = Number(numsAsStrings[i]);

        if(Number.isNaN(valToNumber)) {
            return new Error(` The value '${numsAsStrings[i]}' is not a valid number.`  )
        }
        result.push(valToNumber);
    }
    return result;
 }


function getMean(nums){
    if(nums.length === 0) return 0;
    return nums.reduce((acc, c) => acc + c,0) /nums.length;
}


function getMedian(nums){
    nums.sort((a,b) => a - b);

    let middle = Math.floor(nums.length/2);
    let median;

    if(nums.length % 2 === 0){
        median = (nums[middle] + nums[middle - 1]) /2;
    }
    else{
        median = nums[middle];
    }
    return median; 

}

 

// @param {Array} arr
function getMode(arr){

    let frequency = frequencyCounter(arr);
     let count = 0;
     let mode;

     for(let key in frequency){
        if(frequency[key] > count){
            mode = key;
            count = frequency[key];
        }
     }
     return +mode;

 }





module.exports = {
    frequencyCounter,
    convertNumsArray,
    getMean,
    getMedian,
    getMode,

}