function loadXMLDoc(){
				var xmlhttp = new XMLHttpRequest();
				
				xmlhttp.onreadystatechange  = function() {
					if (xmlhttp.readyState==4 && xmlhttp.status==200){
						xmlDoc=xmlhttp.responseXML;
						txt="";
						x=xmlDoc.getElementsByTagName("artist");
						for (i=0;i<x.length;i++){
							txt=txt + x[i].childNodes[0].nodeValue + "<br>";
						}
						document.getElementById("myDiv").innerHTML=txt;
					}
				}
				
				xmlhttp.open("GET","justin.xml",true);
				xmlhttp.send();
			}