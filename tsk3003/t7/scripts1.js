$(document).ready(function () {
                  var housesCount = 0;
                  $('#kartta').click(function() {
                      housesCount++;
                      $("#results").text("Laskettujen talojen määrä on " + housesCount);
                      $('button').show();
                  });
                    $('button').click(function() {
                        housesCount = 0;
                        $("#results").text('Klikkaa taloa kuvassa');
                        $('button').hide();
                    });
                  
    

                  });
