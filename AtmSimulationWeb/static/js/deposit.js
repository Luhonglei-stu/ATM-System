// 金额
let CashAmount = "";

// 输入金额
function appendCashAmount() {
    // 解绑之前的事件处理程序
    $('.button-style').off('click');
    // 绑定当前按键
    $('.button-style').on('click', function () {
        let btn = $(this).val();
        if (btn == "清空") {
            CashAmount = "";
            $('.cash-dep').val(CashAmount);
        }
        else if (btn == "退格") {
            CashAmount = CashAmount.slice(0, -1);
            $('.cash-dep').val(CashAmount);
        }
        else {
            CashAmount += btn;
            $('.cash-dep').val(CashAmount);
        }
    });
}

// 输入框选择
function selectInputRegion() {
    $(document).ready(function () {
        $('.cash-dep').on('click', function () {
            appendCashAmount();
        });
    });
}

export {
    CashAmount,
    selectInputRegion
}