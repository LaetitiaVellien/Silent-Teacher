

function silent() {
    var enonce = ['function hi (a, b) { \n return a * b; \n } \n hi(x, y);', 'function hi (a, b) { \n if (a < b) { \n return a + b; \n } else { \n return a * b; \n } \n } \n hi(x, y);', 'function hi (a, b) { \n if (a < b) { \n return a - b; \n } else { \n return a + b; \n } \n } \n hi(x, y);']
    var choix = enonce[Math.round(Math.random() * 2)];
    var x = Math.round(Math.random() * 9);
    var y = Math.round(Math.random() * 9);
    var solution = 0;
    var reponse = 0;
    


}

    if (choix== enonce[0]){
        reponse = prompt('function hi (a, b) { \n if (a < b) { \n return a - b; \n } else { \n return a * b; \n } \n } \n hi('+x+', '+y+')');
        if(x < y){
            solution = x - y;
        }
        else{
            solution = x * y;
        }
       
    }
    else if(choix== enonce[1]){
        reponse = prompt('function hi (a, b) { \n if (a < b) { \n return a + b; \n } else { \n return a * b; \n } \n } \n hi('+x+', '+y+');');
        if(x < y){
            solution = x + y;
        }
        else{
            solution = x * y;
        }

    }
    else{
        reponse = prompt('function hi (a, b) { \n if (a < b) { \n return a - b; \n } else { \n return a + b; \n } \n } \n hi('+x+',' +y+');');
        if(x < y){
            solution = x - y;
        }
        else{
            solution = x + y;

        }
    }

    if(reponse==solution){
        alert('C\'est une bonne réponse!' )
    }
    else{
        alert('Mauvaise réponse!')
    }
}
console.log();
silent();