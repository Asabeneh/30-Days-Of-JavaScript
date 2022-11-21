//Before you start typing open your developer console and paste the following script
//Now pressing any key will result in to correct key press untill you reach next space key. 
//I made the user push space to move further, so that someone viewing your typing will think you are not faking.
//warning: Site detects the WPM above 100 and asks you to do a captcha test.
// Note: This is just used for EDUCATIONAL PURPOSES ONLY!!! And not to be used for FICTITIOUS INTENTIONS!!. Anyways Cheers!!!

var jq = document.createElement('script');
jq.src = "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
// ... give time for script to load, then type.
jQuery.noConflict();
// execute the following script in the console
(function($)
{
    var inputText;
    var flag = true;
    var i = 0;
    $('body').on('keypress','.txtInput',function(e)
    {
        if(flag)
        {
            inputText = $('.inputPanel tr:first').text();
            flag = false;
        }
        if(inputText[i] == " ")
        {
            if((e.which || e.keyCode)==32)
                i++;
            else
                e.preventDefault();
        }
        else
        {
            e.preventDefault();
            $( '.txtInput' ).val($( '.txtInput' ).val()+inputText[i]);
            i++;
        }
    });
})(jQuery);
