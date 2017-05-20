//[{"name":"Poland","topLevelDomain":[".pl"],"alpha2Code":"PL","alpha3Code":"POL","callingCodes":["48"],
//"capital":"Warsaw","altSpellings":["PL","Republic of Poland","Rzeczpospolita Polska"],
//"relevance":"1.25","region":"Europe","subregion":"Eastern Europe","population":38484000,
//"latlng":[52.0,20.0],"demonym":"Polish","area":312679.0,"gini":34.1,"timezones":["UTC+01:00"],
//"borders":["BLR","CZE","DEU","LTU","RUS","SVK","UKR"],"nativeName":"Polska","numericCode":"616",
//"currencies":["PLN"],"languages":["pl"],"translations":{"de":"Polen","es":"Polonia",
//"fr":"Pologne","ja":"ポーランド","it":"Polonia"}}]


var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
    var countryCapital = $('#country-capital').val();

    if(!countryName.length) countryName = 'Poland';
    $.ajax({
            url: url + countryName,
            method: 'GET',
            success: showCountriesList
        });
    }  // koniec searchCountries()

    function showCountriesList(resp) {
        countriesList.empty();
       // console.log(resp);
       // console.log(countriesList);
        
        var liCountry = $('<li class="country">');
        var ul_ = $('<ul>');

        if (resp.length === 1) {
            var singleCountry = resp[0];
            //ul_.appendTo(countriesList);
            liCountry.appendTo(countriesList)
                .append($('<ul>')
                .append($('<li>').text('Country / Kraj : ' + singleCountry.name))
                .append($('<li>').text('Capital / Stolica : ' + singleCountry.capital))
                )
        } else {
            resp.forEach(function(item){
                var ulCountry = $('<ul>');

                $('<li class="country">').appendTo(countriesList)
                .append($('<ul>')
                .append($('<li>').text('Country / Kraj : ' + item.name))
                .append($('<li>').text('Capital / Stolica : ' + item.capital))
                )
                $('</li><br>').appendTo(countriesList)

            });  // koniec forEach
            
        }

        //resp.forEach(function(item){
        //$('<li>').text(item.name).appendTo(countriesList);
        //}); // wypisuje znalezione kraje   
}  // koniec showCountriesList


 