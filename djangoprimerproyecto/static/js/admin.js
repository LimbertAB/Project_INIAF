function modificarestado(id,modelo,tag){
var token=document.getElementsByName('csrfmiddlewaretoken')[0].value;
  var checked_estado="baja",estado=0;
  if($('#customSwitch'+id).prop('checked')){
    estado=1;
    var checked_estado="alta";
  }
  Swal.fire({
    title: 'El '+modelo+' se dara de '+checked_estado,text: "desea guardar los cambios?",
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
          showNotification('bottom','left',modelo+' modificado satisfactoriamente');
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
function showNotification(from, align,message){
  $.notify({
      icon: "add_alert",
      message: message
  },{
    type: 'success',
    timer: 4000,
    placement: {
        from: from,
        align: align
    }
  });
}