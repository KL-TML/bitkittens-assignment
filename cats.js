document.addEventListener("DOMContentLoaded", function(){
  var summonButton = document.querySelector('button.summon-cats')


  summonButton.addEventListener('click', function(){
    //console.log(summonButton);
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'JSON',
    }).done(function(responseData){
      responseData['cats'].forEach(function(cat){
      //TBD....

      });

    });


    });


});
