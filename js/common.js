// gnb
$(function () {
    $('#header').each(function () {
        var menuHeight = 0;

        $('.header__gnb__sub', this).each(function () {
            if ($(this).height() > menuHeight) menuHeight = $(this).height();
        });

        $('.header__gnb__sub', this).height(menuHeight);
        $('.header__gnb__sub__cover', this).height(menuHeight);
    });

    $('.header__gnb nav > ul > li').hover(
        function () {
            $('.header__gnb .header__gnb__sub, .header__gnb__sub__cover').show();
        },
        function () {
            $('.header__gnb .header__gnb__sub, .header__gnb__sub__cover').hide();
        },
    );

    $(window).scroll(function () {
        var position = $(window).scrollTop();
        if (position != 0) {
            $('#header').addClass('header--position');
        } else {
            $('#header').removeClass('header--position');
        }
    });

    /*
	$('.header__gnb nav > ul > li a').focus(function(){
		$('.header__gnb .header__gnb__sub, .header__gnb__sub__cover').show();		
	});
	*/
});

// 레이어 211009
$(function () {
    var popReadyNum = $('.pop__main').length;

    if (popReadyNum != 0) {
        $('.pop--overlay').show();
    }

    $(document).on('click', '.btn--close', function () {
        $(this).parents('.pop__main').addClass('hide').fadeOut('fast');

        var popNum = $('.pop__main').not('.hide').length;

        if (popNum == 0) {
            $('.pop--overlay').fadeOut('fast');
            $('.wrap__pop__main').fadeOut('fast');
        }
    });
});

function isNull(obj) {
    var obj = obj;
    if (obj === null) {
        return true;
    }

    if (typeof obj === 'string' && obj === '') {
        return true;
    }
    if (typeof obj === 'undefinded') {
        return true;
    }
    if (typeof obj === 'number') {
        return Number(obj) == 0 ? true : false;
    }

    return false;
}

function isNotNull(obj) {
    return !isNull(obj);
}

// 아이디 유효성 검사
function idCheck(obj) {
    var regExp = RegExp(/^[A-Za-z0-9]{4,20}$/);
    var value = obj;
    if (isNotNull(obj)) {
        return regExp.test(value);
    } else {
        return false;
    }
}
// 비밀번호 유효성 검사
function pwCheck(obj) {
    var regExp = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,16}$/);
    var value = obj;
    if (isNotNull(obj)) {
        return regExp.test(value);
    } else {
        return false;
    }
}

// 이름 유효성 검사
function nameCheck(obj) {
    var regExp = RegExp(/^[가-힣]{2,6}$/);
    var value = obj;
    if (isNotNull(obj)) {
        return regExp.test(value);
    } else {
        return false;
    }
}

// 이메일 유효성 검사
function emailCheck(obj) {
    var regExp = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
    var value = obj;
    if (isNotNull(obj)) {
        return regExp.test(value);
    } else {
        return false;
    }
}
// 휴대전화 유효성 검사
function mobileCheck(obj) {
    var regExp = RegExp(/^01[0179][0-9]{7,8}$/);
    var value = obj;
    if (isNotNull(obj)) {
        return regExp.test(value);
    } else {
        return false;
    }
}
