use beatznbrewz;
db.dropDatabase();


db.beers.insertMany([
  {
    name: "Tennents Lager",
    brewery: "Tennents Brewery",
    abv: 4,
    type: "lager",
    description: "Great tidelines, foamy head, impeccable session lager"
  },
  {
    name: "Joker IPA",
    brewery: "Williams Brothers",
    abv: 5,
    type: "IPA",
    description: "Intense, wickedly hoppy"
  },
  {
    name: "Miller Highlife",
    brewery: "Miller Brewing Co",
    abv: 4.6,
    type: "lager",
    description: "The champagne of beers"
  },
  {
    name: "Peroni",
    brewery: "Peroni Brewery",
    abv: 5.1,
    type: "lager",
    description: "I get this beer from Tesco"
  }
]);
