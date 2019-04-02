$(document).ready(function () {
                  var housesCount = 0;
                  $('button').hide();
                  
                  $('#kartta').click(function(event) {
                      housesCount++;
                      $("#results").text("Laskettujen talojen määrä on " + housesCount);
                      $('button').show();
                      var $marker = $("<div></div>");
                      $marker.css('left',event.pageX);
                      $marker.css('top',event.pageY);
                      $marker.addClass("marker");
                      $("#markers").append($marker);
                    });  
     
                    $("#markers").click(function(e){
       					$(e.target).remove();
            			housesCount -=1;
            			$("#results").html("Laskettujen talojen määrä on: " + 
            				housesCount);
    				});

			  		$('button').click(function () {
    					housesCount = 0;
    					$("#results").text("Klikkaa taloa kuvassa");
    					$('button').hide();
    				    $('#markers').empty();
    				});

 });

