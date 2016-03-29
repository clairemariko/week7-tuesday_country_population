window.onload = function(){
  console.log('App started');
  //WHERE
  var url = "https://restcountries.eu/rest/v1";
  //MAKE A REQUEST
  var request = new XMLHttpRequest();
  //WHERE REQUEST GOING
  request.open("GET", url);
  //WHAT TO DO WHEN COMPLETED
  request.onload = function(){
    if(request.status === 200){
      console.log('got the data success');
      console.log(request.responseText);
      //turning the string data into a jason parse
      var jsonString = request.responseText;
      //make a new variable of json data and assign it to the string that been converted to json
      var countries = JSON.parse(jsonString);
      //put out to the screen
      console.log('countries', countries[0]);


      var addingCountries = function(country){

        var listCountry = document.createElement('option');
        listCountry.innerText = country.name;
        listCountry.value = country.name;
        var ul = document.getElementById('countryDropDown');
        ul.appendChild(listCountry);

      };

      // var select 

//we now have country names
      countries.forEach(function(country){
        console.log(typeof(country));
        addingCountries(country);

      })
   
      var countryDropdown = document.getElementById('countryDropDown');
      
      // countries.forEach(function(countryName){
      //   if (chosenCountry === countryName.name){
      //     console.log(countryName.name);
      //     var selectedInfo = document.getElementById('selectedCountryInfo');
      //     var li = document.createElement('li');
      //     li.innerText = countryName.name;
      //     selectedInfo.appendChild(li);
      //   }
      
      // })
      var pickedCountry = function(event){
      
          var chosenCountry = event.target.options[countryDropdown.selectedIndex].value;
          var li = document.createElement('li');

          countries.forEach(function(country){
                  if (chosenCountry === country.name){
                    li.innerText = ("Country:  " + country.name + " Population:  " + country.population + " Capital:  " + country.capital);
                  
          var selectedInfo = document.getElementById('selectedCountryInfo');
          selectedInfo.appendChild(li);
                } 
            })
        }
      countryDropdown.onchange = pickedCountry;

    }

    
    
  };



  //now go and do it!
  request.send();

  //loop through and get names


};
