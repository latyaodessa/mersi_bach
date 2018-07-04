"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defaultExport = new String(".navigation{list-style:none;margin:0;background:#6a8ba9;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.navigation li:last-child{margin-left:auto;}.navigation .prev-last-li{position:absolute;right:0;margin-right:100px;}.navigation a{-webkit-text-decoration:none;text-decoration:none;display:block;padding:1em;color:#FFF;}.navigation a:hover{background:#a98173;}#menu{position:absolute;right:0;color:#FFF;text-align:center;border-radius:4px;background:#b38f83;box-shadow:0 1px 8px rgba(0,0,0,0.05);-webkit-transition:opacity .4s;transition:opacity .4s;z-index:1;}#menu ul{list-style:none;width:150px;padding:0;}#menu:after{position:absolute;top:-7px;right:30px;content:\"\";display:block;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:8px solid white;}.login-menu-container{margin-right:15px;cursor:pointer;}.login-menu-container img{border-radius:50%;border-style:solid;width:45px;height:45px;object-fit:cover;border-color:#a98173;border-width:2px;}.login-menu-container a{padding:0;}.hamburger{background-color:transparent;border:0px;outline:0px;width:50px;height:50px;height:auto;position:fixed;top:15px;right:15px;cursor:pointer;z-index:9999;}.hamburger .burger{-webkit-transition:all 0.3s;transition:all 0.3s;border-radius:5px;height:5px;width:100%;display:inline-block;background-color:#4e4d4d;}.focus .burger{-webkit-transition:all 0.3s;transition:all 0.3s;}.focus .burger:first-of-type{background-color:#C62828;-webkit-transition-delay:0.4s;transition-delay:0.4s;-webkit-transform:translate3d(0px,0px,0px) rotateZ(45deg);-ms-transform:translate3d(0px,0px,0px) rotateZ(45deg);transform:translate3d(0px,0px,0px) rotateZ(45deg);width:40px;-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top;}.focus .burger:nth-of-type(2){opacity:0;}.focus .burger:last-of-type{background-color:#C62828;-webkit-transition-delay:0.4s;transition-delay:0.4s;-webkit-transform:translate3d(0px,0px,0px) rotateZ(-45deg);-ms-transform:translate3d(0px,0px,0px) rotateZ(-45deg);transform:translate3d(0px,0px,0px) rotateZ(-45deg);width:40px;-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;}.b-a-expanded{-webkit-transition:all .25s;transition:all .25s;top:-0px;}.menu-expanded{position:fixed;-webkit-transition:all .25s;transition:all .25s;text-align:center;height:100%;width:100%;border-radius:0;top:0;left:0;z-index:1;cursor:pointer;background-color:rgba(0,0,0,0.85);}.menu-expanded ul{padding:0;list-style-type:none;-webkit-transition:all 0s;transition:all 0s;position:relative;left:0;z-index:2;}.menu-expanded a{-webkit-transition:all .15s;transition:all .15s;-webkit-text-decoration:none;text-decoration:none;font-size:2em;padding:5px;color:#FFF;display:block;}.menu-expanded a:hover{background-color:rgba(255,255,255,0.8);-webkit-transition:all .15s;transition:all .15s;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:#333;border:1px solid rgba(255,255,255,0.15);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcy9zdHlsZXMvbmF2aWdhdGlvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUVtQixBQVlDLEFBR0MsQUFLRyxBQU1GLEFBSUQsQUFXRixBQUtFLEFBVUEsQUFJQSxBQVNSLEFBR21CLEFBYVQsQUFRQSxBQUdLLEFBT2YsQUFHZSxBQU9MLEFBSUwsQUFhTCxBQVFVLEFBUXNCLFVBN0UvQixBQWtDQSxBQTRCVSxLQWJELENBckhYLEFBeUNHLENBOUJNLENBSVYsQUFlQSxBQWdCQyxBQVVNLEFBSUksQ0FuQ0MsTUF4QkQsQUErRkcsQUFVQSxDQTFGSCxBQWVSLENBZ0JBLENBTEQsQ0E4QkMsRUEyRE8sRUEzRUYsSUF4QkUsQUE2QlAsQ0FuQkEsQUFNQSxDQWtHUyxDQXpFUixJQXZFUSxDQWNBLEdBOENSLEFBdUJNLEFBT0csQUFxQlosQUF5QlksQ0F6RlAsQ0E3QkEsRUFzREgsR0F6Q08sRUFnRlIsR0FsRE8sR0FiaUIsQUF5QnRCLEFBMkNNLENBbkhELEFBa0JMLEVBaUVELE9BcERRLEVBMENQLEFBd0RNLENBOUdQLENBMENVLEFBdUJWLEFBVXlDLEFBVUMsSUF2R2pDLEFBbUhSLE1BakdBLEFBdURHLEFBc0VJLENBM0RFLElBckRvQixDQXFGOUIsQUFhSixJQWxGNEIsQ0FjbEIsQUEwRUgsRUFMSixDQWpJVyxDQXlFWixFQTJDTyxLQWhDUyxDQTZDZCxDQXZEQSxDQTZEQyxHQTNFTSxLQXlEWixFQXBITyxBQTBFRSxFQTZESixFQWxCSixJQXZGZ0IsRUFnQk8sQ0F3RXBCLENBbkNnQixDQXFEWixFQTdERCxNQTRDRSxNQWlCQSxDQTdERCxRQTZDdUIsSUExRU4sa0JBZ0dwQixJQS9HRCxPQWdIaUMsQ0F2QkwsRUF6RjNCLEVBOUJnQiwyQkFDQSxRQTZJaUIsUUFuRGpDLEdBVUEsUUFUZSxHQVVHLDJFQXJHRCxZQTJGRCxZQVVHIiwiZmlsZSI6InJlcy9zdHlsZXMvbmF2aWdhdGlvbi5zY3NzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmRyZWZlZG9yZW5rby9Ecm9wYm94L1N0dWRpdW0vbWVyc2kvYmFjaGVsb3IvZnJvbnRlbmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYC5uYXZpZ2F0aW9uIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiAjNmE4YmE5O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5uYXZpZ2F0aW9uIGxpOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XG4gIC5uYXZpZ2F0aW9uIC5wcmV2LWxhc3QtbGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4OyB9XG4gIC5uYXZpZ2F0aW9uIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgY29sb3I6ICNGRkY7IH1cbiAgICAubmF2aWdhdGlvbiBhOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNhOTgxNzM7IH1cblxuLyogbWVudSBhcHBlYXJhbmNlKi9cbiNtZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgY29sb3I6ICNGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjYjM4ZjgzO1xuICBib3gtc2hhZG93OiAwIDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNHM7XG4gIHotaW5kZXg6IDE7IH1cbiAgI21lbnUgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHBhZGRpbmc6IDA7IH1cblxuI21lbnU6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTdweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHdoaXRlOyB9XG5cbi5sb2dpbi1tZW51LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5sb2dpbi1tZW51LWNvbnRhaW5lciBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItY29sb3I6ICNhOTgxNzM7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7IH1cbiAgLmxvZ2luLW1lbnUtY29udGFpbmVyIGEge1xuICAgIHBhZGRpbmc6IDA7IH1cblxuLmhhbWJ1cmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDBweDtcbiAgb3V0bGluZTogMHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA5OTk5OyB9XG4gIC5oYW1idXJnZXIgLmJ1cmdlciB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0ZDRkOyB9XG5cbi5mb2N1cyAuYnVyZ2VyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7IH1cbiAgLmZvY3VzIC5idXJnZXI6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M2MjgyODtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCkgcm90YXRlWig0NWRlZyk7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7IH1cbiAgLmZvY3VzIC5idXJnZXI6bnRoLW9mLXR5cGUoMikge1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgLmZvY3VzIC5idXJnZXI6bGFzdC1vZi10eXBlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzYyODI4O1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KSByb3RhdGVaKC00NWRlZyk7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207IH1cblxuLmItYS1leHBhbmRlZCB7XG4gIHRyYW5zaXRpb246IGFsbCAuMjVzO1xuICB0b3A6IC0wcHg7IH1cblxuLm1lbnUtZXhwYW5kZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRyYW5zaXRpb246IGFsbCAuMjVzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpOyB9XG4gIC5tZW51LWV4cGFuZGVkIHVsIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMHM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMjsgfVxuICAubWVudS1leHBhbmRlZCBhIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLm1lbnUtZXhwYW5kZWQgYTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cztcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7IH1cbmA7Il19 */\n/*@ sourceURL=res/styles/navigation.scss */");

_defaultExport.__hash = "2863596531";
_defaultExport.__scoped = ".navigation.jsx-3692366770{list-style:none;margin:0;background:#6a8ba9;display:-webkit-box;display:-moz-box;display:-ms-flexbox;display:-webkit-flex;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row wrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;}.navigation.jsx-3692366770 li.jsx-3692366770:last-child{margin-left:auto;}.navigation.jsx-3692366770 .prev-last-li.jsx-3692366770{position:absolute;right:0;margin-right:100px;}.navigation.jsx-3692366770 a.jsx-3692366770{-webkit-text-decoration:none;text-decoration:none;display:block;padding:1em;color:#FFF;}.navigation.jsx-3692366770 a.jsx-3692366770:hover{background:#a98173;}#menu.jsx-3692366770{position:absolute;right:0;color:#FFF;text-align:center;border-radius:4px;background:#b38f83;box-shadow:0 1px 8px rgba(0,0,0,0.05);-webkit-transition:opacity .4s;transition:opacity .4s;z-index:1;}#menu.jsx-3692366770 ul.jsx-3692366770{list-style:none;width:150px;padding:0;}#menu.jsx-3692366770:after{position:absolute;top:-7px;right:30px;content:\"\";display:block;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:8px solid white;}.login-menu-container.jsx-3692366770{margin-right:15px;cursor:pointer;}.login-menu-container.jsx-3692366770 img.jsx-3692366770{border-radius:50%;border-style:solid;width:45px;height:45px;object-fit:cover;border-color:#a98173;border-width:2px;}.login-menu-container.jsx-3692366770 a.jsx-3692366770{padding:0;}.hamburger.jsx-3692366770{background-color:transparent;border:0px;outline:0px;width:50px;height:50px;height:auto;position:fixed;top:15px;right:15px;cursor:pointer;z-index:9999;}.hamburger.jsx-3692366770 .burger.jsx-3692366770{-webkit-transition:all 0.3s;transition:all 0.3s;border-radius:5px;height:5px;width:100%;display:inline-block;background-color:#4e4d4d;}.focus.jsx-3692366770 .burger.jsx-3692366770{-webkit-transition:all 0.3s;transition:all 0.3s;}.focus.jsx-3692366770 .burger.jsx-3692366770:first-of-type{background-color:#C62828;-webkit-transition-delay:0.4s;transition-delay:0.4s;-webkit-transform:translate3d(0px,0px,0px) rotateZ(45deg);-ms-transform:translate3d(0px,0px,0px) rotateZ(45deg);transform:translate3d(0px,0px,0px) rotateZ(45deg);width:40px;-webkit-transform-origin:left top;-ms-transform-origin:left top;transform-origin:left top;}.focus.jsx-3692366770 .burger.jsx-3692366770:nth-of-type(2){opacity:0;}.focus.jsx-3692366770 .burger.jsx-3692366770:last-of-type{background-color:#C62828;-webkit-transition-delay:0.4s;transition-delay:0.4s;-webkit-transform:translate3d(0px,0px,0px) rotateZ(-45deg);-ms-transform:translate3d(0px,0px,0px) rotateZ(-45deg);transform:translate3d(0px,0px,0px) rotateZ(-45deg);width:40px;-webkit-transform-origin:left bottom;-ms-transform-origin:left bottom;transform-origin:left bottom;}.b-a-expanded.jsx-3692366770{-webkit-transition:all .25s;transition:all .25s;top:-0px;}.menu-expanded.jsx-3692366770{position:fixed;-webkit-transition:all .25s;transition:all .25s;text-align:center;height:100%;width:100%;border-radius:0;top:0;left:0;z-index:1;cursor:pointer;background-color:rgba(0,0,0,0.85);}.menu-expanded.jsx-3692366770 ul.jsx-3692366770{padding:0;list-style-type:none;-webkit-transition:all 0s;transition:all 0s;position:relative;left:0;z-index:2;}.menu-expanded.jsx-3692366770 a.jsx-3692366770{-webkit-transition:all .15s;transition:all .15s;-webkit-text-decoration:none;text-decoration:none;font-size:2em;padding:5px;color:#FFF;display:block;}.menu-expanded.jsx-3692366770 a.jsx-3692366770:hover{background-color:rgba(255,255,255,0.8);-webkit-transition:all .15s;transition:all .15s;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;color:#333;border:1px solid rgba(255,255,255,0.15);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcy9zdHlsZXMvbmF2aWdhdGlvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUVtQixBQVlDLEFBR0MsQUFLRyxBQU1GLEFBSUQsQUFXRixBQUtFLEFBVUEsQUFJQSxBQVNSLEFBR21CLEFBYVQsQUFRQSxBQUdLLEFBT2YsQUFHZSxBQU9MLEFBSUwsQUFhTCxBQVFVLEFBUXNCLFVBN0UvQixBQWtDQSxBQTRCVSxLQWJELENBckhYLEFBeUNHLENBOUJNLENBSVYsQUFlQSxBQWdCQyxBQVVNLEFBSUksQ0FuQ0MsTUF4QkQsQUErRkcsQUFVQSxDQTFGSCxBQWVSLENBZ0JBLENBTEQsQ0E4QkMsRUEyRE8sRUEzRUYsSUF4QkUsQUE2QlAsQ0FuQkEsQUFNQSxDQWtHUyxDQXpFUixJQXZFUSxDQWNBLEdBOENSLEFBdUJNLEFBT0csQUFxQlosQUF5QlksQ0F6RlAsQ0E3QkEsRUFzREgsR0F6Q08sRUFnRlIsR0FsRE8sR0FiaUIsQUF5QnRCLEFBMkNNLENBbkhELEFBa0JMLEVBaUVELE9BcERRLEVBMENQLEFBd0RNLENBOUdQLENBMENVLEFBdUJWLEFBVXlDLEFBVUMsSUF2R2pDLEFBbUhSLE1BakdBLEFBdURHLEFBc0VJLENBM0RFLElBckRvQixDQXFGOUIsQUFhSixJQWxGNEIsQ0FjbEIsQUEwRUgsRUFMSixDQWpJVyxDQXlFWixFQTJDTyxLQWhDUyxDQTZDZCxDQXZEQSxDQTZEQyxHQTNFTSxLQXlEWixFQXBITyxBQTBFRSxFQTZESixFQWxCSixJQXZGZ0IsRUFnQk8sQ0F3RXBCLENBbkNnQixDQXFEWixFQTdERCxNQTRDRSxNQWlCQSxDQTdERCxRQTZDdUIsSUExRU4sa0JBZ0dwQixJQS9HRCxPQWdIaUMsQ0F2QkwsRUF6RjNCLEVBOUJnQiwyQkFDQSxRQTZJaUIsUUFuRGpDLEdBVUEsUUFUZSxHQVVHLDJFQXJHRCxZQTJGRCxZQVVHIiwiZmlsZSI6InJlcy9zdHlsZXMvbmF2aWdhdGlvbi5zY3NzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmRyZWZlZG9yZW5rby9Ecm9wYm94L1N0dWRpdW0vbWVyc2kvYmFjaGVsb3IvZnJvbnRlbmQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gJ3N0eWxlZC1qc3gvY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY3NzYC5uYXZpZ2F0aW9uIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiAjNmE4YmE5O1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogLW1vei1ib3g7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC1mbG93OiByb3cgd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0OyB9XG4gIC5uYXZpZ2F0aW9uIGxpOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvOyB9XG4gIC5uYXZpZ2F0aW9uIC5wcmV2LWxhc3QtbGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwMHB4OyB9XG4gIC5uYXZpZ2F0aW9uIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgY29sb3I6ICNGRkY7IH1cbiAgICAubmF2aWdhdGlvbiBhOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICNhOTgxNzM7IH1cblxuLyogbWVudSBhcHBlYXJhbmNlKi9cbiNtZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgY29sb3I6ICNGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kOiAjYjM4ZjgzO1xuICBib3gtc2hhZG93OiAwIDFweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuNHM7XG4gIHotaW5kZXg6IDE7IH1cbiAgI21lbnUgdWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIHBhZGRpbmc6IDA7IH1cblxuI21lbnU6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTdweDtcbiAgcmlnaHQ6IDMwcHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDZweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHdoaXRlOyB9XG5cbi5sb2dpbi1tZW51LWNvbnRhaW5lciB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5sb2dpbi1tZW51LWNvbnRhaW5lciBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3JkZXItY29sb3I6ICNhOTgxNzM7XG4gICAgYm9yZGVyLXdpZHRoOiAycHg7IH1cbiAgLmxvZ2luLW1lbnUtY29udGFpbmVyIGEge1xuICAgIHBhZGRpbmc6IDA7IH1cblxuLmhhbWJ1cmdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDBweDtcbiAgb3V0bGluZTogMHB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAxNXB4O1xuICByaWdodDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB6LWluZGV4OiA5OTk5OyB9XG4gIC5oYW1idXJnZXIgLmJ1cmdlciB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0ZDRkOyB9XG5cbi5mb2N1cyAuYnVyZ2VyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7IH1cbiAgLmZvY3VzIC5idXJnZXI6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M2MjgyODtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjRzO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCkgcm90YXRlWig0NWRlZyk7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCB0b3A7IH1cbiAgLmZvY3VzIC5idXJnZXI6bnRoLW9mLXR5cGUoMikge1xuICAgIG9wYWNpdHk6IDA7IH1cbiAgLmZvY3VzIC5idXJnZXI6bGFzdC1vZi10eXBlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzYyODI4O1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuNHM7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KSByb3RhdGVaKC00NWRlZyk7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207IH1cblxuLmItYS1leHBhbmRlZCB7XG4gIHRyYW5zaXRpb246IGFsbCAuMjVzO1xuICB0b3A6IC0wcHg7IH1cblxuLm1lbnUtZXhwYW5kZWQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRyYW5zaXRpb246IGFsbCAuMjVzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpOyB9XG4gIC5tZW51LWV4cGFuZGVkIHVsIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMHM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMjsgfVxuICAubWVudS1leHBhbmRlZCBhIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGNvbG9yOiAjRkZGO1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLm1lbnUtZXhwYW5kZWQgYTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgLjE1cztcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7IH1cbmA7Il19 */\n/*@ sourceURL=res/styles/navigation.scss */";
_defaultExport.__scopedHash = "3692366770";
var _default = _defaultExport;
exports.default = _default;