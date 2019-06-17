//API接口地址
const host = 'http://ccapi.wtvxin.com/api/';
const filePath = 'http://cc.wtvxin.com';


function formatNumber(n) {
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
    const t1 = [year, month, day].map(formatNumber).join('/')
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
    return urlWithArgs
}

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
                setTimeout(function() {
                    wx.hideLoading()
                }, 800);
                // wx.hideLoading();
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
                            url: '/pages/loginWay/main?askUrl=' + curPage
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
                reject(false);
            },
            complete: function() {
                setTimeout(function() {
                    wx.hideLoading()
                }, 1500)
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
    if (userId && token) {
        return true;
    } else {
        wx.setStorageSync('askUrl', '');
        if (objUrl) {
            let gotoUrl = objUrl.replace(/\?/g, '%3F').replace(/\=/g, '%3D').replace(/\&/g, '%26');
            wx.redirectTo({
                url: "/pages/loginWay/main?askUrl=" + gotoUrl
            });
        } else {
            wx.redirectTo({
                url: "/pages/loginWay/main"
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

function wx_login(code, iv, encryptedData) {
    wx.showLoading({
        title: '加载中' //数据请求前loading
    })
    wx.request({
        url: host + 'Login/SignIn_New', //仅为示例，并非真实的接口地址
        method: "POST",
        data: {
            code,
            iv,
            encryptedData
        },
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function(res) {
            wx.setStorageSync("openId", res.data.data.openId);
            wx.setStorageSync("unionid", res.data.data.unionid);
            wx.hideLoading();
            console.log(res.data.meta, "res.meta.meta++++++++++++++++++++++++++++++++")
            if (res.data.meta.code === 0) {
                wx.setStorageSync("openId", "");
                wx.setStorageSync("unionid", "");
                wx.setStorageSync("userId", res.data.meta.dic.UserId);
                wx.setStorageSync("token", res.data.meta.dic.Token);
                wx.showToast({
                        title: "登录成功！",
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
                    // setTimeout(() => {
                    //   // wx.navigateBack();
                    // }, 1500);

            } else if (res.data.meta.code === 2) {
                wx.showToast({
                    title: res.data.meta.message + '!',
                    icon: 'none',
                    duration: 1500
                })
                setTimeout(() => {
                    wx.redirectTo({
                        url: '/pages/bindTel/main'
                    })
                }, 1500);

            } else {
                wx.showToast({
                    title: res.data.meta.msg + '!',
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
}

//微信直接登录
export function Login() {
    wx.login({
        success(res) {
            console.log(res);
            if (res.code) {
                wx.getUserInfo({
                    success(res2) {
                        console.log(res2);
                        wx.setStorageSync("userInfo", {
                            "nickName": res2.userInfo.nickName,
                            "avatarUrl": res2.userInfo.avatarUrl
                        });
                        wx_login(res.code, res2.iv, res2.encryptedData);
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

export function trim(str) {
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
// 滚动到底部
export function scrollBottom() {

}
// 获取自身定位
export function getLocation(){
    return new Promise ((resolve,reject)=>{
        wx.getLocation({
            type:'gcj02',
            success(res){
                resolve(res)
            },
            fail(err){
                console.log(err)
                reject(err)
            }
        })
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
    previewImage: previewImage,
    trim,
    getLocation
}