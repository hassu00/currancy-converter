import inquirer from "inquirer";

let currancyInfo = [{
    USD:{PKR:278, EUR:0.90, GBP:0.76, INR:83.90},
    EUR:{PKR:308.39, USD:1.11, GBP:0.84, INR:92.89},
    GBP:{PKR:366.27, USD:1.31, EUR:1.18, INR:110.31},
    INR:{PKR:3.31, USD:0.011, EUR:0.010, GBP:0.009},
    PKR:{ USD:1, EUR:0.0032, GBP:0.0027, INR:0.301}
}]

interface Answer {
    from: string;
    to: string;
    amount: number;
}
// @ts-ignore
const answer: Answer = await inquirer.prompt([{
    name:"from",
    type:"list",
    message:"which currancy do you want to convert",
    choices:["USD","PKR","EUR","GBP","INR"]
},
{
    name:"to",
    type:"list",
    message:"to which currancy do you want to convert",
    choices:["USD","PKR","EUR","GBP","INR"]
},
{
    name:"amount",
    type:"input",
    message:"how much do you want to convert"
}])
// @ts-ignore
if (currancyInfo[0][answer.from.toUpperCase()] && currancyInfo[0][answer.from.toUpperCase()][answer.to.toUpperCase()]) {
    // @ts-ignore
    const currancyInfo2 = currancyInfo[0][answer.from.toUpperCase()][answer.to.toUpperCase()]
    console.log(`${answer.amount} ${answer.from} = ${answer.amount * currancyInfo2} ${answer.to}`);
} else {
    console.log(`Error: Invalid currency conversion from ${answer.from} to ${answer.to}`);
}