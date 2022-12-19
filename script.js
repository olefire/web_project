$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.menu__body').toggleClass('active');
    });
})


function emailHandler() {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let email = document.getElementById('email');
    if (!re.test(String(email.value).toLowerCase()))
        return false;
    return true;
};

function phoneHandler() {
    const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    let phone = document.getElementById('phone');
    if (!re.test(String(phone.value).toLowerCase()))
        return false;
    return true;
};

function nameHandler() {
    const re = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u;
    let name = document.getElementById('name');
    if (!re.test(String(name.value).toLowerCase()))
        return false;
    return true;
}

function getDataToSend() {
    return {"name": document.getElementById("name").value, "phone": document.getElementById("phone").value, "email": document.getElementById("email").value, "message": document.getElementById("message").value};
}

function validate() {
    let checkbox = document.getElementById('userAgreement');
    if (checkbox.checked === false) {
        alert("Согласитесь.");
        return false;
    }
    if (phoneHandler() && emailHandler() && nameHandler())
        return true;
    else {
        alert('Данные заполнены некорректно')
        return false;
    }
}


$('#button').on('click', function (evt) {
    evt.preventDefault();
    let dataToSend = getDataToSend();
    if (validate()) {
        $.ajax({
            url: "https://formcarry.com/s/jBM7nj5uO",
            dataType: 'json',
            type: 'POST',
            data: dataToSend,
            success: function () {
                alert("Данные отправлены!")
                console.log("success");
                document.getElementById("name").value = "";
                document.getElementById("phone").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                document.getElementById("userAgreement").checked = false;
            },
            error: function () {
                console.log("error");
            }
        });
    }
});
