$(document).ready(function(){
 	$('#eco-hero-cta').click(function(){
		scrollTo('eco-donate');
	});
	$('#amountN').on('input',function(){
		$(this).prop('checked', false);
		$('input[name="amount"]').prop('checked', false);
	});
	$('input[name="amount"]').change(function() {
		$('#amountN').val('');
	});
	$('#eco-form-next').click(function(){
		$(this).css('display', 'none');
		$('#eco-form-2').css('display', '');
		$('#eco-form-submit').css('display', '');
		return false;
	});
	$('.eco-leader__mode_top').click(function(){
		if ($(this).hasClass('active'))
			return false;
		$('.eco-leader__mode_new').removeClass('active');
		$(this).addClass('active');
		$('.eco-leader__table').removeClass('modeNewest').addClass('modeTops');
	});
	$('.eco-leader__mode_new').click(function(){
		if ($(this).hasClass('active'))
			return false;
		$('.eco-leader__mode_top').removeClass('active');
		$(this).addClass('active');
		$('.eco-leader__table').removeClass('modeTops').addClass('modeNewest');
	});
});

function scrollTo(aid){
	let destination = $('div[id="' + aid + '"');
	$('html,body').animate({
		scrollTop: destination.offset().top
	},'slow');
}

function GoTo(regionId){
	$('.eco-form__select-input').val(regionId);
	scrollTo('eco-donate');
}

function Show(regionId){
	$('.eco-stats__table > tbody  > tr').each(function(){
		let c = 'row' + regionId;
		console.log(c);
		if ($(this).hasClass('row0') || $(this).hasClass(c)){
			$(this).css('display', 'table-row');
		}
		else {
			$(this).css('display', 'none');
		}
	});
}


$(window).on('scroll', function(){
	animateHero();
	animateGreen();
});

function animateHero(){
	let start = 0;
	let finish = $('.eco-donate__bg').last().offset().top + $('.eco-donate__bg').last().height();
	let wScroll = $(this).scrollTop();
	let value1, value2, value3, value4;
	let value5, value6, value7;
	let value8, value9, value10, value11;
	if (wScroll < start) {
		value1 = value2 = value3 = value4 = 'unset';
		value5 = value6 = value7 = 'unset';
		value8 = value9 = value10 = value11 = 'unset';
	} else if (wScroll > finish) {
		value1 = value2 = value3 = value4 = 'unset';
		value5 = value6 = value7 = 'unset';
	} else {
		let percent = (wScroll - start) / (finish - start);
		let offset = Math.round(180 * percent);
		value1 = 'translate(-' + offset + 'px)';
		value2 = 'translate(' + offset + 'px)';
		value3 = 'translate(-' + offset * 0.9 + 'px)';
		value4 = 'translate(' + offset * 0.9 + 'px)';
		value5 = 'translate(-' + offset * 0.6 + 'px)';
		value6 = 'translate(-' + offset * 0.6 + 'px)';
		value7 = 'translate(-' + offset * 0.6 + 'px)';
		value8 = 'translate(' + offset * 0.4 + 'px)';
		value9 = 'translate(-' + offset * 0.4 + 'px)';
		value10 = 'translate(' + offset * 0.2 + 'px)';
		value11 = 'translate(-' + offset * 0.2 + 'px)';
	}
	$('.eco-donate__trees-front-left').css({'transform': value1});
	$('.eco-donate__trees-front-right').css({'transform': value2});
	$('.eco-donate__trees-back-left').css({'transform': value3});
	$('.eco-donate__trees-back-right').css({'transform': value4});
	$('.eco-donate__front-left').css({'transform': value5});
	$('.eco-donate__center-middle').css({'transform': value6});
	$('.eco-donate__left-middle').css({'transform': value7});
	$('.eco-donate__right-middle').css({'transform': value8});
	$('.eco-donate__left-back').css({'transform': value9});
	$('.eco-donate__right-back').css({'transform': value10});
	$('.eco-donate__center-back').css({'transform': value11});	
}
function animateGreen(){
	let start = $('.eco-news').last().offset().top - $('.eco-green').last().height() - $(window).height() * 0.62;
	let finish = $('.eco-news').last().offset().top;
	let wScroll = $(this).scrollTop();
	let value1, value2, value3;
	if (wScroll < start) {
		value1 = value2 = value3 = 'unset';
	} else if (wScroll > finish) {
		value1 = value2 = value3 = 'unset';
	} else {
		let percent = (wScroll - start) / (finish - start);
		let offset = Math.round(180 * percent);
		value1 = 'translate(' + offset * 0.3 + 'px)';
		value2 = 'translate(-' + offset * 0.5 + 'px)';
		value3 = 'translate(' + offset * 0.7 + 'px)';
	}
	$('.eco-green__back').css({'transform': value1});
	$('.eco-green__middle').css({'transform': value2});
	$('.eco-green__front').css({'transform': value3});
}

