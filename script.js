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
      return a

    }

    for(i=0; i!==2; i++){
      if(arr[0][i] === type && arr[1][i] === type && arr[2][i] === type){
        win = true
      }
    }

    if(arr[0][0] === type && arr[1][1] === type && arr[2][2] === type){
      win = true
    }

    if(arr[0][2] === type && arr[1][1] === type && arr[2][0] === type){
      win = true
    }


    return win

  }


  $('li').click(function(v){
    if($('.player').text() === "PLAYER ONE"){
      $(this).text('X')
      if(checkWin("X")){
        $('.player').text("PLAYER ONE WINS!")
      } else {
      $('.player').text("PLAYER TWO")
      }
    } else {
      $(this).text('O')
      if(checkWin("O")){
        $('.player').text("PLAYER TWO WINS!")
      } else {
      $('.player').text("PLAYER ONE")
    }
  }
})


})
