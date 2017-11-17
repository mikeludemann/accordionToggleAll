function accordionAllToggle(clickElement, nextElement, untilElement){

    'use strict';

    const stringConvert = String(nextElement);
    const replaceConvert = stringConvert.replace(">","");

    $(clickElement).click(function(event) {

        if(stringConvert.indexOf(">") > -1){

            $(this).find(stringConvert).toggle().end().siblings().find(replaceConvert).hide().closest(untilElement);

        } else {

            $(this).find('> ' + stringConvert).toggle().end().siblings().find(stringConvert).hide().closest(untilElement);

        }

    event.stopPropagation();

    });

}  