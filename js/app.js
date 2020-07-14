function addGreeting() {
    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

    if (hourNow > 18) {
        greeting = 'Good evening ! ';
    } else if (hourNow > 12) {
        greeting = 'Good afternoon ! ';
    } else if (hourNow > 0) {
        greeting = 'Good morning ! ';
    } else {
        greeting = 'Welcome ! ';
    }
    return document.write('<h3>' + greeting + '</h3>');

    function addUsername() {
    var name = prompt('What is your name ?');
    var message = 'Hello,  ' + name; 

    return document.write('<h3>' + message + '</h3>');

    function addPrefence() {
    var toiletQty = prompt('Do you have one or two toilets?');
    var response;
    if (toiletQty === 'one') 
    {
        response = 'Would you like to learn about The Crapper?';
    } else if (toiletQty === 'two') {
        response = 'Two is always better than one';
    } else 
        response = 'YOU CHOSE POORLY !'; 
    {
    return document.write('<h3>' + response + '</h3>');
}
