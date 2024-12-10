const ageCalculator = function(birthYear) {

    let daysOld
    if(birthYear % 4 === 0) {
        let numYears = (2020 - birthYear)
        let leapDays = numYears / 4
        daysOld = (numYears * 365) + leapDays
    } else{
        console.log('not divisible by 4')
    }
console.log(daysOld)


}
ageCalculator(1992)


const dayOfYearCalc = function(month) {
const monthNumbers = [31,28,31,30,31,30,31,31,30,31,30,31]
const daysInMonth = [
    {January : 30},
    {February : 28},
    {March : 31},
    {April : 30},
    {May : 31},
    {June : 30},
    {July : 31},
    {August : 31},
    {September : 30},
    {October : 31},
    {November : 30},
    {December : 31},]
for(let i=0; i < monthNumbers.length; i++){
    if(i = month){
        
    }
}

}