var slideimages = new Array()
slideimages[0] = new Image()
slideimages[0].src = "img/bboy.jpg"
slideimages[1] = new Image()
slideimages[1].src = "img/hb.jpg"
slideimages[2] = new Image()
slideimages[2].src = "img/nydancer.jpg"
slideimages[3] = new Image()
slideimages[3].src = "img/questcrew.jpg"

var step=0

function slideit(){
 if (!document.images)
  return
 document.getElementById('slide').src = slideimages[step].src
 if (step<3)
  step++
 else
  step=0
 setTimeout("slideit()",2500)
}

slideit()