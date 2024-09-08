// 1) Determine if a triangle is right-angled

// let a = +prompt('Enter the Side-1 : ');
// let b = +prompt('Enter the Side-2 : ');
// let c = +prompt('Enter the Side-3 : ');
a = 6
b = 8
c = 10
if (a ** 2 + b ** 2 == c ** 2) {
    console.log('Right Angle Triangle')
}
else {
    console.log('Not a Right Angle Triangle')
}

// Output : 
// Enter the Side-1 : 6
// Enter the Side-2 : 8
// Enter the Side-3 : 10
// Right Angle Triangle


// 2) Check if a number is a power of 2(use bitwise operator here..need research)

// n = +prompt('Enter the Number : ')
n = 16
if ((n != 0) && (n & (n - 1)) == 0) {
    console.log("" + n + " is a power of 2 ");
} else {
    console.log("" + n + " is not a power of 2 ");
}

// Output : 
// Enter the Number : 8
// 8 is a power of 2 


// 3) To determine if a person is eligible for a loan based on their credit score and income:
//    the conditions for eligibility are:
//    - Credit score of 600 or higher
//    - Annual income of $40,000 or higher
//    - Loan amount does not exceed 50% of annual income

// Credit_Score = +prompt('Enter the Credit Score : ');
// Annual_Income = +prompt('Enter the Annual Income : ');
// Loan_Amount = +prompt('Enter the Loan Amount : ');
Credit_Score = 700;
Annual_Income = 60000;
Loan_Amount = 25000;
if (Credit_Score >= 600 && Annual_Income >= 40000 && Loan_Amount <= Annual_Income * 0.5) {
    console.log('The Person is Eligible for a Loan');
}
else {
    console.log('The Person is not Eligible for a Loan');
}

// Output : 
// Enter the Credit Score : 600
// Enter the Annual Income : 50000
// Enter the Loan Amount : 20000
// The Person is Eligible for a Loan
