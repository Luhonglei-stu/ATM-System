//id 卡号 金额
let id = 0;
let CardNumber = "";
let CashAmount = "";

// 输入卡号
function appendCardNumber() {
    // 解绑之前的事件处理程序
    $('.button-style').off('click');

    if (id == 1) {
        $('.button-style').on('click', function () {
            let btn = $(this).val();
            if (btn == "清空") {
                CardNumber = "";
                $('.card-number').val(CardNumber);
            }
            else if (btn == "退格") {
                CardNumber = CardNumber.slice(0, -1);
                $('.card-number').val(CardNumber);
                // console.log(CardNumber)
            }
            else {
                CardNumber += btn;
                $('.card-number').val(CardNumber)
            }
        });
    }
}

// 输入金额
function appendCashAmount() {
    // 解绑之前的事件处理程序
    $('.button-style').off('click');
    if (id == 2) {
        $('.button-style').on('click', function () {
            let btn = $(this).val();
            if (btn == "清空") {
                CashAmount = "";
                $('.cash-tran').val(CashAmount);
            }
            else if (btn == "退格") {
                CashAmount = CashAmount.slice(0, -1);
                $('.cash-tran').val(CashAmount);
                // console.log(Password)
            }
            else {
                CashAmount += btn;
                $('.cash-tran').val(CashAmount)
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
            appendCardNumber();
        });
        $('.cash-tran').on('click', function () {
            id = 2;//表示输入的是金额
            //console.log(id);
            appendCashAmount();
        });
    });
}


export {
    CardNumber,
    selectInputRegion,
}