function checkIfNumberNoSpace(e,t){if(e==32)return 0;if($.inArray(e,[46,8,9,27,13,110,190])!==-1||e==97&&t.ctrlKey===true||e==99&&t.ctrlKey===true||e==120&&t.ctrlKey===true||e==0){return 1}if(e<48||e>57){return 0}}function removeDoubleSpace(e){e=e.replace(/\s\s+/g," ");return e}function isValidString(e){e=e.replace(/[!@#$%^&*()=+{}[\]/?¿_;:'"/<>`~|]/,"");return e}function validateEnter(e,t){if(e==13){return 0}else{return 1}}$(document).ready(function(){$("#estados").val($("#estados option:first").val());$("#motivonoacepta").val($("#motivonoacepta option:first").val());$("#productoAceptado").val($("#productoAceptado option:first").val());$("#tipoDireccion").val($("#tipoDireccion option:first").val());$("#provinciaTrabajo").val($("#provinciaTrabajo option:first").val());$("#horarioEntrega1").val($("#horarioEntrega option:first").val());$("#horarioEntrega2").val($("#horarioEntrega option:first").val());$("#facturacion").val($("#facturacion option:first").val());$("#datosgestion").hide();$("#noacepta").hide();$("#rellamadadtp").hide();$("#estados").change(function(e){$("#noacepta").hide();$("#rellamadadtp").hide();if($("#estados").val()!="1"){$("#datosgestion").hide()}else{}if($("#estados").val()==""){var t=document.getElementById("subestados");var n=document.createElement("option");var r=t.length;while(r>0){r--;t.remove(r)}n.text="-- Seleccione --";n.value="";t.add(n,null)}else{$idEstado=this.value;$.get(baseUrl+"/funcionesAjax/getSubestados",{id:$idEstado},function(e){var t=e[0].length;var n=document.getElementById("subestados");var r=n.length;while(r>0){r--;n.remove(r)}var s=document.createElement("option");s.text="-- Seleccione --";s.value="";n.add(s,null);for(i=0;i<t;i++){var o=document.createElement("option");o.text=e[1][i];o.value=e[0][i];n.add(o,null)}})}});$("#subestados").change(function(e){if($("#subestados").val()=="1"){$("#datosgestion").show();$("#telefonogestion").on("keypress",function(e){if(checkIfNumberNoSpace(e.which,e)==0){return false}else{return}});$("#celulargestion").on("keypress",function(e){if(checkIfNumberNoSpace(e.which,e)==0){return false}else{return}})}else{$("#datosgestion").hide()}$("#motivonoacepta").val($("#motivonoacepta option:first").val());if($("#subestados").val()=="6"){$("#noacepta").show()}else{$("#noacepta").hide()}if($("#subestados").val()=="4"){$("#rellamadadtp").show()}else{$("#rellamadadtp").hide()}});$("#provinciaDomicilio").change(function(e){var t=document.getElementById("sector");var n=document.createElement("option");var r=t.length;while(r>0){r--;t.remove(r)}n.text="-- Seleccione --";n.value="";t.add(n,null);if($("#provinciaDomicilio").val()==""){var s=document.getElementById("ciudad");var n=document.createElement("option");var r=s.length;while(r>0){r--;s.remove(r)}n.text="-- Seleccione --";n.value="";s.add(n,null)}else{$idCiudad=this.value;$.get(baseUrl+"/funcionesAjax/getCiudades",{id:$idCiudad},function(e){var t=e[0].length;var n=document.getElementById("ciudad");var r=n.length;while(r>0){r--;n.remove(r)}var s=document.createElement("option");s.text="-- Seleccione --";s.value="";n.add(s,null);for(i=0;i<t;i++){var o=document.createElement("option");o.text=e[1][i];o.value=e[0][i];n.add(o,null)}})}});$("#provinciaTrabajo").change(function(e){var t=document.getElementById("sectorTrabajo");var n=document.createElement("option");var r=t.length;while(r>0){r--;t.remove(r)}n.text="-- Seleccione --";n.value="";t.add(n,null);if($("#provinciaTrabajo").val()==""){var s=document.getElementById("ciudadTrabajo");var n=document.createElement("option");var r=s.length;while(r>0){r--;s.remove(r)}n.text="-- Seleccione --";n.value="";s.add(n,null)}else{$idCiudad=this.value;$.get(baseUrl+"/funcionesAjax/getCiudades",{id:$idCiudad},function(e){var t=e[0].length;var n=document.getElementById("ciudadTrabajo");var r=n.length;while(r>0){r--;n.remove(r)}var s=document.createElement("option");s.text="-- Seleccione --";s.value="";n.add(s,null);for(i=0;i<t;i++){var o=document.createElement("option");o.text=e[1][i];o.value=e[0][i];n.add(o,null)}})}});$("#ciudad").change(function(e){if($("#ciudad").val()==""){var t=document.getElementById("sector");var n=document.createElement("option");var r=t.length;while(r>0){r--;t.remove(r)}n.text="-- Seleccione --";n.value="";t.add(n,null)}else{$idCiudad=this.value;$.get(baseUrl+"/funcionesAjax/getParroquias",{id:$idCiudad},function(e){var t=e[0].length;var n=document.getElementById("sector");var r=n.length;while(r>0){r--;n.remove(r)}var s=document.createElement("option");s.text="-- Seleccione --";s.value="";n.add(s,null);for(i=0;i<t;i++){var o=document.createElement("option");o.text=e[1][i];o.value=e[0][i];n.add(o,null)}})}});$("#ciudadTrabajo").change(function(e){if($("#ciudadTrabajo").val()==""){var t=document.getElementById("sectorTrabajo");var n=document.createElement("option");var r=t.length;while(r>0){r--;t.remove(r)}n.text="-- Seleccione --";n.value="";t.add(n,null)}else{$idCiudad=this.value;$.get(baseUrl+"/funcionesAjax/getParroquias",{id:$idCiudad},function(e){var t=e[0].length;var n=document.getElementById("sectorTrabajo");var r=n.length;while(r>0){r--;n.remove(r)}var s=document.createElement("option");s.text="-- Seleccione --";s.value="";n.add(s,null);for(i=0;i<t;i++){var o=document.createElement("option");o.text=e[1][i];o.value=e[0][i];n.add(o,null)}})}});$("#telefonoContacto").on("keypress",function(e){if(checkIfNumberNoSpace(e.which,e)==0){return false}else{return}});$("#celularContacto").on("keypress",function(e){if(checkIfNumberNoSpace(e.which,e)==0){return false}else{return}});$("#telefonoTrabajoGestion").on("keypress",function(e){if(checkIfNumberNoSpace(e.which,e)==0){return false}else{return}});$("#personaContacto").on("keypress",function(e){if(validateEnter(e.which,e)==0){return false}else{return true}$("#"+this.id).val(removeDoubleSpace($("#"+this.id).val()));$("#"+this.id).val(isValidString($("#"+this.id).val()))});$("#callePrincipal").on("keypress",function(e){if(validateEnter(e.which,e)==0){return false}else{return true}$("#"+this.id).val(removeDoubleSpace($("#"+this.id).val()));$("#"+this.id).val(isValidString($("#"+this.id).val()))});$("#nomenclatura").on("keypress",function(e){if(validateEnter(e.which,e)==0){return false}else{return true}$("#"+this.id).val(removeDoubleSpace($("#"+this.id).val()));$("#"+this.id).val(isValidString($("#"+this.id).val()))});$("#calleSecundaria").on("keypress",function(e){if(validateEnter(e.which,e)==0){return false}else{return true}$("#"+this.id).val(removeDoubleSpace($("#"+this.id).val()));$("#"+this.id).val(isValidString($("#"+this.id).val()))});$("#edificio").on("keypress",function(e){if(validateEnter(e.which,e)==0){return false}else{return true}$("#"+this.id).val(removeDoubleSpace($("#"+this.id).val()));$("#"+this.id).val(isValidString($("#"+this.id).val()))});$("#referencia").on("keypress",function(e){if(validateEnter(e.which,e)==0){return false}else{return true}$("#"+this.id).val(removeDoubleSpace($("#"+this.id).val()));$("#"+this.id).val(isValidString($("#"+this.id).val()))});$("#callePrincipalTrabajo").on("keypress",function(e){if(validateEnter(e.which,e)==0){return false}else{return true}$("#"+this.id).val(removeDoubleSpace($("#"+this.id).val()));$("#"+this.id).val(isValidString($("#"+this.id).val()))});$("#nomenclaturaTrabajo").on("keypress",function(e){if(validateEnter(e.which,e)==0){return false}else{return true}$("#"+this.id).val(removeDoubleSpace($("#"+this.id).val()));$("#"+this.id).val(isValidString($("#"+this.id).val()))});$("#calleSecundariaTrabajo").on("keypress",function(e){if(validateEnter(e.which,e)==0){return false}else{return true}$("#"+this.id).val(removeDoubleSpace($("#"+this.id).val()));$("#"+this.id).val(isValidString($("#"+this.id).val()))});$("#edificioTrabajo").on("keypress",function(e){if(validateEnter(e.which,e)==0){return false}else{return true}$("#"+this.id).val(removeDoubleSpace($("#"+this.id).val()));$("#"+this.id).val(isValidString($("#"+this.id).val()))});$("#referenciaTrabajo").on("keypress",function(e){if(validateEnter(e.which,e)==0){return false}else{return true}$("#"+this.id).val(removeDoubleSpace($("#"+this.id).val()));$("#"+this.id).val(isValidString($("#"+this.id).val()))});$("#observaciones").on("keypress",function(e){if(validateEnter(e.which,e)==0){return false}else{return true}$("#"+this.id).val(removeDoubleSpace($("#"+this.id).val()));$("#"+this.id).val(isValidString($("#"+this.id).val()))})})