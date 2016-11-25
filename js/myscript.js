/* 
    Author: "David Mutua"
 */
$(function () {
   //The Reson URL
   var url = "https://api.github.com/repos/knockout/knockout/contributors";
   
   $.getJSON(url, function (data) {
       $.each(data, function (index, item) { 
           var contrib = "contribution";
           (item.contributions > 1) ? contrib += 's' :  contrib += '';
            
          var myne =  '<div class="col-sm-12 firstperson"><div class="media-left"><a href="#"><img class="media-object img-circle realimage" src="'+item.avatar_url+'" alt="'+item.login.toUpperCase()+'"></a></div>'+
                            '<div class="media-body"><h4 class="media-heading">'+item.login.toUpperCase()+'</h4>'+
                            '<p class="lead">Reg_'+item.id+' <br /> '+item.contributions+" "+ contrib +'.</p>'+
                      '</div></div>';
           
          $('#mymedia').append(myne);
       }); //Loop
   });//getJSON
});//document ready
