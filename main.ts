#!usr/bin/env node
// "ATM MACHINE"
import inquirer from "inquirer";

let myBalance=20000 //balance in Dollars
let myPin=3456;    //pin consist of 4-digits
let pinAnswer= await inquirer.prompt 
(
    [
        {
            name:"pin",
            type:"number",
            massage:"Enter your Pin",
        }
    ]
 );
if (pinAnswer.pin === myPin){
//Show this output is the user enter the correct pincode
    console.log("You've entered correct Pin code!");
//Declaraing a variable that waits until aother questionhas been asked from the user
//Giving 2 options to user to select either he wants to "Withdraw" or "check Balance"
    let operationAns= await inquirer.prompt( //variable declaration
        [
            {
                name:"operation",
                massage:"Please select any one option",
                type:"list",
                choices:["Withdraw","Check Balance"],
            }
        ]
    );
    //If the user selects "Withdraw",then perfrom following operation
    if (operationAns.operation === "Withdraw"){  //variabe declaration 
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    massage: "Select your amount for withdrawl",
                    type: "list",
                    choices:["5000","10000","15000","20000","Above 20000"],
                    //Here we are giving a lst to select the amount which he wants to withdraw
                    //in the form of list
                }
            ]
        );
        //if the user selects 5,000 amounts for withdrawl,perform the following operation
        if (amountAns.amount === "5000")
        {
            myBalance-=amountAns.amount;
            console.log("5,000 has been withdrawn" + "\n"+"Your remaining amount is :", myBalance) ;
            //Subtract the amount of withdrawl & show the remaining amount
        }
        //if the user selects 10,000 amounts for withdrawl,perform the following operation
        else if (amountAns.amount === "10000")
        {
            myBalance-=amountAns.amount;
            console.log("10,000 has been withdrawn" + "\n"+"Your remaining amount is :" , myBalance);
        }
        //if the user selects 15,000 amounts for withdrawl,perform the following operation
        else if (amountAns.amount === "15000")
        {
            myBalance-=amountAns.amount;
            console.log("15,000 has been withdrawn" +"\n"+"Your remaining amount is :" , myBalance);
        }
        //if the user selects 20,000 amounts for withdrawl,perform the following operation
        else if (amountAns.amount === "20000")
        {
            myBalance-=amountAns.amount;
            console.log("20,000 has been withdrawn"+"\n"+"Your remaining amount is :" , myBalance);
        }
        //if the user selects amount above 20,000 for withdrawl,perform the following operation
        else if (amountAns.amount === "Above 20000")
        {
            console.log("You've insufficient Balance");
        }
        }
    //If the user wants to check his Current Balance
    else if (operationAns.operation === "Check Balance")
    {
        console.log("Your  Current Balance is:"+ myBalance);
    }
}else
{
//If the user enter wrong pincode,the show this output
    console.log("You've entered an INVALID PINCODE");
};
    