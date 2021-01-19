function alertModal(name){

    console.log(name);
    if(name!==undefined){
        $(name).css("display", "block");
        $(name).animate({

            bottom: "0px"
        }, {
            step: function( now, fx ) {

            }
        });
    }
    $(name).click(function (e){
        e.stopPropagation();
        $(this).css("display", "none");
    });
}