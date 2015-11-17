$(function () {
  var oldGuardians = [
    {
      name: "Star Lord",
      notes: "Team leader"
    },
    {
      name: "Drax the Destroyer"
    },
    {
      name: "Adam Warlock"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Rocket",
      notes: "Served as temporary leader during Star-Lord's absence"
    },
    {
      name: "Gamora"
    }
  ];

  var newGuardians = [
    {
      name: "Mantis",
      notes: "Served as an advisor beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before becoming an active member."
    },
    {
      name: "Groot",
      notes: "Appeared as a sapling beginning in Guardians of the Galaxy vol. 2 #1 (July 2008); joined active team after fully regrowing."
    },
    {
      name: "Jack Flag"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Cosmo the Spacedog",
      notes: "Assisted the team beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before officially joining team."
    },
    {
      name: "Major Victory",
      notes: "Also member of the alternate reality Guardians of the Galaxy team."
    },
    {
      name: "Bug"
    },
    {
      name: "Moondragon",
      notes: "Resurrected by Drax and Phyla-Vell."
    }
  ];
  
  var guardians = $.merge(oldGuardians, newGuardians);
  
  
  var herosName = $.map(guardians, function(heroObj) {
    return heroObj.name;
  });
  console.log(herosName);
  
  
   var heroFirstName = heroFirstName.filter(function(hero)
  
   .filter(guardians){return 'Groot'}

  var createTable = function() {
    var createRow = function() {
      var $row = $('<tr>');
      var $name = $('<td>').text(hero.name);
      var $notes = $('<td>').text(hero.notes || "No data available");
      $row.append($name);
      $row.append($notes);
      return $row;
    }
    var $table = $('<table>');
    var $row = heros.map(createRow);
    $table.append($row);
    $table.appendTo('body');
  }
});
