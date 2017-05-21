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
    
    var liCountry = $('<li class="country">');

    resp.forEach(function(item){
        var ulCountry = $('<ul>');
        var smallApha2code = item.alpha2Code.toLowerCase();
        var img_url = '<img src="http://flags.fmcdn.net/data/flags/w580/' + smallApha2code + '.png" alt="Flag: ' + item.name + '">';

        $('<li class="country">').appendTo(countriesList)
        .append($('<ul>')
        .append($('<li>').text('Country / Kraj : ' + item.name))
        .append($('<li>').text('Capital / Stolica : ' + item.capital))
        .append($('<li>').text('Aplha 2 Code / Kod Kraju 2zn : ' + item.alpha2Code))
        .append($('<li>' + img_url))
        )
        $('</li>').appendTo(countriesList)
    });  // koniec forEach    

}  // koniec showCountriesList

//[{"name":"Poland","topLevelDomain":[".pl"],"alpha2Code":"PL","alpha3Code":"POL","callingCodes":["48"],
//"capital":"Warsaw","altSpellings":["PL","Republic of Poland","Rzeczpospolita Polska"],
//"relevance":"1.25","region":"Europe","subregion":"Eastern Europe","population":38484000,
//"latlng":[52.0,20.0],"demonym":"Polish","area":312679.0,"gini":34.1,"timezones":["UTC+01:00"],
//"borders":["BLR","CZE","DEU","LTU","RUS","SVK","UKR"],"nativeName":"Polska","numericCode":"616",
//"currencies":["PLN"],"languages":["pl"],"translations":{"de":"Polen","es":"Polonia",
//"fr":"Pologne","ja":"ポーランド","it":"Polonia"}}]

 