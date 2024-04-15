function validEmail($email) {
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test( $email ) && $email != "";
}

jQuery(document).ready(function () {

function isValid () {

    if ($("#basicQuoteName").val() == "") {
        return false;
    }

    if ($("#basicQuoteSurname").val() == "") {
        return false;
    }

    if ($("#basicQuotePhoneNumber").val() == "") {
        return false;
    }

    if($("#basicQuoteSelectPackage").val() == "" || $("#basicQuoteSelectPackage").val() == "select") {
			return false;
		}

    if($("#basicQuoteMarketing").val() == "" || $("#basicQuoteMarketing").val() == "select") {
			return false;
		}

    if ($("#basicQuoteEmailAddress").val() == "" || !validEmail($("#basicQuoteEmailAddress").val())) {
        return false;
    }

    return true;
}

function isValidGetInTouch () {

    if ($("#getInTouchName").val() == "") {
        return false;
    }

    if ($("#getInTouchSurname").val() == "") {
        return false;
    }

    if ($("#getInTouchPhoneNumber").val() == "") {
        return false;
    }

    if ($("#getInTouchEmailAddress").val() == "" || !validEmail($("#getInTouchEmailAddress").val())) {
        return false;
    }

    return true;
}


    function isValidGraphicQuote () {

        if ($("#graphicClientName").val() == "") {
            return false;
        }

        if ($("#graphicClientSurname").val() == "") {
            return false;
        }

        if ($("#graphicClientPhoneNumber").val() == "") {
            return false;
        }

        if ($("#graphicClientEmail").val() == "" || !validEmail($("#graphicClientEmail").val())) {
            return false;
        }

        if($("#graphicQuoteSelectPackage").val() == "" || $("#graphicQuoteSelectPackage").val() == "select") {
            return false;
        }

        if($("#graphicQuoteMarketing").val() == "" || $("#graphicQuoteMarketing").val() == "select") {
            return false;
        }

        return true;
    }


    function isValidContactForm () {

        if ($("#contactFormName").val() == "") {
            return false;
        }

        if ($("#contactFormSubject").val() == "") {
            return false;
        }

        if ($("#contactFormPhone").val() == "") {
            return false;
        }

        if ($("#contactFormMessage").val() == "") {
            return false;
        }

        if ($("#contactFormEmail").val() == "" || !validEmail($("#contactFormEmail").val())) {
            return false;
        }

        if($("#contactFormSelectPackage").val() == "" || $("#contactFormSelectPackage").val() == "select") {
            return false;
        }

        return true;
    }


    function isValidHostingQuoteForm () {

        if ($("#hostingName").val() == "") {
            return false;
        }

        if ($("#hostingSurname").val() == "") {
            return false;
        }

        if ($("#hostingPhoneNumber").val() == "") {
            return false;
        }

        if ($("#hostingEmailAddress").val() == "" || !validEmail($("#hostingEmailAddress").val())) {
            return false;
        }

        if($("#hostingPackage").val() == "" || $("#hostingPackage").val() == "select") {
            return false;
        }

        if($("#hostingDiskspace").val() == "" || $("#hostingDiskspace").val() == "select") {
            return false;
        }

        return true;
    }


// Request a quote Modal---WEBSITE---

$("#submitBasicQuoteButton").click(function (event) {

    var theForm = $('#quoteForm');

    if (isValid()) {
        $('#submitBasicQuoteButton').prop('disabled', true);
        $.ajax({
            type: "POST",
            url: 'modal.php',
            data: theForm.serialize(),
            success: function (data) {
                $("#successDiv").fadeIn(1000, function () {
                    $('#successDiv').fadeOut(5000);
                    $('#submitBasicQuoteButton').prop('disabled', false);
                });
            }
        });

        return false;
    } else {
        $("#errorDiv").fadeIn(1000, function () {
            $('#errorDiv').fadeOut(5000);
        });
    }

});

// Get in touch Modal---WEBSITE---

$("#submitGetInTouchButton").click(function (event) {

    var theForm = $('#getInTouchForm');

    if (isValidGetInTouch()) {
      $('#submitGetInTouchButton').prop('disabled', true);
        $.ajax({
            type: "POST",
            url: 'baseModal.php',
            data: theForm.serialize(),
            success: function (data) {
                $("#successDivBase64").fadeIn(1000, function () {
                    $('#successDivBase64').fadeOut(5000);
                    $('#submitGetInTouchButton').prop('disabled', false);
                });
            }
        });

        return false;
    } else {
        $("#errorDivBase64").fadeIn(1000, function () {
            $('#errorDivBase64').fadeOut(5000);
        });
    }
});

// Request a quote Modal---GRAPHIC DESIGN---

    $("#graphicQuoteSubmitButton").click(function (event) {

        var theForm = $('#graphicQuoteForm');

        if (isValidGraphicQuote()) {
            $('#graphicQuoteSubmitButton').prop('disabled', true);
            $.ajax({
                type: "POST",
                url: 'graphic-modal.php',
                data: theForm.serialize(),
                success: function (data) {
                    $("#successDivGraphic").fadeIn(1000, function () {
                        $('#successDivGraphic').fadeOut(5000);
                        $('#graphicQuoteSubmitButton').prop('disabled', false);
                    });
                }
            });

            return false;
        } else {
            $("#errorDivGraphic").fadeIn(1000, function () {
                $('#errorDivGraphic').fadeOut(5000);
            });
        }

    });


    // Contact Us form- HOME PAGE

    $("#contactFormSubmitButton").click(function (event) {

        var theForm = $('#contact-form');

        if (isValidContactForm()) {
            $('#contactFormSubmitButton').prop('disabled', true);
            $.ajax({
                type: "POST",
                url: 'contact.php',
                data: theForm.serialize(),
                success: function (data) {
                    $("#successDivContact").fadeIn(1000, function () {
                        $('#successDivContact').fadeOut(5000);
                        $('#contactFormSubmitButton').prop('disabled', false);
                    });
                }
            });

            return false;
        } else {
            $("#errorDivContact").fadeIn(1000, function () {
                $('#errorDivContact').fadeOut(5000);
            });
        }

    });

    // Request a quote Modal---HOSTING---

    $("#hostingQuoteButton").click(function (event) {

        var theForm = $('#hostingQuoteForm');

        if (isValidHostingQuoteForm()) {
            $('#hostingQuoteButton').prop('disabled', true);
            $.ajax({
                type: "POST",
                url: 'hosting.php',
                data: theForm.serialize(),
                success: function (data) {
                    $("#successDivHosting").fadeIn(1000, function () {
                        $('#successDivHosting').fadeOut(5000);
                        $('#hostingQuoteButton').prop('disabled', false);
                    });
                }
            });

            return false;
        } else {
            $("#errorDivHosting").fadeIn(1000, function () {
                $('#errorDivHosting').fadeOut(5000);
            });
        }

    });

});