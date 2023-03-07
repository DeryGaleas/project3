
var stockContent = `
[
  
  {
    
    "symbol": "MMM",
    "name": "3M Company",
    "SEC": "reports",
    "sector": "Industrials",
    "subIndustry": "Industrial Conglomerates",
    "address": "St. Paul, Minnesota",
    "dateAdded": "",
    "CIK": 66740,
    "frequency": 8
  },
  {
    "symbol": "ABT",
    "name": "Abbott Laboratories",
    "SEC": "reports",
    "sector": "Health Care",
    "subIndustry": "Health Care Equipment",
    "address": "North Chicago, Illinois",
    "dateAdded": "3/31/1964",
    "CIK": 1800,
    "frequency": 5
  },
  {
    "symbol": "ACN",
    "name": "Accenture plc",
    "SEC": "reports",
    "sector": "Information Technology",
    "subIndustry": "IT Consulting & Other Services",
    "address": "Dublin, Ireland",
    "dateAdded": "7/6/2011",
    "CIK": 1467373,
    "frequency": 7
  },
  {
    "symbol": "ATVI",
    "name": "Activision Blizzard",
    "SEC": "reports",
    "sector": "Information Technology",
    "subIndustry": "Home Entertainment Software",
    "address": "Santa Monica, California",
    "dateAdded": "8/31/2015",
    "CIK": 718877,
    "frequency": 11
  },
  {
    "symbol": "AYI",
    "name": "Acuity Brands Inc",
    "SEC": "reports",
    "sector": "Industrials",
    "subIndustry": "Electrical Components & Equipment",
    "address": "Atlanta, Georgia",
    "dateAdded": "5/3/2016",
    "CIK": 1144215,
    "frequency": 7
  },
  {
    "symbol": "ADBE",
    "name": "Adobe Systems Inc",
    "SEC": "reports",
    "sector": "Information Technology",
    "subIndustry": "Application Software",
    "address": "San Jose, California",
    "dateAdded": "5/5/1997",
    "CIK": 796343,
    "frequency": 14
  },
  {
    "symbol": "AAP",
    "name": "Advance Auto Parts",
    "SEC": "reports",
    "sector": "Consumer Discretionary",
    "subIndustry": "Automotive Retail",
    "address": "Roanoke, Virginia",
    "dateAdded": "7/9/2015",
    "CIK": 1158449,
    "frequency": 2
  },
  {
    "symbol": "AES",
    "name": "AES Corp",
    "SEC": "reports",
    "sector": "Utilities",
    "subIndustry": "Independent Power Producers & Energy Traders",
    "address": "Arlington, Virginia",
    "dateAdded": "",
    "CIK": 874761,
    "frequency": 5
  },
  {
    "symbol": "AFL",
    "name": "AFLAC Inc",
    "SEC": "reports",
    "sector": "Financials",
    "subIndustry": "Life & Health Insurance",
    "address": "Columbus, Georgia",
    "dateAdded": "",
    "CIK": 4977,
    "frequency": 2
  },
  {
    "symbol": "A",
    "name": "Agilent Technologies Inc",
    "SEC": "reports",
    "sector": "Health Care",
    "subIndustry": "Health Care Equipment",
    "address": "Santa Clara, California",
    "dateAdded": "",
    "CIK": 1090872,
    "frequency": 10
  },
  {
    "symbol": "AKAM",
    "name": "Akamai Technologies Inc",
    "SEC": "reports",
    "sector": "Information Technology",
    "subIndustry": "Internet Software & Services",
    "address": "Cambridge, Massachusetts",
    "dateAdded": "7/12/2007",
    "CIK": 1086222,
    "frequency": 8
  },
  {
    "symbol": "ALXN",
    "name": "Alexion Pharmaceuticals",
    "SEC": "reports",
    "sector": "Health Care",
    "subIndustry": "Biotechnology",
    "address": "Cheshire, Connecticut",
    "dateAdded": "5/25/2012",
    "CIK": 899866,
    "frequency": 5
  },
  {
    "symbol": "ADS",
    "name": "Alliance Data Systems",
    "SEC": "reports",
    "sector": "Information Technology",
    "subIndustry": "Data Processing & Outsourced Services",
    "address": "Plano, Texas",
    "dateAdded": "12/23/2013",
    "CIK": 1101215,
    "frequency": 1
  },
  {
    "symbol": "ALL",
    "name": "Allstate Corp",
    "SEC": "reports",
    "sector": "Financials",
    "subIndustry": "Property & Casualty Insurance",
    "address": "Northfield Township, Illinois",
    "dateAdded": "",
    "CIK": 899051,
    "frequency": 3
  },
  {
    "symbol": "GOOGL",
    "name": "Alphabet Inc Class A",
    "SEC": "reports",
    "sector": "Information Technology",
    "subIndustry": "Internet Software & Services",
    "address": "Mountain View, California",
    "dateAdded": "4/3/2014",
    "CIK": 1652044,
    "frequency": 40
  },
  {
    "symbol": "GOOG",
    "name": "Alphabet Inc Class C",
    "SEC": "reports",
    "sector": "Information Technology",
    "subIndustry": "Internet Software & Services",
    "address": "Mountain View, California",
    "dateAdded": "",
    "CIK": 1652044,
    "frequency": 14
  },
  {
    "symbol": "MO",
    "name": "Altria Group Inc",
    "SEC": "reports",
    "sector": "Consumer Staples",
    "subIndustry": "Tobacco",
    "address": "Richmond, Virginia",
    "dateAdded": "",
    "CIK": 764180,
    "frequency": 6
  },
  {
    "symbol": "AMZN",
    "name": "Amazon.com Inc",
    "SEC": "reports",
    "sector": "Consumer Discretionary",
    "subIndustry": "Internet & Direct Marketing Retail",
    "address": "Seattle, Washington",
    "dateAdded": "11/18/2005",
    "CIK": 1018724,
    "frequency": 31
  },
  {
    "symbol": "AEP",
    "name": "American Electric Power",
    "SEC": "reports",
    "sector": "Utilities",
    "subIndustry": "Electric Utilities",
    "address": "Columbus, Ohio",
    "dateAdded": "",
    "CIK": 4904,
    "frequency": 8
  },
  {
    "symbol": "AXP",
    "name": "American Express Co",
    "SEC": "reports",
    "sector": "Financials",
    "subIndustry": "Consumer Finance",
    "address": "New York, New York",
    "dateAdded": "6/30/1976",
    "CIK": 4962,
    "frequency": 5
  },
  {
    "symbol": "AIG",
    "name": "American International Group, Inc.",
    "SEC": "reports",
    "sector": "Financials",
    "subIndustry": "Property & Casualty Insurance",
    "address": "New York, New York",
    "dateAdded": "3/31/1980",
    "CIK": 5272,
    "frequency": 10
  },
  {
    "symbol": "AMT",
    "name": "American Tower Corp A",
    "SEC": "reports",
    "sector": "Real Estate",
    "subIndustry": "Specialized REITs",
    "address": "Boston, Massachusetts",
    "dateAdded": "11/19/2007",
    "CIK": 1053507,
    "frequency": 3
  },
  {
    "symbol": "AWK",
    "name": "American Water Works Company Inc",
    "SEC": "reports",
    "sector": "Utilities",
    "subIndustry": "Water Utilities",
    "address": "Voorhees, New Jersey",
    "dateAdded": "3/4/2016",
    "CIK": 1410636,
    "frequency": 7
  },
  {
    "symbol": "ABC",
    "name": "AmerisourceBergen Corp",
    "SEC": "reports",
    "sector": "Health Care",
    "subIndustry": "Health Care Distributors",
    "address": "Chesterbrook, Pennsylvania",
    "dateAdded": "",
    "CIK": 1140859,
    "frequency": 5
  },
  {
    "symbol": "AME",
    "name": "AMETEK Inc",
    "SEC": "reports",
    "sector": "Industrials",
    "subIndustry": "Electrical Components & Equipment",
    "address": "Berwyn, Pennsylvania",
    "dateAdded": "9/23/2013",
    "CIK": 1037868,
    "frequency": 1
  },
  {
    "symbol": "AMGN",
    "name": "Amgen Inc",
    "SEC": "reports",
    "sector": "Health Care",
    "subIndustry": "Biotechnology",
    "address": "Thousand Oaks, California",
    "dateAdded": "1/2/1992",
    "CIK": 318154,
    "frequency": 6
  },
  {
    "symbol": "APH",
    "name": "Amphenol Corp",
    "SEC": "reports",
    "sector": "Information Technology",
    "subIndustry": "Electronic Components",
    "address": "Wallingford, Connecticut",
    "dateAdded": "9/30/2008",
    "CIK": 820313,
    "frequency": 1
  },
  {
    "symbol": "APC",
    "name": "Anadarko Petroleum Corp",
    "SEC": "reports",
    "sector": "Energy",
    "subIndustry": "Oil & Gas Exploration & Production",
    "address": "The Woodlands, Texas",
    "dateAdded": "",
    "CIK": 773910,
    "frequency": 10
  },
  {
    "symbol": "ADI",
    "name": "Analog Devices, Inc.",
    "SEC": "reports",
    "sector": "Information Technology",
    "subIndustry": "Semiconductors",
    "address": "Norwood, Massachusetts",
    "dateAdded": "",
    "CIK": 6281,
    "frequency": 2
  },
  {
    "symbol": "AON",
    "name": "Aon plc",
    "SEC": "reports",
    "sector": "Financials",
    "subIndustry": "Insurance Brokers",
    "address": "London, United Kingdom",
    "dateAdded": "",
    "CIK": 315293,
    "frequency": 2
  },
  {
    "symbol": "APA",
    "name": "Apache Corporation",
    "SEC": "reports",
    "sector": "Energy",
    "subIndustry": "Oil & Gas Exploration & Production",
    "address": "Houston, Texas",
    "dateAdded": "",
    "CIK": 6769,
    "frequency": 9
  },
  {
    "symbol": "AAPL",
    "name": "Apple Inc.",
    "SEC": "reports",
    "sector": "Information Technology",
    "subIndustry": "Computer Hardware",
    "address": "Cupertino, California",
    "dateAdded": "11/30/1982",
    "CIK": 320193,
    "frequency": 43
  },
  {
    "symbol": "AMAT",
    "name": "Applied Materials Inc",
    "SEC": "reports",
    "sector": "Information Technology",
    "subIndustry": "Semiconductor Equipment",
    "address": "Santa Clara, California",
    "dateAdded": "",
    "CIK": 6951,
    "frequency": 6
  },
  {
    "symbol": "ADM",
    "name": "Archer-Daniels-Midland Co",
    "SEC": "reports",
    "sector": "Consumer Staples",
    "subIndustry": "Agricultural Products",
    "address": "Decatur, Illinois",
    "dateAdded": "7/29/1981",
    "CIK": 7084,
    "frequency": 6
  },
  {
    "symbol": "AJG",
    "name": "Arthur J. Gallagher & Co.",
    "SEC": "reports",
    "sector": "Financials",
    "subIndustry": "Insurance Brokers",
    "address": "Itasca, Illinois",
    "dateAdded": "5/31/2016",
    "CIK": 354190,
    "frequency": 4
  },
  {
    "symbol": "AIZ",
    "name": "Assurant Inc",
    "SEC": "reports",
    "sector": "Financials",
    "subIndustry": "Multi-line Insurance",
    "address": "New York, New York",
    "dateAdded": "4/10/2007",
    "CIK": 1267238,
    "frequency": 9
  },
  {
    "symbol": "T",
    "name": "AT&T Inc",
    "SEC": "reports",
    "sector": "Telecommunications Services",
    "subIndustry": "Integrated Telecommunications Services",
    "address": "Dallas, Texas",
    "dateAdded": "11/30/1983",
    "CIK": 732717,
    "frequency": 23
  },
  {
    "symbol": "ADP",
    "name": "Automatic Data Processing",
    "SEC": "reports",
    "sector": "Information Technology",
    "subIndustry": "Internet Software & Services",
    "address": "Roseland, New Jersey",
    "dateAdded": "3/31/1981",
    "CIK": 8670,
    "frequency": 1
  },
  {
    "symbol": "BAC",
    "name": "Bank of America Corp",
    "SEC": "reports",
    "sector": "Financials",
    "subIndustry": "Banks",
    "address": "Charlotte, North Carolina",
    "dateAdded": "6/30/1976",
    "CIK": 70858,
    "frequency": 16
  },
  {
    "symbol": "BAX",
    "name": "Baxter International Inc.",
    "SEC": "reports",
    "sector": "Health Care",
    "subIndustry": "Health Care Equipment",
    "address": "Deerfield, Illinois",
    "dateAdded": "9/30/1972",
    "CIK": 10456,
    "frequency": 7
  },
  {
    "symbol": "BBT",
    "name": "BB&T Corporation",
    "SEC": "reports",
    "sector": "Financials",
    "subIndustry": "Banks",
    "address": "Winston-Salem, North Carolina",
    "dateAdded": "",
    "CIK": 92230,
    "frequency": 7
  },
  {
    "symbol": "BRK.B",
    "name": "Berkshire Hathaway",
    "SEC": "reports",
    "sector": "Financials",
    "subIndustry": "Multi-Sector Holdings",
    "address": "Omaha, Nebraska",
    "dateAdded": "2/16/2010",
    "CIK": 1067983,
    "frequency": 19
  },
  {
    "symbol": "BBY",
    "name": "Best Buy Co. Inc.",
    "SEC": "reports",
    "sector": "Consumer Discretionary",
    "subIndustry": "Computer & Electronics Retail",
    "address": "Richfield, Minnesota",
    "dateAdded": "",
    "CIK": 764478,
    "frequency": 3
  },
  {
    "symbol": "BIIB",
    "name": "BIOGEN IDEC Inc.",
    "SEC": "reports",
    "sector": "Health Care",
    "subIndustry": "Biotechnology",
    "address": "Weston, Massachusetts",
    "dateAdded": "",
    "CIK": 875045,
    "frequency": 8
  },
  {
    "symbol": "BLK",
    "name": "BlackRock",
    "SEC": "reports",
    "sector": "Financials",
    "subIndustry": "Asset Management & Custody Banks",
    "address": "New York, New York",
    "dateAdded": "4/4/2011",
    "CIK": 1364742,
    "frequency": 3
  },
  {
    "symbol": "BA",
    "name": "Boeing Company",
    "SEC": "reports",
    "sector": "Industrials",
    "subIndustry": "Aerospace & Defense",
    "address": "Chicago, Illinois",
    "dateAdded": "",
    "CIK": 12927,
    "frequency": 5
  },
  {
    "symbol": "BWA",
    "name": "BorgWarner",
    "SEC": "reports",
    "sector": "Consumer Discretionary",
    "subIndustry": "Auto Parts & Equipment",
    "address": "Auburn Hills, Michigan",
    "dateAdded": "12/19/2011",
    "CIK": 908255,
    "frequency": 3
  },
  {
    "symbol": "BMY",
    "name": "Bristol-Myers Squibb",
    "SEC": "reports",
    "sector": "Health Care",
    "subIndustry": "Health Care Distributors",
    "address": "New York, New York",
    "dateAdded": "",
    "CIK": 14272,
    "frequency": 9
  },
  {
    "symbol": "AVGO",
    "name": "Broadcom",
    "SEC": "reports",
    "sector": "Information Technology",
    "subIndustry": "Semiconductors",
    "address": "San Jose, California",
    "dateAdded": "5/8/2014",
    "CIK": 1441634,
    "frequency": 3
  },
  {
    "symbol": "BF.B",
    "name": "Brown-Forman Corporation",
    "SEC": "reports",
    "sector": "Consumer Staples",
    "subIndustry": "Distillers & Vintners",
    "address": "Louisville, Kentucky",
    "dateAdded": "10/31/1982",
    "CIK": 14693,
    "frequency": 2
  },
  {
    "symbol": "CA",
    "name": "CA, Inc.",
    "SEC": "reports",
    "sector": "Information Technology",
    "subIndustry": "Systems Software",
    "address": "Islandia, New York",
    "dateAdded": "7/31/1987",
    "CIK": 356028,
    "frequency": 4
  },
  {
    "symbol": "CPB",
    "name": "Campbell Soup",
    "SEC": "reports",
    "sector": "Consumer Staples",
    "subIndustry": "Packaged Foods & Meats",
    "address": "Camden, New Jersey",
    "dateAdded": "",
    "CIK": 16732,
    "frequency": 4
  },
  {
    "symbol": "COF",
    "name": "Capital One Financial",
    "SEC": "reports",
    "sector": "Financials",
    "subIndustry": "Consumer Finance",
    "address": "Tysons Corner, Virginia",
    "dateAdded": "",
    "CIK": 927628,
    "frequency": 2
  },
  {
    "symbol": "CAH",
    "name": "Cardinal Health Inc.",
    "SEC": "reports",
    "sector": "Health Care",
    "subIndustry": "Health Care Distributors",
    "address": "Dublin, Ohio",
    "dateAdded": "",
    "CIK": 721371,
    "frequency": 8
  },
  {
    "symbol": "KMX",
    "name": "Carmax Inc",
    "SEC": "reports",
    "sector": "Consumer Discretionary",
    "subIndustry": "Specialty Stores",
    "address": "Richmond, Virginia",
    "dateAdded": "6/28/2010",
    "CIK": 1170010,
    "frequency": 9
  },
  {
    "symbol": "CCL",
    "name": "Carnival Corp.",
    "SEC": "reports",
    "sector": "Consumer Discretionary",
    "subIndustry": "Hotels, Resorts & Cruise Lines",
    "address": "Miami, Florida",
    "dateAdded": "",
    "CIK": 815097,
    "frequency": 7
  },
  {
    "symbol": "CAT",
    "name": "Caterpillar Inc.",
    "SEC": "reports",
    "sector": "Industrials",
    "subIndustry": "Construction & Farm Machinery & Heavy Trucks",
    "address": "Peoria, Illinois",
    "dateAdded": "",
    "CIK": 18230,
    "frequency": 8
  },
  {
    "symbol": "CBG",
    "name": "CBRE Group",
    "SEC": "reports",
    "sector": "Real Estate",
    "subIndustry": "Real Estate Services",
    "address": "Los Angeles, California",
    "dateAdded": "",
    "CIK": 1138118,
    "frequency": 3
  },
  {
    "symbol": "CBS",
    "name": "CBS Corp.",
    "SEC": "reports",
    "sector": "Consumer Discretionary",
    "subIndustry": "Broadcasting & Cable TV",
    "address": "New York, New York",
    "dateAdded": "9/1/1994",
    "CIK": 813828,
    "frequency": 7
  },
  {
    "symbol": "CNP",
    "name": "CenterPoint Energy",
    "SEC": "reports",
    "sector": "Utilities",
    "subIndustry": "MultiUtilities",
    "address": "Houston, Texas",
    "dateAdded": "7/31/1985",
    "CIK": 1130310,
    "frequency": 2
  },
  {
    "symbol": "CHTR",
    "name": "Charter Communications",
    "SEC": "reports",
    "sector": "Consumer Discretionary",
    "subIndustry": "Cable & Satellite",
    "address": "Stamford, Connecticut",
    "dateAdded": "9/8/2016",
    "CIK": 1091667,
    "frequency": 6
  },
  {
    "symbol": "CVX",
    "name": "Chevron Corp.",
    "SEC": "reports",
    "sector": "Energy",
    "subIndustry": "Integrated Oil & Gas",
    "address": "San Ramon, California",
    "dateAdded": "",
    "CIK": 93410,
    "frequency": 18
  },
  {
    "symbol": "CMG",
    "name": "Chipotle Mexican Grill",
    "SEC": "reports",
    "sector": "Consumer Discretionary",
    "subIndustry": "Restaurants",
    "address": "Denver, Colorado",
    "dateAdded": "4/28/2011",
    "CIK": 1058090,
    "frequency": 9
  },
  {
    "symbol": "CB",
    "name": "Chubb Limited",
    "SEC": "reports",
    "sector": "Financials",
    "subIndustry": "Property & Casualty Insurance",
    "address": "Zurich, Switzerland",
    "dateAdded": "7/15/2010",
    "CIK": 896159,
    "frequency": 4
  },
  {
    "symbol": "CHD",
    "name": "Church & Dwight",
    "SEC": "reports",
    "sector": "Consumer Staples",
    "subIndustry": "Household Products",
    "address": "Ewing, New Jersey",
    "dateAdded": "12/29/2015",
    "CIK": 313927,
    "frequency": 5
  },
  {
    "symbol": "CI",
    "name": "CIGNA Corp.",
    "SEC": "reports",
    "sector": "Health Care",
    "subIndustry": "Managed Health Care",
    "address": "Philadelphia, Pennsylvania",
    "dateAdded": "6/30/1976",
    "CIK": 701221,
    "frequency": 1
  },
  {
    "symbol": "CTAS",
    "name": "Cintas Corporation",
    "SEC": "reports",
    "sector": "Industrials",
    "subIndustry": "Diversified Support Services",
    "address": "Mason, Ohio",
    "dateAdded": "",
    "CIK": 723254,
    "frequency": 4
  },
  {
    "symbol": "CSCO",
    "name": "Cisco Systems",
    "SEC": "reports",
    "sector": "Information Technology",
    "subIndustry": "Networking Equipment",
    "address": "San Jose, California",
    "dateAdded": "12/1/1993",
    "CIK": 858877,
    "frequency": 22
  },
  {
    "symbol": "C",
    "name": "Citigroup Inc.",
    "SEC": "reports",
    "sector": "Financials",
    "subIndustry": "Banks",
    "address": "New York, New York",
    "dateAdded": "5/31/1988",
    "CIK": 831001,
    "frequency": 18
  },
  {
    "symbol": "CTXS",
    "name": "Citrix Systems",
    "SEC": "reports",
    "sector": "Information Technology",
    "subIndustry": "Internet Software & Services",
    "address": "Fort Lauderdale, Florida",
    "dateAdded": "",
    "CIK": 877890,
    "frequency": 7
  }
]`;

export default stockContent;