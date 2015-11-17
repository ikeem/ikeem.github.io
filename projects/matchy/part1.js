// Use this file to implement Part One of your project

var animal = {};
animal.species = "Great White Shark";
animal['tagline'] = "Don't swim with the sharks!";
animal.noises = null;

var noiseArray = [];

noiseArray[0] = 'dun-nuh, dun-nuh, dun-nuh';
noiseArray.push('swiiiiish');
noiseArray.unshift('chomp!!');
noiseArray[3] = 'gurggle..';

var noises = 'noises';
animal[noises] = noiseArray;

var animals = [];

animals.push(animal);
var quackers ={
    species: 'duck',
    tagline: 'Afflack',
    noises: ['quack', 'honk', 'sneeze', 'growl']
    
};

animals.unshift(quackers);

var tasmanianDevil = {
    species: 'sarcophilus harrisii',
    tagline: 'bad a$$ ',
    noises: ['', '', '', '']
    
};
    
var polloLoco = { 
    species: 'chicken',
    tagline: 'finger lickin\' good',
    noises: ['bok bok', 'cluck cluck', 'bwok bwok', 'smk smk']
    
};
    
animals.push(tasmanianDevil, polloLoco);




var friends = [];

//get two species

friends.push(polloLoco.species, tasmanianDevil.species);

var relationships = {};
relationships.friends = friends;

var matches = [];

relationships.matches = matches;

matches.push(friends);

//Loop through your animals collection,
for (var i = 0; i < animals.length; i++){
    // adding the relationships object to each animal object.
   animals[i].relationships = relationships;
}

// for (i = 0; i < 5; i++) {
//     text += "The number is " + i + "<br>";
// }

// var animal = {};
// animal.species = "Great White Shark";
// animal['tagline'] = "Don't swim with the sharks!";
// animal.noises = null;






