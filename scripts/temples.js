const requestURL = 'https://templeinnsuites.github.io/Home/scripts/temples.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {

let templedata = request.response;
console.log(templedata);
let temples = templedata['temples'];

for (let i=0; i < temples.length; i++) {
    if (temples[i].name == 'Nauvoo Illinois Temple') {
         
        document.getElementById('nauvooHeader').innerHTML = temples[i].name;
        document.getElementById('nauvooAddress').innerHTML = 'Address: ' + temples[i].address + ', ' + temples[i].city + " " + temples[i].state + ", " + temples[i].zip;
        document.getElementById('nauvooPhone').innerHTML = 'Phone Number: ' + temples[i].phone;
        document.getElementById('nauvooEndowment').innerHTML = 'Endowment Schedule: ' + temples[i].endowment;
        document.getElementById('nauvooServices').innerHTML = 'Services: ' + temples[i].services;
        document.getElementById('nauvooClosures').innerHTML = 'Closures: ' + temples[i].closures;
        document.getElementById('nauvooHistory').innerHTML = 'History: ' + temples[i].history;
        

    } else if (towns[i].name == 'Brigham City Utah Temple') {

        document.getElementById('brighamHeader').innerHTML = temples[i].name;
        document.getElementById('brighamAddress').innerHTML = 'Address: ' + temples[i].address + ', ' + temples[i].city + " " + temples[i].state + ", " + temples[i].zip;
        document.getElementById('brighamPhone').innerHTML = 'Phone Number: ' + temples[i].phone;
        document.getElementById('brighamEndowment').innerHTML = 'Endowment Schedule: ' + temples[i].endowment;
        document.getElementById('brighamServices').innerHTML = 'Services: ' + temples[i].services;
        document.getElementById('brighamClosures').innerHTML = 'Closures: ' + temples[i].closures;
        document.getElementById('brighamHistory').innerHTML = 'History: ' + temples[i].history;


    } else if (towns[i].name == 'San Diego California Temple') {

        document.getElementById('sandiegoHeader').innerHTML = temples[i].name;
        document.getElementById('sandiegoAddress').innerHTML = 'Address: ' + temples[i].address + ', ' + temples[i].city + " " + temples[i].state + ", " + temples[i].zip;
        document.getElementById('sandiegoPhone').innerHTML = 'Phone Number: ' + temples[i].phone;
        document.getElementById('sandiegoEndowment').innerHTML = 'Endowment Schedule: ' + temples[i].endowment;
        document.getElementById('sandiegoServices').innerHTML = 'Services: ' + temples[i].services;
        document.getElementById('sandiegoClosures').innerHTML = 'Closures: ' + temples[i].closures;
        document.getElementById('sandiegoHistory').innerHTML = 'History: ' + temples[i].history;

    } else if (towns[i].name == 'Boise Idaho Temple') {

        document.getElementById('boiseHeader').innerHTML = temples[i].name;
        document.getElementById('boiseAddress').innerHTML = 'Address: ' + temples[i].address + ', ' + temples[i].city + " " + temples[i].state + ", " + temples[i].zip;
        document.getElementById('boisePhone').innerHTML = 'Phone Number: ' + temples[i].phone;
        document.getElementById('boiseEndowment').innerHTML = 'Endowment Schedule: ' + temples[i].endowment;
        document.getElementById('boiseServices').innerHTML = 'Services: ' + temples[i].services;
        document.getElementById('boiseClosures').innerHTML = 'Closures: ' + temples[i].closures;
        document.getElementById('boiseHistory').innerHTML = 'History: ' + temples[i].history;
}
}
}

