var API_KEY = "";
var SECRET_KEY = "";
var order_id1, order_id2, order_id3, order_id4;
var ltcArray = new Array();
//查询账户
function showProfile() {
    var text = "api_key=" + API_KEY + "&secret_key=" + SECRET_KEY;
    var sign = hex_md5(text).toUpperCase();
    console.log(sign);
    try {
        $.ajax({
            url: 'https://www.okcoin.cn/api/v1/userinfo.do',
            contentType: 'application/x-www-form-urlencoded',
            type: 'POST',
            data: '&api_key=' + API_KEY + '&sign=' + sign,
            async: true,
            success: function(result) {
                console.log("result is " + result);
            },
            error: function(msg) {
                console.log('Error:' + msg);
            }
        });
    } catch (e) {
        console.log(e);
    }
}

//symbol:btc_cny: 比特币 ltc_cny: 莱特币;     type买卖类型： 限价单（buy/sell） 市价单（buy_market/sell_market）
function OkTrade(amount, price, symbol, type, contract_type, lever_rate, match_price) {

    var text = "amount=" + amount + "&api_key=" + API_KEY + "&contract_type=" + contract_type + "&lever_rate=" + lever_rate + "&match_price=" + match_price + "&price=" + price + "&symbol=" + symbol + "&type=" + type + "&secret_key=" + SECRET_KEY;
    console.log(text);
    var sign = hex_md5(text).toUpperCase();
    console.log(sign);
    try {
        $.ajax({
            url: 'https://www.okcoin.com/api/v1/future_trade.do',
            contentType: 'application/x-www-form-urlencoded',
            type: 'POST',
            data: '&amount=' + amount + '&api_key=' + API_KEY + '&contract_type=' + contract_type + '&lever_rate=' + lever_rate + '&match_price=' + match_price + '&price=' + price + '&symbol=' + symbol + '&type=' + type + '&sign=' + sign,
            async: true,
            dataType: 'json',
            success: function(result) {
                console.log(result);

            },
            error: function(msg) {
                console.log('Error:' + msg);
            }
        });
    } catch (e) {
        console.log(e);
    }
}
//查询用户订单信息order_info
function Ok_Order_info(order_id, symbol) {
    var text = "api_key=" + API_KEY + "&order_id=" + order_id + "&symbol=" + symbol + "&secret_key=" + SECRET_KEY;
    var sign = hex_md5(text).toUpperCase();
    var returnResult;
    try {
        $.ajax({
            url: 'https://www.okcoin.cn/api/v1/order_info.do',
            contentType: 'application/x-www-form-urlencoded',
            type: 'POST',
            data: '&api_key=' + API_KEY + '&symbol=' + symbol + '&order_id=' + order_id + '&sign=' + sign,
            async: false,
            dataType: 'json',
            success: function(result) {
                returnResult = result;
                // console.log("result is " + result.status);

            },
            error: function(msg) {
                console.log('Error:' + msg);
            }
        });
        return returnResult;
    } catch (e) {
        console.log(e);
    }
}
