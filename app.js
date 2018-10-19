const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
$(function (getNum) {
    var $select = $(".number");
    for (i = 1; i <= 29; i++) {
        $select.append($('<option></option>').val((i)).html(i))
    }
});
// Change when select date on calendar
var calc = document.getElementById('calc');
function dateFunc() {
    // Get Date from Calendar selection
    var dataEnd = $('[name="date_end"]').val();
    // Create a checkin date moment
    var checkinDate = moment(dataEnd, 'YYYY-M-DD');

    // Check to make sure date is valid 
    if(!checkinDate.isValid()){
        alert('must add a valid checkin date');
        return;
    }
    // get the number of days of the stay
    var stayLength = $('.number').val();

    // get the checkoutDate by adding StayLength to CheckinDate
    var checkoutDate = checkinDate.add(stayLength, 'days');

    // Parse out month/day/year variables
    var month = checkoutDate.format('MMMM');
    var day = checkoutDate.format('D');
    var year = checkoutDate.format('YYYY');

    console.log("CIM: " + month);
    console.log("CID: " + day);
    console.log("CIY: " + year);

    
    p.innerHTML = `Your checkout date is ${month} ${day}, ${year}`;
}
