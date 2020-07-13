var toiletQty = prompt('Do you have one or two toilets?');
var response;

if(toiletQty === 'one'){
    response = 'Would you like to learn about The Crapper?';
} else if (toiletQty === 'two'){
    response = 'Two is always better than one';
} else {
    response = 'YOU CHOSE POORLY !';
}

document.write('<h3>' + response + '</h3>');
