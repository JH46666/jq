
	carousel.json = (){
		
	}
	carousel = (function() {
		var intersec = 2,
			curindex = 0,
			Timer = 0,
			piclen = 0,
			isfirst = true,
		carouselArr = [];

		function _getPic() { //获取轮播图
			$.getJSON(BASEDOMAIN + 'carousel.json', function(data) {
				if (data.rtn == 0) {
					var tempArr = [];
					intersec = (+data.data.intersec + 1) * 1000;
					carouselArr = data.data.pics;
					piclen = carouselArr.length;
					tempArr.push('<span class="on">•</span>');
					for (var i = 1; i < piclen; i++) {
						tempArr.push('<span>•</span>');
					}
					_changePicLink();
					$('#carousel-point').html(tempArr.join('')).show();
					curindex = 1;
					_startCarousel();
				}
			});
		}

		function _changePicLink() {

			var tempobj = carouselArr[curindex];
			if (isfirst) {
				$('#carousel-pic').css('background',tempobj['background']);
				$('#carousel-pic img').attr('src', STATICSOURCE + VERSION + tempobj.src).show();
				isfirst = false;
			} else {
				$('#carousel-pic').css('background',tempobj['background']);
				$('#carousel-pic img').attr('src', STATICSOURCE + VERSION + tempobj.src);
			}
			if (tempobj.link == '') {
				$('#carousel-pic a').removeAttr('href').removeAttr('target');
			} else {
				$('#carousel-pic a').attr({
					'href': tempobj.link,
					'target': '_blank'
				});
			}
			$('#carousel-point span').removeClass('on').eq(curindex).addClass('on');

		}

		function _startCarousel() {
			Timer = setInterval(function() {
				if (curindex >= piclen) {
					curindex = 0;
				}
				_changePicLink();
				curindex++;
			}, intersec);
		}

		return {
			init: function() {
				_getPic();
				this.bindClick();
			},
			bindClick: function() {
				$('#carousel-point').on('click', 'span', function() {
					var index = $('#carousel-point span').index(this);
					curindex = index;
					_changePicLink();
					curindex++;
					clearInterval(Timer);
					Timer = 0;
					_startCarousel();
				});
			}
		}
	})();

	carousel.init();
    var paramFunc=function(key) {
		var query = location.search;
		var reg = "/^.*[\\?|\\&]" + key + "\\=([^\\&]*)/";
		reg = eval(reg);
		var ret = query.match(reg);
		if (ret != null) {
			return decodeURIComponent(ret[1]);
		} else {return "";}
	};
  
	if(xlQuickLogin.isLogined()){
		location.href = jumpUrl;
	}
	//xlQuickLogin.logout()
	xlQuickLogin.getLoginIframe('xl_login');

});