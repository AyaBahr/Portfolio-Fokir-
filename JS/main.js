var typed = new Typed('.element', {
    strings: ['Designer',
        'Developer',
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
});
$('#loading .loader').fadeOut(1000, () => {
    $('#loading').fadeOut(1000);
    $('body').css('overflow-y', 'auto')
})
let aboutOffset = $('#about').offset().top
$(window).scroll(function () {
    let wScroll = $(window).scrollTop();
    if (wScroll >= aboutOffset - 100) {
        $('.navbar').css('cssText', 'background-color : rgba(0, 0, 0 ,0.75) !important ')
    }
    else {
        $('.navbar').css('cssText', 'background-color : transparent !important ');
    }
})
$(function () {
    $('ul li .nav-link').click(function () {
        $('ul li .nav-link').removeClass('active-nav');
        $(this).addClass('active-nav');
    });
});

let count = 0;
let projects = 0;
let files = 0;
let codes = 0;
function counterTeam() {
    count++;
    if (count == 200) {
        clearInterval(x)
    }
    document.getElementById('team').innerHTML = count
}
let x = setInterval(counterTeam, 50)

function counterProject() {
    projects++;
    if (projects == 345) {
        clearInterval(y)
    }
    document.getElementById('projects').innerHTML = projects
}
let y = setInterval(counterProject, 20)

function counterFile() {
    files++;
    if (files == 1800) {
        clearInterval(z)
    }
    document.getElementById('files').innerHTML = files
}
let z = setInterval(counterFile, 10)

function counterCode() {
    codes++;
    if (codes == 1200) {
        clearInterval(w)
    }
    document.getElementById('code').innerHTML = codes
}
let w = setInterval(counterCode, 10)