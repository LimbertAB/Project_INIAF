GET_ID_UPDATE=0;
GET_ID_UPDATESALIDA=0;
PARTIDA_LENGTH=0;
function modificarestado(id,modelo,tag){
  var token=document.getElementsByName('csrfmiddlewaretoken')[0].value;
  var checked_estado="baja",estado=0;
  if($('#customSwitch'+id).prop('checked')){
    estado=1;
    var checked_estado="alta";
  }
  Swal.fire({
    title: modelo+' se dara de '+checked_estado,text: "desea guardar los cambios?",
    type: 'warning',confirmButtonColor: '#3085d6',confirmButtonText: 'Aceptar'
  }).then((result) => {
    if(result.value){
      $.ajax({
        url: '/usuario/baja/',
        type: 'POST',
        data:{'estado':estado,'id':id,'modelo':modelo,'csrfmiddlewaretoken':token},
        datatype: 'json'
      }).done(function(obj){
        if (obj.estado) {
          showNotification('bottom','left','success',modelo+' modificado satisfactoriamente');
          if(estado==0){
            $('#row'+id).css('background','#303a56');
          }else{
            $('#row'+id).css('background','#1c2337');
          }
        } else {
          $('#customSwitch'+id).prop("checked", !$('#customSwitch'+id).prop("checked"))
          Swal.fire('ERROR','Ocurrio un problema con la conexión','error');
        }
      }).fail(function(){
        $('#customSwitch'+id).prop("checked", !$('#customSwitch'+id).prop("checked"))
        Swal.fire('ERROR','Ocurrio un problema con la conexión','error');
      });
    }else{
    }
  })
}
function showNotification(from, align,type,message){
  $.notify({
      icon: "add_alert",
      message: message
  },{
    type: type,
    timer: 4000,
    placement: {
        from: from,
        align: align
    }
  });
}
function verprograma(id){
  $.ajax({
    url: '/programa/listar/'+id+'/',
    type: 'GET',
    datatype: 'json'
  }).done(function(obj){
    GET_ID_UPDATE=obj.id;
    $('#UpdateModal input[name="nombre"]').val(obj.nombre);
    $('#UpdateModal input[name="proyecto"]').val(obj.proyecto);
    $('#UpdateModal input[name="descripcion"]').val(obj.descripcion);
    $('#UpdateModal input[name="actividad"]').val(obj.actividad);
    $('#UpdateModal input').focus();
  }).fail(function(){
    showNotification('bottom','left','error','Error Server: verifique su conexion con el servidor');
  });
}
$(function(){
  $('[data-toggle="tooltip"]').tooltip();
  $("#main").click(function() {
    $("#mini-fab").toggleClass('hidden');
  });
  // Ajax - registrar programa
  $('#form_registroprograma .btn_registro_programa').click(function(e){
    var valid= this.form.checkValidity();
    $('#valid').html(valid);
    if (valid) {
      $(this).attr('disabled',true);
      e.preventDefault();
      console.log("hizo click");
      var parametros=new FormData($("#form_registroprograma")[0]);
      $.ajax({
        data: parametros,
        url: '/programa/modificar/'+GET_ID_UPDATE+'/',
        type: "POST",
        contentType:false,
        processData:false,
        datatype: 'json'
      }).done(function(data){
        console.log(data);
        if (data.estado == 1) {
          Swal.fire({
            title: "Felicidades",text: "datos modificados satisfactoriamente",
            type: 'success',confirmButtonColor: '#3085d6',confirmButtonText: 'Aceptar'
          }).then((result) => {
            if(result.value){
              location.reload();
            }
          })
        }else{
          showNotification('bottom','left','danger','Error Server: llene los datos correctamente');
        }
      }).fail(function(){
        showNotification('bottom','left','danger','Error Server: verifique su conexion con el servidor');
      });
    }
  });
  //___________________MODULO FORMULARIO________________
  // modificar formulario f15
  $('#form_modificarformulario .btnmodificarformulario').click(function(e){
    var valid= this.form.checkValidity();
    $('#valid').html(valid);
    if (valid) {
      $(this).attr('disabled',true);
      e.preventDefault();
      console.log("hizo click modificar formulario"+GET_ID_UPDATE);
      var parametros=new FormData($("#form_modificarformulario")[0]);
      $.ajax({
        data: parametros,
        url: '/formulario/modificar/'+GET_ID_UPDATE+'/',
        type: "POST",
        contentType:false,
        processData:false,
        datatype: 'json'
      }).done(function(data){
        console.log(data);
        if (data.estado == 1) {
          Swal.fire({
            title: "Felicidades",text: "datos modificados satisfactoriamente",
            type: 'success',confirmButtonColor: '#3085d6',confirmButtonText: 'Aceptar'
          }).then((result) => {
            if(result.value){
              $('#verformulariomodal,#modificarformulariomodal').modal('toggle');
              ver_formulario_ajax(GET_ID_UPDATE,'formulario',"ver");
            }
          })
        }else{
          showNotification('bottom','left','danger','Error Server: llene los datos correctamente');
        }
      }).fail(function(){
        showNotification('bottom','left','danger','Error Server: verifique su conexion con el servidor');
      });
    }
  });
  //consulta partidas de un programa para crear  modificar f15
  $('select[name="id_programa"]').on('change', function(){
    var id=$(this).val();
    var token=document.getElementsByName('csrfmiddlewaretoken')[0].value;
    $('#tabla_partida tbody,#tabla_liquidacion tbody').empty();
    $.ajax({
      url: '/formulario/consultar/',
      type: 'POST',
      data:{
        'action':'search_partida_id',
        'id': id,
        'csrfmiddlewaretoken':token
      },
      dataType: 'json',
    }).done(function (data){
      PARTIDA_LENGTH=data.length;
      console.log(data);
      if(!data.hasOwnProperty('error')){
        $.each(data, function (key, value){
          $('#tabla_partida tbody').append('<tr><td><input name="id_partida_id[]" required type="hidden" value="'+value.id+'">'+value.numero+'</td><td>'+value.glosa_dos+'</td><td><input name="cantidad[]" required type="number" onkeyup="cambios_inputtabla_formulario('+value.id+')" class="form-control pl-md-2 tabla1_cantidad'+value.id+'" style="background:#dedede;color:#313131" value="1"></td><td>'+value.unidad+'</td><td><input name="precio_unitario[]" required type="number" class="form-control pl-2 tabla1_preciounitario'+value.id+'" onkeyup="cambios_inputtabla_formulario('+value.id+','+1+')" style="background:#dedede;color:#313131"></td><td class="tabla1_total'+value.id+'">0</td></tr>');
          $('#tabla_liquidacion tbody').append('<tr><td>'+value.numero+'</td><td>'+value.glosa_uno+'</td><td><input name="unidad_liquidacion[]" required type="text" class="form-control pl-md-2" style="background:#dedede;color:#313131" value=""></td><td class="tabla2_cantidad'+value.id+'">0</td><td class="tabla2_preciounitario'+value.id+'">0</td><td class="tabla2_requerimiento'+value.id+'">0</td><td class="tabla2_retenciones'+value.id+'">0</td><td class="tabla2_liquido'+value.id+'">0</td></tr>');
        });
        $('#tabla_partida tbody').append('<tr><td colspan="6" style="text-align:right"><h4 style="margin:0">TOTAL: <small class="tabla1_total">0</small></h4></td></tr>');
        $('#tabla_liquidacion tbody').append('<tr><td colspan="8" style="text-align:right"><h4 style="margin:0">TOTAL: <small class="tabla2_total">0</small></h4></td></tr>');
        return false;
      }
      message_error(data.error);
    }).fail(function(jqXHR, textStatus, errorThrown){
      console.log(textStatus + ':' + errorThrown);
    }).always(function(data){
    });
  }); 

  //____________________MODULO SALIDA_____________
  // ajax - crear salida
  $('#form_registrosalida .btn_registrar_salida').click(function(e){
    console.log("hizo click en guarda salida");
    var valid= this.form.checkValidity();
    $('#valid').html(valid);
    if (valid) {
      $(this).attr('disabled',true);
      e.preventDefault();
      console.log("paso la validacion");
      var parametros=new FormData($("#form_registrosalida")[0]);
      console.log(parametros)
      $.ajax({
        data: parametros,
        url: '/salida/crear_sal/',
        type: "POST",
        contentType:false,
        processData:false,
        datatype: 'json'
      }).done(function(data){
        console.log(data);
        if (data.estado == 1) {
          Swal.fire({
            title: "Felicidades",text: "formulario de salida creado satisfactoriamente",
            type: 'success',confirmButtonColor: '#3085d6',confirmButtonText: 'Aceptar'
          }).then((result) => {
            if(result.value){
              window.location = '/formulario/'
              
            }
          })
        }else{
          showNotification('bottom','left','danger','Error Server: llene los datos correctamente');
        }
      }).fail(function(){
        showNotification('bottom','left','danger','Error Server: verifique su conexion con el servidor');
      });
    }
  });
  // ajax - modifica salida
  $('#actualizar_salida_modal .btnmodificarsalida').click(function(e){
    var valid= this.form.checkValidity();
    $('#valid').html(valid);
    console.log("estas en el camino correcto");
    if (valid) {
      console.log("has pasado la validacion");
      e.preventDefault();
      var parameter=new FormData($("#form_modificar_salida")[0]);
      console.log(parameter);
      $.ajax({
        data: parameter,
        url: '/salida/modificar_salida/'+GET_ID_UPDATESALIDA+'/',
        type: "POST",
        contentType:false,
        processData:false,
        datatype: 'json',
      }).done(function(data){
        console.log(data);
        
        if (data.estado == 1) {
          Swal.fire({
            title: "Felicidades",text: "datos modificados satisfactoriamente",
            type: 'success',confirmButtonColor: '#3085d6',confirmButtonText: 'Aceptar'
          }).then((result) => {
            if(result.value){
              ver_formulario_ajax(GET_ID_UPDATESALIDA,"salida")
              $('#eliminar_salida_modal,#actualizar_salida_modal').modal('toggle')
            }
          })
 
        }else{
          showNotification('bottom','left','danger','Error Server: llene los datos correctamente');
        }
      }).fail(function(){
        showNotification('bottom','left','danger','Error Server: verifique su conexion con el servidor ');
      });
    }
  });
  //ajax eliminar salida
  $('#eliminar_salida_modal .btneliminarsalida').click(function(e){
    Swal.fire({
      title: "Desea Eliminar La Papeleta de Salida",
      type: 'warning',confirmButtonColor: '#3085d6',confirmButtonText: 'Aceptar'
    }).then((result) => {
      if(result.value){
        e.preventDefault();
        $.ajax({
          data:{
            csrfmiddlewaretoken:$("[name='csrfmiddlewaretoken']").val()
          },
          url: '/salida/eliminar_salida/'+GET_ID_UPDATESALIDA+'/',
          type: "POST",
        }).done(function(data){
            console.log(data);
            console.log("llegaste al done")
            if (data.estado == 1) {
              location.reload();
              showNotification('bottom','left','success','La eliminacion fue en exito');
              $('#eliminar_salida_modal').modal('toggle')
              
            }else{
              showNotification('bottom','left','danger','Error Server: llene los datos correctamente');
            }
        }).fail(function(){
          showNotification('bottom','left','danger','Error Server: verifique su conexion con el servidor ');
        });
      }else{

      }
    })
  });
  
  // CRUD MENSAJE
  $('#registrar_mensaje .btnregistrarmensaje').click(function(e){
    console.log("hizo click en guarda salida");
    var valid= this.form.checkValidity();
    $('#valid').html(valid);
    if (valid) {
      var token=document.getElementsByName('csrfmiddlewaretoken')[0].value;
      e.preventDefault();
      console.log("paso la validacion");
      var parametros=new FormData($("#registrar_mensaje")[0]);
      parametros.append('csrfmiddlewaretoken',token);
      $.ajax({
        data: parametros,
        url: '/mensaje/',
        cache:false,
        method: "POST",
        type: "POST",
        contentType:false,
        processData:false,
        datatype: 'json'
      }).done(function(data){
        console.log(data);
        if (data.estado == 1) {
          Swal.fire({
            title: "Felicidades",text: "Mensaje enviado satisfactoriamente",
            type: 'success',confirmButtonColor: '#3085d6',confirmButtonText: 'Aceptar'
          }).then((result) => {
            if(result.value){
              $('#Modalmensaje').modal('toggle');
            }
          })
        }else{
          showNotification('bottom','left','danger','Error Server: llene los datos correctamente');
        }
      }).fail(function(){
        showNotification('bottom','left','danger','Error Server: verifique su conexion con el servidor');
      });
    }
  });
  
});
//registra modelos como programa, partida vehiculo
function Registro_Object(id,modelo,tag){
  var token=document.getElementsByName('csrfmiddlewaretoken')[0].value;
  var checked_estado="baja",estado=0;
  if($('#customSwitch'+id).prop('checked')){
    estado=1;
    var checked_estado="alta";
  }
  Swal.fire({
    title: modelo+' se dara de '+checked_estado,text: "desea guardar los cambios?",
    type: 'warning',confirmButtonColor: '#3085d6',confirmButtonText: 'Aceptar'
  }).then((result) => {
    if(result.value){
      $.ajax({
        url: '/usuario/baja/',
        type: 'POST',
        data:{'estado':estado,'id':id,'modelo':modelo,'csrfmiddlewaretoken':token},
        datatype: 'json'
      }).done(function(obj){
        if (obj.estado) {
          showNotification('bottom','left','success',modelo+' modificado satisfactoriamente');
          if(estado==0){
            $('#row'+id).css('background','#303a56');
          }else{
            $('#row'+id).css('background','#1c2337');
          }
        } else {
          $('#customSwitch'+id).prop("checked", !$('#customSwitch'+id).prop("checked"))
          Swal.fire('ERROR','Ocurrio un problema con la conexión','error');
        }
      }).fail(function(){
        $('#customSwitch'+id).prop("checked", !$('#customSwitch'+id).prop("checked"))
        Swal.fire('ERROR','Ocurrio un problema con la conexión','error');
      });
    }else{
    }
  })
}
//Ajax - ver formulario (salida - formulario f15)
function ver_formulario_ajax(id,tabla,accion){ // 1,"formulario|salida","ver|modificar|pdf"
  $.ajax({
    url: '/'+tabla+'/ver/'+id+'/',
    type: 'GET',
    datatype: 'json'
  }).done(function(obj){
    console.log(obj);
    if(tabla=="formulario"){
      console.log(accion);
      $('#tabla_liquidacion tbody,#tabla_partida tbody,#section_recurso tbody,#section_liquidacion tbody').empty();
      accion=='ver'?modal_verformulario(obj):(accion=='pdf'?formulario_pdf(obj):modal_modificarformulario(obj));
    }else{
      if (accion=="pdf"){
        graficarpdfsalida(obj);
      }else{
        modal_vermodificar_salida(obj);
      }
    }
  }).fail(function(){
    showNotification('bottom','left','error','Error Server: verifique su conexion con el servidor');
  });
}
//modal - ver formulario f15
function modal_verformulario(obj){
  // SECTION CABECERA
  $('.vusuario').text(obj.usuario);
  $('.vnumero').text(obj.numero);
  $('.vfecha').text(obj.fecha);
  $('.vestado').text(obj.estado?"No Aprobado":"Aprobado");
  
  // SECTION GENERAL
  $('.vlugar').text(obj.lugar);
  $('.vfecha_salida').text(obj.fecha_salida);
  $('.vfecha_llegada').text(obj.fecha_llegada);
  $('.vnumero_memo').text(obj.numero_memo);
  $('.vresolucion_administrativa').text(obj.resolucion_administrativa);
  $('.vdescripcion').text(obj.descripcion);
  $('.vobservacion').text(obj.observacion);
  
  // SECTION VEHICULO
  $('.vvehiculoestado small').text(obj.vehiculo.estado?"Activo":"Inactivo");
  $('.vcombustible small').text(obj.combustible);
  $('.vplaca small').text(obj.vehiculo.placa);
  $('.vtipo').text(obj.vehiculo.tipo);
  $('.vmarca').text(obj.vehiculo.marca);
  $('.vmodelo').text(obj.vehiculo.modelo);
  $('.vkilometraje small').text(obj.kilometraje);
  $('.vkilometraje_viaje small').text(obj.kilometraje_viaje);
  $('.vrendimiento small').text(obj.vehiculo.rendimiento);
  $('#verformulariomodal .modal-footer .btn-info').attr('onclick', 'ver_formulario_ajax('+obj.id+',"formulario","modificar");');
  $('#verformulariomodal .modal-footer .btn-primary').attr('onclick', 'ver_formulario_ajax('+obj.id+',"formulario","pdf");');
  
  var tabla1=0,tabla2=0;
  partida=obj.partida;recurso=obj.recurso;
  for (let i = 0; i < recurso.length; i++) {
    const element = recurso[i];
    var totalfila=recurso[i].cantidad*recurso[i].precio_unitario;
    var porcentaje=(totalfila*0.13).toFixed(1);
    tabla1=tabla1+totalfila;
    tabla2=tabla2+(totalfila-porcentaje);
    $('#section_recurso tbody').append('<tr><th scope="row">'+partida[i].numero+'</th><td>'+partida[i].glosa_dos+'</td><td>'+recurso[i].cantidad+'</td><td>'+partida[i].unidad+'</td><td>'+recurso[i].precio_unitario+'</td><td>'+totalfila+'</td></tr>');
    $('#section_liquidacion tbody').append('<tr><th scope="row">'+partida[i].numero+'</th><td>'+partida[i].glosa_uno+'</td><td>'+recurso[i].unidad_liquidacion+'</td><td>'+recurso[i].cantidad+'</td><td>'+recurso[i].precio_unitario+'</td><td>'+totalfila+'</td><td>'+porcentaje+'</td><td>'+(totalfila-porcentaje)+'</td></tr>');     
  }
  $('#section_recurso tbody').append('<tr><td colspan="6" style="text-align:right"><h4 style="margin:0">TOTAL: <small>'+tabla1+'</small></h4></td></tr>');
  $('#section_liquidacion tbody').append('<tr><td colspan="8" style="text-align:right"><h4 style="margin:0">TOTAL: <small>'+tabla2+'</small></h4></td></tr>');
}
//modal - modificar formulario
function modal_modificarformulario(obj){
  GET_ID_UPDATE=obj.id;
  $('#modificarformulariomodal').modal('toggle');
  console.log(obj);
  $('#modificarformulariomodal input[name="combustible"]').val(obj.combustible);
  $('#modificarformulariomodal textarea[name="descripcion"]').val(obj.descripcion);
  $('#modificarformulariomodal input[name="fecha"]').val(obj.fecha);
  $('#modificarformulariomodal input[name="kilometraje"]').val(obj.kilometraje);
  $('#modificarformulariomodal input[name="kilometraje_viaje"]').val(obj.kilometraje_viaje);
  $('#modificarformulariomodal input[name="lugar"]').val(obj.lugar);
  $('#modificarformulariomodal input[name="numero"]').val(obj.numero);
  $('#modificarformulariomodal input[name="numero_memo"]').val(obj.numero_memo);
  $('#modificarformulariomodal input[name="observacion"]').val(obj.observacion);
  $('#modificarformulariomodal input[name="resolucion_administrativa"]').val(obj.resolucion_administrativa);
  $('#modificarformulariomodal input[name="fecha_salida"]').val(obj.fecha_salida.substring(0,10)+" "+ obj.fecha_salida.substring(11,16));
  $('#modificarformulariomodal input[name="fecha_llegada"]').val(obj.fecha_llegada.substring(0,10)+" "+ obj.fecha_llegada.substring(11,16));
  $('#modificarformulariomodal select[name=id_programa] option[value='+obj.id_programa_id+']').prop('selected', true);
  var tabla1=0,tabla2=0,recurso=obj.recurso,partida=obj.partida;PARTIDA_LENGTH=recurso.length;
  for (let i = 0; i < recurso.length; i++) {
    const element = recurso[i];
    var totalfila=recurso[i].cantidad*recurso[i].precio_unitario;
    var porcentaje=(totalfila*0.13).toFixed(1);
    tabla1=tabla1+totalfila;
    tabla2=tabla2+(totalfila-porcentaje);
      
    $('#tabla_liquidacion tbody').append('<tr><td>'+partida[i].numero+'</td><td>'+partida[i].glosa_uno+'</td><td><input name="unidad_liquidacion[]" required type="text" class="form-control pl-md-2" style="background:#dedede;color:#313131" value="'+recurso[i].unidad_liquidacion+'"></td><td class="tabla2_cantidad'+recurso[i].id+'">'+recurso[i].cantidad+'</td><td class="tabla2_preciounitario'+recurso[i].id+'">'+recurso[i].precio_unitario+'</td><td class="tabla2_requerimiento'+recurso[i].id+'">'+totalfila+'</td><td class="tabla2_retenciones'+recurso[i].id+'">'+porcentaje+'</td><td class="tabla2_liquido'+recurso[i].id+'">'+(totalfila-porcentaje)+'</td></tr>');
    $('#tabla_partida tbody').append('<tr><td><input name="id_recurso[]" required type="hidden" value="'+recurso[i].id+'">'+partida[i].numero+'</td><td>'+partida[i].glosa_dos+'</td><td><input name="cantidad[]" required type="number" onkeyup="cambios_inputtabla_formulario('+recurso[i].id+')" class="form-control pl-md-2 tabla1_cantidad'+recurso[i].id+'" style="background:#dedede;color:#313131" value="'+recurso[i].cantidad+'"></td><td>'+partida[i].unidad+'</td><td><input name="precio_unitario[]" required type="number" class="form-control pl-2 tabla1_preciounitario'+recurso[i].id+'" onkeyup="cambios_inputtabla_formulario('+recurso[i].id+','+1+')" style="background:#dedede;color:#313131" value="'+recurso[i].precio_unitario+'"></td><td class="tabla1_total'+recurso[i].id+'">'+totalfila+'</td></tr>');
  }
  $('#tabla_partida tbody').append('<tr><td colspan="6" style="text-align:right"><h4 style="margin:0">TOTAL: <small class="tabla1_total">'+tabla1+'</small></h4></td></tr>');
  $('#tabla_liquidacion tbody').append('<tr><td colspan="8" style="text-align:right"><h4 style="margin:0">TOTAL: <small class="tabla2_total">'+tabla2+'</small></h4></td></tr>');
  
}
//modal - modificar salida
function modal_vermodificar_salida(obj){
  console.log(obj);
  GET_ID_UPDATESALIDA= obj.id;
  $('#mitabla .nombre_salida').text(obj.nombre)
  $('#mitabla .motivo_salida').text(obj.motivo)
  $('#mitabla .fecha_salida').text(obj.fecha_salida)
  $('#mitabla .tiempo_salida').text(obj.tiempo)
  $('#eliminar_salida_modal .modal-footer .btn-success').attr('onclick', 'ver_formulario_ajax('+obj.id+',"salida","pdf");');
  $('#actualizarModal .fecha_salida').val(obj.fecha_salida.substring(0,10)+" "+ obj.fecha_salida.substring(11,16));
  $('#actualizarModal .fecha_retorno').val(obj.fecha_retorno.substring(0,10)+" "+ obj.fecha_retorno.substring(11,16));
  $('#actualizarModal .editar_tiempo').val(obj.tiempo)
  $('#actualizarModal .editar_motivo').val(obj.motivo)
}

function cambios_inputtabla_formulario(fila){
  
  var cantidad=$('.tabla1_cantidad'+fila).val();
  var precio=$('.tabla1_preciounitario'+fila).val();
  var total=cantidad*precio;
  $('.tabla1_total'+fila).text(total);
  $('.tabla2_cantidad'+fila).text(cantidad);
  $('.tabla2_preciounitario'+fila).text(precio);
  $('.tabla2_requerimiento'+fila).text(total);
  $('.tabla2_retenciones'+fila).text((total*0.13).toFixed(1));
  $('.tabla2_liquido'+fila).text(total-(total*0.13));
  
  
  var tabla2_total=0,tabla1_total=0;
  for (let i = 0; i < $('#tabla_partida tbody')[0].rows.length-1; i++) {
    var number=$('#tabla_partida tbody')[0].rows[i].getElementsByTagName("td")[5].innerText;
    var number2=$('#tabla_liquidacion tbody')[0].rows[i].getElementsByTagName("td")[7].innerText;
    tabla1_total=tabla1_total+parseFloat(number);
    tabla2_total=tabla2_total+parseFloat(number2);
  }
  $('.tabla1_total').text(tabla1_total);
  $('.tabla2_total').text(tabla2_total);
}

function cerrarmodal(){
  $('#eliminar_salida_modal').modal('toggle');
}