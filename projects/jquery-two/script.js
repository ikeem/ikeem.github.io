$(function(){
    
    
    var avengers = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"];
    var $myUl =  $("<ul id = avengers></ul>");
    $myUl.appendTo("div");
    var i;
    
    function addAvengToLi (arr){
        for (i = 0; i < arr.length; i++) {
            $("ul#avengers").append($("<li>").attr("class",arr[i].replace(' ', '-').toLowerCase()).append(arr[i]));
                                //var $myLi = $("<li class =" + i + "></li>");
                                //var $myAvengLi = $($myLi).appendTo($myUl);
                                //$myAvengLi.append(arr[i]);
        }
    }
  // Code goes here!
  addAvengToLi(avengers);
  
function removeAvenger(){
    $('li').remove('.ant-man').remove('.wasp');
    $("ul#avengers").append($("<li class = captain-america></li>"));//.attr("class","CaptainAmerica"));
   // $("li#captain-america").appendTo("Captain America");
    $('.captain-america').append('Captain America');
    
}
removeAvenger();

});
<button>