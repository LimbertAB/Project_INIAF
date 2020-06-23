GET_ID_UPDATE=0;
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
  $('#wizard-subm').click(function(e){
    var valid= this.form.checkValidity();
    $('#valid').html(valid);
    if (valid) {
      $(this).attr('disabled',true);
      e.preventDefault();//--> para que no se regargue la pagina
      var parametros=new FormData($("#form_registroactivo")[0]);
      $.ajax({
        data: parametros,
        url: '../controller/InventarioController.php/crear/1',
        type: "POST",
        contentType:false,
        processData:false
      }).done(function(obj){
        data=JSON.parse(obj);
        if (data.estado == 1) {
          $('#registraractivoModal').modal('hide');
          var codigo=leftpad(data.id,5);
          Get_IDENTIFY=data.id;
          $('#updatecodigo_modal .vcodigoasignado').text("25-"+codigo);
          $('#updatecodigo_modal').modal('show');
        }else{
          $('#wizard-subm').attr('disabled',false);
          Swal.fire('ERROR','Ocurrio un problema con la conexión','error')
        }
      }).fail(function(){
        $('#wizard-subm').attr('disabled',false);
        Swal.fire('ERROR','Ocurrio un problema con la conexión','error')
      });
    }
  });

  $("#main").click(function() {
    $("#mini-fab").toggleClass('hidden');
  });
  
});

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