/*jshint multistr:true */
var text = "Hello Blake";
var myName = "Blake";
var hits = [];

for (var i=0; i < text.length; i++) {
    if (text[i] === "B"){
        for(var j = i; j < i + myName.length; j++){
            hits.push(myName) }
        
        
        }
    }

console.log(hits);