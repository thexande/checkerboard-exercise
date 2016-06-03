// Your JS goes here// Your JS goes here
var container = document.createElement('div')
container.style.width = '900px'
container.style.height = '900px'
container.id = "container"
document.body.appendChild(container)

for (var i = 0; i < 81; i++) {
  var square = document.createElement('div')
  square.innerHTML = ' '
  square.style.width="100px"
  square.style.height="100px"
  square.style.display="inline-block"
  if(i%9===0){
    var rgbVal = 'rgb('+ (255 * (i/100)).toFixed(0) + ', 0, 0)'
    console.log(rgbVal);
  }
  i%2===0 ? square.style.background = rgbVal : square.style.background = "black"
  // square.style.background=''
  square.style.padding = 0
  square.style.marginBottom = "-5px"
  document.getElementById('container').appendChild(square)
}
