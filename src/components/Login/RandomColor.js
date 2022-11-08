function RandomColor() {
    var color = '#';
    var colorCode = ['ffaf40','2A9BFB','ff5967','7870cc','33ccbf']; // colors
    var className = document.getElementsByClassName("root"); // class name to random color
    var i;
    color += colorCode[Math.floor(Math.random() * colorCode.length)];
  for (var i = 0; i < className.length; i ++) {
      className[i].style.backgroundColor = color; }
}
