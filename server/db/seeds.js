use beatznbrewz;
db.dropDatabase();


db.beers.insertMany([
  {
    name: "Tennents Lager",
    brewery: "Tennents Brewery",
    country: "United Kingdom of Great Britain and Northern Ireland,GB",
    abv: 4,
    type: "lager",
    description: "Great tidelines, foamy head, impeccable session lager",
    rating: 5,
    date: '2011/11/11'
  },
  {
    name: "Joker IPA",
    brewery: "Williams Brothers",
    country: "United Kingdom of Great Britain and Northern Ireland,GB",
    abv: 5,
    type: "IPA",
    description: "Intense, wickedly hoppy",
    rating: 5,
    date: '2019/01/10'
  },
  {
    name: "Miller Highlife",
    brewery: "Miller Brewing Co",
    country: "United States of America,US",
    abv: 4.6,
    type: "lager",
    description: "The champagne of beers",
    rating: 2,
    date: '2019/01/15'
  },
  {
    name: "Peroni",
    brewery: "Peroni Brewery",
    country: "Italy,IT",
    abv: 5.1,
    type: "lager",
    description: "I buy it from Tesco",
    rating: 5,
    date: '2019/01/01'
  },
  {
    name: "Erdinger",
    brewery: "Erdinger Weißbräu",
    country: "Germany,DE",
    abv: 5.1,
    type: "wheat beer",
    description: "I get this beer from Tesco",
    rating: 5,
    date: '2019/01/01'
  },
  {
    name: "Brahma beer",
    brewery: "Companhia Cervejaria Brahma",
    country: "Brazil,BR",
    abv: 4.3,
    type: "lager",
    description: "Pretty watery, not my vibe",
    rating: 2,
    date: '2019/01/01'
  },
  {
    name: "Tsingtao",
    brewery: "Tsingtao Brewery",
    country: "China,CN",
    abv: 4.8,
    type: "lager",
    description: "Lovely crisp lager",
    rating: 4,
    date: '2019/01/01'
  },
  {
    name: "Yeastie Boys",
    brewery: "Kingsland Brewing Co",
    country: "New Zealand,NZ",
    abv: 5.1,
    type: "Pilsner",
    description: "Too yeastie, not enough boys",
    rating: 3,
    date: '2019/01/01'
  },
  {
    name: "Kingfisher",
    brewery: "United Breweries Group",
    country: "India,IN",
    abv: 5.1,
    type: "lager",
    description: "Goes well with a curry",
    rating: 3,
    date: '2019/01/01'
  },
  {
    name: "Estrella Galicia",
    brewery: "Estrella Damm",
    country: "Spain,ES",
    abv: 5.1,
    type: "lager",
    description: "I get this beer from Tesco",
    rating: 5,
    date: '2019/01/01'
  },
  {
    name: "Red Stripe",
    brewery: "Desnoes & Geddes",
    country: "Jamaica,JM",
    abv: 5.1,
    type: "lager",
    description: "Good session lager.",
    rating: 3,
    date: '2019/01/01'
  }
]);
