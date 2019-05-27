//API接口地址
const host = 'https://hhapi.wtvxin.com/api/';
const filePath = 'https://hh.wtvxin.com';

export function formatNumber(n) {
    const str = n.toString()
    return str[1] ? str : `0${str}`
}

export function formatTime(date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()

    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    const t1 = [year, month, day].map(formatNumber).join('-')
    const t2 = [hour, minute, second].map(formatNumber).join(':')

    return `${t1} ${t2}`
}



export function getCurrentPageUrlWithArgs(changeJson) {
    console.log(changeJson, "changeJson")
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]
    const url = currentPage.route
    let options = currentPage.options;
    if (changeJson) {
        options = Object.assign({}, options, changeJson);
        console.log(options, "options")
    }
    let urlWithArgs = `/${url}?`
    for (let key in options) {
        const value = options[key]
        urlWithArgs += `${key}=${value}&`
    }
    urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1);
    console.log("改造过后的页面参数：" + urlWithArgs);
    return urlWithArgs
}

// export function tabChangePage(changeJson) {
//     //改变路径
//     const pages = getCurrentPages();
//     const currentPage = pages[pages.length - 1];
//     const url = currentPage.route;
//     let json = currentPage.options;
//     json = Object.assign({}, json, changeJson);
//     let urlWithArgs = `/${url}?`;
//     for (let key in json) {
//         const value = json[key];
//         urlWithArgs += `${key}=${value}&`;
//     }
//     urlWithArgs = urlWithArgs.substring(0, urlWithArgs.length - 1);
//     console.log("改造过后的路由：" + urlWithArgs);
//     return urlWithArgs;
// }

//请求封装
function request(url, method, data, curPage, header = {}) {
    wx.showLoading({
        title: '加载中' //数据请求前loading
    })
    return new Promise((resolve, reject) => {
        wx.request({
            url: host + url, //仅为示例，并非真实的接口地址
            method: method,
            data: data,
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function(res) {
                wx.hideLoading();
                if (res.data.code === 0) {
                    resolve(res.data);
                } else if (res.data.code === 2) {
                    wx.showToast({
                        title: '需要重新登录!',
                        icon: 'none',
                        duration: 1500
                    })
                    setTimeout(() => {
                        wx.redirectTo({
                            url: '/pages/login2/main?askUrl=' + curPage
                        })
                    }, 1500);

                } else {
                    resolve(res.data);
                    wx.showToast({
                        title: res.data.msg + '!',
                        icon: 'none',
                        duration: 1500
                    })

                }
            },
            fail: function(error) {
                wx.hideLoading();
                wx.showToast({
                    title: error + '，请刷新页面重试!',
                    icon: 'none',
                    duration: 1500
                })
            },
            complete: function() {
                wx.hideLoading();
            }
        })
    })
}

export function get(url, data, curpage) { //curpage：是传进来的当前地址在没有登录的时候，把这个参数传到登录哪里，如果登录了就跳回curpage
    return request(url, 'GET', data, curpage)
}

export function post(url, data, curpage) {
    return request(url, 'POST', data, curpage)
}

//提供全局方法，维护和判断accessToken
export function toLogin(objUrl) { //identity: 1:客服；2：客户；3：师傅
    const userId = wx.getStorageSync('userId');
    const token = wx.getStorageSync('token');
    const identity = wx.getStorageSync('identity');
    if (userId && token && identity) {
        return true;
    } else {
        wx.setStorageSync('askUrl', '');
        if (objUrl) {
            let gotoUrl = objUrl.replace(/\?/g, '%3F').replace(/\=/g, '%3D').replace(/\&/g, '%26');
            wx.redirectTo({
                url: "/pages/login2/main?askUrl=" + gotoUrl
            });
        } else {
            wx.redirectTo({
                url: "/pages/login2/main"
            });
        }
        return false;
    }
}

//验证手机号
export function valPhone(tel) {
    var r_phone = /^[1][3,4,5,6,7,8][0-9]{9}$/;
    // var phoneNumber = $.trim($('#phoneNumber').val());
    if (tel == "") {
        wx.showToast({
            title: "手机号不能为空!",
            icon: "none",
            duration: 2000
        });
        return false;
    }
    if (!r_phone.test(tel)) {
        wx.showToast({
            title: "请输入正确的手机格式!",
            icon: "none",
            duration: 1500
        });
        return false;
    }
    return true;
}

// 预览图片
/**
 * 
 * @param {String} index 当前索引
 * @param {Array} picArr 图片的http链接的数组
 */
export function previewImage(index, picArr) {
    wx.previewImage({
        current: picArr[index], // 当前显示图片的http链接
        urls: picArr
    })
}

//用户直接微信登录
function wxMemberLogin(code, iv, encryptedData) {
    post("Login/MemberLogin", {
        iv,
        code,
        encryptedData
    }).then(result => {
        console.log("++++++++++++++");
        console.log(result);
        if (result.code === 0) { //登录成功
            //把返回的userId、token保存起来
            if (wx.getStorageSync("askUrl") && wx.getStorageSync("askUrl") !== "undefined") {
                if (wx.getStorageSync("mobile") !== result.data.MemberMobile && wx.getStorageSync("mobile") && wx.getStorageSync("mobile") !== "undefined") {
                    wx.setStorageSync("askUrl", "");
                }
            }
            wx.setStorageSync("userId", result.data.MemberId);
            wx.setStorageSync("token", result.data.MemberToken);
            wx.setStorageSync("openId", result.data.MemberOpenId);
            wx.setStorageSync("mobile", result.data.MemberMobile);
            wx.showToast({
                title: '登录成功',
                icon: 'success',
                duration: 1500,
                success: function() {
                    if (wx.getStorageSync("askUrl") !== "undefined" && wx.getStorageSync("askUrl")) {
                        setTimeout(function() {
                            console.log(wx.getStorageSync("askUrl"))
                            wx.reLaunch({
                                url: wx.getStorageSync("askUrl")
                            });
                            wx.setStorageSync("askUrl", "");
                        }, 1500);
                    } else {
                        setTimeout(function() {
                            wx.reLaunch({
                                url: "/pages/my/main"
                            });
                        }, 1500);
                    }
                }
            })
        }
        if (result.code === 100) {
            wx.setStorageSync("openId", result.data.MemberOpenId);
            wx.setStorageSync("unionid", result.data.MemberUnionid);
            wx.showToast({
                title: result.msg,
                icon: 'none',
                duration: 1500,
                success: function() {
                    setTimeout(function() {
                        wx.redirectTo({
                            url: '/pages/wxBindTel/main'
                        })
                    }, 1500);
                }
            })
        }
    });

}



//师傅直接微信登录
function wxInstalMasterLogin(code, iv, encryptedData) {
    post("Login/InstalMasterLogin", {
        iv,
        code,
        encryptedData
    }).then(result => {
        if (result.code === 0) { //登录成功
            if (wx.getStorageSync("askUrl") && wx.getStorageSync("askUrl") !== "undefined") {
                if (wx.getStorageSync("mobile") !== result.data.MasterMobile && wx.getStorageSync("mobile") && wx.getStorageSync("mobile") !== "undefined") {
                    wx.setStorageSync("askUrl", "");
                }
            }
            wx.setStorageSync("userId", result.data.MasterId);
            wx.setStorageSync("token", result.data.MasterToken);
            wx.setStorageSync("openId", result.data.MasterOpenId);
            wx.setStorageSync("mobile", result.data.MasterMobile);
            wx.showToast({
                title: '登录成功',
                icon: 'success',
                duration: 1500,
                success: function() {
                    if (wx.getStorageSync("askUrl") !== "undefined" && wx.getStorageSync("askUrl")) {
                        setTimeout(function() {
                            console.log(wx.getStorageSync("askUrl"))
                            wx.reLaunch({
                                url: wx.getStorageSync("askUrl")
                            });
                            wx.setStorageSync("askUrl", "");
                        }, 1500);
                    } else {
                        setTimeout(function() {
                            wx.reLaunch({
                                url: "/pages/my/main"
                            });
                        }, 1500);
                    }
                }
            })
        }
        if (result.code === 100) {
            wx.setStorageSync("openId", result.data.MasterUnionId);
            wx.setStorageSync("unionid", result.data.MasterUnionId);
            wx.redirectTo({
                url: '/pages/wxBindTel/main'
            })
        }
        if (result.code === 102) { //没有填写审核资料
            wx.setStorageSync("userId", result.data.MasterId);
            wx.setStorageSync("token", result.data.MasterToken);
            wx.setStorageSync("openId", result.data.MasterOpenId);
            wx.navigateTo({
                url: '/pages/FillInfp/main'
            })
        }
    });

}

//客服微信直接登录
function wxCustomerServiceLogin(code, iv, encryptedData) {
    post("Login/CustomerServiceLogin", {
        iv,
        code,
        encryptedData
    }).then(result => {
        if (result.code === 0) { //登录成功
            if (wx.getStorageSync("askUrl") && wx.getStorageSync("askUrl") !== "undefined") {
                if (wx.getStorageSync("mobile") !== result.data.ServiceMobile && wx.getStorageSync("mobile") && wx.getStorageSync("mobile") !== "undefined") {
                    wx.setStorageSync("askUrl", "");
                }
            }
            wx.setStorageSync("userId", result.data.ServiceId);
            wx.setStorageSync("token", result.data.ServiceToken);
            wx.setStorageSync("openId", result.data.ServiceOpenId);
            wx.setStorageSync("mobile", result.data.ServiceMobile);
            wx.showToast({
                title: '登录成功',
                icon: 'success',
                duration: 1500,
                success: function() {
                    if (wx.getStorageSync("askUrl") !== "undefined" && wx.getStorageSync("askUrl")) {
                        setTimeout(function() {

                            wx.reLaunch({
                                url: wx.getStorageSync("askUrl")
                            });
                            wx.setStorageSync("askUrl", "");
                        }, 1500);
                    } else {
                        setTimeout(function() {
                            wx.reLaunch({
                                url: "/pages/my/main"
                            });
                        }, 1500);
                    }

                }
            })
        }
    });

}

//微信直接登录
export function Login() {
    wx.login({
        success(res) {
            if (res.code) {
                wx.getUserInfo({
                    success(res2) {
                        wx.setStorageSync("userInfo", res2.userInfo);
                        let identity = wx.getStorageSync("identity");
                        if (identity == 1) { //identity: 1:客服；2：客户；3：师傅
                            wxCustomerServiceLogin(res.code, res2.iv, res2.encryptedData);
                        }
                        if (identity == 2) { //identity: 1:客服；2：客户；3：师傅
                            wxMemberLogin(res.code, res2.iv, res2.encryptedData);
                        }
                        if (identity == 3) {
                            wxInstalMasterLogin(res.code, res2.iv, res2.encryptedData);
                        }
                    },
                    fail() {
                        wx.showToast({
                            title: '授权失败，请重新执行!',
                            icon: 'none',
                            duration: 1500
                        })
                    }
                })
            } else {
                wx.showToast({
                    title: res.errMsg,
                    icon: "none",
                    duration: 1500
                });
            }
        },
        fail() {
            wx.showToast({
                title: "调取登录失败!",
                icon: "none",
                duration: 1500
            });
        }
    })

}


export {
    host,
    filePath,
}
export default {
    Login,
    toLogin,
    get,
    post,
    formatNumber,
    formatTime,
    getCurrentPageUrlWithArgs,
    valPhone: valPhone,
    previewImage: previewImage
}