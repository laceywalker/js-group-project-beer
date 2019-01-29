use beatznbrewz;
db.dropDatabase();


db.beers.insertMany([
  {
    name: "Tennents Lager",
    brewery: "Tennents Brewery",
    country: "UK",
    abv: 4,
    type: "lager",
    description: "Great tidelines, foamy head, impeccable session lager",
    rating: 5,
    date: '2011-11-11'
  },
  {
    name: "Joker IPA",
    brewery: "Williams Brothers",
    country: "UK",
    abv: 5,
    type: "IPA",
    description: "Intense, wickedly hoppy",
    rating: 5
  },
  {
    name: "Miller Highlife",
    brewery: "Miller Brewing Co",
    country: "USA",
    abv: 4.6,
    type: "lager",
    description: "The champagne of beers",
    rating: 2
  },
  {
    name: "Peroni",
    brewery: "Peroni Brewery",
    country: "Italy",
    abv: 5.1,
    type: "lager",
    description: "I get this beer from Tesco",
    rating: 5
  }
]);
