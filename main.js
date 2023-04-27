var reasons = [
    "Trees Provide Shade",
    "Trees help in retaining the Rainwater",
    "Trees Provide fruits",
    "Trees are natural medicines"
  ];
  
  var images = [
    "https://images.unsplash.com/photo-1445550545808-e1cc4cf5b36b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODEyMTc5NjI&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1503785640985-f62e3aeee448?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODEyMTkwOTU&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1508891120639-a9e5ffa63079?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODEyMTkwOTU&ixlib=rb-4.0.3&q=85",
    "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODEyMTkyMzE&ixlib=rb-4.0.3&q=85"
  ];
  
  var i = 0;
  function nextslide() 
  {
    document.getElementById("reasontext").innerHTML = reasons[i];
    document.getElementById("album").src = images[i];
    i++;
    document.getElementById("audio").play();
  }