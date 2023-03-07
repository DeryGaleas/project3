var userContent = `
[{"id":1,"user":{"firstname":"Jacquette","lastname":"Marion","email":"jmarion0@nyu.edu","address":"207 Ryan Avenue","city":"Lubbock","state":"Texas","zip":"79491"},"portfolio":[{"symbol":"NKE","owned":483},{"symbol":"NKE","owned":512},{"symbol":"K","owned":562},{"symbol":"GE","owned":288},{"symbol":"PSX","owned":465},{"symbol":"FDX","owned":263},{"symbol":"AAPL","owned":688},{"symbol":"NFLX","owned":828},{"symbol":"NFLX","owned":-211},{"symbol":"APC","owned":994}]},
{"id":2,"user":{"firstname":"Vaughan","lastname":"Main","email":"vmain1@alexa.com","address":"56 Loeprich Drive","city":"Midland","state":"Texas","zip":"79705"},"portfolio":[{"symbol":"HAL","owned":775},{"symbol":"FB","owned":459}]},
{"id":3,"user":{"firstname":"Matthus","lastname":"Harnes","email":"mharnes2@newyorker.com","address":"75504 Briar Crest Plaza","city":"Arlington","state":"Texas","zip":"76016"},"portfolio":[{"symbol":"MCD","owned":825},{"symbol":"TRIP","owned":728},{"symbol":"XEL","owned":110},{"symbol":"GE","owned":582},{"symbol":"WYN","owned":616},{"symbol":"GS","owned":1088}]},
{"id":4,"user":{"firstname":"Bernette","lastname":"Manson","email":"bmanson3@macromedia.com","address":"1333 Red Cloud Avenue","city":"Seattle","state":"Washington","zip":"98115"},"portfolio":[{"symbol":"EBAY","owned":372},{"symbol":"NFLX","owned":801},{"symbol":"DAL","owned":905},{"symbol":"V","owned":127},{"symbol":"FDX","owned":846},{"symbol":"PEP","owned":612},{"symbol":"GOOGL","owned":490}]},
{"id":5,"user":{"firstname":"Luisa","lastname":"Dungey","email":"ldungey4@oakley.com","address":"0799 Del Mar Crossing","city":"Houston","state":"Texas","zip":"77212"},"portfolio":[{"symbol":"YUM","owned":470},{"symbol":"ZION","owned":-69},{"symbol":"EBAY","owned":719}]},
{"id":6,"user":{"firstname":"Yanaton","lastname":"Cockarill","email":"ycockarill5@parallels.com","address":"9207 Fairview Park","city":"New Haven","state":"Connecticut","zip":"06533"},"portfolio":[{"symbol":"AKAM","owned":535},{"symbol":"GE","owned":549},{"symbol":"ETR","owned":173},{"symbol":"BAX","owned":676},{"symbol":"CNC","owned":-182}]},
{"id":7,"user":{"firstname":"Goldia","lastname":"Krysiak","email":"gkrysiak6@desdev.cn","address":"65 Cordelia Court","city":"Rochester","state":"Minnesota","zip":"55905"},"portfolio":[{"symbol":"EA","owned":131},{"symbol":"AMZN","owned":210},{"symbol":"AAPL","owned":1061},{"symbol":"DPS","owned":424},{"symbol":"V","owned":253},{"symbol":"BK","owned":279},{"symbol":"A","owned":89},{"symbol":"BBY","owned":396},{"symbol":"NKE","owned":192}]},
{"id":8,"user":{"firstname":"Karolina","lastname":"Symes","email":"ksymes7@yolasite.com","address":"1 Badeau Drive","city":"Tulsa","state":"Oklahoma","zip":"74126"},"portfolio":[{"symbol":"JCI","owned":533},{"symbol":"VZ","owned":267}]},
{"id":9,"user":{"firstname":"Ardella","lastname":"Bus","email":"abus8@istockphoto.com","address":"1 Grasskamp Street","city":"Cincinnati","state":"Ohio","zip":"45213"},"portfolio":[{"symbol":"PEP","owned":739},{"symbol":"FDX","owned":425},{"symbol":"ALXN","owned":542},{"symbol":"INTC","owned":543},{"symbol":"NFLX","owned":501}]},
{"id":10,"user":{"firstname":"Ingelbert","lastname":"McGenis","email":"imcgenis9@bing.com","address":"8884 Thompson Circle","city":"San Antonio","state":"Texas","zip":"78225"},"portfolio":[{"symbol":"INTU","owned":277}]},
{"id":11,"user":{"firstname":"Vaughn","lastname":"January","email":"vjanuarya@ucoz.ru","address":"59 Stephen Street","city":"Chattanooga","state":"Tennessee","zip":"37410"},"portfolio":[{"symbol":"IBM","owned":314},{"symbol":"APC","owned":860},{"symbol":"K","owned":237},{"symbol":"SO","owned":122},{"symbol":"EIX","owned":799},{"symbol":"TRIP","owned":628},{"symbol":"WFC","owned":590},{"symbol":"C","owned":633},{"symbol":"SYY","owned":276}]},
{"id":12,"user":{"firstname":"Astrid","lastname":"Dik","email":"adikb@webmd.com","address":"335 Lawn Trail","city":"Mobile","state":"Alabama","zip":"36628"},"portfolio":[{"symbol":"TWX","owned":655},{"symbol":"TRIP","owned":839},{"symbol":"CCL","owned":135},{"symbol":"HD","owned":664},{"symbol":"SYY","owned":702},{"symbol":"T","owned":502},{"symbol":"GOOGL","owned":416},{"symbol":"GOOGL","owned":94},{"symbol":"MON","owned":375},{"symbol":"C","owned":280}]},
{"id":13,"user":{"firstname":"Moina","lastname":"Kenset","email":"mkensetc@blogger.com","address":"337 Lunder Crossing","city":"Des Moines","state":"Iowa","zip":"50936"},"portfolio":[{"symbol":"WFC","owned":935},{"symbol":"EBAY","owned":749},{"symbol":"ADBE","owned":276},{"symbol":"BLK","owned":618},{"symbol":"GOOGL","owned":836},{"symbol":"KMX","owned":741},{"symbol":"JCI","owned":321},{"symbol":"AWK","owned":1333},{"symbol":"NKE","owned":120},{"symbol":"XEL","owned":1085}]},
{"id":14,"user":{"firstname":"Paulie","lastname":"Clifton","email":"pcliftond@merriam-webster.com","address":"65540 Fieldstone Pass","city":"Peoria","state":"Illinois","zip":"61656"},"portfolio":[{"symbol":"NFLX","owned":947},{"symbol":"STT","owned":131},{"symbol":"WFC","owned":558}]},
{"id":15,"user":{"firstname":"Henka","lastname":"Briant","email":"hbriante@howstuffworks.com","address":"56995 Talisman Pass","city":"Salt Lake City","state":"Utah","zip":"84152"},"portfolio":[{"symbol":"JPM","owned":370},{"symbol":"VZ","owned":203},{"symbol":"CTXS","owned":509},{"symbol":"PPL","owned":382},{"symbol":"WMB","owned":47},{"symbol":"V","owned":201},{"symbol":"ADSK","owned":192},{"symbol":"ZION","owned":868},{"symbol":"FE","owned":369}]},
{"id":16,"user":{"firstname":"Gwyn","lastname":"Baird","email":"gbairdf@nba.com","address":"5 Loftsgordon Plaza","city":"Gaithersburg","state":"Maryland","zip":"20883"},"portfolio":[{"symbol":"SBUX","owned":934},{"symbol":"CVX","owned":297},{"symbol":"WFC","owned":253},{"symbol":"V","owned":1018},{"symbol":"SNA","owned":626},{"symbol":"YUM","owned":579},{"symbol":"MMM","owned":44},{"symbol":"GM","owned":78},{"symbol":"FB","owned":518},{"symbol":"AMZN","owned":656}]},
{"id":17,"user":{"firstname":"Ariel","lastname":"Dignall","email":"adignallg@gmpg.org","address":"45692 Continental Pass","city":"New York City","state":"New York","zip":"10150"},"portfolio":[{"symbol":"ADSK","owned":316}]},
{"id":18,"user":{"firstname":"Ikey","lastname":"Wendover","email":"iwendoverh@rambler.ru","address":"0 Debs Road","city":"New York City","state":"New York","zip":"10009"},"portfolio":[{"symbol":"GIS","owned":-39},{"symbol":"ACN","owned":726},{"symbol":"AKAM","owned":528},{"symbol":"NFLX","owned":878},{"symbol":"JPM","owned":549},{"symbol":"MSFT","owned":815},{"symbol":"ROK","owned":378},{"symbol":"MSFT","owned":1008}]},
{"id":19,"user":{"firstname":"Keir","lastname":"Allabarton","email":"kallabartoni@cdbaby.com","address":"2954 Holmberg Terrace","city":"Shreveport","state":"Louisiana","zip":"71137"},"portfolio":[{"symbol":"EXPE","owned":625},{"symbol":"EXPE","owned":107},{"symbol":"NDAQ","owned":839},{"symbol":"CB","owned":439},{"symbol":"GE","owned":377},{"symbol":"LMT","owned":670},{"symbol":"NFLX","owned":771},{"symbol":"ETFC","owned":430}]},
{"id":20,"user":{"firstname":"Elnar","lastname":"Message","email":"emessagej@yolasite.com","address":"2 Pearson Hill","city":"Provo","state":"Utah","zip":"84605"},"portfolio":[{"symbol":"APA","owned":481},{"symbol":"IP","owned":883},{"symbol":"UA","owned":947}]},
{"id":21,"user":{"firstname":"Timothee","lastname":"Deveril","email":"tdeverilk@telegraph.co.uk","address":"16920 Nancy Terrace","city":"Tallahassee","state":"Florida","zip":"32314"},"portfolio":[{"symbol":"IBM","owned":933},{"symbol":"MSFT","owned":548},{"symbol":"WMB","owned":223},{"symbol":"WMB","owned":416},{"symbol":"DISH","owned":264},{"symbol":"NDAQ","owned":11},{"symbol":"FB","owned":-12},{"symbol":"AOS","owned":775},{"symbol":"FB","owned":526},{"symbol":"NDAQ","owned":735}]},
{"id":22,"user":{"firstname":"Wainwright","lastname":"Scarffe","email":"wscarffel@ow.ly","address":"8 Gerald Terrace","city":"Camden","state":"New Jersey","zip":"08104"},"portfolio":[{"symbol":"WFC","owned":527},{"symbol":"TWX","owned":604},{"symbol":"INTC","owned":348},{"symbol":"WY","owned":715},{"symbol":"GPS","owned":620},{"symbol":"BA","owned":551},{"symbol":"GM","owned":441}]},
{"id":23,"user":{"firstname":"Daniella","lastname":"Windley","email":"dwindleym@economist.com","address":"84 Vahlen Parkway","city":"Amarillo","state":"Texas","zip":"79118"},"portfolio":[{"symbol":"HPQ","owned":704},{"symbol":"XOM","owned":791},{"symbol":"ADBE","owned":343},{"symbol":"APH","owned":716},{"symbol":"PEP","owned":356},{"symbol":"CSCO","owned":118},{"symbol":"D","owned":746},{"symbol":"BBT","owned":904}]},
{"id":24,"user":{"firstname":"Michal","lastname":"Langdale","email":"mlangdalen@jigsy.com","address":"3 Bobwhite Trail","city":"Kansas City","state":"Missouri","zip":"64114"},"portfolio":[{"symbol":"SNA","owned":1500},{"symbol":"BAC","owned":423},{"symbol":"NTAP","owned":780},{"symbol":"MO","owned":924},{"symbol":"AMZN","owned":452},{"symbol":"A","owned":468},{"symbol":"ZION","owned":457},{"symbol":"XEL","owned":1239},{"symbol":"IBM","owned":117}]},
{"id":25,"user":{"firstname":"Ulises","lastname":"Oattes","email":"uoatteso@parallels.com","address":"5279 Old Shore Court","city":"New York City","state":"New York","zip":"10009"},"portfolio":[{"symbol":"MA","owned":855},{"symbol":"BAX","owned":955},{"symbol":"UA","owned":81},{"symbol":"AMAT","owned":510},{"symbol":"WM","owned":713},{"symbol":"NKE","owned":413},{"symbol":"K","owned":340},{"symbol":"ATVI","owned":611},{"symbol":"TAP","owned":442}]},
{"id":26,"user":{"firstname":"Justinn","lastname":"Esselen","email":"jesselenp@cbslocal.com","address":"0933 Crownhardt Crossing","city":"Tampa","state":"Florida","zip":"33647"},"portfolio":[{"symbol":"UA","owned":469},{"symbol":"PEP","owned":309},{"symbol":"FDX","owned":634}]},
{"id":27,"user":{"firstname":"Kelwin","lastname":"Esmond","email":"kesmondq@newsvine.com","address":"87619 Thierer Junction","city":"Dearborn","state":"Michigan","zip":"48126"},"portfolio":[{"symbol":"GOOG","owned":38},{"symbol":"NDAQ","owned":664},{"symbol":"CHTR","owned":429},{"symbol":"CHD","owned":776},{"symbol":"DAL","owned":764},{"symbol":"FE","owned":459}]},
{"id":28,"user":{"firstname":"Marchall","lastname":"Micka","email":"mmickar@columbia.edu","address":"3364 Rigney Junction","city":"Amarillo","state":"Texas","zip":"79105"},"portfolio":[{"symbol":"AMZN","owned":680},{"symbol":"ADM","owned":829},{"symbol":"DAL","owned":942},{"symbol":"UNP","owned":419},{"symbol":"PSX","owned":375},{"symbol":"BRK.B","owned":-171},{"symbol":"GOOGL","owned":-132},{"symbol":"APC","owned":1058},{"symbol":"GD","owned":89},{"symbol":"BIIB","owned":504}]},
{"id":29,"user":{"firstname":"Rosie","lastname":"Eliot","email":"reliots@upenn.edu","address":"365 Debs Lane","city":"Birmingham","state":"Alabama","zip":"35231"},"portfolio":[{"symbol":"MMM","owned":272},{"symbol":"HOG","owned":803},{"symbol":"DAL","owned":-229},{"symbol":"GIS","owned":387}]},
{"id":30,"user":{"firstname":"Gates","lastname":"Reinbeck","email":"greinbeckt@biblegateway.com","address":"6 Stuart Plaza","city":"Fresno","state":"California","zip":"93786"},"portfolio":[{"symbol":"AJG","owned":320},{"symbol":"ED","owned":271}]}
]`;

export default userContent;