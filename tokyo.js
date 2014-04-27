// JavaScript Document

var flores = 1;
var floract = "home";
var homeIndex = 1 ;
var promIndex = 1 ;

$(window).load(function(e){
	var event = e || window.event;
	var coordenadaX = event.clientX;
	var coordenadaY = event.clientY;
	var resolucionX = window.innerWidth || document.documentElement.clientWidth;
	var resolucionY = window.innerHeight || document.documentElement.clientHeight;
	var largofondo = resolucionX + (resolucionX / 20);
	if( resolucionX < 1220 ){
		$("#papel").fadeOut();
	}else{
		$("#papel").fadeIn();
	}
	if( resolucionY < 730 ){
		$("#flores").fadeOut();
		flores = 0;
	}else{
		$("#flores").fadeIn();
		flores = 1;
	}
	var resolucionX = window.innerWidth || document.documentElement.clientWidth;
	var largofondo = resolucionX + (resolucionX / 20);
});


$(document).ready(function() {
	
	var secciones = new Array("home", "nosotros", "menu", "promociones", "contacto", "galeria");
	var secact = new Array( false , false , false , false , false , false );

	/* INTERACCION FONDO */
	var fondo = document.getElementById("fondo");

	function muestraInformacion(e) {
		var event = e || window.event;
		var coordenadaX = event.clientX;
		var coordenadaY = event.clientY;
		var resolucionX = window.innerWidth || document.documentElement.clientWidth;
		var resolucionY = window.innerHeight || document.documentElement.clientHeight;
		var largofondo = resolucionX + (resolucionX / 20);
		var altofondo = resolucionY + (resolucionY / 20);

		//fondo.style.width = largofondo + "px";
		fondo.style.left = "" + (resolucionX / 2) - ((coordenadaX - (resolucionX / 2)) / 32) - (largofondo / 2) + "px";
		fondo.style.top = "" + (resolucionY / 2) - ((coordenadaY - (resolucionY / 2)) / 32) - (altofondo / 2) + "px";

	}

	
	


	document.onmousemove = muestraInformacion;
	$(window).resize(function(e){
		var event = e || window.event;
		var coordenadaX = event.clientX;
		var coordenadaY = event.clientY;
		var resolucionX = window.innerWidth || document.documentElement.clientWidth;
		var resolucionY = window.innerHeight || document.documentElement.clientHeight;
		var largofondo = resolucionX + (resolucionX / 20);
		
		if( floract == "contacto" || floract == "galeria" ){}
		else{
			
			if( resolucionY < 730 ){
				$("#flores").fadeOut();
				flores = 0;
			}else{
				$("#flores").fadeIn();
				flores = 1;
			}
		}
		
		if( resolucionX < 1220 ){
			$("#papel").fadeOut();
		}else{
			$("#papel").fadeIn();
		}
		var resolucionX = window.innerWidth || document.documentElement.clientWidth;
		var largofondo = resolucionX + (resolucionX / 20);
		fondo.style.width = largofondo + "px";
	});

	/* FIN INTERACCION FONDO */
	
	/* CABECERA */
	
	$("#redes img").each(function() {
	    $(this).mouseenter(function() {
            $(this).animate({ width : "70px" , marginLeft : "-9px" , marginTop : "-6px", marginRight : "-9px" , marginBottom : "-6px"}, 100);
	  	});
	  	$(this).mouseleave(function(){
	  		$(this).animate({ width : "52px" , marginLeft : "0px" , marginTop : "0px", marginRight : "0px" , marginBottom : "0px"}, 100);
	  	});
	});
	
	/* FIN CABECERA */

	/* SECCIONES */

	secact[0] = true;
	$("#home").load(secciones[0] + ".html").fadeIn(function(){ homef(); }).addClass("seccionactivo");
	

	$("#sidebar ul li").each(function(i) {
		$(this).click({
			index : i
		}, function(e) {
			if( $("#" + secciones[e.data.index]).hasClass('seccionactivo') ){}
			else{
				$(".seccionactivo").fadeOut(function() {
					if(!secact[e.data.index]){
						$("#" + secciones[e.data.index]).load(secciones[e.data.index] + ".html", function(){
							switch(secciones[e.data.index]){
								case "home"			:
									homef();
									break;
								case "nosotros"		:
									break;
								case "menu"			:
									menu();
									break;
								case "promociones"	:
									promociones();
									break;
								case "contacto"		:
									mapa();
									break;
								case "galeria"		:
									galeria();
									break;
								default:
							}
						});
						secact[e.data.index] = true;
					}
					floract = secciones[e.data.index];
					if( secciones[e.data.index] != "contacto" ){
						$("#direccion").fadeIn();
					}else{
						$("#direccion").fadeOut();
					}
					if( secciones[e.data.index] == "contacto" || secciones[e.data.index] == "galeria" ){
						$("#flores").fadeOut();
					}else if( flores == 1 ){
						$("#flores").fadeIn();
					}
					$("#" + secciones[e.data.index]).fadeIn().addClass("seccionactivo");
				}).removeClass("seccionactivo");
			}
		});
	});
	/* FIN SECCIONES */	
});


	/* MENU */
	
/*function famclick( familiafun ){
	$("#" + familiafun + " .productos li" ).each(function(){
		$(this).click(function(){
			var nomSubSec = $(this).attr("id");
			$("#" + familiafun + " .load").fadeIn();
			$("#" + familiafun + " .foto").fadeOut(function(){
				$(this).attr( "src" , "img/f_" + nomSubSec + ".png").load(function(){
					$(this).fadeIn();
				});
			});
		});
	});
}*/

function famclick( familiafun ){

	if(familiafun.length === 4)
	{
		$("#" + familiafun + "Loaded .load").fadeIn();
		$("#" + familiafun + "Loaded .foto").fadeOut(function(){
			$(this).attr( "src" , "img/f_" + familiafun + ".png").load(function(){
				$(this).fadeIn();
			});
		});
	}
	else{
		$("#" + familiafun + " .load").fadeIn();
		$("#" + familiafun + " .foto").fadeOut(function(){
			$(this).attr( "src" , "img/f_" + familiafun + ".png").load(function(){
				$(this).fadeIn();
			});
		});
	}
	
}
	
function menu(){
	var familia = new Array("sushi", "arroz", "tempura", "kushiages", "bebidas", "extras");
	var subFam = new Array("cali", "agua", "alga", "phil", "spic", "frut", "cono", "cobe", "empa");
	var famact = new Array(false, false, false, false, false, false);
	var subFamact = new Array(false, false, false, false, false, false, false, false, false);
	

	for(i=0;i<familia.length;i++){

		$("#menu").append("<div class='familia' id='" + familia[i] + "'></div>");
		if(i == familia.length-1){

			famact[0] = true;
			$("#" + familia[0] + "").load( "menu/" + familia[0] + ".html", function(){
				famclick(familia[0]);
				$(".familia ul li").each(function(i) {

					$(this).click({index : i}, function(e) {

						if( $("#" + subFam[e.data.index] + "Loaded").hasClass('subFamActivo') ){}
						else{

							$(".subFamActivo").fadeOut(function() {
								console.log("evento asignado" + subFam[e.data.index]);	
								if(!subFamact[e.data.index]){

									$("#" + subFam[e.data.index] + "Loaded").load( "menu/" + subFam[e.data.index] + ".html", function(){
										console.log(subFam[e.data.index]);
										famclick(subFam[e.data.index]);
									});
									subFamact[e.data.index] = true;
								}
								$("#" + subFam[e.data.index] + "Loaded").fadeIn().addClass("subFamActivo");
							}).removeClass("subFamActivo");
						}
					});
				});
			}).fadeIn().addClass("famactivo");
		}
	}
	for(i=0;i<subFam.length;i++){

		$("#menu").append("<div class='subFam' id='" + subFam[i] + "Loaded'></div>");
		if(i == subFam.length-1){

			subFamact[0] = true;
			$("#" + subFam[0] + "Loaded").load( "menu/" + subFam[0] + ".html", function(){
				famclick(subFam[0]);
			}).fadeIn().addClass("subFamActivo");
		}
	}
	
	$("#topMenu ul li").each(function(i) {

		$(this).click({index : i}, function(e) {

			if( $("#" + familia[e.data.index]).hasClass('famactivo') ){}
			else{
				$(".subFamActivo").fadeOut();
				$(".famactivo").fadeOut(function() {

					if(!famact[e.data.index]){
						$("#" + familia[e.data.index]).load( "menu/" + familia[e.data.index] + ".html", function(){

							famclick(familia[e.data.index]);
						});
						famact[e.data.index] = true;
					}
					$("#" + familia[e.data.index]).fadeIn().addClass("famactivo");
					if (familia[e.data.index] === "sushi") {
						$(".subFamActivo").fadeIn();
					}
				}).removeClass("famactivo");
			}
		});
	});

	
}
	
	/* FIN MENU */

	/* HOME */

function homef(){
	
	$("#home1").fadeIn(); 

	setInterval( "adelanteh()", 5000 );
	
	$("#hder").click(function(){
		adelanteh();
	})
	$("#hizq").click(function(){
		homeIndex--;
		if( homeIndex == 0 ){
			homeIndex = 2 ;
		}
		$(".homeIndAct").attr( "src" , "img/indiceoff.png" ).removeClass("homeIndAct");
		$(".homeAct").removeClass('homeAct').fadeOut(function(){
			$("#home" + homeIndex ).fadeIn().addClass('homeAct');
			$("#homeInd" + homeIndex).attr( "src" , "img/indiceon.png" ).addClass("homeIndAct");
		});
	});

	
}

function adelanteh(){
	homeIndex++;
	if( homeIndex == 3 ){
		homeIndex = 1 ;
	}
	$(".homeIndAct").attr( "src" , "img/indiceoff.png" ).removeClass("homeIndAct");
	$(".homeAct").removeClass('homeAct').fadeOut(function(){
		$(this).css('display', 'none');
		$("#home" + homeIndex ).fadeIn().addClass('homeAct');
		$("#homeInd" + homeIndex).attr( "src" , "img/indiceon.png" ).addClass("homeIndAct");
	});
}

	/* FIN HOME */

	/* PROMOCIONES */
	
function promociones(){
	
	$(".promAct").fadeIn();  

	setInterval( "adelantep()", 5000 );
	
	$("#pder").click(function(){
		adelantep();
	})
	$("#pizq").click(function(){
		promIndex--;
		if( promIndex == 0 ){
			promIndex = 4 ;
		}
		$(".indAct").attr( "src" , "img/indiceoff.png" ).removeClass("indAct");
		$(".promAct").removeClass('promAct').fadeOut(function(){
			$("#prom" + promIndex ).fadeIn().addClass('promAct');
			$("#ind" + promIndex).attr( "src" , "img/indiceon.png" ).addClass("indAct");
		});
	});
}

function adelantep(){
	promIndex++;
	if( promIndex == 5 ){
		promIndex = 1 ;
	}
	$(".indAct").attr( "src" , "img/indiceoff.png" ).removeClass("indAct");
	$(".promAct").removeClass('promAct').fadeOut(function(){
		$(this).css('display', 'none');
		$("#prom" + promIndex ).fadeIn().addClass('promAct');
		$("#ind" + promIndex).attr( "src" , "img/indiceon.png" ).addClass("indAct");
	});
}
	
	/* FIN PROMOCIONES */
	
	/* MAPA */
	
function mapa() {
	
      var chicago = new google.maps.LatLng(22.903868, -109.93208),
          pointToMoveTo, 
          first = true,
          curMarker = new google.maps.Marker({}),
          $el;
      
      var myOptions = {
          zoom: 15,
          center: chicago,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
      
      var map = new google.maps.Map($("#map_canvas")[0], myOptions);
    
      $("#locations li").click(function() {
      	$("#locations li img").attr("src","img/contoff.png");
        $el = $(this);
        
        $($el).find("img").attr("src","img/conton.png");
        if (!$el.hasClass("hover")) {
        
          $("#locations li").removeClass("hover");
          $el.addClass("hover");
        
          if (!first) { 
            
            // Clear current marker
            curMarker.setMap(); 
            
            // Set zoom back to Chicago level
            // map.setZoom(10);
          }
          
          // Move (pan) map to new location
          pointToMoveTo = new google.maps.LatLng($el.attr("data-geo-lat"), $el.attr("data-geo-long"));
          map.panTo(pointToMoveTo);
          
          // Add new marker
          curMarker = new google.maps.Marker({
              position: pointToMoveTo,
              map: map/* ,
              icon: "images/marker.png" */
          });
          
          // On click, zoom map
          google.maps.event.addListener(curMarker, 'click', function() {
             map.setZoom(17);
          });
          
          // Fill more info area
          $("#info").find("#lugar").html($el.find("h3").html());
          
          // No longer the first time through (re: marker clearing)        
          first = false; 
        }
        
      });
      
      $("#locations li:first").trigger("mouseenter");


	$(".button").click(function() {  
		// validate and process form here  
	 
		var name = $("input#name").val();  
		if (name == "") {  
			alert("Es necesario que escribas un nombre");
			$("input#name").focus();  
			return false;  
		}  

		var email = $("input#email").val();  
		if (email == "") {  
			alert("Para contactarte, necesitamos tu correo por favor c:");
			$("input#email").focus();  
			return false;  
		}  

		var mensaje = $("textarea#mensaje").val();  
		if (mensaje == "") {  
			alert("Hace falta que escribas tus comentarios");
			$("input#mensaje").focus();
			return false;  
		}  

		var dataString = 'name='+ name + '&email=' + email + '&phone=' + mensaje;  
		//alert (dataString);return false;  
		$.ajax({  
			type: "POST",  
			url: "bin/process.php",  
			data: dataString,  
			success: function() { 
				alert("¡Tu solicitud a sido enviada!");
			}  
		});  
		return false;
	 
	}); 
      
}

	
	/* FIN MAPA */

	/* GALERIA */
	
function galeria(){
	
	var userFeed = new Instafeed({
        get: 'user',
        userId: 320580656,
        accessToken: '320580656.467ede5.ffd168c353fc44bbb9a006b8aa513462',
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        limit: 10,
        success: function(fotog){
			$("#galgrande").append("<a class='cajitaimg' href='" + fotog.data[0].images.standard_resolution.url + "'><img id='imggrande' src='" + fotog.data[0].images.standard_resolution.url + "' /><a/>");
			$("#imggrande").load(function(){
				ajuste($(this));
				jQuery("a.cajitaimg").colorbox();
			});
			for (i = 0; i <= 9; i = i + 1) { 
				var pic = fotog.data[i];
				$("#galrollo").append("<img class='galmini' src='" + pic.images.thumbnail.url + "' title='" + pic.caption.text + "' />");
				if(i==9){
					$(".galmini").each(function(i) {
						$(this).click({index : i}, function(e) {
							imgrande( fotog.data[e.data.index].images.standard_resolution.url, e.data.index+1);
						});
					});
					$("#galrollo img:odd").css("margin-right","9px");
					$("#galrollo img:nth-child(2)").toggleClass("next");
					$("#galrollo img:nth-child(10)").toggleClass("prev");
				}
			}
			$("#gder").click(function(){
				var indice = $("#galrollo img.next").index();
				var fotomin = fotog.data[indice].images.standard_resolution.url;
				imgrande( fotomin, indice+1);
			});
			$("#gizq").click(function(){
				var indice = $("#galrollo img.prev").index();
				var fotomin = fotog.data[indice].images.standard_resolution.url;
				imgrande( fotomin, indice+1);
			});
		}	
    });
    userFeed.run();
	
}
	
function imgrande( foto, lugar){
	$("#galrollo img").removeClass("next prev");
	if(lugar == 1)
	{
		$("#galrollo img:nth-child(2)").toggleClass("next");
		$("#galrollo img:nth-child(10)").toggleClass("prev");
	}
	else if(lugar == 10){
		$("#galrollo img:nth-child(1)").toggleClass("next");
		$("#galrollo img:nth-child(9)").toggleClass("prev");
	}
	else{
		$("#galrollo img:nth-child(" + (lugar + 1) + ")").toggleClass("next");
		$("#galrollo img:nth-child(" + (lugar - 1) + ")").toggleClass("prev");
	}
	$("#imggrande").fadeOut(function(){
		$("#galgrande a").attr( 'href', foto);
		$(this).attr( 'src', foto).load(function() {
			
			ajuste($(this));
		});
	});
	
}
function ajuste(foto){
	if( foto.width < foto.height){
				foto.css({ 
					"height" : "100%", 
					"left" : "50%",
					"margin-left" : -(foto.height*.6606/2) + "px",
					"position" : "absolute"
				});
			}
			else{
				foto.css({ 
					"width" : "100%", 
					"margin-top" : (foto.width*.6606/2) + "px",
					"position" : "absolute"
				});
			}
			foto.fadeIn();
}
	/* FIN GALERIA */