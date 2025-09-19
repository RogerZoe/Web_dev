// !We can chain multiple conditions in the conditional operator in order to get the desired output. This can be done by defining multiple conditions and their execution statements using : and ? operators
function enterMonth(monthVal){
    let response = (monthVal == 1) ? 'January'
                    : (monthVal == 2) ? 'Feburary'
                    : (monthVal == 3) ? 'March'
                    : (monthVal == 4) ? 'April'
                    : (monthVal == 5) ? 'May'
                    : (monthVal == 6) ? 'June'
                    : (monthVal == 7) ? 'July'
                    : (monthVal == 8) ? 'August'
                    : (monthVal == 9) ? 'September'
                    : (monthVal == 10) ? 'October'
                    : (monthVal == 11) ? 'November'
                    : (monthVal == 12) ? 'December'
                    : 'Enter valid input';

    console.log(response);
}

enterMonth(6)
// June

enterMonth(3);
// March

enterMonth(22);
// Enter valid input
