		//Función que calcula el porcentaje de datos personales rellenos para cargar la barra de meter.
		function cargarBarra(){
			var carga=0;

			if(document.getElementById('nombre').checkValidity()){
				carga+=10;
			}
			if(document.getElementById('apellidos').checkValidity()){
				carga+=10;
			}
			if(document.getElementById('dni').checkValidity()){
				carga+=10;
			}
			if(document.formularioEvaluacion.sexo.value!=''){
				carga+=10;
			}
			if(document.formularioEvaluacion.fechaNacimiento.value!=''){
				carga+=10;
			}
			if(document.getElementById('email').checkValidity()){
				carga+=10;
			}
			if(document.getElementById('telefono').checkValidity()){
				carga+=10;
			}
			if(document.getElementById('web').checkValidity()){
				carga+=10;
			}
			if(document.getElementById('profesion').checkValidity()){				
				if(document.getElementById('profesion').value=="Otra"){
					if(document.getElementById('otraProfesion').value!=''){
						carga+=10;
					}
				}else{
					carga+=10;
				}				
			}
			if(document.getElementById('estudios').value!=''){
				carga+=10;
			}
			document.getElementById('progreso').value=carga;
		}
		//Función que calcula la nota y pinta la barra de progreso segun la nota obtenida.
		function evaluar(){
			var relleno=0;
			if(document.getElementById('tema1').checkValidity()){
				relleno+=1;
			}
			if(document.getElementById('tema2').checkValidity()){
				relleno+=1;
			}
			if(document.getElementById('tema3').checkValidity()){
				relleno+=1;
			}
			if(document.getElementById('tema4').checkValidity()){
				relleno+=1;
			}
			if(document.getElementById('tema5').checkValidity()){
				relleno+=1;
			}
			if(document.getElementById('aLunes').checked||document.getElementById('aMartes').checked||document.getElementById('aMiercoles').checked||document.getElementById('aJueves').checked||document.getElementById('aViernes').checked){
				relleno+=1;
			}
			if(document.getElementById('pLunes').checked||document.getElementById('pMartes').checked||document.getElementById('pMiercoles').checked||document.getElementById('pJueves').checked||document.getElementById('pViernes').checked){
				relleno+=1;
			}
			if(document.getElementById('trabajo').checkValidity()){
				relleno+=1;
			}
			document.getElementById('evaluacion').value=relleno;

			var nota=0;
			var media=0;
			var asistencia=0;
			var participacion=0;
			var trabajo=0;
			nota=Number(document.getElementById('tema1').value) + Number(document.getElementById('tema2').value) + Number(document.getElementById('tema3').value) + Number(document.getElementById('tema4').value) + Number(document.getElementById('tema5').value);
			nota=nota/5;
			

			if(document.getElementById('aLunes').checked){
				asistencia=Number(document.getElementById('aLunes').value);
			}
			if(document.getElementById('aMartes').checked){
				asistencia+=Number(document.getElementById('aMartes').value);
			}
			if(document.getElementById('aMiercoles').checked){
				asistencia+=Number(document.getElementById('aMiercoles').value);
			}
			if(document.getElementById('aJueves').checked){
				asistencia+=Number(document.getElementById('aJueves').value);
			}
			if(document.getElementById('aViernes').checked){
				asistencia+=Number(document.getElementById('aViernes').value);
			}
			asistencia=asistencia*2;

			if(document.getElementById('pLunes').checked){
				participacion=Number(document.getElementById('pLunes').value);
			}
			if(document.getElementById('pMartes').checked){
				participacion+=Number(document.getElementById('pMartes').value);
			}
			if(document.getElementById('pMiercoles').checked){
				participacion+=Number(document.getElementById('pMiercoles').value);
			}
			if(document.getElementById('pJueves').checked){
				participacion+=Number(document.getElementById('pJueves').value);
			}
			if(document.getElementById('pViernes').checked){
				participacion+=Number(document.getElementById('pViernes').value);
			}
			participacion=participacion*2;

			media=(Number(nota)+Number(asistencia)+Number(participacion))/3;
			media=Number(media)-3.33;

			if(Number(document.getElementById('trabajo').value)>4){
				trabajo=Number(document.getElementById('trabajo').value)/3;	
			}else{
				trabajo=0;
			}					

			media=Number(media)+Number(trabajo);

			media= Math.round(media);

			if(Number(media)<0){
				media=0;
			}
			/*
			console.log('nota='+ nota);
			console.log('asistencia='+ asistencia);
			console.log('participacion='+ participacion);
			console.log('trabajo='+ trabajo);
			console.log('media='+ media);
			*/
			switch(media) {			    
			    case 5:case 6:case 7:
			        document.getElementById('evaluacion').className="regular";
			        document.getElementById('nota').innerHTML="Nota: " + media;
			        break;
			    case 8:case 9:case 10:
			    	document.getElementById('evaluacion').className="bien";
			    	document.getElementById('nota').innerHTML="Nota: " + media;
			        break;
			    default:
			        document.getElementById('evaluacion').className="mal";
			        document.getElementById('nota').innerHTML="Nota: " + media;
			        break;
			}
		}
		//Función para activar y desactivar los días de participación según si se ha asistido esos días o no.
		function actdes(){
			if(document.getElementById('aLunes').checked){
				document.getElementById('pLunes').disabled=false;
			}else{
				document.getElementById('pLunes').checked=false;
				document.getElementById('pLunes').disabled=true;
			}
			if(document.getElementById('aMartes').checked){
				document.getElementById('pMartes').disabled=false;
			}else{
				document.getElementById('pMartes').checked=false;
				document.getElementById('pMartes').disabled=true;
			}
			if(document.getElementById('aMiercoles').checked){
				document.getElementById('pMiercoles').disabled=false;
			}else{
				document.getElementById('pMiercoles').checked=false;
				document.getElementById('pMiercoles').disabled=true;
			}
			if(document.getElementById('aJueves').checked){
				document.getElementById('pJueves').disabled=false;
			}else{
				document.getElementById('pJueves').checked=false;
				document.getElementById('pJueves').disabled=true;
			}
			if(document.getElementById('aViernes').checked){
				document.getElementById('pViernes').disabled=false;
			}else{
				document.getElementById('pViernes').checked=false;
				document.getElementById('pViernes').disabled=true;
			}
		}
		//Función para controlar el valor de los campos numéricos de 0 a 10.
		function de0a10(elemento){
			if(elemento.value>10){
				elemento.value=10;
			}
			if(elemento.value<0){
				elemento.value=0;
			}
		}
		//Función que valida el formulario al enviar.
		function compruebo(){
			if(document.getElementById('progreso').value<80){
				return false;
			}else{
				return true;
			}
		}
		//Función para evitar resetear el formulario sin querer.
		function resetear(){
			reseteo=confirm("¿Desea limpiar el formulario?"); 
			if (reseteo){
				document.getElementById('formularioEvaluacion').reset();
			}else{
				return false;
			}
		}
		//función para mostrar el campo de otras en profesiones.
		function habilitarOtros(){
			if(document.getElementById('formularioEvaluacion').profesion.value=="Otra"){
				document.getElementById('formularioEvaluacion').otraProfesion.type="text";
				document.getElementById('formularioEvaluacion').otraProfesion.placeholder="Escriba su profesión";
				document.getElementById('formularioEvaluacion').otraProfesion.required="required";
			}else{
				document.getElementById('formularioEvaluacion').otraProfesion.type="hidden";
				document.getElementById('formularioEvaluacion').otraProfesion.required="";
				document.getElementById('formularioEvaluacion').otraProfesion.placeholder()=false;
			}
		}
		//función de busqueda.
		function buscarBusqueda(){
			var sAux="";
			var frm = document.getElementById("formularioEvaluacion");
			for (i=0;i<frm.elements.length;i++)
			{
				if(frm.elements[i].name==document.getElementById("formularioBusqueda").buscar.value){
					frm.elements[i].className="encontrado";
				}else{
					frm.elements[i].className="";
				}
			}
			return false;
		}