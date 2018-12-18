function newFile() {
    var foo = document.getElementsByClassName('data');

    document.getElementsByClassName('data').onclick = function () {
        foo.className = 'hidden';
    };

    document.getElementById('show-button').onclick = function () {
        foo.className = '';
    };
}

function consolee() {
    let t = document.getElementById('textfeld').value;
    console.log(t);
}

function time() {
    let d = new Date();
    let myTime = d.getTime("h, m");
    h = d.getHours();
    m = d.getMinutes();
    h = h.toString();
    m = m.toString()
    clockTime = h + ":" + m;
    day = d.getDay();
    month = d.getMonth();
    year = d.getFullYear();
    calendarDate = day + "." + month + "." + year;

    document.getElementById('zeit').value = clockTime;
    document.getElementById('datum').value = calendarDate;
}