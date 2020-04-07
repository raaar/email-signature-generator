( function( $ ) {
    var root = $('.root');

    $('.js-input').keyup(function() {
        var inputVal = $(this).val();
        root.find('.' + $(this).data().bind).text(inputVal);
        copyPaster();
    });

    $('.js-input-link').keyup(function() {
        var inputVal = $(this).val();
        root.find('.' + $(this).data().bind).attr('href', inputVal);
        copyPaster();
    });

    $('.js-input-mail-link').keyup(function() {
        var inputVal = $(this).val();
        root.find('.' + $(this).data().bind).attr('href', 'mailto:' + inputVal);
        copyPaster();
    });

    $('.js-checkbox').change(function() {
        var binder = $(this).data().bind;
        var privateClientImg = 'https://sterlingprivateoffice.com/wp-content/uploads/2019/09/private-client-2019.png'

        if ($(this).is(":checked")) {
            root.find('.' + binder).html(`<img src="${privateClientImg}" width="100" height="115" style="font-family: sans-serif; color: #ffffff; font-size: 20px; display: block; border: 0px;" border="0">`)
        } else {
            root.find('.' + binder).html('');
        }

        copyPaster();
    });


    $('.js-checkbox-pm').change(function() {
        var binder = $(this).data().bind;

        if ($(this).is(":checked")) {
            root.find('.' + binder).html('<img src="https://sterlingprivateoffice.com/wp-content/uploads/2019/02/Prime-Movers-2009-email.png" width="90" height="90" style="font-family: sans-serif; color: #ffffff; font-size: 20px; display: block; border: 0px;" border="0">')
        } else {
            root.find('.' + binder).html('');
        }

        copyPaster();
    });

    function copyPaster() {
        var sigCode = root.html();
        $('.js-code').val(sigCode);
    }
} )( jQuery );
