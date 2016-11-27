/* 
    Author: "David Mutua"
 */
$(function () {
   //The Resource URL
   var url = "https://api.github.com/repos/knockout/knockout/contributors";
   
   //By Default load all items.
   //-----------------------------------------------------------------------
   $.getJSON(url, function (data) {
       
    //The First Element selected by Default

     //-------------------------------------------------------------
     $.getJSON(data[0].url, function (first_obj) {
         var obj = first_obj;
         var region = "<div><img class='img-rounded img-responsive' src="+obj.avatar_url+" />"+
                         '<p class="lead"><span>Name: '+obj.name.toUpperCase()+'</span><br />'+
                         '<span class="lead">Repos: '+obj.public_repos+'</span><br />'+
                         '<span class="lead">Gists: '+obj.public_gists+'</span></p>'+
                     "</div>";

         $('#landing').html(region).css({
             "background" : "#105b63",
             "color" : "#ffd34e"
         });

     });// getJSON() 
       
      var output = '<div class="animated bounceInLeft" -webkit-animation-delay="4s" -webkit-animation-duration="10s">';   
       $.each(data, function (index, item) {
               var contrib = "contribution";
                (item.contributions > 1) ? contrib += 's' :  contrib += '';

               output +=  '<div stuff="'+item.url+'" class="details"> <div class="col-sm-12 firstperson"><div class="media-left"><img class="media-object img-circle realimage" src="'+item.avatar_url+'" alt="'+item.login.toUpperCase()+'"></div>'+
                                 '<div class="media-body"><h4 class="media-heading">'+item.login.toUpperCase()+'</h4>'+
                                 '<p class="lead">Reg_'+item.id+' <br /> '+item.contributions+" "+ contrib +'.</p>'+
                           '</div></div> </div>';
       });//End Loop
       output += '</div>';
       $('#mymedia').html(output);
      });//getJSON 
      
    //On typing for a search, filter.  
   //-------------------------------------------------------------------------
   $('#search').keyup(function () {
      var found = $('#search').val();
      var myExp = new RegExp(found, "i");
      
      $.getJSON(url, function (data) {
       var output = '<div class="animated bounceInLeft" -webkit-animation-delay="4s" -webkit-animation-duration="10s">';   
       $.each(data, function (index, item) {
           if(item.login.search(myExp) !== -1) {
               var contrib = "contribution";
                (item.contributions > 1) ? contrib += 's' :  contrib += '';

               output +=  '<div><div stuff="'+item.url+'" class="details"> <div class="col-sm-12 firstperson"><div class="media-left"><img class="media-object img-circle realimage" src="'+item.avatar_url+'" alt="'+item.login.toUpperCase()+'"></div>'+
                                 '<div class="media-body"><h4 class="media-heading">'+item.login.toUpperCase()+'</h4>'+
                                 '<p class="lead">Reg_'+item.id+' <br /> '+item.contributions+" "+ contrib +'.</p>'+
                           '</div></div> </div>';
           }
       });//End Loop
       output += '</div>';
       $('#mymedia').html(output);
      });//getJSON
      
   });//Keyup Event
   
   //-------------------------------------------------------------
    $('#mymedia div.animated .details').click(function (event) {
       event.preventDefault();
       console.log("here");

      var contrib_url = $(this).attr("stuff");
      $.getJSON(contrib_url, function (result) {
          var avatar = result.avatar_url;

          var area = "<div><img class='img-rounded img-responsive' src="+avatar+" />"+
                          '<p class="lead"><span>Name: '+result.name.toUpperCase()+'</span><br />'+
                          '<span class="lead">Repos: '+result.public_repos+'</span><br />'+
                          '<span class="lead">Gists: '+result.public_gists+'</span></p>'+
                      "</div>";

          $('#landing').html(area).css({
              "background" : "#105b63",
              "color" : "#ffd34e"
          });

      });//getJSON person

    });//click
   
});//document ready
