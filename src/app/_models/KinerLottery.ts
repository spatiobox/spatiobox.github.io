// class KinnerLottery {
//     options = {

//         rotateNum: 5, //转盘转动圈数
//         body: "", //大转盘整体的选择符或zepto对象


//         disabledHandler: function () { }, //禁止抽奖时回调

//         clickCallback: function () { }, //点击抽奖按钮,再次回调中实现访问后台获取抽奖结果,拿到抽奖结果后显示抽奖画面

//         KinerLotteryHandler: function (deg) { } //抽奖结束回调


//     }

//     constructor(opts = {}) {
//         var self = this;

//         this.options = Object.assign(this.options, opts);

//         this.doing = false;

//         this.defNum = this.options.rotateNum * 360; //转盘需要转动的角度


//         // alert(this.defNum);

//         //点击抽奖
//         $('body').on('click', ".KinerLotteryBtn", function () {


//             if ($(this).hasClass('start') && !self.doing) {

//                 console.log('点击');

//                 this.options.clickCallback.call(self);

//             } else {


//                 var key = $(this).hasClass('no-start') ? "noStart" : $(this).hasClass('completed') ? "completed" : "illegal";

//                 this.options.disabledHandler(key);

//             }


//         });

//         $(this.options.body).find('.KinerLotteryContent').get(0).addEventListener('webkitTransitionEnd', function () {

//             self.doing = false;

//             var deg = $(this.options.body).attr('data-deg');

//             if (this.options.direction == 0) {
//                 $(this.options.body).attr('data-deg', 360 - deg);
//                 $(this.options.body).find('.KinerLotteryContent').css({
//                     '-webkit-transition': 'none',
//                     'transition': 'none',
//                     '-webkit-transform': 'rotate(' + (deg) + 'deg)',
//                     'transform': 'rotate(' + (deg) + 'deg)'
//                 });
//                 this.options.KinerLotteryHandler(360 - deg);
//             } else {
//                 $(this.options.body).attr('data-deg', deg);
//                 $(this.options.body).find('.KinerLotteryContent').css({
//                     '-webkit-transition': 'none',
//                     'transition': 'none',
//                     '-webkit-transform': 'rotate(' + (-deg) + 'deg)',
//                     'transform': 'rotate(' + (-deg) + 'deg)'
//                 });
//                 this.options.KinerLotteryHandler(deg);
//             }



//         });
//     }

//     go = function (_deg) {

//         if (this.doing) {
//             return;
//         }
//         var deg = _deg + this.defNum;
//         var realDeg = this.options.direction == 0 ? deg : -deg;
//         this.doing = true;
//         $(this.options.body).find('.KinerLotteryBtn').addClass('doing');

//         $(this.options.body).find('.KinerLotteryContent').css({
//             '-webkit-transition': 'all 5s',
//             'transition': 'all 5s',
//             '-webkit-transform': 'rotate(' + (realDeg) + 'deg)',
//             'transform': 'rotate(' + (realDeg) + 'deg)'
//         });
//         $(this.options.body).attr('data-deg', _deg);

//     };
// }