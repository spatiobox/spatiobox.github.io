import { Input, Directive, EventEmitter, OnInit, ElementRef, ViewContainerRef, Renderer2, Component } from '@angular/core';

// declare var prismplayer;

// declare var window;
// @Directive({
//     selector: '[xi-editor],xi-editor',
//     inputs: ['src', 'id', 'cover'],
//     outputs: ['click', 'dblclick'],
//     host: {
//         '(id)': 'id',
//         '(src)': 'src',
//         '(cover)': 'cover',
//         // '(getCurrentTime)': 'getCurrentTime($event)',
//         '(click)': 'onClick($event)',
//         '(dblclick)': 'onDblClick($event)'
//         // '(getCurrentTime)': 'getCurrentTime($event.target)'
//     }
// })

// export class XiEditorDirective implements OnInit {
//     id: string;
//     /**资源路径 */
//     src: string;
//     /**封面路径 */
//     cover: string;
//     player: any;
//     click = new EventEmitter();
//     dblclick = new EventEmitter();
//     status: string; //0:停止 1: 播放
//     current: number;
//     duration: number;

//     //--click & dblclick
//     timer = 0;
//     delay = 500;
//     prevent = false;
//     //


//     constructor(
//         private el: ElementRef,
//         private vc: ViewContainerRef,
//         private renderer: Renderer2) {
//         // this.id = this.el.nativeElement.id;
//         // this.renderer.addClass(this.el.nativeElement, 'prism-player');
//         // this.renderer.addClass(this.el.nativeElement, 'xj-player');
//     }


//     ngOnInit() {
//         // window.el = this.el;
//         // window.vc = this.vc;
//         // console.log(this.el, this.vc);
//         // console.log('id', this.id);
//         // console.log('src', this.src);

//         // this.player = new prismplayer({
//         //     id: this.id || this.el.nativeElement,
//         //     width: '100%',
//         //     autoplay: false,
//         //     showBuffer: true,   //显示播放时缓冲图
//         //     isLive: false,      //{Boolean}，播放内容是否为直播，直播时会禁止用户拖动进度条
//         //     rePlay: false,       //播放器自动循环播放
//         //     source: this.src,   //支持播放地址播放,此播放优先级最高
//         //     cover: this.cover || '/assets/icon/xjoy.jpeg',  // 播放器默认封面图片，请填写正确的图片url地址
//         //     showBarTime: 30000,
//         //     skinLayout: [
//         //         {
//         //             "name": "bigPlayButton",
//         //             "align": "cc"
//         //         },
//         //         {
//         //             "name": "controlBar",
//         //             "align": "blabs",
//         //             "x": 0,
//         //             "y": 0,
//         //             "children": [
//         //                 {
//         //                     "name": "progress",
//         //                     "align": "tlabs",
//         //                     "x": 0,
//         //                     "y": 0
//         //                 }
//         //             ]
//         //         }
//         //     ]
//         //     //notShowTips:1
//         // });
//         // // this.duration = this.player.getDuration();
//         // this.player.on('pause', () => { console.log('trigger pause'); this.status = 'pause'; })
//         // this.player.on('play', () => { console.log('trigger pause'); this.status = 'play'; })
//     }

//     onClick(evt) {

//         // this.timer = setTimeout(() => {
//         //     if (!this.prevent) {
//         console.log('click evt', this.player);
//         console.log('player', this.player);

//         if (this.status == 'play') {
//             this.player.pause();
//         } else {
//             this.player.play();
//         }
//         // }
//         //     this.prevent = false;
//         // }, this.delay);
//     }

//     onDblClick(evt) {
//         clearTimeout(this.timer);
//         this.prevent = true;
//         alert(2);
//     }

//     // getCurrentTime(evt) {
//     //     return this.player.getCurrentTime();
//     // }

//     //     get id { return this.control.id; }
//     //     get src { return this.control.src; }
//     // get getCurrentTime() { return new Date(); }
// }


@Component({
    selector: '[xi-editor],xi-editor',
    templateUrl: `./editor.html`
})
class XiEditorComponent {
    id: string;
    container: string;
    constructor() {
        this.container = this.id + '_Toolbar';
    }
}