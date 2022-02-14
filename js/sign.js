let userLogin = document.getElementById('user'),
    passLogin = document.getElementById('pass'),
    FirstName = document.getElementById('FirstName'),
    LastName = document.getElementById('LasttName'),
    password = document.getElementById('pass');
$('#Login').on('click', function () {
    console.log("ssssssss")
    if (userLogin.value == "youssef21") {
        if (passLogin.value == '2142001') {
            location.href = '../html/main.html';
        }
        else {
            console.log("password is rong");
        }
    } else {
        console.log("password or username is rong");
        }
});


        
var lock = false;
function check() {
    if (FirstName.value.length!= 0)
    {
        if (LastName.value.length!= 0)
        {
            if (userSign.value.length!= 0)
            {
                if (password.value.length!= 0)
                {
                     lock = true  
                }
            }
        }
    }
    return lock ;
}

$('#signup').on('click', function () {
    if (check()) {
        let found = 0;
        for (let i = 0; i < userSign.value.length; i++) {
            if (userSign.value.match(/[A-Z]/g)&&userSign.value.length>=8) {
                found +=1;
                $("#wrong").css('display', 'none');
                break;
            }
        }
        if (password.value.length >= 8) {
            found += 3;
            $("#wrongpass").css('display', 'none');
        }
        if (password.value.length < 8) {
            $("#wrongpass").css('display', 'block');
        }

        if (found < 1) {
            console.log(found)
            $("#wrong").css('display', 'block');
        }
        if (found < 3 && found > 1) {
            console.log(found)
            $("#wrongpass").css('display', 'block');
        }
        if (found==4) {
            location.href="main.html"
        }

    }
});

    

