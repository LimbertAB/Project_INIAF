function dar_de_baja(estado,id,modelo){
 var token=document.getElementsByName('csrfmiddlewaretoken')[0].value;
 console.log(estado)
    $.ajax({
        url: '/usuario/baja/',
        type: 'POST',
        data:{'estado':estado,'id':id,'modelo':modelo,'csrfmiddlewaretoken':token},
        datatype: 'json'
    }).done(function(data){
            console.log(data);
    }).
    fail(function(error){
        console.log(error);
    })
}