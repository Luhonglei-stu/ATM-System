let id = 0;
let CardNumber = "";
let Password = "";
function appendCardNumber() {
    // 解绑之前的事件处理程序
    $('.button').off('click');
    $('.button').on('click', function () {
        if (id == 1) {
            CardNumber += $(this).val();
            console.log("CardN", CardNumber);
            $('.card-number').val(CardNumber);
        }
    });
}

function appendPassword() {
    // 解绑之前的事件处理程序
    $('.button').off('click');

    $('.button').on('click', function () {
        if (id == 2) {
            Password += $(this).val();
            console.log("Pass", Password);
            $('.password').val(Password);
        }
    });

}

function selectInputRegion() {

    $(document).ready(function () {
        $('.card-number').on('click', function () {
            id = 1;//表示输入的是账号
            console.log(id);
            appendCardNumber();
        });
        $('.password').on('click', function () {
            id = 2;//表示输入的是密码
            console.log(id);
            appendPassword();
        });


        //console.log(id)

    });
}
export {
    CardNumber,
    selectInputRegion,
    appendCardNumber,
    appendPassword
}