// you can replace module.experts by just exports

exports.getDate = function () {
    const today  = new Date();
    const options = { 
        weekday: 'long', 
        //year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    //var today  = new Date();

    console.log(today.toLocaleDateString("en-US")); // 9/17/2016
    console.log(today.toLocaleDateString("en-US", options));

    //var currentDate = today.getDay();
    var day = today.toLocaleDateString("en-US", options);
    return day;
};

exports.getDay = function () {
    const today  = new Date();
    const options = { 
        weekday: 'long'
    };
    //var today  = new Date();

    console.log(today.toLocaleDateString("en-US")); // 9/17/2016
    console.log(today.toLocaleDateString("en-US", options));

    //var currentDate = today.getDay();
    var day = today.toLocaleDateString("en-US", options);
    return day;
};