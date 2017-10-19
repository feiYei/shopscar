var gulp = require("gulp");
var webserver = require("gulp-webserver");
var url = require("url");


gulp.task("server", function () {
    gulp.src(".")
        .pipe(webserver({
            livereload: true,
            directoryListing: true,
            middleware: function (req, res, next) {
                var requestUrl = url.parse(req.url).pathname;
                if (requestUrl == "/api") {
                    var data = [{
                        id: 1,
                        name: "尼康",
                        image: "http://localhost:8080/Content/img/icon/1.jpg",
                        addr: "北京",
                        state: true,
                        num: 1,
                        price: 1500,
                        size: "M",
                        color: "red"
                    },
                        {
                            id: 2,
                            name: "索尼",
                            image: "http://localhost:8080/Content/img/icon/2.jpg",
                            addr: "北京",
                            state: true,
                            num: 1,
                            price: 2300,
                            size: "L",
                            color: "green"
                        },
                        {
                            id: 3,
                            name: "松下",
                            image: "http://localhost:8080/Content/img/icon/3.jpg",
                            addr: "北京",
                            state: false,
                            num: 1,
                            price: 3600,
                            size: "s",
                            color: "blue"
                        }

                    ];
                    res.writeHead(200, {
                        "Content-type": "application/json;charset=UTF-8",
                        "Access-Control-Allow-Origin": "*"
                    });
                    res.write(JSON.stringify(data));
                    res.end();
                }
                next()
            },
            open: "/index.html",
            port: 8080
        }))
});