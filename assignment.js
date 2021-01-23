function kiloToMeter(n) {

    var meterConverter = 1000 * n;
    return meterConverter;

}


// Program-1 ended here


// Program-2 start here

function megaFriend(str) {


    var words = str.split(" ");
    var longest = "";
    for (var word of words) {
        if (word.length > longest.length) longest = word;


    }
    return longest.length;

}

megaFriend("Tasfia Fahim Jobaida Chisty Nirjhor");


// Program-2 ended here