process.env.NODE_ENV = "test";



const {
    getMean,
    getMedian,
    getMode
} = require("./calculator")

describe("getMean ", () => {
    test("gets the mean of an array", () =>{
        expect(getMean([4,7,2,9,8])).toBe(6);
    })

    test("gets the mean of an empty array", ()=>{
        expect(getMean([])).toBe(0);
    })
})


describe("getMedian", () =>{
    test("gets the median of an odd numbered array", () =>{
        expect(getMedian([2,3,4,5,6])).toBe(4);
    })
    test("gets the median of an even numbered array", () =>{
        expect(getMedian([2,4,6,8])).toBe(5);
    })

})

describe("getMode", () => {
    test("gets the mode of an array", ()=>{
        expect(getMode([6,1,2,3,5,6,8,6,4])).toBe(6);
    })
})


