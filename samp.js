
function wordcall()
{
  var word= document.getElementById("C").value;
$.getJSON("https://dictionaryapi.com/api/v3/references/collegiate/json/"+word+"?key=acce992a-5cd9-40e4-8f23-4022f7547159",
function(data)
{
  var base=data[0].hwi.prs[0].sound["audio"];
  if(base.charAt(0)=="b"&&base.charAt(1)=="i"&&base.charAt(2)=="x")
  {
    var subdirectory="bix";
  }
  else if (base.charAt(0)=="g"&&base.charAt(1)=="g") {
    var subdirectory="gg";

  }
  else if (/[.,:!?_;]/.test(base.charAt(0)) || typeof(base.charAt(0)) =="number" ) {
    var subdirectory="number";
  }
  else{
    var subdirectory=base.charAt(0);

  }
  var sound_url="https://media.merriam-webster.com/soundc11/"+subdirectory+"/"+base+".wav";
  var s='<audio src="'+sound_url+'" controls>Your Browser Does not Support Audio Element.</audio>';
  $(".sounds").html(s);
  pron=data[0].hwi.prs[0].mw;
  $("#w").text(word.charAt(0).toUpperCase()+word.substr(1).toLowerCase() + "   ("+pron+")");

  var ht = "";
  for(var k=0; k<3;k++){
    if(typeof(data[k])!="undefined")
    {ht+="<b>"+data[k].fl.charAt(0).toUpperCase()+data[k].fl.substr(1).toLowerCase()+":</b><ol>";
  for (var i =0; i < data[k].shortdef.length; i++) {
      ht += "<li>" + data[k].shortdef[i]+ "</li>"; }
      ht+="</ol>";}
      else{
        continue;
      }
      }
      $("#def").html(ht);

});
}
