const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
$(function (getNum) {
    var $select = $(".number");
    for (i = 1; i <= 29; i++) {
        // 1 Day = 24 Hours = 1440 minutes = 86400000 ms
        $select.append($('<option></option>').val((i) * 86400000).html(i))
    }
});
// Change when select date on calendar
var calc = document.getElementById('calc');
function dateFunc() {
    // Get Date from Calendar selection
    var dataEnd = $('[name="date_end"]').val();
    // Turn Date from Calendar into Ms
    var nDate = new Date(dataEnd);

    msDate = nDate.getTime();
    console.log(msDate); // Milisecond Date

    // Get math value from 1-30 input and turn into millisecond
    var x = $('.number').val();
    // Turn value into int
    var xNum = Number(x);
    console.log(xNum);
    // Add ms time and new int
    var y = msDate + xNum;
    console.log(y);

    var d = new Date();

    d.setTime(y);
    console.log(d);
    var month = (monthNames[d.getMonth()]);
    var day = (d.getDate())

    var nDay = Date.parse(day)

    if (nDay == 30) {
        day = 1;
        month = (monthNames[d.getMonth()]++);;
        console.log("HEY!");
    } else {
        day = (d.getDate() + 1)
    }

    var year = ("20" + (d.getYear() - 100));

    console.log("CIM: " + month);
    console.log("CID: " + day);
    console.log("CIY: " + year);

    p.innerHTML = ("Your checkout date is: " + month + " " + day + ", " + year);

    $(function () {
        var $select = $(".number");
        for (i = 1; i <= 30; i++) {
            $select.append($('<option></option>').val(i * 86400000).html(i))
        }
    });

}