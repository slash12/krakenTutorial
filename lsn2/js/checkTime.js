// get date in localStorage
var currentDate = window.localStorage.getItem("currentDate");

if (null != currentDate) {
    var current = new Date(currentDate);
}

// get the current date
var now = new Date();

// get the time difference (convert to minutes)
const diffTime = Math.abs(Math.ceil((now - current)/60000));

// define api file.io host
const host = "https://file.io/";

// check if 10 minutes is passed
if (diffTime > 10) {
    alert("Link is expired, 10 minutes have passed");
} else {
    // get key from query string
    var queryStr = location.search;
    // get query string value
    var urlParams = new URLSearchParams(queryStr);
    var key = urlParams.get('key');

    // build redirection link
    var redirectedLink = host + key;
    
    // proceed to redirection
    window.location.href = redirectedLink;
}