$(function($) {

    $('div.checkbox-nice input:checkbox').change(function(){

      var label = $("label[for='"+$(this).attr('id')+"']");

      if($(this).is(":checked")) {
        label.addClass("checkbox-checked");
      } else {
          label.removeClass("checkbox-checked");
      }

    });

});
