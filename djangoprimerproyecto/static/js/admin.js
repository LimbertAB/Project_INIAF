function dar_de_baja(estado,id,modelo,tag){
 var token=document.getElementsByName('csrfmiddlewaretoken')[0].value;
 console.log(tag)
    $.ajax({
        url: '/usuario/baja/',
        type: 'POST',
        data:{'estado':estado,'id':id,'modelo':modelo,'csrfmiddlewaretoken':token},
        datatype: 'json'
    }).done(function(data){
        showNotification('bottom','left','Usuario modifidado satisfactoriamente');
        tag.removeClass('btn-success').addClass('btn-danger');
        console.log("LLEGO...."+data);
    }).
    fail(function(error){
        console.log(error);
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