
// Main JavaScript / jQuery Script File of ChewSite

$(document).ready(function() {
	
	if($.browser.msie) {
		$('body').html('');
		alert('Did I ever told you the definition of insanity? Its when people dont use Chrome!!!');
		window.close();
	}
	
	var wrapper = {
		"SizeWrapper" : $("#AlertSizeSite"),
		"ChewSite"    : $("#ChewSite")
	};
	
	wrapper.ChewSite.hide();
	wrapper.SizeWrapper.show();
	
	/*$('body #wrapper #sidebar #editbar').html('<div style="width:90%;height:auto;margin:10px auto;border:1px solid red;"><select id="selectMenuNum">' +
											  '<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option>' +
											  '<option value="5">5</option><option value="6">6</option></select><br /><br /></div>');*/
	
	$('#submitAlertSize input').click(function() {
		wrapper.SizeWrapper.hide(200);
		wrapper.ChewSite.show(125);
		appInit();
	});
	
	function appInit() {
	
		var isHeaderStarted = false;
		var isMenuStarted = false;
		var isContentStarted = false;
		var isFooterStarted = false;
		var isBodyStarted = false;
		var isMenuClicked = false;
	
	
	
		//    Menu Section Script
		// --------------------------
		$('body #wrapper #sidebar #upperSidebar input').on('click', function() {
			if(!$(this).hasClass('clicked')) {
				$('.section').hide(200);
				var BTid = $(this).attr('id');
				$('body #wrapper #sidebar #editbar').html('');
				$('body #wrapper #sidebar #itembar #' + BTid + '_section').show(200);
				$('body #wrapper #sidebar #upperSidebar input').removeClass('clicked');
				$(this).addClass('clicked');
				$('body #wrapper #board #ChewSite, body #wrapper #board #ChewSite div').css('box-shadow', 'inset 0 0 0px red');
				switch(BTid) {
					case 'HeaderBT' :
						if(!isHeaderStarted) { $('body #wrapper #board #ChewSite #' + BTid).css('box-shadow', 'inset 0 0 5px red'); }
					break;
					
					case 'MenuBT' :
						if(!isMenuStarted) { $('body #wrapper #board #ChewSite #' + BTid).css('box-shadow', 'inset 0 0 5px red'); }
					break;
					
					case 'ContentBT' :
						var contentPlace = $('body #wrapper #board #ChewSite #ContentBT');
						if(!isContentStarted) {
							$('body #wrapper #board #ChewSite #' + BTid).css('box-shadow', 'inset 0 0 5px red');
						}
						if(isMenuStarted) {
							$('body #wrapper #sidebar #itembar #ContentBT_section #haveMenu').show();
							$('body #wrapper #sidebar #itembar #ContentBT_section #donthavemenu').hide();
							
							$('body #wrapper #sidebar #itembar #ContentBT_section #haveMenu #pageSelect select').html('');
							
							$('body #wrapper #board #ChewSite #MenuBT div ul li').each(function() {
								var aChild = $(this).children('a');
								$('body #wrapper #sidebar #itembar #ContentBT_section #haveMenu #pageSelect select').append('<option value="' + aChild.attr('id').toLowerCase() + '"' + '>' + aChild.text() + '</option>');
							});
							
							
							if(isMenuClicked) {
								
								isMenuClicked = false;
								contentPlace.html('');
								
								$('body #wrapper #board #ChewSite #MenuBT div ul li').each(function() {
									var aChild = $(this).children('a'),
									aChildHref = aChild.attr('id').toLowerCase(),
									aChildVal = aChild.text();
									contentPlace.append('<div class="contentDivs" id="' + aChildHref + '"></div>');
								});
								
								/*wrapper.ChewSite.prepend('<script type="text/javascript">document.getElementsByClassName("menulink").onclick=function(){ ' +
														 'document.getElementsByClassName("contentDivs").style.display = "none"; document.getElementById(this.getAttribute("id")).style.display = "block"; };</script>'); */
								
							} else {
								
							}
						}
						else { $('body #wrapper #sidebar #itembar #ContentBT_section #haveMenu').hide();
							   $('body #wrapper #sidebar #itembar #ContentBT_section #donthavemenu').show(); }
					break;
					
					case 'FooterBT' :
						if(!isFooterStarted) { $('body #wrapper #board #ChewSite #' + BTid).css('box-shadow', 'inset 0 0 5px red'); }
					break;
					
					case 'BodyBT' :
						if(!isBodyStarted) { $('body #wrapper #board #ChewSite').css('box-shadow', 'inset 0 0 5px red'); }
					break;
				}
				/*if(BTid != 'BodyBT') { $('body #wrapper #board #ChewSite #' + BTid).css('box-shadow', 'inset 0 0 5px red'); }
				else { $('body #wrapper #board #ChewSite').css('box-shadow', 'inset 0 0 5px red'); }*/
			}
		});
		// Menu Section Script Done
		
		
		//    Menu Section Script Done
		// -------------------------- Done!
		
		
		//      Items Script
		// ----------------------------
		$('.item').on('click', function() {
			var itemSectionEL = $(this).parent('div').parent('.section'),
			itemSection = itemSectionEL.attr('id'),
			itemID = $(this).attr('id');
			$('body #wrapper #board #ChewSite, body #wrapper #board #ChewSite div').css('box-shadow', 'inset 0 0 0px red');
			$('body #wrapper #board #ChewSite').css('box-shadow', 'inset 0 0 0px red');
			var itemCode = $(this).parent('div').children('label').html(),
			editBar = $('body #wrapper #sidebar #editbar');
			switch(itemSection) {
				case 'HeaderBT_section' :
					isHeaderStarted = true;
					isBodyStarted = true;
					$('body #wrapper #board #ChewSite #HeaderBT').html(itemCode);
					$('body #wrapper #board #ChewSite #HeaderBT').css('background-image','none');
					$('body #wrapper #board #ChewSite #HeaderBT').css('background-color','#F2F2F2');
					editBar.html('<div style="width:100%; height:auto; margin:10px auto;" id="edittollcontainer">' +
								 '<div style="width:80%; height:auto; margin:0px auto; font-size:16px; font-weight:bold; padding-bottom:5px; text-decoration:underline;" class="text">Logo</div><input type="radio" name="logokind" value="text" checked="checked" /><span class="text" style="font-size:16px;">Text</span><br /><div style="width:80%; height:auto; margin:0px auto;"><input type="text" name="logoh" id="logoHeader" /></div><input type="radio" name="logokind" value="img"><span class="text" style="font-size:16px;">Image</span><br /><br /><span class="text" style="font-size:16px; margin-left:10px;">Color</span><input type="text" name="logoch" id="logocHeader" />' + 
								 '<div style="width:80%; height:auto; margin:0px auto; margin-top:20px; font-size:16px; font-weight:bold; padding-bottom:5px; text-decoration:underline;" class="text">BG</div><input type="radio" name="bgkind" value="color" checked="checked" /><span class="text" style="font-size:16px;">Color</span><br /><div style="width:80%; height:auto; margin:0px auto;"><input type="text" name="bgh" id="bgHeader" /></div><input type="radio" name="bgkind" value="imgbg"><span class="text" style="font-size:16px;">Image</span></div>');
				break;
				
				case 'MenuBT_section' :
					isMenuStarted = true;
					isBodyStarted = true;
					isMenuClicked = true;
					$('body #wrapper #board #ChewSite #ContentBT').html('');
					$('body #wrapper #board #ChewSite #MenuBT').html(itemCode);
					editBar.html('<div style="width:90%;height:auto;margin:10px auto;border:0px solid red;"><select id="selectMenuNum">' +
											  '<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option>' +
											  '<option value="5">5</option><option value="6">6</option></select><br /><br /><div id="inputNumMenu"></div></div>');
				break;
				
				case 'ContentBT_section' :
					isContentStarted = true;
					isBodyStarted = true;
					$('body #wrapper #board #ChewSite #ContentBT').html(itemCode);
				break;
				
				case 'FooterBT_section' :
					isFooterStarted = true;
					isBodyStarted = true;
					$('body #wrapper #board #ChewSite #FooterBT').html(itemCode);
					editBar.html('<div style="width:100%; height:auto; margin:10px auto;" id="edittollcontainer">' +
								 '<div style="width:80%; height:auto; margin:0px auto; font-size:16px; font-weight:bold; padding-bottom:5px; text-decoration:underline;" class="text">Footer</div><input type="radio" name="footerkind" value="text" checked="checked" ><span class="text" style="font-size:16px;">Text</span><br /><div style="width:80%; height:auto; margin:0px auto;"><input type="text" name="textFooter" id="textFooter" /></div><input type="radio" name="footerkind" value="img"><span class="text" style="font-size:16px;">Image</span><br /><br /><span class="text" style="font-size:16px; margin-left:10px;">Color</span><input type="text" name="footerc" id="footerc" />' + 
								 '<div style="width:80%; height:auto; margin:0px auto; margin-top:20px; font-size:16px; font-weight:bold; padding-bottom:5px; text-decoration:underline;" class="text">BG & Border</div><input type="radio" name="footerbgkind" value="color" checked="checked" /><span class="text" style="font-size:16px;">Color</span><br /><div style="width:80%; height:auto; margin:0px auto;"><input type="text" name="bgf" id="bgFooter" /></div><input type="radio" name="footerbgkind" value="imgbg"><span class="text" style="font-size:16px;">Image</span><br /><br /><span class="text" style="font-size:16px; margin-left:10px;">Border Color</span><input type="text" name="footerbc" id="footerbc" /></div>');
				break;
				
				case 'BodyBT_section' :
					editBar.html('<div style="width:80%; height:auto; margin:10px auto 0px auto; font-size:16px; font-weight:bold; padding-bottom:5px; text-decoration:underline;" class="text">BG</div><input type="radio" name="bodybgkind" value="color" checked="checked" ><span class="text" style="font-size:16px;">Color</span><br /><div style="width:80%; height:auto; margin:0px auto;"><input type="text" name="bodybg" id="bodyBG" /></div><input type="radio" name="bodybgkind" value="img"><span class="text" style="font-size:16px;">Image</span>');
				break;
			}
		});
		// items Script Done
		
		$(document).on('click', '.backLayoutshref', function() {
			var page = $('#havemenu #pageSelect select').val(),
			contentPage = $('#ChewSite #ContentBT #' + page),
			editBar = $('body #wrapper #sidebar #editbar'),
			contentSection = $('#haveMenu');
			contentPage.html('');
			editBar.html('');
			contentSection.children('#layoutsItems').html('<input type="button" class="citem itemBT" id="vertlay" value="Vertical" /><input type="button" class="citem itemBT" id="horilay" value="Horizontal" />');
			contentSection.children('#contentKind').html('<p class="text textBold textUnderLine" >Choose Content Layout</p>');
		});
		
		// Content Page Select Script
		$('#havemenu #pageSelect select').on('change', function() {
			var page = $(this).val(),
			contentPage = $('#ChewSite #ContentBT #' + page),
			contentSection = $('#haveMenu');
			$('body #wrapper #sidebar #editbar').html('');
			$('#ChewSite #ContentBT .contentDivs').hide();
			contentPage.show();
			if(/\S/.test(contentPage.html())) {
				contentSection.children('#layoutsItems').html('<input type="button" class="citem itemBT" id="paragraph" value="Paragraph" /><input type="button" class="citem itemBT" id="image" value="Image" /><input type="button" class="citem itemBT" id="video" value="Video" />');
				contentSection.children('#contentKind').html('<a class="text textBold textUnderLine backLayoutshref" href="javascript:void(0)">Back to Layouts</a>');
			} else {
				contentSection.children('#layoutsItems').html('<input type="button" class="citem itemBT" id="vertlay" value="Vertical" /><input type="button" class="citem itemBT" id="horilay" value="Horizontal" />');
				contentSection.children('#contentKind').html('<p class="text textBold textUnderLine" >Choose Content Layout</p>');
			}
		});
		// Content Page Select Script Done
		
		// Content Layout Item Script
		$(document).on('click', '.citem', function() {
			isContentStarted = true;
			var contentSection = $('#haveMenu');
			$('body #wrapper #board #ChewSite, body #wrapper #board #ChewSite div').css('box-shadow', 'inset 0 0 0px red');
			$('body #wrapper #board #ChewSite').css('box-shadow', 'inset 0 0 0px red');
			var editBar = $('body #wrapper #sidebar #editbar'),
			citem = $(this).val(),
			page = $('#havemenu #pageSelect select').val(),
			content_page = $('#ChewSite #ContentBT #' + page);
			switch(citem) {
				case "Horizontal" :
					content_page.html('<div id="upperContent" style="width:99%;height:49%; margin:0px auto; border:0px solid blue;" ><div id="leftUpContent content1" style="float:left; width:40%; height:90%; margin-top:2%; margin-left:8%;; border:1px solid red;" ></div>  <div id="rightUpContent content2" style="float:right; width:40%; height:90%; margin-top:2%; margin-right:8%; border:1px solid red;" ></div></div>' + 
									  '<div id="bottomContent" style="width:99%;height:49%; margin:0px auto; border:0px solid blue;" ><div id="leftBottomContent content3" style="float:left; width:40%; height:90%; margin-top:2%; margin-left:8%;; border:1px solid red;" ></div>  <div id="rightBottomContent content4" style="float:right; width:40%; height:90%; margin-top:2%; margin-right:8%; border:1px solid red;" ></div></div>');
					editBar.html('<div style="width:80%; height:auto; margin:10px auto 0px auto; font-size:16px; font-weight:bold; padding-bottom:5px; text-decoration:underline;" class="text">Upper BG</div><input type="radio" name="uppercontentbg" value="color" checked="checked" ><span class="text" style="font-size:16px;">Color</span><br /><div style="width:80%; height:auto; margin:0px auto;"><input type="text" name="uppercontentbg" id="uppercontentBG" /></div><input type="radio" name="uppercontentbg" value="img"><span class="text" style="font-size:16px;">Image</span> <div style="width:80%; height:auto; margin:10px auto 0px auto; font-size:16px; font-weight:bold; padding-bottom:5px; text-decoration:underline;" class="text">Bottom BG</div><input type="radio" name="bottomcontentbg" value="color" checked="checked" ><span class="text" style="font-size:16px;">Color</span><br /><div style="width:80%; height:auto; margin:0px auto;"><input type="text" name="bottomcontentbg" id="bottomcontentBG" /></div><input type="radio" name="bottomcontentbg" value="img"><span class="text" style="font-size:16px;">Image</span>');
				break;
				
				case "Vertical" :
					content_page.html('<div id="leftContent" style="height:99%; width:45%; float:left; margin-left:5%; border:0px solid blue;" ><div id="upperleft content1" style="height:42%; width:90%; margin:7% auto; border:1px solid red;" ></div>  <div id="bottomleft content2" style="height:42%; width:90%; margin:7% auto; border:1px solid red;" ></div></div>' + 
									  '<div id="rightContent" style="height:99%; width:45%; float:right; margin-right:5%; border:0px solid blue;" ><div id="upperright content3" style="height:42%; width:90%; margin:7% auto; border:1px solid red;" ></div>  <div id="bottomright content4" style="height:42%; width:90%; margin:7% auto; border:1px solid red;" ></div></div>');
					editBar.html('<div style="width:80%; height:auto; margin:10px auto 0px auto; font-size:16px; font-weight:bold; padding-bottom:5px; text-decoration:underline;" class="text">Left BG</div><input type="radio" name="leftcontentbg" value="color" checked="checked" ><span class="text" style="font-size:16px;">Color</span><br /><div style="width:80%; height:auto; margin:0px auto;"><input type="text" name="leftcontentbg" id="leftcontentBG" /></div><input type="radio" name="leftcontentbg" value="img"><span class="text" style="font-size:16px;">Image</span> <div style="width:80%; height:auto; margin:10px auto 0px auto; font-size:16px; font-weight:bold; padding-bottom:5px; text-decoration:underline;" class="text">Right BG</div><input type="radio" name="rightcontentbg" value="color" checked="checked" ><span class="text" style="font-size:16px;">Color</span><br /><div style="width:80%; height:auto; margin:0px auto;"><input type="text" name="rightcontentbg" id="rightcontentBG" /></div><input type="radio" name="rightcontentbg" value="img"><span class="text" style="font-size:16px;">Image</span>');
				break;
			}
			contentSection.children('#layoutsItems').html('<input type="button" class="citem itemBT" id="paragraph" value="Paragraph" /><input type="button" class="citem itemBT" id="image" value="Image" /><input type="button" class="citem itemBT" id="video" value="Video" />');
			contentSection.children('#contentKind').html('<a class="text textBold textUnderLine backLayoutshref" href="javascript:void(0)">Back to Layouts</a>');
		});
		// Content Layout Item Script Done
		
		//      Items Script  Done
		// ----------------------------  Done!
		
		
		//    Edit Bar Customize Event Handlers
		// -----------------------------------------------
		
		// Events Items Header Customize
		$(document).on('keyup', '#logoHeader', function() {
			var radioLogokind = $(this).parent('div').parent('#edittollcontainer').children('input[type="radio"][name="logokind"]:checked').val(),
			logoVal = $(this).val(),
			logoPlace = $('body #wrapper #board #ChewSite #HeaderBT div');
			if(radioLogokind == "text") {
				logoPlace.css('margin-top','3%');
				logoPlace.html(logoVal);
			} else {
				logoPlace.css('margin-top','2%');
				logoPlace.html('<img alt="logo" src=" ' + logoVal + ' " height="80%" />');
			}
		});
		$(document).on('keyup', '#logocHeader', function() {
			var logocVal = $(this).val(),
			logoPlace = $('body #wrapper #board #ChewSite #HeaderBT div');
			logoPlace.css('color',logocVal);
		});
		$(document).on('keyup', '#bgHeader', function() {
			var radioBgkind = $(this).parent('div').parent('#edittollcontainer').children('input[type="radio"][name="bgkind"]:checked').val(),
			bgVal = $(this).val(),
			bgPlace = $('body #wrapper #board #ChewSite #HeaderBT');
			if(radioBgkind == "color") {
				bgPlace.css('background-image','none');
				bgPlace.css('background-color',bgVal);
			} else {
				bgPlace.css('background-image','url(' + bgVal + ')');
			}
		});
		// Events Items Header Customize Done
		
		// Events Items Menu Customize
		$(document).on('change', '#selectMenuNum', function() {
			var menuNum = parseInt($(this).val()),
			inputPlace = $('#inputNumMenu'),
			menuPartPlace = $('body #wrapper #board #ChewSite #MenuBT div ul');
			inputPlace.html('');
			menuPartPlace.html('');
			for(var i = 0; i<menuNum; i++) {
				inputPlace.append((i + 1) + ' <input type="text" class="MenuPartInputs" name="menuNum" id="' + (i + 1) + 'MenuPart" /><br />');
				menuPartPlace.append('<li><a href="javascript:void(0)"></a></li>');
			}
		});
		$(document).on('keyup', '.MenuPartInputs', function() {
			var MenuPart = $(this).attr('id').substring(0,1) - 1,
			MenuPartName = $(this).val(),
			liMenuPart = $('body #wrapper #board #ChewSite #MenuBT div ul li').eq(MenuPart),
			liMenuParta = liMenuPart.children('a');
			liMenuParta.text(MenuPartName);
			liMenuParta.attr('id',MenuPartName);
			liMenuParta.attr('class','menulink');
		});
		// Events Items Menu Customize Done
		
		// Events Items Body Customize
		$(document).on('keyup', '#editbar div #bodyBG', function() {
			var radioBgkind = $('body #wrapper #sidebar #editbar input[type="radio"][name="bodybgkind"]:checked').val(),
			inputBGbody = $(this).val(),
			ChewSiteBody = $('body #wrapper #board #ChewSite');
			if(radioBgkind == 'color') {
				ChewSiteBody.css('background-image','none');
				ChewSiteBody.css('background-color',inputBGbody);
			} else {
				ChewSiteBody.css('background-image','url(' + inputBGbody + ')');
			}
		});
		// Events Items Body Customize
		
		// Events Items Footer Customize
		$(document).on('keyup', '#editbar #edittollcontainer div #textFooter', function() {
			var radioFooterTextKind = $('#editbar #edittollcontainer input[type="radio"][name="footerkind"]:checked').val(),
			FooterText = $(this).val(),
			FooterPlace = $('body #wrapper #board #ChewSite #FooterBT div label'),
			DivHeightChanger = $('body #wrapper #board #ChewSite #FooterBT div #footerdivheightchanger');
			if(radioFooterTextKind == 'text') {
				DivHeightChanger.css('height','30%');
				FooterPlace.html(FooterText);
			} else {
				DivHeightChanger.css('height','25%');
				FooterPlace.html('<img src="' + FooterText +'" alt="footer" height="50%" width="50%" />');
			}
		});
		$(document).on('keyup', '#editbar #edittollcontainer #footerc', function() {
			$('body #wrapper #board #ChewSite #FooterBT div label').css('color',$(this).val());
		});
		$(document).on('keyup', '#editbar #edittollcontainer div #bgFooter', function() {
			var radioFooterBGKind = $('#editbar #edittollcontainer input[type="radio"][name="footerbgkind"]:checked').val(),
			FooterBG = $(this).val(),
			FooterPlaceBG = $('body #wrapper #board #ChewSite #FooterBT div');
			if(radioFooterBGKind == 'color') {
				FooterPlaceBG.css('background-image','none');
				FooterPlaceBG.css('background-color',FooterBG);
			} else {
				FooterPlaceBG.css('background-image','url(' + FooterBG + ')');
			}
		});
		$(document).on('keyup', '#editbar #edittollcontainer #footerbc', function() {
			$('body #wrapper #board #ChewSite #FooterBT div').css('border-top','1px solid ' + $(this).val());
		});
		// Events Items Footer Customize
		
		// Events Layout Horz Content Customize
		$(document).on('keyup', '#editbar div #leftcontentBG', function() {
			var radioBgleft = $('body #wrapper #sidebar #editbar input[type="radio"][name="leftcontentbg"]:checked').val(),
			inputBGleft = $(this).val(),
			page = $('#havemenu #pageSelect select').val(),
			BGleftPage = $('#ChewSite #ContentBT #' + page + ' #leftContent');
			if(radioBgleft == 'color') {
				BGleftPage.css('background-image','none');
				BGleftPage.css('background-color',inputBGleft);
			} else {
				BGleftPage.css('background-image','url(' + inputBGleft + ')');
			}
		});
		$(document).on('keyup', '#editbar div #rightcontentBG', function() {
			var radioBgright = $('body #wrapper #sidebar #editbar input[type="radio"][name="rightcontentbg"]:checked').val(),
			inputBGright = $(this).val(),
			page = $('#havemenu #pageSelect select').val(),
			BGrightPage = $('#ChewSite #ContentBT #' + page + ' #rightContent');
			if(radioBgright == 'color') {
				BGrightPage.css('background-image','none');
				BGrightPage.css('background-color',inputBGright);
			} else {
				BGrightPage.css('background-image','url(' + inputBGright + ')');
			}
		});
		// Events Layout Horz Content Customize
		
		// Events Layout Vert Content Customize
		$(document).on('keyup', '#editbar div #bottomcontentBG', function() {
			var radioBgbottom = $('body #wrapper #sidebar #editbar input[type="radio"][name="bottomcontentbg"]:checked').val(),
			inputBGbottom = $(this).val(),
			page = $('#havemenu #pageSelect select').val(),
			BGbottomPage = $('#ChewSite #ContentBT #' + page + ' #bottomContent');
			if(radioBgbottom == 'color') {
				BGbottomPage.css('background-image','none');
				BGbottomPage.css('background-color',inputBGbottom);
			} else {
				BGbottomPage.css('background-image','url(' + inputBGbottom + ')');
			}
		});
		$(document).on('keyup', '#editbar div #uppercontentBG', function() {
			var radioBgupper = $('body #wrapper #sidebar #editbar input[type="radio"][name="uppercontentbg"]:checked').val(),
			inputBGupper = $(this).val(),
			page = $('#havemenu #pageSelect select').val(),
			BGupperPage = $('#ChewSite #ContentBT #' + page + ' #upperContent');
			if(radioBgupper == 'color') {
				BGupperPage.css('background-image','none');
				BGupperPage.css('background-color',inputBGupper);
			} else {
				BGupperPage.css('background-image','url(' + inputBGupper + ')');
			}
		});
		// Events Layout Vert Content Customize
		
		//    Edit Bar Customize Event Handlers Done
		// ----------------------------------------------- Done!
	}
});