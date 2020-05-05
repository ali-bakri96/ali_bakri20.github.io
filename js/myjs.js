window.onload = function(){

  document.getElementById("s1").style.cursor = "pointer";
  document.getElementById("s2").style.cursor = "pointer";
  document.getElementById("s3").style.cursor = "pointer";

  document.getElementById("s1").addEventListener("click" , setPink );
  document.getElementById("s2").addEventListener("click" , setRed );
  document.getElementById("s3").addEventListener("click" , setYellow );

}

function setPink ()
{
  document.getElementById("s1").style.backgroundColor = "pink" ;
  loadItem( "data/chicken.json" ) ;
}

function setRed ()
{
  document.getElementById("s2").style.backgroundColor = "red" ;
  loadItem( "data/beef.json" ) ;
}

function setYellow ()
{
  document.getElementById("s3").style.backgroundColor = "yellow" ;
  loadItem( "data/sushi.json" ) ;
}

function loadItem( dataPath ){

  //Call server to get the entriy and the items
  var item=null;
  var itemOld=null;
  var shown_items="";

  var xttp=new XMLHttpRequest();

  xttp.onreadystatechange=function(){

    if ( (this.readyState==4) && (this.status==200) ) {
      
      item = this.responseText;
      itemOld = this.responseText;

      var xttp=new XMLHttpRequest();

      xttp.onreadystatechange=function(){

        if((this.readyState==4)&&(this.status==200)){

          var entry= JSON.parse(this.responseText);
       
      for (let i=0; i<entry.length; i++) {

        item = itemOld;

          item = item.replace(new RegExp("{{name}}", "g"), entry[i].name);
          item = item.replace(new RegExp("{{description}}", "g"), entry[i].description);

          shown_items = shown_items + item ;
      }
 
        document.querySelector("body").innerHTML= " <h1 onClick=\"window.location.reload();\"> Back </h1> " + shown_items ;
       
        }

      };

      xttp.open("GET", dataPath , true);
      xttp.send(null);//for POST only

    }
  };

  xttp.open("GET", "templates/item.html", true);
  xttp.send(null);//for POST only

}