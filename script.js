$(document).ready(function(){

  function checkWin(type){
    var elems = document.getElementsByTagName( "li" );
    var a = jQuery.makeArray( elems );
    var arr = [
      [a[0].textContent,a[1].textContent,a[2].textContent],
      [a[3].textContent,a[4].textContent,a[5].textContent],
      [a[6].textContent,a[7].textContent,a[8].textContent],
    ]
    var win = false;


    arr.forEach(function(elle){
      if(allValuesSame(elle,type)){win = true}
    })

    function allValuesSame(arr, type){
      let a = true
      let b = type
      arr.forEach(function(elle){
        if(elle !== b){
          a = false
        }
      })
      console.log(a)
      return a

    }
    return win

  }


  $('li').click(function(v){
    if($('.player').text() === "PLAYER ONE"){

      $(this).text('X')
      console.log(checkWin("X"))
      $('.player').text("PLAYER TWO")
    } else {

      $(this).text('O')
      $('.player').text("PLAYER ONE")
    }
})


})
