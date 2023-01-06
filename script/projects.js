function getQueryParameter(param) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == param) {
            console.log(pair[1])
            return pair[1];
        }
    }
    return null;
}

async function readTextFile(file) {
    const response = await fetch(file+".html");
    const text = await response.text();
    document.getElementById("content").innerHTML = text;
    rawFile.send(null);
}

// Get the value of the 'file' query parameter from the URL
var fileName = getQueryParameter('file');

// Read the contents of the text file and display it on the page
readTextFile(fileName);