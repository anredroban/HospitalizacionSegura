function valitadeCharecters(){var e=$("#provinciaDomic option:selected").html();var t=$("#ciudadDomic option:selected").html();var n=$("#sectorDomic").val();var r=$("#callePrincipalDomic").val();var i=$("#numeracionDomic").val();var s=$("#calleTransversalDomic").val();var o=$("#referenciaDomic").val();var u=$("#provinciaTrab option:selected").html();var a=$("#ciudadTrab").val();var f=$("#sectorTrab").val();var l=$("#callePrincipalTrab").val();var c=$("#numeracionTrab").val();var h=$("#calleTransversalTrab").val();var p=$("#referenciaTrab").val();var d=$("#celularContacto").val();var v=$("#telefonoDomContacto").val();var m=$("#telefonoTrabContacto").val();$infoAddres=e+" "+t+" "+n+" "+r+" "+i+" "+s+" "+o;$infoWork=u+" "+a+" "+f+" "+l+" "+c+" "+h+" "+p;$infoWork=replaceMore2Spaces($infoWork);$infoAddres=replaceMore2Spaces($infoAddres);var g=replaceMore2Spaces(d);var y=replaceMore2Spaces(v);var b=replaceMore2Spaces(m);if($infoAddres.length>150||$infoAddres.length<100){alert("El total de la dirección de domicilio tiene "+$infoAddres.length+" caracteres. El número de caracteres permitido es de 100 a 150.")}else if($infoWork.length>150||$infoWork.length<100){alert("El total de la dirección de Trabajo tiene "+$infoWork.length+" caracteres. El número de caracteres permitido es de 100 a 150.")}else if(g.length<10){alert("Celular Contacto tiene "+g.length+" numeros y son 10 digitos para que sea valido.")}else if(g.length>10){alert("Celular Contacto tiene "+g.length+" numeros y son 10 digitos para que sea valido.")}else if(y.length<9){alert("Tlf Contacto Domicilio tiene  "+y.length+" numeros y son 9 digitos para que sea valido.")}else if(y.length>9){alert("Tlf Contacto Domicilio tiene  "+y.length+" numeros y son 9 digitos para que sea valido.")}else if(b.length<9){alert("Tlf Contacto Trabajo tiene  "+b.length+" numeros y son 9 digitos para que sea valido.")}else if(b.length>9){alert("Tlf Contacto Trabajo tiene  "+b.length+" numeros y son 9 digitos para que sea valido.")}else if(!$.isNumeric(g)){alert("Celular Contacto solo se acepta numeros ")}else if(!$.isNumeric(y)){alert("Numero de telefono del Casa solo se acepta numeros")}else if(!$.isNumeric(b)){alert("Numero de telefono del trabajo solo se acepta numeros")}else{$("form[name='management-client']").submit()}}function replaceMore2Spaces(e){var t=e;while(true){if(t.indexOf("  ")!=-1){t=t.replace(/\s{2,}/," ")}else{if(t.indexOf(".")!=-1){t=t.replace(".","")}else{if(t.indexOf(",")!=-1){t=t.replace(/,{2,}/,"")}else{break}}}}return t.trim()}$(function(){function e(e){$.post(baseUrl+"/FuncionesAjax/searchUser",{query:e}).done(function(e){if(e=="null"){}else{alert("ya tienes este usuario en la base de datos con la misma cedula")}})}$("#datosExequial").hide();$("#nombresExequial").val("");$("#edadExequial").val("");$("#parentescoExequial").val($("#parentescoExequial option:first").val());$("#asistencia").val($("#asistencia option:last").val());$("#asistencia").change(function(){$("#nombresExequial").val("");$("#edadExequial").val("");$("#parentescoExequial").val($("#parentescoExequial option:first").val());$("#tipoCobro").val($("#tipoCobro option:first").val());if($("#asistencia").val()[0]=="AE"||$("#asistencia").val()[1]=="AE"){$("#datosExequial").show();$("#tipoCobroDiv").hide()}else{$("#datosExequial").hide();$("#tipoCobroDiv").show()}if($("#asistencia").val()[0]=="AT"||$("#asistencia").val()[1]=="AT"){$("#tipoCobroDiv").show()}else{$("#tipoCobroDiv").hide()}});$("#primerNombre").keyup(function(){var e=this.value;$("#nombreTarjeta").val(e)});$("#primerApellido").keyup(function(){var e=this.value;$("#nombreTarjeta").val($("#primerNombre").val()+" "+this.value)});$('input[name~="fechaNacimiento"]').change(function(){var e=$(this).val();var t=e.getYear()});$("#cedula").keyup(function(){var t=$(this).val();if(t!=""){e(t)}else{e()}});$("#send").click(function(e){var t=$("#status option:selected").html();var n=$("#substatus option:selected").html();if($("#tipoCobroDiv").is(":visible")){if($("#tipoCobro").val()==""){alert("Ingrese el tipo de cobro");e.preventDefault();return false}}if($("#datosExequial").is(":visible")){if($("#nombresExequial").val()==""){alert("Campo nombres en Asistencia Exequial vacío");e.preventDefault();return false}if($("#edadExequial").val()==""){alert("Campo edad en Asistencia Exequial vacío");e.preventDefault();return false}if($("#parentescoExequial").val()==""){alert("Campo parentesco en Asistencia Exequial vacío");e.preventDefault();return false}}if(n=="CU1 ACEPTA PRODUCTO CAMPAÑA"){valitadeCharecters()}else if(n=="CU2 ACEPTA VENTA CRUZADA"){$("form[name='management-client']").submit()}else if(n=="CU3 ACEPTA PRODUCTO Y VENTA CRUZADA"){valitadeCharecters()}else if(t=="NO CONTACTADO"){$("form[name='management-client']").submit()}else{$("form[name='management-client']").submit()}})})