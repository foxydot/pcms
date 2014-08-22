jQuery(document).ready(function($) {
    var numwidgets = $('#homepage-widgets section.widget').length;
    $('#homepage-widgets').addClass('cols-'+numwidgets);
    var cols = 12/numwidgets;
    $('#homepage-widgets section.widget').addClass('col-sm-'+cols);
    $('#homepage-widgets section.widget').addClass('col-xs-12');
    var is_mobile = false;

    if( $('.mobile-only').css('display')==='block') {
        is_mobile = true;       
    }

    if (is_mobile === true) {
        //Conditional script here
        $('#homepage-widgets section.widget').equalHeightColumns();     
    }  
});