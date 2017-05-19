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
    }

    function showCountriesList(resp) {
        countriesList.empty();
        console.log(resp);

        var divCountry = $('<div id="country">');

        resp.forEach(function(item){
            divCountry.appendTo(countriesList)
            .append($('<li class="showCountry">').text('Country / Kraj : ' + item.name))
            .append($('<li>').text('Capital / Stolica : ' + item.capital))
            .append($('<p>').text('-----------------------------------------------------------'))
        });


       // resp.forEach(function(item){
   	 //   $('<li>').text(item.name).appendTo(countriesList);
      //  }); // wypisuje znalezione kraje 
}


