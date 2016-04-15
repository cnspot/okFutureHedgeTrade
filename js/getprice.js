var elementokBtcTSellPrice1 = document.getElementById("okBtcTSellPrice1"); //
var elementokBtcTSellDepth1 = document.getElementById("okBtcTSellDepth1");
var elementokBtcQBuyPrice1 = document.getElementById("okBtcQBuyPrice1");
var elementokBtcQBuyDepth1 = document.getElementById("okBtcQBuyDepth1");

var elementokLtcTSellPrice1 = document.getElementById("okLtcTSellPrice1");
var elementokLtcTSellDepth1 = document.getElementById("okLtcTSellDepth1");
var elementokLtcQBuyPrice1 = document.getElementById("okLtcQBuyPrice1");
var elementokLtcQBuyDepth1 = document.getElementById("okLtcQBuyDepth1");

var elementokBtcTBuyPrice1 = document.getElementById("okBtcTBuyPrice1");
var elementokBtcTBuyDepth1 = document.getElementById("okBtcTBuyDepth1");
var elementokBtcQSellPrice1 = document.getElementById("okBtcQSellPrice1");
var elementokBtcQSellDetph1 = document.getElementById("okBtcQSellDetph1");

var elementokLtcTBuyPrice1 = document.getElementById("okLtcTBuyPrice1");
var elementokLtcTBuyDepth1 = document.getElementById("okLtcTBuyDepth1");
var elementokLtcQSellPrice1 = document.getElementById("okLtcQSellPrice1");
var elementokLtcQSellDetph1 = document.getElementById("okLtcQSellDetph1");

var elementBtcTrueGapPrice1 = document.getElementById("BtcTrueGapPrice1");
var elementLtcTrueGapPrice1 = document.getElementById("LtcTrueGapPrice1");
var elementBtcTrueGapPrice2 = document.getElementById("BtcTrueGapPrice2");
var elementLtcTrueGapPrice2 = document.getElementById("LtcTrueGapPrice2");
var elementBtcForward = document.getElementById("BtcForward");
var elementBtcBackward = document.getElementById("BtcBackward");
var elementLtcForward = document.getElementById("LtcForward");
var elementLtcBackward = document.getElementById("LtcBackward");

var BtcForwardTimes = 0;
var BtcBackwardTimes = 0;
var LtcForwardTimes = 0;
var LtcBackwardTimes = 0;
var BtcForwardPosition = 0;
var BtcBackwardPosition = 0;
var LtcForwardPosition = 0;
var LtcBackwardPosition = 0;


function GetOkBtcPrice() {
    //获取btc近期数据
    try {
        $.ajax({
            url: 'https://www.okcoin.com/api/v1/future_depth.do?symbol=btc_usd&contract_type=this_week&size=1',
            type: 'GET',
            async: true,
            dataType: 'json',
            success: function(result) {
                elementokBtcTBuyPrice1.innerText = result.bids[0][0];
                elementokBtcTBuyDepth1.innerText = result.bids[0][1];
                elementokBtcTSellPrice1.innerText = result.asks[0][0];
                elementokBtcTSellDepth1.innerText = result.asks[0][1];
            },
            error: function(msg) {
                console.log('Error:' + msg);
            }
        });
    } catch (e) {
        console.log(e);
    }
    //获取btc远期数据
    try {
        $.ajax({
            url: 'https://www.okcoin.com/api/v1/future_depth.do?symbol=btc_usd&contract_type=quarter&size=1',
            type: 'GET',
            async: true,
            dataType: 'json',
            success: function(result) {
                elementokBtcQBuyPrice1.innerText = result.bids[0][0];
                elementokBtcQBuyDepth1.innerText = result.bids[0][1];
                elementokBtcQSellPrice1.innerText = result.asks[0][0];
                elementokBtcQSellDetph1.innerText = result.asks[0][1];
            },
            error: function(msg) {
                console.log('Error:' + msg);
            }
        });
    } catch (e) {
        console.log(e);
    }
}

function GetOkLtcPrice() {
    //获取ltc近期数据
    try {
        $.ajax({
            url: 'https://www.okcoin.com/api/v1/future_depth.do?symbol=ltc_usd&contract_type=this_week&size=1',
            type: 'GET',
            async: true,
            dataType: 'json',
            success: function(result) {
                elementokLtcTBuyPrice1.innerText = result.bids[0][0];
                elementokLtcTBuyDepth1.innerText = result.bids[0][1];
                elementokLtcTSellPrice1.innerText = result.asks[0][0];
                elementokLtcTSellDepth1.innerText = result.asks[0][1];
            },
            error: function(msg) {
                console.log('Error:' + msg);
            }
        });
    } catch (e) {
        console.log(e);
    }
    //获取ltc远期数据
    try {
        $.ajax({
            url: 'https://www.okcoin.com/api/v1/future_depth.do?symbol=ltc_usd&contract_type=quarter&size=1',
            type: 'GET',
            async: true,
            dataType: 'json',
            success: function(result) {
                elementokLtcQBuyPrice1.innerText = result.bids[0][0];
                elementokLtcQBuyDepth1.innerText = result.bids[0][1];
                elementokLtcQSellPrice1.innerText = result.asks[0][0];
                elementokLtcQSellDetph1.innerText = result.asks[0][1];
            },
            error: function(msg) {
                console.log('Error:' + msg);
            }
        });
    } catch (e) {
        console.log(e);
    }
}

function PriceGapCheck() {
    elementBtcTrueGapPrice1.innerText = (okBtcQBuyPrice1.innerText - okBtcTSellPrice1.innerText).toFixed(2);
    elementLtcTrueGapPrice1.innerText = (okLtcQBuyPrice1.innerText - okLtcTSellPrice1.innerText).toFixed(2);
    elementBtcTrueGapPrice2.innerText = (okBtcQSellPrice1.innerText - okBtcTBuyPrice1.innerText).toFixed(2);
    elementLtcTrueGapPrice2.innerText = (okLtcQSellPrice1.innerText - okLtcTBuyPrice1.innerText).toFixed(2);
    //库存深度检查,最小深度
    MinBtcTradeAmount1 = Math.min(okBtcTSellDepth1.innerText, okBtcQBuyDepth1.innerText);
    MinLtcTradeAmount1 = Math.min(okLtcTSellDepth1.innerText, okLtcQBuyDepth1.innerText);
    MinBtcTradeAmount2 = Math.min(okBtcTBuyDepth1.innerText, okBtcQSellDetph1.innerText);
    MinLtcTradeAmount2 = Math.min(okLtcTBuyDepth1.innerText, okLtcQSellDetph1.innerText);

}

var Tctrl = setInterval("TradeMethod()", 1000);
$(document).ready(function() {
    setInterval("GetOkLtcPrice()", 1000);
    setInterval("GetOkBtcPrice()", 1000);
    setInterval("PriceGapCheck()", 1000);
    // setInterval("SettingSwitch()", 1000);

});

//通过checkbox判断是否开启
$("#checkbox1").click(function() {
    console.log($('#checkbox1').is(':checked'));
});

function TradeMethod() {
    var BtcForwardLimit = elementBtcForward.value;
    var BtcBackwardLimit = elementBtcBackward.value;
    var LtcForwardLimit = elementLtcForward.value;
    var LtcBackwardLimit = elementLtcBackward.value;
    // var result1 = $("#BtcForward").val();
    // console.log(result1);

    //大于上限，低价开多，高价开空；小于下限，低价开空，高价开多
    // btc,小于价差时候，低价开空，高价开多
    if ($('#checkbox1').is(':checked') && (elementBtcTrueGapPrice1.innerText <= BtcReadyMinGap.value) && (BtcForwardTimes < BtcForwardLimit)) {
        var order_amount;
        if ((BtcReadyMinAmount.value <= MinBtcTradeAmount1) && (MinBtcTradeAmount1 <= BtcReadyMaxAmount.value)) {
            console.log("buy Depth BTC1 " + MinBtcTradeAmount1);
            order_amount = MinBtcTradeAmount1;
        }
        if (MinBtcTradeAmount1 > BtcReadyMaxAmount.value) {
            console.log("buy Max BTC1 " + BtcReadyMaxAmount.value);
            order_amount = BtcReadyMaxAmount.value;
        }
        //近期低价开多单
        OkTrade(order_amount, elementokBtcTSellPrice1.innerText, 'btc_usd', 2, 'this_week', 10, 0);
        //远期高价开空单
        OkTrade(order_amount, elementokBtcQBuyPrice1.innerText, 'btc_usd', 1, 'quarter', 10, 0);
        BtcForwardTimes++;
    }
    // btc,大于价差时候，低价开多，高价开空
    if ($('#checkbox1').is(':checked') && (elementBtcTrueGapPrice1.innerText >= BtcReadyMaxGap.value) && (BtcBackwardTimes < BtcBackwardLimit)) {
        var order_amount;
        if ((BtcReadyMinAmount.value <= MinBtcTradeAmount1) && (MinBtcTradeAmount1 <= BtcReadyMaxAmount.value)) {
            console.log("buy Depth Btc2 " + MinBtcTradeAmount1);
            order_amount = MinBtcTradeAmount1;
        }
        if (MinBtcTradeAmount1 > BtcReadyMaxAmount.value) {
            console.log("buy Max BTC2 " + BtcReadyMaxAmount.value);
            order_amount = BtcReadyMaxAmount.value;
        }
        //近期低价开空单
        OkTrade(order_amount, elementokBtcTBuyPrice1.innerText, 'btc_usd', 1, 'this_week', 10, 0);
        //远期高价开多单
        OkTrade(order_amount, elementokBtcQSellPrice1.innerText, 'btc_usd', 2, 'quarter', 10, 0);
        BtcBackwardTimes++;
    }
    // ltc,小于价差时候，低价开空，高价开多
    if ($('#checkbox2').is(':checked') && (elementLtcTrueGapPrice1.innerText <= LtcReadyMinGap.value) && (LtcForwardTimes < LtcForwardLimit)) {
        var order_amount;
        if ((LtcReadyMinAmount.value <= MinLtcTradeAmount1) && (MinLtcTradeAmount1 <= LtcReadyMaxAmount.value)) {
            console.log("buy Depth Ltc1 " + MinLtcTradeAmount1);
            order_amount = MinLtcTradeAmount1;
        }
        if (MinLtcTradeAmount1 > LtcReadyMaxAmount.value) {
            console.log("buy Max LTC1 " + LtcReadyMaxAmount.value);
            order_amount = LtcReadyMaxAmount.value;
        }
        //近期低价开多单
        OkTrade(order_amount, elementokLtcTSellPrice1.innerText, 'ltc_usd', 2, 'this_week', 10, 0);
        //远期高价开空单
        OkTrade(order_amount, elementokLtcQBuyPrice1.innerText, 'ltc_usd', 1, 'quarter', 10, 0);
        LtcForwardTimes++;
    }

    // ltc,大于价差时候，低价开多，高价开空
    if ($('#checkbox2').is(':checked') && (elementLtcTrueGapPrice1.innerText >= LtcReadyMaxGap.value) && (LtcBackwardTimes < LtcBackwardLimit)) {
        var order_amount;
        if ((LtcReadyMinAmount.value <= MinLtcTradeAmount1) && (MinLtcTradeAmount1 <= LtcReadyMaxAmount.value)) {
            console.log("buy Depth Ltc2 " + MinLtcTradeAmount1);
            order_amount = MinLtcTradeAmount1;
        }
        if (MinLtcTradeAmount1 > LtcReadyMaxAmount.value) {
            console.log("buy Max LTC2 " + LtcReadyMaxAmount.value);
            order_amount = LtcReadyMaxAmount.value;
        }
        //近期低价开多
        OkTrade(order_amount, elementokLtcTBuyPrice1.innerText, 'ltc_usd', 1, 'this_week', 10, 0);
        //远期高价空
        OkTrade(order_amount, elementokLtcQSellPrice1.innerText, 'ltc_usd', 2, 'quarter', 10, 0);
        LtcBackwardTimes++;
    }
}

function PositionCheck() {
    // body..平多仓条件，平空仓条件
}
