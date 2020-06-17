(function () {
    'use strict';


    (function () {
        var onReady = function onReady(fn) {
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", fn);
            } else {
                document.attachEvent("onreadystatechange", function () {
                    if (document.readyState === "interactive") {
                        fn();
                    }
                });
            }
        };

        onReady(function () {

                {
                        $( ".render-diagram button" ).remove(); 

                        mermaid.mermaidAPI.initialize({
                                theme: 'forest',
                                startOnLoad:true,
                        });

                        var els = $('.render-diagram code'); 
                        for(var i =0 ;i<els.length;i++ ){

                                var el = els[i]; 
                                var graphDefinition = el.textContent; 

                                var cb = function(svgGraph) {
                                        $(el).parent().attr('align','center');
                                        //$(el).parent().css("overflow-x","auto"); 
                                        $(el).parent().append(svgGraph); 
                                        $(el).remove();
                                }
                                mermaid.mermaidAPI.render('__graph'+i,graphDefinition,cb)


                        }



                        $(".render-diagram svg").width("1000px");
                }
        });
    })();

}());
