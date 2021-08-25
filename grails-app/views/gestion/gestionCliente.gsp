<meta name="layout" content="main" />
<title>Hospitalizacion Segura - Gestionar Cliente</title>

<asset:stylesheet src="gestion/gestionCliente.css" />
<asset:stylesheet src="usogeneral/bootstrap-datepicker.min.css"></asset:stylesheet>

<script type="text/javascript">
    $(function () {
        $('#datetimepicker4').datetimepicker({
            format: 'YYYY/MM/DD hh:mm A'
        });
    });
</script>

<%--<script type="text/javascript">
    $(function () {
        $('#horaEntrega').datetimepicker({
            datepicker: false,
            format: 'H:i'
        });
    });
</script>--%>

<g:form action="guardarCliente" id="idFormPDF" name="idFormPDF">

<div class="container-fluid">

	<g:if test="${cliente.registroExitoso == 'SI'}">
		<div class="col-lg-12 col-md-12 col-xs-12">
			<%--<label id="blink" style="font-size: 28px; font-weight: bold; color: red" >¡AVISO! </label><span id="priodidadTc" style="font-size: 28px; font-weight: bold; color: red">CLIENTE EXITOSO NO GESTIONAR</span>--%>
			<div class="col-md-8"><div class="alert alert-danger" role="alert"><i class="fa fa-fw fa-exclamation-triangle" style="font-size: 30px"></i><span style="font-size: 26px; font-weight: bold">ATENCIÓN</span><span style="font-size: 24px"> CLIENTE EXITOSO NO GESTIONAR</span></div></div>
		</div>
	</g:if>
	<div class="panel panel-default col-lg-12 col-md-12 col-xs-12">
		<div class="col-lg-12 col-md-12 col-xs-12 group-title">Datos del cliente</div>
		<div class="col-lg-12 col-md-12 col-xs-12 line"></div>

		<g:if test="${cliente.nombre != null && cliente.nombre != ''}">
			<div class="col-lg-4 col-md-6 col-xs-12 col-xs-12 form-group">
				<label>Nombres:</label>
				${cliente.nombre}
			</div>
		</g:if>

		<g:if test="${cliente.identificacion != null && cliente.identificacion != ''}">
			<div class="col-lg-4 col-md-6 col-xs-12 form-group">
				<g:hiddenField name="identificacion" id="identificacion" value="${cliente.identificacion}"></g:hiddenField>
				<g:hiddenField name="apellidoPaterno" id="apellidoPaterno" value="${cliente.apellido1}"></g:hiddenField>
				<g:hiddenField name="apellidoMaterno" id="apellidoMaterno" value="${cliente.apellido2}"></g:hiddenField>
				<g:hiddenField name="nombres" id="nombres" value="${cliente.nombres}"></g:hiddenField>
				<g:hiddenField name="estadoCivil" id="estadoCivil" value="${cliente.estado_civil}"></g:hiddenField>
				<g:hiddenField name="genero" id="genero" value="${cliente.genero}"></g:hiddenField>

				<label>Identificación:</label>
				${cliente.identificacion}
			</div>
		</g:if>


		<g:if test="${cliente.genero != null && cliente.genero != ''}">
			<div class="col-lg-4 col-md-6 col-xs-12 form-group">
				<label>Género:</label>
				${cliente.genero}
			</div>
		</g:if>

		<g:if test="${cliente.fecha_nacimiento != null && cliente.fecha_nacimiento != ''}">
			<div class="col-lg-4 col-md-6 col-xs-12 form-group">
				<label>Fecha Nacimiento:</label>
				${cliente.fecha_nacimiento}
			</div>
		</g:if>

		<g:if test="${cliente.edad != null && cliente.edad != ''}">
			<div class="col-lg-4 col-md-6 col-xs-12 form-group">
				<label>Edad:</label>
				${cliente.edad}
			</div>
		</g:if>

		<g:if test="${cliente.estado_civil != null && cliente.estado_civil != ''}">
			<div class="col-lg-4 col-md-6 col-xs-12 form-group">
				<label>Estado Civil:</label>
				${cliente.estado_civil}
			</div>
		</g:if>

		<g:if test="${cliente.marca_tarjeta != null && cliente.marca_tarjeta != ''}">
			<div class="col-lg-4 col-md-6 col-xs-12 form-group">
				<label>Marca Tarjeta:</label>
				${cliente.marca_tarjeta}
			</div>
		</g:if>



	</div>

	<div class="panel panel-default col-lg-12 col-md-12 col-xs-12">
		<div class="col-lg-12 col-md-12 col-xs-12 group-title">Datos de contacto</div>
		<div class="col-lg-12 col-md-12 col-xs-12 line"></div>

		<g:if test="${cliente.telefono1}">
			<div id="number1" class="form-group col-lg-4 col-md-6 col-xs-12">
				<label><span class="fa fa-mobile-phone"></span> Teléfono 1: </label>
				 ${cliente.telefono1}
				<g:select class="form-control" id="estadoTel1" name="estadoTel1" from="${['MANEJADA','NO_CONTESTA','LLAMADA_RECHAZADA','CONTESTADORA']}" noSelection="${['': '-- Seleccione --']}" optionValue="value" optionKey="value" />

			</div>
		</g:if>
		<g:if test="${cliente.telefono2 && cliente.telefono2.trim() != ''}">
			<div id="number2" class="form-group col-lg-4 col-md-6 col-xs-12">
				<label><span class="fa fa-phone"></span> Teléfono 2: </label>
				 ${cliente.telefono2}
				<g:select  class="form-control" id="estadoTel2" name="estadoTel2" noSelection="${['': '-- Seleccione --']}" from="${['MANEJADA','NO_CONTESTA','LLAMADA_RECHAZADA','CONTESTADORA']}"/>
			</div>
		</g:if>
		<g:if test="${cliente.telefono3 && cliente.telefono3.trim() != ''}">
			<div id="number3" class="form-group col-lg-4 col-md-6 col-xs-12">
				<label><span class="fa fa-phone"></span> Teléfono 3: </label>
				 ${cliente.telefono3}
				<g:select  class="form-control" id="estadoTel3" name="estadoTel3" noSelection="${['': '-- Seleccione --']}" from="${['MANEJADA','NO_CONTESTA','LLAMADA_RECHAZADA','CONTESTADORA']}"/>
			</div>
		</g:if>
		<g:if test="${cliente.telefono4 && cliente.telefono4.trim() != ''}">
			<div id="number4" class="form-group col-lg-4 col-md-6 col-xs-12">
				<label><span class="fa fa-phone"></span> Teléfono 4: </label>
				${cliente.telefono4}
				<g:select  class="form-control" id="estadoTel4" name="estadoTel4" noSelection="${['': '-- Seleccione --']}" from="${['MANEJADA','NO_CONTESTA','LLAMADA_RECHAZADA','CONTESTADORA']}"/>
			</div>
		</g:if>
		<g:if test="${cliente.telefono5 && cliente.telefono5.trim() != ''}">
			<div id="number5" class="form-group col-lg-4 col-md-6 col-xs-12">
				<label><span class="fa fa-phone"></span> Teléfono 5: </label>
				${cliente.telefono5}
				<g:select  class="form-control" id="estadoTel5" name="estadoTel5" noSelection="${['': '-- Seleccione --']}" from="${['MANEJADA','NO_CONTESTA','LLAMADA_RECHAZADA','CONTESTADORA']}"/>
			</div>
		</g:if>
		<g:if test="${cliente.telefono6 && cliente.telefono6.trim() != ''}">
			<div id="number6" class="form-group col-lg-4 col-md-6 col-xs-12">
				<label><span class="fa fa-phone"></span> Teléfono 6: </label>
				${cliente.telefono6}
				<g:select  class="form-control" id="estadoTel6" name="estadoTel6" noSelection="${['': '-- Seleccione --']}" from="${['MANEJADA','NO_CONTESTA','LLAMADA_RECHAZADA','CONTESTADORA']}"/>
			</div>
		</g:if>
		<g:if test="${cliente.telefono7 && cliente.telefono7.trim() != ''}">
			<div id="number7" class="form-group col-lg-4 col-md-6 col-xs-12">
				<label><span class="fa fa-phone"></span> Teléfono 7: </label>
				${cliente.telefono7}
				<g:select  class="form-control" id="estadoTel7" name="estadoTel7" noSelection="${['': '-- Seleccione --']}" from="${['MANEJADA','NO_CONTESTA','LLAMADA_RECHAZADA','CONTESTADORA']}"/>
			</div>
		</g:if>
		<g:if test="${cliente.telefono8 && cliente.telefono8.trim() != ''}">
			<div id="number8" class="form-group col-lg-4 col-md-6 col-xs-12">
				<label><span class="fa fa-phone"></span> Teléfono 8: </label>
				${cliente.telefono8}
				<g:select  class="form-control" id="estadoTel8" name="estadoTel8" noSelection="${['': '-- Seleccione --']}" from="${['MANEJADA','NO_CONTESTA','LLAMADA_RECHAZADA','CONTESTADORA']}"/>
			</div>
		</g:if>
		<g:if test="${cliente.telefono9 && cliente.telefono9.trim() != ''}">
			<div id="number9" class="form-group col-lg-4 col-md-6 col-xs-12">
				<label><span class="fa fa-phone"></span> Teléfono 9: </label>
				${cliente.telefono9}
				<g:select  class="form-control" id="estadoTel9" name="estadoTel9" noSelection="${['': '-- Seleccione --']}" from="${['MANEJADA','NO_CONTESTA','LLAMADA_RECHAZADA','CONTESTADORA']}"/>
			</div>
		</g:if>
		<g:if test="${cliente.telefono10 && cliente.telefono10.trim() != ''}">
			<div id="number10" class="form-group col-lg-4 col-md-6 col-xs-12">
				<label><span class="fa fa-phone"></span> Teléfono 10: </label>
				${cliente.telefono10}
				<g:select  class="form-control" id="estadoTel10" name="estadoTel10" noSelection="${['': '-- Seleccione --']}" from="${['MANEJADA','NO_CONTESTA','LLAMADA_RECHAZADA','CONTESTADORA']}"/>
			</div>
		</g:if>
		<div class="col-lg-12 group-title">Datos Complementarios</div>
		<div class="col-lg-12 line"></div>
		<g:if test="${cliente.email && cliente.email.trim() != ''}">
			<div class="form-group col-lg-4 col-md-6 col-xs-12">
				<label><span class="fa fa-archive"></span> Email: </label>
				${cliente.email}
			</div>
		</g:if>
		<g:if test="${cliente.codigoAsignacion && cliente.codigoAsignacion.trim() != ''}">
			<div class="form-group col-lg-4 col-md-6 col-xs-12">
				<label><span class="fa fa-archive"></span> Easy Code: </label>
				${cliente.codigoAsignacion}
			</div>
		</g:if>

	</div>


		<input type="hidden" value="${cliente.id}" id="idCliente" name="idCliente">
		<input type="hidden" value="${cliente.identificacion}" id="identificacionTitular" name="identificacionTitular">
		<div class="panel panel-default col-lg-12 col-md-12 col-xs-12">
			<div class="col-lg-4 col-md-6 col-xs-12 form-group">
				<label>Estado Gestion</label>
				<span class="required-indicator">*</span>
				<g:select class="form-control" name="status" id="status"
						  from="${callcenter.Estado.list()}" optionKey="id"
						  optionValue="${{it.nombre	}}"
						  noSelection="${['': '-- Seleccione --']}" />
			</div>

			<div id="subStatusDiv" class="col-lg-4 col-md-6 col-xs-12 form-group">
				<label>Subestado Gestion</label>
				<span class="required-indicator">*</span>
				<g:select class="form-control" name="substatus" id="substatus" from="" noSelection="${['': '-- Seleccione --']}" />
			</div>

			<div id="subSubStatusDiv" class="form-group col-lg-4 col-md-6 col-xs-12">
				<label>Sub subestado</label>
				<span class="required-indicator">*</span>
				<g:select id="subSubStatus" class="form-control" name="subSubStatus" from="" optionKey="id"></g:select>
			</div>

			<div id="divMotivo" class="col-lg-4 col-md-6 col-xs-12 form-group">
				<label>Motivos No Acepta Seguro</label>
				<span class="required-indicator">*</span>
				<g:select class="form-control" name="motivoNoAceptaSeguro" id="motivoNoAceptaSeguro"
						  from="${callcenter.MotivosnoAceptaSeguro.list()}" optionKey="nombre"
						  optionValue="${{it.nombre	}}"
						  noSelection="${['': '-- Seleccione --']}" />
			</div>
            <div id="recallDiv">
				<div class="col-lg-4 col-md-6 col-xs-12 form-group">
					<label>Agendamiento</label>
					<span class="required-indicator">*</span>
					<g:select class="form-control" name="agendamiento" id="agendamiento" from="${['AGENDAR PARA MI':'AGENDAR PARA MI', 'AGENDAR PARA CUALQUIERA':'AGENDAR PARA CUALQUIERA']}" optionKey="key"
							  optionValue="value"
							  noSelection="${['': '-- Seleccione --']}" />
				</div>
			<div class="col-lg-4 col-md-6 form-group">
				<label>Fecha Rellamada</label>
				<span class="required-indicator">*</span>
				<g:textField id="recall" name="recall" class="recall form-control"/>
			</div>
			</div>

			<div id="telefonoContactadoDiv" >
				<div class="col-lg-4 col-md-6 form-group">
					<label style="color: red">Teléfono Contactado</label>
					<span class="required-indicator">*</span>
					<g:textField maxlength="10" minlength="9" id="telefonoContactado" name="telefonoContactado" class="form-control"/>
				</div>
				<div class="form-group col-lg-4 col-md-6 col-xs-12">
					<label >Estado Teléfono Contactado</label>
					<span class="required-indicator">*</span>
					<g:select class="form-control" id="estadoTelefonoContactado" name="estadoTelefonoContactado" from="${['MANEJADA','NO_CONTESTA','LLAMADA_RECHAZADA','CONTESTADORA']}" noSelection="${['': '-- Seleccione --']}"/>

				</div>
			</div>

		</div>

		<div id="productoPrincipalDiv">
			<div id="datosClientePanel" class="panel panel-default col-lg-12 col-md-12 col-xs-12">

				<div id="scriptVehicular">
					<div class="col-lg-12 col-md-12 col-xs-12 group-title">Script</div>
					<div class="col-lg-12 col-md-12 col-xs-12 line"></div>
					<div style="border-radius: 30px" class="panel panel-default col-lg-12 col-md-12 col-xs-12">
						<div class="col-lg-12 col-md-12 col-xs-12">
							<div class="col-lg-12 col-md-12 col-xs-12">
								<p>
									Buenos Días/Tardes/Noches, por favor, me puede comunicar con el Sr. /la Sra. <strong>${cliente.nombre}</strong>, le llamo de parte de Benco Pichincha.
								</p>
								<p>Cómo se encuentran el día de hoy ?</p>
								<p>Es un buen momento para conversar ?</p>
								<p>Sr. / Sra. <strong>${cliente.nombre}</strong> por su seguridad esta llamada será grabada.</p>

								<p>Sabía usted que actualmente el sistema de salud público en nuestro país se encuentra saturado en caso de que usted requiera ser atendido
								por una emergencia, por este motivo pensando en su bienestar en el de su familia Banco Pichincha pone a su disposición un importante beneficio
								de renta diaria por hospitalización mismo que le otorgará $30 diarios a partir del segundo día de hospitalización, es decir recibirá hasta $870
								mensuales, por accidente o cualquier enfermedad incluidas enfermedades respiratorias infecciosas.</p>
								<p>
									Adicional le otorgamos una cobertura en caso de que como consecuencia de una enfermedad o accidentes tiene que ser internado en la unidad de cuidados intensivos con una renta diaria de $30 diarios a partir del tercer día <strong>(máximo 15 días).</strong>
								</p>
								<p>Es un excelente beneficio debido:</p>
								<p>
									<!--<strong>CONTENIDOS (COBERTURA)</strong>-->
									<blockquote style="font-size: 16px">
										<ul>
											<li><i>La prima no varía con la edad.</i></li>
											<li><i>La cobertura no necesita exámenes médicos.</i></li>
											<li><i>El valor lo puede utilizar de libre disponibilidad sin un límite de eventos.</i></li>
										</ul>
									</blockquote>
								</p>


								<div class="panel panel-default col-md-8 col-md-offset-2">
									<img style="width: 100%" src="http://www.plus-wireless.com/documents/seguros-enfermedades-1.png">
								</div>
								<div class="panel panel-default col-md-8 col-md-offset-2">
									<img style="width: 100%" src="http://www.plus-wireless.com/documents/seguros-enfermedades-2.png">
								</div>
								<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
								<br><br><br><br>



								<p>Este beneficio se encuentra a su disposición por un aporte diario de 0.42 centavos es decir $4.99 mensuales incluidos los impuestos de ley. Si usted lo activa el día de hoy, recibirá además completamente gratis un servicio dental el cuál cuenta con los siguientes beneficios: </p>

								<div class="panel panel-default col-md-8 col-md-offset-2">
									<img style="width: 100%" src="http://www.plus-wireless.com/documents/seguros-enfermedades-3.png">
								</div>
								<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
								<br><br><br><br>
								<br>

								<p>Este plan dental lo podrá hacer uso desde el mes siguiente llamando gratis al 1800447744</p>
								<p>¡Excelente verdad!, Sr./ Sra.  <strong>${cliente.nombre}</strong> con solo confirmar los datos que dispongo en el sistema, usted podrá acceder a este beneficio. </p>
								<p>¿esta Ud. de acuerdo?</p>
								<p><strong>RESPUESTA SI</strong></p>
								<p>	¡Lo felicito por su decisión!<br>
								Este es un seguro con respaldo de AIG Metropolitana y NOVA ECUADOR
								</p>
								<p><strong>RESPUESTA NO</strong></p>
								<p>¿porque no le gustaría estar protegido desde ya?</p>
								<p>Además, le informamos que las exclusiones más importantes son:</p>
								<p>
									<blockquote style="font-size: 16px">
										<ul>
											<li><i>Condiciones preexistentes</i></li>
											<li><i>Embarazo y consecuencias del parto</i></li>
										</ul>
									</blockquote>
								</p>

								<p>Para continuar por favor le pido me ayude confirmando la siguiente información:</p>
								<p>Muy bien, por favor ayúdeme confirmando:</p>
								<p>
									<blockquote style="font-size: 16px">
										<ul>
											<li><i>Su nombre es……….</i></li>
											<li><i>Su número de cédula es…….</i></li>
											<li><i>Su estado civil es......</i></li>
											<li><i>Su correo eléctronico es…….</i></li>
											<li><i>¿Cuál es su lugar de nacimiento?</i></li>
											<li><i>¿Cuál es su nacionalidad?:</i> Si el Cliente tiene nacionalidad de países de exclusión (VAYA A CIERRE CLIENTES NO CALIFICADOS)</li>
											<li><i>¿Cuál es su fecha de nacimiento?</i></li>

										</ul>
									</blockquote>
								</p>
								<p>Muchas gracias Sr/ Sra. Como parte de nuestro proceso de activación en este momento solicitamos su autorización para delegar la firma electrónica del servicio contratado en la llamada, en este momento vamos a enviar a su celular el código de activación de su seguro, por favor.</p>
								<p>¿Me puede facilitar el mismo?</p>
								<p>Muchas Gracias</p>

							</div>
						</div>
					</div>

				</div>


				<div class="col-lg-12 col-md-12 col-xs-12 group-title">Confirmación Datos</div>
				<div class="col-lg-12 col-md-12 col-xs-12 line"></div>
				<div class="col-lg-4 col-md-6 col-xs-12 form-group">
					<label>Correo Electrónico</label>
					<span class="required-indicator">*</span>
					<g:textField class="form-control" id="emailPersonalGestion" name="emailPersonalGestion" value="${cliente.email}"/>
				</div>
				<div class="col-lg-4 col-md-6 col-xs-12 form-group">
					<label>Lugar de Nacimiento</label>
					<span class="required-indicator">*</span>
					<g:textField class="form-control" id="lugarNacimiento" name="lugarNacimiento" value=""/>
				</div>
				<div class="col-lg-4 col-md-6 col-xs-12 form-group">
					<label>Fecha Nacimiento</label>
					<span class="required-indicator">*</span>
					<g:textField class="datepicker form-control" id="fechaNacimientoGestion" name="fechaNacimientoGestion" value="${cliente.fecha_nacimiento}" onkeypress="return soloLetras(event)"/>
				</div>
				<div class="col-lg-4 col-md-6 col-xs-12 form-group">
					<label>Gestion en Línea</label>
					<span class="required-indicator">*</span>
					<g:select class="form-control" id="gestionLinea" name="gestionLinea" optionKey="key" optionValue="value" from="${['SI':'SI','NO':'NO']}" noSelection="${['': '-- Seleccione --']}" />
				</div>
				<div id="gestionLineaDiv" class="col-lg-4 col-md-6 col-xs-12 form-group">
					<label>Codigo OTP</label>
					<span class="required-indicator">*</span>
					<g:textField class="form-control" id="codigoOtp" name="codigoOtp" value=""/>
				</div>
				<div class="col-lg-4 col-md-6 col-xs-12 form-group">
					<label>Plan Seleccionado</label>
					<span class="required-indicator">*</span>
					<g:select class="form-control" id="tipoPlanGestion" name="tipoPlanGestion" optionKey="key" optionValue="value" from="${['PLAN A':'PLAN A','PLAN B':'PLAN B','PLAN C':'PLAN C']}" noSelection="${['': '-- Seleccione --']}" />
				</div>
				<div class="form-group col-lg-3 col-md-6 col-xs-12">
					<label>Estado Civil</label>
					<span class="required-indicator"> *</span>
					<g:select class="form-control" id="estado_civil" name="estado_civil" from="${['SOLTERO', 'CASADO', 'DIVORCIADO', 'VIUDO', 'UNION LIBRE', 'CONCUBINATO', 'CASADO SEPAR. BIENES']}" noSelection="${['': '-- Seleccione --']}" optionValue="value"/>
				</div>
				<div class="form-group col-lg-3 col-md-6 col-xs-12">
					<label>Genero</label>
					<span class="required-indicator"> *</span>
					<g:select class="form-control" id="generoGestion" name="generoGestion" optionValue="value" optionKey="key" from="${['MASCULINO' :'MASCULINO', 'FEMENINO': 'FEMENINO']}" noSelection="${['': '-- Seleccione --']}" />
				</div>


			<%--	<div class="col-lg-12 col-md-12 col-xs-12 group-title">Dirección Asegurada</div>
				<div class="col-lg-12 col-md-12 col-xs-12 line"></div>
				<div class="col-lg-4 col-md-6 col-xs-12 form-group">
					<label>Provincia</label>
					<span class="required-indicator">*</span>
					<g:select class="form-control" name="provinciaAsegurada" id="provinciaAsegurada" from="${callcenter.Provincia.list()}" optionKey="id"
							  optionValue="${{it.nombre	}}"
							  noSelection="${['': '-- Seleccione --']}" />
				</div>
				<div class="col-lg-4 col-md-6 col-xs-12 form-group">
					<label>Ciudad</label>
					<span class="required-indicator">*</span>
					<g:select class="form-control" name="ciudadAsegurada" id="ciudadAsegurada" from="" optionKey="id"
							  optionValue="${{it.nombre	}}"
							  noSelection="${['': '-- Seleccione --']}" />
				</div>

				<div class="col-lg-4 col-md-6 col-xs-12 form-group">
					<label>Parroquia</label>
					<span class="required-indicator">*</span>
					<g:select class="form-control" name="sectorAsegurada" id="sectorAsegurada" from="" optionKey="id"
							  optionValue="${{it.nombre	}}"
							  noSelection="${['': '-- Seleccione --']}" />
				</div>
				<div class="col-lg-4 col-md-6 col-xs-12 form-group">
					<label>Calle Principal</label>
					<span class="required-indicator">*</span>
					<g:textField class="form-control" id="callePrincipalAsegurada" name="callePrincipalAsegurada"/>
				</div>

				<div class="col-lg-4 col-md-6 col-xs-12 form-group">
					<label>Nomenclatura</label>
					<span class="required-indicator">*</span>
					<g:textField class="form-control" id="numeracionAsegurada" name="numeracionAsegurada"/>
				</div>

				<div class="col-lg-4 col-md-6 col-xs-12 form-group">
					<label>Calle Transversal</label>
					<span class="required-indicator">*</span>
					<g:textField class="form-control" id="calleTransversalAsegurada" name="calleTransversalAsegurada"/>
				</div>

				<div class="col-lg-12 col-md-12 col-xs-12 form-group">
					<label>Referencia Domicilio</label>
					<span class="required-indicator">*</span>
					<g:textArea class="form-control" name="referenciaAsegurada" id="referenciaAsegurada" />
				</div>



				<div class="col-lg-12 col-md-12 col-xs-12 group-title">Dirección Entrega</div>
				<div class="col-lg-12 col-md-12 col-xs-12 line"></div>
				<div class="col-lg-4 col-md-6 col-xs-12 form-group">
					<label>Provincia</label>
					<span class="required-indicator">*</span>
					<g:select class="form-control" name="provinciaEntrega" id="provinciaEntrega" from="${callcenter.Provincia.list()}" optionKey="id"
							  optionValue="${{it.nombre	}}"
							  noSelection="${['': '-- Seleccione --']}" />
				</div>
				<div class="col-lg-4 col-md-6 col-xs-12 form-group">
					<label>Ciudad</label>
					<span class="required-indicator">*</span>
					<g:select class="form-control" name="ciudadEntrega" id="ciudadEntrega" from="" optionKey="id"
							  optionValue="${{it.nombre	}}"
							  noSelection="${['': '-- Seleccione --']}" />
				</div>

				<div class="col-lg-4 col-md-6 col-xs-12 form-group">
					<label>Parroquia</label>
					<span class="required-indicator">*</span>
					<g:select class="form-control" name="sectorEntrega" id="sectorEntrega" from="" optionKey="id"
							  optionValue="${{it.nombre	}}"
							  noSelection="${['': '-- Seleccione --']}" />
				</div>
				<div class="col-lg-4 col-md-6 col-xs-12 form-group">
					<label>Calle Principal</label>
					<span class="required-indicator">*</span>
					<g:textField class="form-control" id="callePrincipalEntrega" name="callePrincipalEntrega"/>
				</div>

				<div class="col-lg-4 col-md-6 col-xs-12 form-group">
					<label>Nomenclatura</label>
					<span class="required-indicator">*</span>
					<g:textField class="form-control" id="numeracionEntrega" name="numeracionEntrega"/>
				</div>

				<div class="col-lg-4 col-md-6 col-xs-12 form-group">
					<label>Calle Transversal</label>
					<span class="required-indicator">*</span>
					<g:textField class="form-control" id="calleTransversalEntrega" name="calleTransversalEntrega"/>
				</div>

				<div class="col-lg-12 col-md-12 col-xs-12 form-group">
					<label>Referencia Domicilio</label>
					<span class="required-indicator">*</span>
					<g:textArea class="form-control" name="referenciaEntrega" id="referenciaEntrega" />
				</div>
				<div class="col-lg-3 col-md-6 form-group">
					<label>Hora Entrega</label>
					<span class="required-indicator">*</span>

					<g:select class="form-control" name="horaEntrega" id="horaEntrega" from="${['08:00 A 14:00 HORAS':'08:00 A 14:00 HORAS', '14:00 A 17:00 HORAS':'14:00 A 17:00 HORAS']}" optionKey="key"
							  optionValue="value"
							  noSelection="${['': '-- Seleccione --']}" />
				</div>--%>



				<%--	<div class="col-lg-4 col-md-4 form-group">
                        <label>Entrega</label>
                        <span class="required-indicator">*</span>
                        <g:select class="form-control" name="entrega" id="entrega" from="${['DOMICILIO':'Domicilio', 'TRABAJO':'Trabajo']}" optionKey="key"
                                  optionValue="value"
                                  noSelection="${['': '-- Seleccione --']}" />
                    </div>


                    <div class="col-lg-4 col-md-4 form-group">
                        <label>Tlf Contacto Domicilio</label>
                        <span class="required-indicator">*</span>
                        <g:textField class="form-control" id="telefonoDomContacto" name="telefonoDomContacto" maxlength="9" minlength="9"/>
                    </div>
                    <div class="col-lg-4 col-md-4 form-group">
                        <label>Tlf Contacto Trabajo</label>
                        <span class="required-indicator">*</span>
                        <g:textField class="form-control" id="telefonoTrabContacto" name="telefonoTrabContacto" maxlength="9" minlength="9"/>
                    </div>
                        <div class="col-lg-4 col-md-4 form-group">
                            <label>Celular Contacto</label>
                            <span class="required-indicator">*</span>
                            <g:textField class="form-control" id="celularContacto" name="celularContacto" maxlength="10" minlength="10" />
                        </div>--%>

			</div>

			<%--<div id="adicionalesPanel" class="panel panel-default col-lg-12 col-md-12 col-xs-12">
				<div class="col-lg-12 col-md-12 col-xs-12 form-group">
					<button id="btnAdicional" type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Agregar Producto <span class="fa fa-fw fa-plus"></span> </button>
				</div>
				<div id="contenedorAdicionales">
					<input type="hidden" value="" id="hidenAdicionales" name="hidenAdicionales">
					<table id="tablaAdicionales" class="table-bordered table-responsive col-lg-12 col-md-12 col-xs-12">
						<thead>
						<tr>
							<th>Producto Seleccionado</th>
							<th>Plan Seleccionado</th>
							<th>Valor</th>
							<th>Acciones</th>
						</tr>
						</thead>
						<tbody id="bodyTablaAdicionales"></tbody>
					</table>
				</div>
			</div>--%>
		</div>


		<div class="panel panel-default col-lg-12 col-md-12 col-xs-12">
			<div class="col-lg-12 col-md-12 form-group">
				<label>Observaciones</label>
				<g:textArea class="form-control" id="observacionesGestion" name="observacionesGestion" value="${cliente.observaciones}"/>
			</div>
		</div>

		<div id="btnGuardarGestionDiv" class="col-lg-12 col-md-12 col-xs-12">
			<input type="submit" id="btnGuardarGestion" name="btnGuardarGestion" type="button" class="btn btn-success" value="Guardar Gestión" />
		</div>
	<%--<button class="btn btn-info" id="btnGuardarAPI" name="btnGuardarAPI">Validar Pago</button>--%>

	</g:form>

</div>




<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
	<div class="modal-dialog" role="document">
		<div class="modal-content">
			<div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel">Agregar Producto</h4>
			</div>
			<div class="modal-body">
				<form id="formAdicional" action="/Adicionales/adicional/save" method="post">
					<fieldset class="form">

						<%--<div class="fieldcontain  required form-group col-lg-6">
							<label for="cedula">
								Cedula
								<span class="required-indicator">*</span>
							</label>
							<input class="form-control" type="text" name="cedula" required="" value="" id="cedula" maxlength="10">
						</div>
						<div class="fieldcontain  required form-group col-lg-6">
							<label for="primerNombre">
								Primer Nombre
								<span class="required-indicator">*</span>
							</label>
							<input class="form-control" type="text" name="primerNombre" required="" value="" id="primerNombre">
						</div>

						<div class="fieldcontain form-group col-lg-6">
							<label for="segundoNombre">
								Segundo Nombre
							</label>
							<input class="form-control" type="text" name="segundoNombre" value="" id="segundoNombre">
						</div>

						<div class="fieldcontain  required form-group col-lg-6">
							<label for="primerApellido">
								Primer Apellido
								<span class="required-indicator">*</span>
							</label>
							<input class="form-control" type="text" name="primerApellido" required="" value="" id="primerApellido">
						</div>

						<div class="fieldcontain form-group col-lg-6">
							<label for="segundoApellido">
								Segundo Apellido
							</label>
							<span class="required-indicator">*</span>
							<input class="form-control" type="text" name="segundoApellido" value="" id="segundoApellido">
						</div>

						<div class="fieldcontain form-group col-lg-6">
							<label for="nombreTarjeta">
								Nombre Tarjeta
							</label>
							<span class="required-indicator">*</span>
							<input class="form-control" type="text" name="nombreTarjeta" value="" id="nombreTarjeta" maxlength="20">
						</div>

						<div class="fieldcontain form-group col-lg-6">
							<label for="cupoOtorgado">
								Cupo Otorgado
							</label>
							<span class="required-indicator">*</span>
							<input class="form-control" type="text" name="cupoOtorgado" value="" id="cupoOtorgado" maxlength="19">
						</div>--%>

						<div class="fieldcontain  required form-group col-lg-6">
							<label for="producto">
								Producto
								<span class="required-indicator">*</span>
							</label>
							<g:select class="form-control" name="producto" from="${['Negocio Protegido PYME-Estructura', 'Negocio Protegido PYME-Contenido']}" noSelection="${['': '-- Seleccione --']}" />
						</div>

						<div class="fieldcontain  required form-group col-lg-6">
							<label for="plan">
								Plan
								<span class="required-indicator">*</span>
							</label>
							<g:select class="form-control" id="plan" name="plan" optionKey="nombre" noSelection="${['': '-- Seleccione --']}" from="" />
						</div>
						<div class="fieldcontain form-group col-lg-6">
							<label for="valor">
								Valor
								<span class="required-indicator">*</span>
							</label>
							<input class="form-control" type="text" name="valor" value="" id="valor" maxlength="19" onkeypress="return soloLetras(event)">
						</div>

						<%--
                                                <div class="fieldcontain  required form-group col-lg-6">
                                                    <label for="parentesco">
                                                        Parentesco
                                                        <span class="required-indicator">*</span>
                                                    </label>
                                                    <g:select class="form-control" name="parentesco" from="${callcenter.Parentesco.findAllByIsActive(true)}" optionKey="nombre"
                                                              optionValue="${{it.nombre	}}" noSelection="${['': '-- Seleccione --']}" />
                                                </div>
                                                <div class="fieldcontain  required form-group col-lg-6">
                                                    <label for="fechaNacimiento">
                                                        Fecha Nacimiento
                                                        <span class="required-indicator">*</span>
                                                    </label>
                                                    <input type="text" name="fechaNacimiento" required="" value="" id="fechaNacimiento" class="datepicker form-control pointer" onkeypress="return validarSiSoloLetras(event)">

                                                </div>

                                                <div class="fieldcontain  required form-group col-lg-6">
                                                    <label for="nacionalidad">
                                                        Nacionalidad
                                                        <span class="required-indicator">*</span>
                                                    </label>
                                                    <g:select class="form-control" id="nacionalidadSelect" name="nacionalidadSelect" optionKey="key" optionValue="value" from="${['ECUATORIANA':'ECUATORIANA','VENEZOLANA':'VENEZOLANA','CUBANA':'CUBANA', 'COLOMBIANA':'COLOMBIANA', '': 'OTRA']}" />
                                                </div>

                                                <div id="nacionalidadDiv" class="fieldcontain  required form-group col-lg-6">
                                                    <label for="nacionalidad">
                                                        Especifique
                                                        <span class="required-indicator">*</span>
                                                    </label>
                                                    <input class="form-control" type="text" name="nacionalidad" required="" value="ECUATORIANA" id="nacionalidad">
                                                </div>

                                                <div class="fieldcontain  required form-group col-lg-6">
                                                    <label for="correo">
                                                        Correo Electrónico
                                                        <span class="required-indicator">*</span>
                                                    </label>
                                                    <input class="form-control" type="text" name="correo" value="" id="correo">
                                                </div>

                                                <div class="fieldcontain form-group col-lg-6">
                                                    <label for="telefonoCelular">
                                                        Teléfono Celular
                                                    </label>
                                                    <span class="required-indicator">*</span>
                                                    <input class="form-control" type="text" name="telefonoCelular" value="" id="telefonoCelular" maxlength="10">
                                                </div>

                                                <div class="fieldcontain  required form-group col-lg-6">
                                                    <label for="nacionalidad">
                                                        Producto Aceptado
                                                        <span class="required-indicator">*</span>
                                                    </label>
                                                    <g:select class="form-control" optionValue="value"  id="productoAceptado" name="productoAceptado" from="${utilitarios.Util.getProductos(cliente.id)}" noSelection="${['': '-- Seleccione --']}" />
                                                </div>

                                                <div class="fieldcontain  required form-group col-lg-6">
                                                    <label for="nacionalidad">
                                                        Tipo Tarjeta
                                                        <span class="required-indicator">*</span>
                                                    </label>
                                                    <g:select class="form-control" id="tipoTarjeta" name="tipoTarjeta" optionKey="key" optionValue="value" from="${['KIDS':'KIDS','FREEDOM':'FREEDOM','DINERS CLUB':'DINERS CLUB', 'VISA':'VISA']}" />
                                                </div>
                                                <div class="fieldcontain  required form-group col-lg-6">
                                                    <label for="gestionLinea">
                                                        Gestión en Línea
                                                        <span class="required-indicator">*</span>
                                                    </label>
                                                    <g:select class="form-control" id="gestionLinea" name="gestionLinea" optionKey="key" optionValue="value" from="${['SI':'SI','NO':'NO']}" noSelection="${['': '-- Seleccione --']}" />
                                                </div>

                                                <div id="gestionLineaDiv" class="fieldcontain  required form-group col-lg-6">
                                                    <label for="nacionalidad">
                                                        Codigo OTP
                                                        <span class="required-indicator">*</span>
                                                    </label>
                                                    <input class="form-control" type="text" name="codigoOtp" required="" value="" id="codigoOtp">
                                                </div>

                                                <div class="fieldcontain  required col-lg-12 form-group">
                                                    <label for="observaciones">
                                                        Observaciones
                                                    </label>
                                                    <input class="form-control" type="text" name="observaciones" required="" value="" id="observaciones">
                                                </div>--%>
					</fieldset>
				</form>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
				<button type="button" class="btn btn-primary" id="btnGuardarAdicional">Agregar</button>
			</div>
		</div>
	</div>
</div>

<asset:javascript src="usogeneral/objetos.js" />
<asset:javascript src="gestion/gestionCliente1.js" />
<asset:stylesheet src="usogeneral/datetimepicker.css" />
<asset:javascript src="usogeneral/datetimepicker.js" />
<asset:javascript src="usogeneral/customdatetimepicker.js" />
<asset:javascript src="usogeneral/bootstrap-datepicker.min.js" />
<asset:javascript src="usogeneral/customdatepicker.js" />
<asset:javascript src="usogeneral/bootstrap-datepicker.es.min.js" />