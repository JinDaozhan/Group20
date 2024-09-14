"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_link2 = common_vendor.resolveComponent("uni-link");
  const _easycom_uni_col2 = common_vendor.resolveComponent("uni-col");
  const _easycom_uni_row2 = common_vendor.resolveComponent("uni-row");
  (_easycom_uni_link2 + _easycom_uni_col2 + _easycom_uni_row2)();
}
const _easycom_uni_link = () => "../../uni_modules/uni-link/components/uni-link/uni-link.js";
const _easycom_uni_col = () => "../../uni_modules/uni-row/components/uni-col/uni-col.js";
const _easycom_uni_row = () => "../../uni_modules/uni-row/components/uni-row/uni-row.js";
if (!Math) {
  (_easycom_uni_link + _easycom_uni_col + _easycom_uni_row)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    let href = common_vendor.ref("https://uniapp.dcloud.io/component/README?id=uniui");
    let showMsg = function() {
      common_vendor.index.showModal({
        content: "这是提示信息",
        showCancel: false,
        success: function() {
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          href: common_vendor.unref(href),
          text: common_vendor.unref(href)
        }),
        b: common_vendor.o((...args) => common_vendor.unref(showMsg) && common_vendor.unref(showMsg)(...args)),
        c: common_vendor.p({
          span: 12,
          offset: 6
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
