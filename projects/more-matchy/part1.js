//Use this file to implement Part One of your project

var animal = { 
    species: 'duck',
    tagline: 'Afflac',
    noises: ['quack', 'honk', 'sneeze', 'growl'] 
    
};
// objKeyPrinter loops through the properties of any object and returns a string of all the keys.
// example input: { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }
// example output: "species tagline noises"
var objkeyPrinter = function(object) {
        var arr = [];
    for (var key in object){
        arr.push(key);
    }
     return(arr.join(' '));
};


// objValuePrinter loops through all the properties in a given object and returns a string of all the values that are strings.
// example input: { species: 'duck', tagline: 'Afflac', noises: ['quack', 'honk', 'sneeze', 'growl'] }
// example output: "duck Afflac"
var objValuePrinter = function(object) {
    var string = [];
    for (var key in object)
        string.push(key);
    if(typeof "" === 'string')
    
    return(string.join(' '));
};
// example of function Declaration
//  function jd(){
    
// };
// example of function Expression
//  var jd = function(){
     
//  };
// nonFriends is a function that shows which animals in your collection are not in your friendlist. You don't want current friends to show up while you are browsing for new friends.
// You can choose to present this data in a way that makes the most sense to you and how you want to present this data to your user.
// var nonFriends = function(animals, animal) {
//     return animal.filler()function(animal)
//     return
// };
var addMath = function(species, animal) {
    animal.relationships.matches.puch(species);
    return animal;
};