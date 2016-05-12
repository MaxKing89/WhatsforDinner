

//if the parameter after ? in the url is equal to cuisine type put in separate array and rename allVideoArr
if (location.search){
    allVideoArr = allVideoArr.filter(function(obj) {
    if(location.search.indexOf(obj.cuisineType) > -1 ){
        return true;
    }
        return false;
});
}

//grab random video from results set
var randomResultSet = allVideoArr[Math.floor(Math.random()*allVideoArr.length)];

var getName = randomResultSet.name;
$('.name').html("<h1>" + getName + "</h1>");

var getCuisineType = randomResultSet.cuisineType;
$('.cuisine-type').html("<h2>Cuisine Type - " + getCuisineType + "</h2>")

var getSRC = "https://www.youtube.com/embed/" + randomResultSet.src + "?autoplay=1";

//set src
$('#video-player').attr('src', getSRC).animate({top:'200px', opacity:1}, function(){ $(this).attr('autoplay', 'true') });

var getIngrediants = randomResultSet.ing.join('<br>');
$('.ingredients').html("<h3>Ingredients - </h3><p>" + getIngrediants + "</p>")


//create variable for the current sort param
var currentFilter = location.search;

//if user hits the go again button keep the current parameters
if ($('.again a.button')[0]){
    $('.again a.button').attr('href', function() {
    return this.href + currentFilter;   
    });
};


////////////////////////////////////////////////FUNCTIONS/////////////////////////////////////////

//append the id of the selected button to the url after ? so we can sort the result set
$(function(){
   $('#types a.button').each(function(){
       $(this).attr('href', function(){
           return this.href + '?' + $(this).attr('id') + '=true';
       });
   });
    //if user hits the go again button keep the current parameters
if ($('.again a.button')[0]){
    $('.again a.button').attr('href', function() {
    return this.href + currentFilter;   
    });
};
});

