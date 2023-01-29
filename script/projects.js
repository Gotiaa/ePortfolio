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
    const response = await fetch(file + ".html");
    const text = await response.text();
    document.getElementById("content").innerHTML = text;
}

// Get the value of the 'file' query parameter from the URL
var fileName = getQueryParameter('file');

// Read the contents of the text file and display it on the page
readTextFile(fileName);

function getPreviousArticle() {
    switch(fileName) {
        // Compétences techniques
        case "article_android" :
            window.location.replace("project.html?file=article_maquette");
            break;
        case "article_maquette" :
            window.location.replace("project.html?file=article_algorithmique");
            break;
        case "article_algorithmique" :
            window.location.replace("project.html?file=article_android");
            break;

        // Compétences transverses
        case "article_patience" :
            window.location.replace("project.html?file=article_teamworking");
            break;
        case "article_teamworking" :
            window.location.replace("project.html?file=article_discipline");
            break;
        case "article_discipline" :
            window.location.replace("project.html?file=article_patience");
            break;

        // Réalisations
        case "article_ulysse" :
            window.location.replace("project.html?file=article_eyetrek");
            break;
        case "article_eyetrek" :
            window.location.replace("project.html?file=article_eyetrek");
            break;

        //Default
        default : {
            console.log("Sorry we are ou of ${expr}.");
        }
    }
}

function getNextArticle() {
    switch(fileName) {
        // Compétences techniques
        case "article_android" :
            window.location.replace("project.html?file=article_algorithmique");
            break;
        case "article_maquette" :
            window.location.replace("project.html?file=article_android");
            break;
        case "article_algorithmique" :
            window.location.replace("project.html?file=article_maquette");
            break;

        // Compétences transverses
        case "article_patience" :
            window.location.replace("project.html?file=article_discipline");
            break;
        case "article_teamworking" :
            window.location.replace("project.html?file=article_patience");
            break;
        case "article_discipline" :
            window.location.replace("project.html?file=article_teamworking");
            break;

        // Réalisations
        case "article_ulysse" :
            window.location.replace("project.html?file=article_eyetrek");
            break;
        case "article_eyetrek" :
            window.location.replace("project.html?file=article_ulysse");
            break;

        //Default
        default : {
            console.log("Sorry we are ou of ${expr}.");
        }
    }
}