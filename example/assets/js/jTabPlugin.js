/**
 * @author: Eftal Yurtseven
 * @name: jTab - jQuery Tab Plugin with AJAX
 * @version: 1.0 - 22.06.2018
 */


(function ( jQuery ) {

    jQuery.fn.jTab = function( options ) {


        var Settings = jQuery.extend({

            jTab: 'ul',
            jTabElem: 'li a',
            jClosestElem: '',
            jActiveClass: 'active',
            jActiveElem: 0,
            jTabContent: '.tabContent',
            jTabEvent: 'click',
            jUI: false,
            jUIEffect: '',
            jAnimation: 'fade',
            jAnimationDuration: 300,
            jSlideWidth: '',
            jSlideHeight: ''

        }, options );

            /*
          * Hide All Contents
      * */
            jQuery( Settings.jTabContent ).hide();

            /*
               * Active Element Class
            * */
            jQuery( Settings.jTab + " " + Settings.jTabElem + ":eq("+Settings.jActiveElem+")" ).addClass(Settings.jActiveClass);

            /*
               * Show Active TabContent
            * */
            jQuery( Settings.jTabContent + ":eq("+Settings.jActiveElem+")" ).show();

            jQuery( Settings.jTab + " " + Settings.jTabElem ).on(Settings.jTabEvent, function(){


                var This = jQuery(this);
                var Index = This.index();
                var ActiveIndex = jQuery( Settings.jTab + " " + Settings.jTabElem + "." + Settings.jActiveClass ).index();
                if ( ActiveIndex != Index ) {
                    jQuery( Settings.jTab + " " + Settings.jTabElem ).removeClass(Settings.jActiveClass);
                    jQuery( Settings.jTab + " " + Settings.jTabElem + ":eq("+Index+")" ).addClass(Settings.jActiveClass);
                    jQuery( Settings.jTabContent ).hide();

                    if ( This.attr("data-ajax") == "true" && This.attr("data-loaded") == "false") {
                        jQuery( Settings.jTabContent + ":eq("+Index+")" ).html("Loading...");
                        var AjaxType = This.attr("data-ajaxtype");
                        var AjaxURI = This.attr("data-ajaxuri");
                        var AjaxData = This.attr("data-ajaxdata");
                        var AjaxLoaded = This.attr("data-loaded");

                        if ( AjaxType && AjaxURI ) {

                            jQuery.ajax({
                                type: AjaxType,
                                url: AjaxURI,
                                data: AjaxData,
                                success: function(response){

                                    jQuery( Settings.jTabContent + ":eq("+Index+")" ).html(response);
                                    This.attr("data-loaded","true");

                                },
                                error: function(error){
                                    console.log(error);
                                    jQuery( Settings.jTabContent + ":eq("+Index+")" ).html("Loading Error!");
                                }
                            });

                        }else {
                            console.error("AjaxType and AjaxURI fields required!");
                        }

                    }


                    if ( Settings.jUI == true ) {

                        if ( jQuery.ui ) {

                            jQuery( Settings.jTabContent + ":eq("+Index+")" ).show().effect(Settings.jUIEffect,Settings.jAnimationDuration);

                        }else {
                            console.error("Please import jQuery UI file");
                        }

                    }else {
                        if ( Settings.jAnimation == 'fade' ) {
                            jQuery( Settings.jTabContent + ":eq("+Index+")" ).fadeIn(Settings.jAnimationDuration);
                        }
                        else if ( Settings.jAnimation == 'show' ) {
                            jQuery( Settings.jTabContent + ":eq("+Index+")" ).show(Settings.jAnimationDuration);
                        }
                    }
                } else {
                    return false;
                }



            });


    };

}( jQuery ));