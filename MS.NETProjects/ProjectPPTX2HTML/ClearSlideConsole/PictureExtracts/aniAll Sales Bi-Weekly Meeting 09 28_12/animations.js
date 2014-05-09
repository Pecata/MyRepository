﻿function currXYSlide(slide) {
	var slideWidth = gv.sw;
	var slideLength = gv.sh;
	var left=0;
	var top = 0;

	if (typeof(slide.sV.left)!='undefined'){
	    var left = parseInt(slide.sV.left.style.left);
	    var top = parseInt(slide.sV.left.style.top);
	}
	var tranWidth = slide.sV.w;
	var tranHeight = slide.sV.h;
	switch (slide.c.additionalData) {
	case 1:
		slide.dX = left;
		slide.dY = tranHeight * -1;
		break;
	case 2:
		slide.dX = slideWidth;
		slide.dY = top;
		break;
	case 3:
		slide.dX = left;
		slide.dY = slideLength;
		break;
	case 4:
		slide.dX = tranWidth * -1;
		slide.dY = top;
		break;
	case 6:
		slide.dX = tranWidth * -1;
		slide.dY = tranHeight * -1;
		break;
	case 7:
		slide.dX = slideWidth;
		slide.dY = tranHeight * -1;
		break;
	case 8:
		slide.dX = slideWidth;
		slide.dY = slideLength;
		break;
	case 9:
		slide.dX = tranWidth * -1;
		slide.dY = slideLength;
		break
	}
	slide.fX = left;
	slide.fY = top;

	/*alert("slide is:"+slide);
	alert("slide fX is:" + slide.fX);
	alert("slide fY is:" + slide.fY);
	alert("slide dX is:" + slide.dX);
	alert("slide dY is:" + slide.dY);
	alert("slide state is:" + slide.state);
	alert("The slide length is:" + slide.slideLength);*/

    //Add check here,because we have slide.slideLengt is equal to undefined.
	if (slide.slideLength != null)
	{
	    if (slide.slideLength.state == 2) {
	        var h = slide.fY;
	        slide.fY = slide.dY;
	        slide.dY = h;
	        h = slide.fX;
	        slide.fX = slide.dX;
	        slide.dX = h
	    }
	}
}

function colorDecimal(val) {
	return Math.min(255, Math.round(val * 256))
}
function hsv2color(hue, satur, val) {
	var red;
	var green;
	var blue;
	var g;
	var h = Math.floor(hue / 60 % 6);
	var i = hue / 60 - h;
	var j = val * (1 - satur);
	var k = val * (1 - i * satur);
	var l = val * (1 - (1 - i) * satur);
	switch (h) {
	case 0: {
			red = val;
			green = l;
			blue = j;
			break
		};
	case 1: {
			red = k;
			green = val;
			blue = j;
			break
		};
	case 2: {
			red = j;
			green = val;
			blue = l;
			break
		};
	case 3: {
			red = j;
			green = k;
			blue = val;
			break
		};
	case 4: {
			red = l;
			green = j;
			blue = val;
			break
		};
	case 5: {
			red = val;
			green = j;
			blue = k;
			break
		}
	}
	red = colorDecimal(red);
	green = colorDecimal(green);
	blue = colorDecimal(blue);
	return [red, green, blue]
}

//REF
function rgb2hsv(color) {
	red = color[0] / 255;
	green = color[1] / 255;
	blue = color[2] / 255;
	var diffColors;
	var hue;
	var satur;
	var minColor = Math.min(Math.min(red, green), blue);
	var maxColor = Math.max(Math.max(red, green), blue);
	diffColors = maxColor - minColor;
	switch (maxColor) {
	case h: {
			hue = 0;
			break
		};
	case r: {
			hue = 60 * (g - b) / diffColors;
			if (g < b) {
				hue = hue + 360
			}
			break
		};
	case g: {
			hue = 60 * (b - r) / diffColors + 120;
			break
		};
	case b: {
			hue = 60 * (r - g) / diffColors + 240;
			break
		}
	}
	satur = maxColor === 0 ? 0 : 1 - minColor / maxColor;
	var hsv = [Math.round(hue), satur, maxColor];
	return hsv
}

function tranend(a) {
	pause();
	if (a != 1) {
		gStartTime = gStartTime - (gslength[gc - 1] + animations["s" + gc].t.i - gt);
		play();
		return
	}
	gx = 0;
	if (gpc != gc)
		gco("s" + gpc + "s0").style.display = "none";
	if (gpc > gc) {
		gco("s" + gpc + "s0").style.zIndex = "0"
	}
	gpc = 0;
	var b = gt - (gslength[gc - 1] + animations["s" + gc].t.i);
	gtct = gtct - b;
	if (animations["s" + gc].f == gslength[gc - 1]) {
		animations["s" + gc].f = gslength[gc - 1] + animations["s" + gc].t.i;
		gt = animations["s" + gc].f
	} else {
		gStartTime = gStartTime - (animations["s" + gc].f - (gslength[gc - 1] + animations["s" + gc].t.i));
		gt = animations["s" + gc].f
	}
	setProgress();
	if (animations["s" + gc].f == gslength[gc - 1] + animations["s" + gc].t.i) {
		if (animations["s" + gc].t.n == 1 && animations["s" + gc].g == 0) {
			playCurrentAniamtion();
			play()
		}
	} else if (galength.indexOf(animations["s" + gc].f) == -1 && animations["s" + gc].f != gslength[gc]) {
		playCurrentAniamtion();
		play()
	}
}
function video(a, b, c) {
	if (gv.v == 0)
		return;
	var d = a.getElementsByTagName("video")[0];
	if (d.paused) {
		d.play();
		checkForAudioVideoObject(d, 1)
	} else {
		d.currentTime = 0;
		d.pause()
	}
}
function audio(a) {
	var b = a.getElementsByTagName("audio")[0];
	if (gv.v == 0 || typeof b.play == "undefined")
		return;
	if (b.paused) {
		b.play();
		checkForAudioVideoObject(b, 1)
	} else {
		b.pause();
		b.currentTime = 0
	}
}
var audioEl = document.createElement("audio");
StylePpty = function () {};
StylePpty.Transform = function () {
	if (typeof this.transform == "undefined") {
		this.transform = "transform";
		var a = ["transform", "WebkitTransform", "msTransform", "MozTransform", "OTransform"];
		var b;
		var c = document.getElementsByTagName("div");
		while (b = a.shift()) {
			if (typeof c[0].style[b] != "undefined") {
				this.transform = b;
				return this.transform
			}
		}
	}
	return this.transform
};
var DOPStyle = new function () {
	if (typeof window.getComputedStyle == "undefined") {
		this.s = function (a, b) {
			if (typeof a.tagName != "undefined")
				return a.currentStyle[b]
		}
	} else {
		this.s = function (a, b) {
			if (typeof a.tagName != "undefined")
				return document.defaultView.getComputedStyle(a, null)[b]
		}
	}
};
CalculateDimensions = function (a) {
    var childNodes = a.childNodes;
    var styletop = -1;
    var styleleft = -1;
    var dimensions = {
        height: 0,
        width: 0
    };
    for (var f = 0; f < childNodes.length; f++) {
        var g = childNodes[f];
        if (g.nodeType == 1 && g.nodeName == "PRE") {
            if (g.style.left != styleleft) {
                dimensions.width += parseFloat(g.scrollWidth);
                styleleft = g.style.left
            }
            if (g.style.top != styletop) {
                dimensions.height += parseFloat(g.scrollHeight);
                styletop = g.style.top
            }
        }
    }
    return dimensions
};
initDimensions = function (a) {
	this.p = a;
	if (this.p.c.e0 != 5) {
		this.d = document.getElementById(gci(this.p.c.objectId, gc));
		this.dpd = document.getElementById(gci(this.p.c.objectId, gc) + "c");		
		var tempDpd = document.getElementById(gci(this.p.c.objectId, gc) + ".png");		
		if (tempDpd) {
		    this.dpd = tempDpd;		
		}
		var tempDpd = document.getElementById(gci(this.p.c.objectId, gc) + ".gif");		
		if (tempDpd) {
		    this.dpd = tempDpd;		    
		}
		var tempDpd = document.getElementById(gci(this.p.c.objectId, gc) + ".jpg");		
		if (tempDpd) {
		    this.dpd = tempDpd;		  
		}
		
	} else {
		this.d = document.getElementById(this.p.c.objectId);
		this.dpd = document.getElementById(this.p.c.objectId + "c")
		var tempDpd = document.getElementById(this.p.c.objectId, gc + ".png");		
		if (tempDpd) {		
		    this.dpd= tempDpd;
		}
		var tempDpd = document.getElementById(this.p.c.objectId, gc + ".gif");		
		if (tempDpd) {
		    this.dpd = tempDpd;		  
		}
		var tempDpd = document.getElementById(this.p.c.objectId, gc + ".jpg");		
		if (tempDpd) {
		    this.dpd = tempDpd;		  
		}		
	}
	if (this.dpd == null)
		this.dpd = this.d;
	this.h = this.d.style.height ? parseFloat(this.d.style.height) : this.d.parentNode.style.height ? parseFloat(this.d.parentNode.style.height) : parseFloat(this.d.scrollHeight);
	this.w = this.d.style.width ? parseFloat(this.d.style.width) : this.d.parentNode.style.width ? parseFloat(this.d.parentNode.style.width) : parseFloat(this.d.scrollWidth);
	if (this.h == 0 || this.w == 0) {
		var b = CalculateDimensions(this.dpd);
		this.h = b.height;
		this.w = b.width
	}
	this.l = this.d.style.left ? parseFloat(this.d.style.left) : parseFloat(this.d.parentNode.style.left);
	this.t = this.d.style.top ? parseFloat(this.d.style.top) : parseFloat(this.d.parentNode.style.top);
	this.op = parseFloat(DOPStyle.s(this.dpd, "opacity"));
	this.st = gt;
	this.setTrasform = function () {
		this.trns = this.p.getTranslate();
		this.scl = this.p.getScale();
		this.rta = this.p.getRotate();
		this.skw = this.p.getSkewX()
	};
	this.reset = function () {
		this.d.style.height = this.h + "px";
		this.d.style.width = this.w + "px";
		this.d.style.left = this.l + "px";
		this.d.style.top = this.t + "px";
		this.dpd.style.opacity = this.op;
		this.p.setTranslate(this.trns.x, this.trns.y);
		this.p.setScale(this.scl.x, this.scl.y);
		this.p.setRotate(this.rta);
		this.p.setSkewX(this.skw)
	}
};
BaseAnimation = function (c) {
	this.c = c;
	this.blks = new Array;
	this.gtime = function () {
		var a = gt;
		if (this.c.repetitions < 0 && this.rpdCnt > 0)
			a = (new Date).getTime();
		return a
	};
	this.initBaseAnimation = function (a) {
		if (typeof this.sV != "undefined")
			return false;
		this.sV = new initDimensions(this);
		this.sV.setTrasform();
		this.rpdCnt = 0;
		this.initT = this.st = a;
		if (typeof this.c.c6 != "undefined")
			this.aSrc = document.getElementById(this.c.c6).src;
		this.at = typeof this.c.e1 == "undefined" ? 1 : this.c.e1;
		this.InitAnimBlocks();
		return true
	};
	this.InitAnimBlocks = function () {
		if (this.at == 1)
			return;
		var p = this;
		var cBlk = 0;
		var cPara = 0;
		var cBlkI = 1;
		while (1) {
			var nblkId = p.c.e3[cPara] + "b" + cBlkI;
			if (null != document.getElementById(nblkId)) {
				var nBtm = p.c.e0 == 3 ? p.st + p.c.start + p.c.length + p.c.e2 * cBlk : p.st + p.c.e2 * cBlk;
				var pc = p.c;
				var nC = {
					objectId : nblkId,
					start : pc.start,
					length : pc.length,
					repetitions : 0,
					state: pc.state,
					name : pc.name,
					c7 : pc.c7,
					additionalData: pc.additionalData,
					additionalData2: pc.additionalData2,
					scaleX: pc.scaleX,
					scaleY: pc.scaleY,
					color: pc.color,
					transparency: pc.transparency,
					s6 : pc.s6,
					v : pc.v0,
					e0 : 5,
					e1 : 1,
					e2 : pc.e2,
					e3 : 0
				};
				if (typeof window[p.c.name] != "undefined")
					p.blks[cBlk] = eval("new " + p.c.name + "(nC)");
				else
					p.blks[cBlk] = new Fade(nC);
				var blk = p.blks[cBlk];
				blk.Initialize(nBtm);
				cBlk++;
				cBlkI++
			} else if (cPara + 1 < p.c.e3.length) {
				cPara++;
				cBlkI = 1
			} else
				break
		}
	};
	this.resetBaseAnimation = function () {
		this.pozd = false;
		this.stpd = false;
		for (x in this.blks) {
			this.blks[x].pozd = false;
			this.blks[x].stpd = false
		}
	};
	this.pause = function () {
		this.pozd = true;
		for (x in this.blks)
			this.blks[x].pozd = true
	};
	this.stop = function () {
		this.pozd = false;
		this.stpd = true;
		for (x in this.blks) {
			this.blks[x].pozd = false;
			this.blks[x].stpd = true
		}
	};
	this.reset = function () {
		this.rpdCnt = 0;
		this.st = this.initT;
		this.stop();
		this.stopAudio();
		if (typeof this.dltCv != "undefined")
			this.dltCv();
		if (typeof this.mc != "undefined")
			this.mc.cvt.clearRect(0, 0, this.w, this.h);
		if (typeof this.sV != "undefined")
			this.sV.reset();
		for (x in this.blks)
			this.blks[x].reset()
	};
	this.stopAudio = function () {
		if (this.aSrc == audioEl.src && audioEl.canPlayType) {
			if (!audioEl.paused)
				audioEl.pause();
			if (!this.pozd)
				audioEl.src = null
		}
	};
	this.playAudio = function () {
		if (!audioEl.canPlayType || typeof this.aSrc == "undefined" || this.aSrc == audioEl.src && !audioEl.paused)
			return;
		if (this.aSrc != audioEl.src)
			audioEl.src = this.aSrc;
		audioEl.play()
	};
	this.doRepeat = function () {
		this.rpdCnt++;
		if (this.rpdCnt < this.c.repetitions || this.c.repetitions < 0) {
			this.st = this.c.repetitions < 0 ? this.gtime() : this.st + this.c.length;
			this.stopAudio();
			this.play()
		}
	};
	this.setTranslate = function (a, b) {
		var c = StylePpty.Transform();
		var d = this.sV.d.style[c];
		var e = /translate\(+[^\)]+\)/;
		var f = "translate(" + a + "px," + b + "px)";
		if (-1 != d.search(e))
			d = d.replace(e, f);
		else if (null != d)
			d = d + f;
		this.sV.d.style[c] = d
	};
	this.getTranslate = function () {
		var a = {
			x : 0,
			y : 0
		};
		var b = StylePpty.Transform();
		var c = this.sV.d.style[b];
		var d = /translate\(+[^\)]+\)/;
		var e = c.match(d);
		if (null != e) {
			var f = e[0].match(/[0-9.-]+|[\d]+[^p]/g);
			a.x = parseFloat(f[0]);
			a.y = parseFloat(f[1])
		}
		return a
	};
	this.setScale = function (a, b) {
		var c = StylePpty.Transform();
		var d = this.sV.d.style[c];
		var e = /scale\(+[^\)]+\)/;
		var f = "scale(" + a + "," + b + ")";
		if (-1 != d.search(e))
			d = d.replace(e, f);
		else if (null != d)
			d = d + f;
		this.sV.d.style[c] = d
	};
	this.getScale = function () {
		var a = {
			x : 1,
			y : 1
		};
		var b = StylePpty.Transform();
		var c = this.sV.d.style[b];
		var d = /scale\(+[^\)]+\)/;
		var e = c.match(d);
		if (null != e) {
			var f = e[0].match(/[0-9.-]+|[\d]+[^p]/g);
			a.x = parseFloat(f[0]);
			a.y = parseFloat(f[1])
		}
		return a
	};
	this.setRotate = function (a) {
		var b = StylePpty.Transform();
		var c = this.sV.d.style[b];
		var d = /rotate\(+[^\)]+\)/;
		var e = "rotate(" + a + "deg)";
		if (-1 != c.search(d))
			c = c.replace(d, e);
		else if (null != c)
			c = c + e;
		this.sV.d.style[b] = c
	};
	this.getRotate = function () {
		var a = 0;
		var b = StylePpty.Transform();
		var c = this.sV.d.style[b];
		var d = /rotate\(+[^\)]+\)/;
		var e = c.match(d);
		if (null != e) {
			var f = e[0].match(/[0-9.-]+|[\d]+[^d]/g);
			a = parseFloat(f[0])
		}
		return a
	};
	this.setSkewX = function (a) {
		var b = StylePpty.Transform();
		var c = this.sV.d.style[b];
		var d = /skewX\(+[^\)]+\)/;
		var e = "skewX(" + a + "deg)";
		if (-1 != c.search(d))
			c = c.replace(d, e);
		else if (null != c)
			c = c + e;
		this.sV.d.style[b] = c
	};
	this.getSkewX = function () {
		var a = 0;
		var b = StylePpty.Transform();
		var c = this.sV.d.style[b];
		var d = /skewX\(+[^\)]+\)/;
		var e = c.match(d);
		if (null != e) {
			var f = e[0].match(/[0-9.-]+|[\d]+[^d]/g);
			a = parseFloat(f[0])
		}
		return a
	};
	this.plyBlockAnim = function () {
		function c() {
			if (a.pozd || a.stpd || b >= a.blks.length)
				return;
			while (1) {
				if (b >= a.blks.length)
					return;
				var d = a.blks[b];
				if (d.st <= a.gtime()) {
					d.play();
					b++
				} else
					break
			}
			CallbackFn(c)
		}
		var a = this;
		if (a.at == 1)
			return;
		var b = 0;
		CallbackFn(c)
	}
};

//REF
CanvasEl = function (width, height) {
	this.cv = document.createElement("canvas");
	this.cv.height = height;
	this.cv.width = width;
	this.cvt = this.cv.getContext("2d");
	this.bdrawn = false;
    //REF
	this.drawCmpltDiv = function (a, b, c) {
		var childNode = a.childNodes;
		var childNodeLength = childNode.length;
		for (var childInd = 0; childInd < childNodeLength; childInd++) {
			var child = childNode[childInd];
			if (child.nodeType != 1 || child.nodeName != "IMG")
				continue;
			var height = DOPStyle.s(a, "height");
			var width = DOPStyle.s(a, "width");
			var parentNodeHeight = DOPStyle.s(a.parentNode, "height");
			var parentNodeWidth = DOPStyle.s(a.parentNode, "width");
			var l = height && height != "100%" ? parseFloat(height) : parseFloat(parentNodeHeight);
			var m = width && width != "100%" ? parseFloat(width) : parseFloat(parentNodeWidth);
			this.cvt.drawImage(g, b, c, m, l)
		}
		for (var childInd = 0; childInd < childNodeLength; childInd++){
			var child = childNode[childInd];
			if (child.nodeType != 1 || child.nodeName != "PRE")
				continue;
			var n = child.style.left ? b + parseFloat(child.style.left) : b;
			var o = child.style.top ? c + parseFloat(child.style.top) : c;
			this.cvt.font = DOPStyle.s(g, "fontStyle") + " " + DOPStyle.s(g, "fontWeight") + " " + DOPStyle.s(g, "fontSize") + " " + DOPStyle.s(g, "fontFamily");
			this.cvt.fillStyle = DOPStyle.s(g, "color");
			this.cvt.textBaseline = "top";
			this.cvt.fillText(g.innerHTML, n, o)
		}
		for (var childInd = 0; childInd < childNodeLength; childInd++) {
			var child = childNode[childInd];
			var opacity = DOPStyle.s(child, "opacity");
			if (child.nodeType != 1 || child.nodeName != "DIV" || opacity == "0")
				continue;
			var left = DOPStyle.s(child, "left");
			var right = DOPStyle.s(child, "top");
			var n = left ? b + parseFloat(left) : 0;
			var o = right ? c + parseFloat(right) : 0;
			this.drawCmpltDiv(g, n, o)
		}
		this.bdrawn = true
	};
	this.drawDiv = function (a) {
		var b = a.getElementsByTagName("img");
		var c = new Image;
		var d = this;
		if (b.length > 0)
			c.src = b[0].src;
		else
			this.drawText(a);
		c.onload = function () {
			d.cvt.drawImage(c, 0, 0, c.width, c.height, 0, 0, d.cv.width, d.cv.height);
			d.drawText(a)
		}
	};
    //REF
	this.drawText = function (a) {
		var pre = a.getElementsByTagName("pre");
		var c = pre.length;
		for (var d = 0; d < c; d++) {
			var e = pre[d];
			this.cvt.font = DOPStyle.s(e, "fontStyle") + " " + DOPStyle.s(e, "fontWeight") + " " + DOPStyle.s(e, "fontSize") + " " + DOPStyle.s(e, "fontFamily");
			this.cvt.fillStyle = DOPStyle.s(e, "color");
			this.cvt.textBaseline = "bottom";
			this.cvt.fillText(e.innerHTML, parseFloat(e.style.left), parseFloat(e.style.top) + e.scrollHeight)
		}
		this.bdrawn = true
	};
	this.apndTo = function (a) {
		a.appendChild(this.cv)
	};
	this.draw = function (a, b) {
		if (a.bdrawn) {
			if (b)
				this.cvt.clearRect(0, 0, this.cv.width, this.cv.height);
			this.cvt.drawImage(a.cv, 0, 0)
		}
	}
};

BCurve = function (a, b, c, d, e, f, g, h, i) {
	this.x0 = a;
	this.y0 = b;
	this.x1 = c;
	this.y1 = d;
	this.x2 = e;
	this.y2 = f;
	this.x3 = g;
	this.y3 = h;
	this.dn = i;
	this.getPointAfterT = function (a) {
		var b = 1 / this.dn * a;
		var c = 3 * (this.x1 - this.x0);
		var d = 3 * (this.x2 - this.x1) - c;
		var e = this.x3 - this.x0 - c - d;
		var f = 3 * (this.y1 - this.y0);
		var g = 3 * (this.y2 - this.y1) - f;
		var h = this.y3 - this.y0 - f - g;
		var i = e * b * b * b + d * b * b + c * b + this.x0;
		var j = h * b * b * b + g * b * b + f * b + this.y0;
		var k = {
			x : i,
			y : j
		};
		return k
	}
};
Line = function (a, b, c, d, e) {
	this.x0 = a;
	this.y0 = b;
	this.x1 = c;
	this.y1 = d;
	this.dn = e;
	this.xd = Math.abs(this.x0 - this.x1);
	this.yd = Math.abs(this.y0 - this.y1);
	this.getPointAfterT = function (a) {
		var b = this.xd / this.dn * a;
		var c = this.yd / this.dn * a;
		var d = this.x0 < this.x1 ? this.x0 + b : this.x0 - b;
		var e = this.y0 < this.y1 ? this.y0 + c : this.y0 - c;
		var f = {
			x : d,
			y : e
		};
		return f
	};
	this.getRevPointAfterT = function (a) {
		var b = this.xd / this.dn * a;
		var c = this.yd / this.dn * a;
		var d = this.x1 < this.x0 ? this.x1 + b : this.x1 - b;
		var e = this.y1 < this.y0 ? this.y1 + c : this.y1 - c;
		var f = {
			x : d,
			y : e
		};
		return f
	}
};
MotionNode = function (points) {
	var pointsArray = points.split(",");
	this.tp = pointsArray[0];
	this.x0 = parseFloat(pointsArray[1]);
	this.y0 = parseFloat(pointsArray[2]);
	this.dn = 0;
	switch (this.tp) {
	case "L":
	    this.x1 = parseFloat(pointsArray[3]);
	    this.y1 = parseFloat(pointsArray[4]);
	    this.dn = parseFloat(pointsArray[5]) * 1e3;
		this.ln = new Line(this.x0, this.y0, this.x1, this.y1, this.dn);
		break;
	case "C":
	    this.x1 = parseFloat(pointsArray[3]);
	    this.y1 = parseFloat(pointsArray[4]);
	    this.x2 = parseFloat(pointsArray[5]);
	    this.y2 = parseFloat(pointsArray[6]);
	    this.x3 = parseFloat(pointsArray[7]);
	    this.y3 = parseFloat(pointsArray[8]);
	    this.dn = parseFloat(pointsArray[9]) * 1e3;
		this.bc = new BCurve(this.x0, this.y0, this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.dn);
		break
	}
	this.getNextPoint = function (x, y) {
		var c;
		switch (this.tp) {
		case "M":
		case "E":
			c = {
				x : this.x0,
				y : this.y0
			};
			break;
		case "L":
			c = this.ln.getPointAfterT(y);
			break;
		case "C":
			c = this.bc.getPointAfterT(y);
			break
		}
		return c
	}
};
MotionAnimation = function (point) {
    this.pnt = point;
    this.motionNodeArray = new Array;
    this.cNode = 0;
    this.prvTm = 0;
    this.MCmpltd = false;
    var b = this.pnt.c.additionalData.split("|");
    var c = 0;
    for (var i = 0; i < b.length; i++) {
        if (b[i].length > 1)
            this.motionNodeArray[c++] = new MotionNode(b[i].replace(" ", ","))
    }
    this.resetMotionAnimation = function () {
        if (!this.pozd) {
            this.cNode = 0;
            this.prvTm = 0;
            this.MCmpltd = false
        }
        this.pnt.resetBaseAnimation()
    };
    this.setEndPoint = function () {
        var point = this.motionNodeArray[this.motionNodeArray.length - 1];
        this.pnt.setTranslate(point.x0, point.y0)
    };
    this.getNextPoint = function (x, y) {
        var c;
        if (this.MCmpltd)
            return c;
        if (this.cNode >= this.motionNodeArray.length)
            this.cNode = this.motionNodeArray.length - 1;
        var d = this.motionNodeArray[this.cNode];
        if (d.tp == "M" && y < 20 || d.tp == "E") {
            c = d.getNextPoint(x, y - this.prvTm);
            this.cNode++;
            return c
        } else if (y > this.prvTm + d.dn) {
            this.prvTm += d.dn;
            this.cNode++;
            return this.getNextPoint(x, y)
        } else {
            c = d.getNextPoint(x, y - this.prvTm);
            return c
        }
    }
};