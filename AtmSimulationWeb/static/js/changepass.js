//卡号
let id = 0;
let NewPass = "";
let RePass = "";

// 输入新密码
function appendNewPass() {
    // 解绑之前的事件处理程序
    $('.button-style').off('click');

    if (id == 1) {
        $('.button-style').on('click', function () {
            let btn = $(this).val();
            if (btn == "清空") {
                NewPass = "";
                $('.card-number').val(NewPass);
            }
            else if (btn == "退格") {
                NewPass = NewPass.slice(0, -1);
                $('.card-number').val(NewPass);
                // console.log(CardNumber)
            }
            else {
                NewPass += btn;
                $('.card-number').val(NewPass)
            }
        });
    }
}

// 输入密码
function appendRePass() {
    // 解绑之前的事件处理程序
    $('.button-style').off('click');
    if (id == 2) {
        $('.button-style').on('click', function () {
            let btn = $(this).val();
            if (btn == "清空") {
                RePass = "";
                $('.password').val(RePass);
            }
            else if (btn == "退格") {
                RePass = RePass.slice(0, -1);
                $('.password').val(RePass);
                // console.log(Password)
            }
            else {
                RePass += btn;
                $('.password').val(RePass)
            }
        });
    }
}

// 输入框选择
function selectInputRegion() {
    $(document).ready(function () {
        $('.card-number').on('click', function () {
            id = 1;//表示输入的是账号
            //console.log(id);
            appendNewPass();
        });
        $('.password').on('click', function () {
            id = 2;//表示输入的是密码
            //console.log(id);
            appendRePass();
        });
    });
}

// 点击提交向后端服务器发送账号密码
function sendCardPassToSever() {
    $(document).ready(function () {
        $('#fbtn').on('click', function () {
            // 取出账号密码
            var cardNumber = $('.card-number').val();
            var password = $('password').val();

            // 发送数据到后端
            $.ajax({
                type: "POST",
                url: "http://120.46.62.234/login", // 后端路由的URL
                data: {
                    cardNumber: cardNumber,
                    password: password
                },
                success: function (response) {
                    // 处理成功响应
                    console.log("登录成功");
                    // 重定向到其他HTML页面(成功则进行页面跳转)
                    // check()接收判断逻辑
                    //window.location.href = "/AtmSimulationWeb/templates/function.html"; // 替换为你要跳转的页面的URL
                },
                error: function (error) {
                    // 处理错误响应
                    console.log("登录失败");
                    // 可以向用户显示错误消息
                }
            });
        });
    });
}


export {
    NewPass,
    selectInputRegion,
    sendCardPassToSever
}