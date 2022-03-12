const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;
const markBMI = massMark / heightMark ** 2;
const johnBMI= massJohn / heightJohn **2;

if(markBMI>johnBMI){
    console.log(`Marks BMI (${markBMI}) is Greaterthan johns BMI (${johnBMI})`);
}
else{
    console.log(`John BMI (${johnBMI}) is Greaterthan Marks BMI (${markBMI})`)
}


