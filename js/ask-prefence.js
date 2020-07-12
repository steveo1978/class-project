var toiletQty = prompt('do you have one or two toilets?');
var response;

if(toiletQty === 'one'){
    response = 'would you like to learn about Thomas Crapper?';
} else if (toiletQty === 'two'){
    response = 'two is always better than one';
} else {
    response = 'you must choose one or two';
}

document.write('<h3>' + response + '</h3>');
