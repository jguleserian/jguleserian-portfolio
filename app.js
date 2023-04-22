/*-NOTE: Hover effects for icons and overlays -*/
$("svg.GHicon").hover(() => {
        $("path.GHicon").css("fill", "var(--green)")
    },
    () => {
        $("path.GHicon").css("fill", "#fff");
    }
);
$("svg.FMicon").hover(() => {
        $("path.FMicon").css("fill", "var(--green)")
    },
    () => {
        $("path.FMicon").css("fill", "#fff");
    }
);
$("svg.LIicon").hover(() => {
        $("path.LIicon").css("fill", "var(--green)")
    },
    () => {
        $("path.LIicon").css("fill", "#fff");
    }
);
$("svg.TWicon").hover(() => {
        $("path.TWicon").css("fill", "var(--green)")
    },
    () => {
        $("path.TWicon").css("fill", "#fff");
    }
);

/*- NOTE: Form Validation -*/
$("#contactForm").submit((e) => {
    e.preventDefault();
    const name = $("#name").val();
    const email = $("#email").val();
    const message = $("#message").val();
    validateForm(name, email, message);

});

function validateForm(name, email, message) {
    const validName = checkName(name);
    const validEmail = checkEmail(email);
    const validMessage = checkMessage(message);

    if (validName && validEmail && validMessage) {
        console.log("Form is valid");
        $("#form-overlay").css("display", "flex");
    } else {
        console.log("Form is not valid");
    }

    function checkName(name) {
        console.log(name);
        if (name === "") {
            $("#name").addClass("input-error");
            return false;
        } else
        if (name !== "") {
            $("#name").removeClass("input-error");
            return true
        }
    }

    function checkMessage(message) {
        console.log(message);
        if (message === "") {
            $("#message").addClass("input-error");
            return false;
        } else
        if (message !== "") {
            $("#message").removeClass("input-error");
            return true;
        }
    }

    function checkEmail(email) {
        console.log(email);
        if (!isEmail(email)) {
            $("#email").addClass("input-error");
            $(".errorIcon").css("display", "flex");
            $(".emailError").css("display", "block");
            return false;
        } else {
            $("#email").removeClass("input-error");
            $(".errorIcon").css("display", "none");
            $(".emailError").css("display", "none");
            return true;
        }

        function isEmail(email) {
            return (/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email));
        }
    }
}