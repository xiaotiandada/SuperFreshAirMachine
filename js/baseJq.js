$(function () {
    var index = 1;
    var view = {
        showColor: function (location, pigment) {
            var target = document.getElementById(location);
            target.style.color = pigment;
        },
        showText: function (location, text) {
            var target = document.getElementById(location);
            target.innerHTML = text;
        }
    };
    var model = {
        FonOffBoole: true,
        FMoshiBoole: false,
        FRewuBoole: false,
        FuserdefineBoole: false,
        FMoshiNum: 3,

        FMoshi: [
            "智能模式",
            "极净模式",
            "自定义模式"
        ],
        FRewu: [
            "铺热关闭",
            "铺热开启"
        ],
        FMRU: [{
                location: "FonOff",
                pigment: "#ee9434 "
            },
            {
                location: "FMoshi",
                pigment: "#459234"
            },
            {
                location: "FRewu",
                pigment: "#c7270d "
            },
            {
                location: "Fuserdefine",
                pigment: "#1ceaf7"
            },
        ]
    };
    var controller = {};

    $("#FonOff").on('click', function () {
        if (model.FonOffBoole) {
            view.showColor("FonOff", "#ee9434");
            view.showColor("FMoshi", "#459234");

            view.showColor("iconMoshi", "#fff");
            view.showColor("moshi", "#fff");

            model.FonOffBoole = false;
            model.FMoshiBoole = true;
            model.FRewuBoole = true;
            model.FuserdefineBoole = true;
        } else {
            view.showColor("FonOff", "#525252");
            view.showColor("FMoshi", "#525252");
            view.showColor("FRewu", "#525252");
            view.showColor("Fuserdefine", "#525252");

            view.showColor("iconMoshi", "#ced8cd");
            view.showColor("moshi", "#ced8cd");

            view.showColor("iconRewu", "#ced8cd");
            view.showColor("Rewu", "#ced8cd");

            // view.showText("Rewu",model.FRewu[0]);                

            model.FonOffBoole = true;

            model.FMoshiBoole = false;
            model.FRewuBoole = false;
            model.FuserdefineBoole = false;
        }
    })


    $("#FMoshi").on('click', function () {
        if (model.FMoshiBoole && !model.FonOffBoole) {
            view.showText("moshi", model.FMoshi[index]);
            index++;
            if (index == model.FMoshiNum) {
                index = 0;
            }
        }

    })

    $("#FRewu").on('click', function () {
        if (model.FRewuBoole && !model.FonOffBoole) {
            view.showColor("FRewu", "#c7270d");

            view.showColor("iconRewu", "#fff");
            view.showColor("Rewu", "#fff");

            view.showText("Rewu", model.FRewu[1]);

            model.FRewuBoole = false;
        } else {
            if (model.FonOffBoole) return false;
            view.showColor("FRewu", "#525252");
            if (!model.FonOffBoole) {
                view.showText("Rewu", model.FRewu[0]);
            }
            model.FRewuBoole = true;
        }

    })


    $("#Fuserdefine").on('click', function () {
        if (model.FuserdefineBoole && !model.FonOffBoole) {
            view.showColor("Fuserdefine", "#1ceaf7");
            model.FuserdefineBoole = false;
        } else {
            if (model.FonOffBoole) return false;
            view.showColor("Fuserdefine", "#525252");
            model.FuserdefineBoole = true;
        }
    })
})