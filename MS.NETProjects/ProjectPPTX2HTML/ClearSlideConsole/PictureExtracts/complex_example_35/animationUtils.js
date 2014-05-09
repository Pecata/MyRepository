Split = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.mc = new CanvasEl(this.w, this.h);
			this.cp = "destination-in";
			var b = this.c.state;
			var c = this.c.additionalData;
			if ((b == 1 || b == -1) && c == 23 || (b == 1 || b == -1) && c == 25
                || b == 2 && c == 24 || b == 2 && c == 26)
				this.cp = "destination-out"
		}
	}
};
Split.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		var d = a.c.additionalData == 24 || a.c.additionalData == 26 ? a.w / a.c.length * c : a.w / a.c.length * (a.c.length - c);
		var e = a.c.additionalData == 24 || a.c.additionalData == 26 ? a.h / a.c.length * c : a.h / a.c.length * (a.c.length - c);
		if ((a.c.additionalData == 24 || a.c.additionalData == 26) && (d > a.w || e > a.h)) {
			d = a.w;
			e = a.h
		} else if ((a.c.additionalData == 23 || a.c.additionalData == 25) && (d < 0 || e < 0)) {
			d = e = 0
		}
		a.fct.save();
		a.frcv.draw(a.bgcv, true);
		a.sV.dpd.style.opacity = 0;
		a.mc.cvt.save();
		a.mc.cvt.clearRect(0, 0, a.w, a.h);
		if (a.c.additionalData == 23 || a.c.additionalData == 24) {
			a.mc.cvt.beginPath();
			a.mc.cvt.fillRect(0, (a.h - e) / 2, a.w, e);
			a.mc.cvt.closePath()
		}
		if (a.c.additionalData == 25 || a.c.additionalData == 26) {
			a.mc.cvt.beginPath();
			a.mc.cvt.fillRect((a.w - d) / 2, 0, d, a.h);
			a.mc.cvt.closePath()
		}
		a.mc.cvt.restore();
		a.mc.bdrawn = true;
		a.fct.globalCompositeOperation = a.cp;
		a.frcv.draw(a.mc, false);
		a.fct.restore();
		if (c >= a.c.length) {
			a.doAfterEffect();
			a.dltCv();
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Plus = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.mc = new CanvasEl(this.w, this.h);
			this.cp = "destination-in";
			if ((this.c.state == 1 || this.c.state == -1) && this.c.additionalData == 19 || this.c.state == 2 && this.c.additionalData == 20)
				this.cp = "destination-out"
		}
	}
};
Plus.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		var d = a.c.additionalData == 20 ? a.w / a.c.length * c : a.w / a.c.length * (a.c.length - c);
		var e = a.c.additionalData == 20 ? a.h / a.c.length * c : a.h / a.c.length * (a.c.length - c);
		if (a.c.additionalData == 20 && (d > a.w || e > a.h)) {
			d = a.w;
			e = a.h
		} else if (a.c.additionalData == 19 && (d < 0 || e < 0)) {
			d = e = 0
		}
		a.fct.save();
		a.frcv.draw(a.bgcv, true);
		a.sV.dpd.style.opacity = 0;
		a.mc.cvt.save();
		a.mc.cvt.clearRect(0, 0, a.w, a.h);
		a.mc.cvt.beginPath();
		a.mc.cvt.fillRect(0, (a.h - e) / 2, a.w, e);
		a.mc.cvt.closePath();
		a.mc.cvt.beginPath();
		a.mc.cvt.fillRect((a.w - d) / 2, 0, d, a.h);
		a.mc.cvt.closePath();
		a.mc.cvt.restore();
		a.mc.bdrawn = true;
		a.fct.globalCompositeOperation = a.cp;
		a.frcv.draw(a.mc, false);
		a.fct.restore();
		if (c >= a.c.length) {
			a.doAfterEffect();
			a.dltCv();
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
PeekOut = PeekIn = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.mc = new CanvasEl(this.w, this.h);
			this.mxDiff = this.c.additionalData == 1 || this.c.additionalData == 3 ? this.h : this.w
		}
	}
};
PeekOut.prototype.play = PeekIn.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		var d = a.mxDiff / a.c.length * c;
		var e = 0;
		var f = 0;
		if (c >= a.c.length)
			d = a.mxDiff;
		if (a.c.additionalData == 1 || a.c.additionalData == 3)
			f = a.c.state == 1 ? a.mxDiff - d : d;
		else if (a.c.additionalData == 2 || a.c.additionalData == 4)
			e = a.c.state == 1 ? a.mxDiff - d : d;
		f = a.c.additionalData == 1 ? -f : f;
		e = a.c.additionalData == 4 ? -e : e;
		a.sV.dpd.style.opacity = 0;
		a.fct.save();
		a.fct.clearRect(0, 0, a.w, a.h);
		a.mc.cvt.save();
		a.mc.cvt.clearRect(0, 0, a.w, a.h);
		a.mc.cvt.drawImage(a.bgcv.cv, e, f);
		a.mc.cvt.restore();
		a.mc.bdrawn = true;
		a.frcv.draw(a.mc, false);
		a.fct.restore();
		if (c >= a.c.length) {
			a.dltCv();
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
EaseOut = EaseIn = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			if (this.c.state == 1)
				this.mc = new CanvasEl(this.w, this.h);
			this.trDiff = 140
		}
	}
};
EaseOut.prototype.play = EaseIn.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		if (a.c.state == 1) {
			var d = c >= a.c.length ? a.w : a.w / a.c.length * c;
			var e = a.trDiff * (1 - d / a.w);
			a.sV.dpd.style.opacity = 0;
			a.fct.save();
			a.fct.clearRect(0, 0, a.w, a.h);
			a.mc.cvt.save();
			a.mc.cvt.clearRect(0, 0, a.w, a.h);
			a.mc.cvt.drawImage(a.bgcv.cv, a.w - d, 0);
			a.mc.cvt.restore();
			a.mc.bdrawn = true;
			a.frcv.draw(a.mc, false);
			a.fct.restore();
			a.setTranslate(-e, 0)
		} else if (a.c.state == 2) {
			var e = c >= a.c.length ? 0 : a.trDiff / a.c.length * c;
			var f = c >= a.c.length ? 0 : 1 - 1 / a.c.length * c;
			a.sV.dpd.style.opacity = f;
			a.setTranslate(-e, 0)
		}
		if (c >= a.c.length) {
			a.dltCv();
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Box = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.mc = new CanvasEl(this.w, this.h);
			this.cp = "destination-in";
			if ((this.c.state == -1 || this.c.state == 1) && this.c.additionalData == 19 || this.c.state == 2 && this.c.additionalData == 20)
				this.cp = "destination-out"
		}
	}
};
Box.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		var d = a.c.additionalData == 20 ? a.w / a.c.length * c : a.w / a.c.length * (a.c.length - c);
		var e = a.c.additionalData == 20 ? a.h / a.c.length * c : a.h / a.c.length * (a.c.length - c);
		if (a.c.additionalData == 20 && (d > a.w || e > a.h)) {
			d = a.w;
			e = a.h
		} else if (a.c.additionalData == 19 && (d < 0 || e < 0)) {
			d = e = 0
		}
		a.fct.save();
		a.frcv.draw(a.bgcv, true);
		a.sV.dpd.style.opacity = 0;
		a.mc.cvt.save();
		a.mc.cvt.clearRect(0, 0, a.w, a.h);
		a.mc.cvt.beginPath();
		a.mc.cvt.fillRect((a.w - d) / 2, (a.h - e) / 2, d, e);
		a.mc.cvt.restore();
		a.mc.bdrawn = true;
		a.fct.globalCompositeOperation = a.cp;
		a.frcv.draw(a.mc, false);
		a.fct.restore();
		if (c >= a.c.length) {
			a.doAfterEffect();
			a.dltCv();
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Checkerboard = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.mc = new CanvasEl(this.w, this.h);
			this.strC = 6;
			this.strH = this.h / this.strC;
			this.strW = this.w / this.strC;
			if (this.c.additionalData == 16) {
				this.mm = this.strW / this.c.length
			} else {
				this.mm = this.strH / this.c.length
			}
		}
	}
};
Checkerboard.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var d = a.gtime() - a.st - a.c.start;
		if (d <= 0) {
			if (Math.abs(d) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		a.fct.save();
		a.frcv.draw(a.bgcv, true);
		a.fct.beginPath();
		a.fct.globalCompositeOperation = a.cp;
		a.sV.dpd.style.opacity = 0;
		c(a, d);
		a.mc.bdrawn = true;
		a.frcv.draw(a.mc, false);
		a.fct.restore();
		if (d >= a.c.length) {
			a.doAfterEffect();
			a.dltCv();
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	function c(a, b) {
		a.mc.cvt.clearRect(0, 0, a.mc.cv.width, a.mc.cv.height);
		a.mc.cvt.beginPath();
		var c = 70;
		a.mc.cvt.fillStyle = "green";
		l = a.mm * b;
		for (ir = 0; ir < a.strC; ir++) {
			t = ir % 2;
			if (a.c.additionalData == 16) {
				y = a.strH * ir;
				x = 0 - a.strW / 2 * t
			} else {
				y = 0 - a.strH / 2 * t;
				x = a.strW * ir
			}
			cc = a.strC + t;
			for (ic = 0; ic < cc; ic++) {
				if (a.c.additionalData == 16) {
					a.mc.cvt.fillRect(a.c.state == 2 ? x + a.strW - l : x, y, l, a.strH + 1);
					x = x + a.strW
				} else if (a.c.additionalData == 17) {
					a.mc.cvt.fillRect(x, y, a.strW + 1, l);
					y = y + a.strH
				} else {
					a.mc.cvt.fillRect(x, a.c.state == 2 ? y + a.strH - l : y, a.strW + 1, l);
					y = y + a.strH
				}
			}
		}
		a.mc.cvt.restore()
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Blinds = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.mc = new CanvasEl(this.w, this.h);
			this.strC = 6;
			if (this.c.additionalData == 16) {
				this.strW = this.w;
				this.strH = this.h / this.strC;
				this.mm = this.strH / this.c.length
			} else {
				this.strW = this.w / this.strC;
				this.strH = this.h;
				this.mm = this.strW / this.c.length
			}
		}
	}
};
Blinds.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var d = a.gtime() - a.st - a.c.start;
		if (d <= 0) {
			if (Math.abs(d) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		a.fct.save();
		a.frcv.draw(a.bgcv, true);
		a.fct.beginPath();
		a.fct.globalCompositeOperation = a.cp;
		a.sV.dpd.style.opacity = 0;
		c(a, d);
		a.mc.bdrawn = true;
		a.frcv.draw(a.mc, false);
		a.fct.restore();
		if (d >= a.c.length) {
			a.doAfterEffect();
			a.dltCv();
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	function c(a, b) {
		a.mc.cvt.clearRect(0, 0, a.mc.cv.width, a.mc.cv.height);
		a.mc.cvt.beginPath();
		var c = 70;
		a.mc.cvt.fillStyle = "green";
		l = a.mm * b;
		x = 0;
		y = 0;
		for (ir = 0; ir < a.strC; ir++) {
			if (a.c.additionalData == 16) {
				a.mc.cvt.fillRect(0, a.c.state == 2 ? y + a.strH - l : y, a.strW, l);
				y = y + a.strH
			} else {
				a.mc.cvt.fillRect(a.c.state == 2 ? x + a.strW - l : x, 0, l, a.strH);
				x = x + a.strW
			}
		}
		a.mc.cvt.restore()
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Wipe = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.mc = new CanvasEl(this.w, this.h);
			if (this.c.additionalData == 4 || this.c.additionalData == 2) {
				this.mm = this.w / this.c.length
			} else {
				this.mm = this.h / this.c.length
			}
		}
	}
};
Wipe.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var d = a.gtime() - a.st - a.c.start;
		if (d <= 0) {
			if (Math.abs(d) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		a.fct.save();
		a.frcv.draw(a.bgcv, true);
		a.fct.beginPath();
		a.fct.globalCompositeOperation = a.cp;
		a.sV.dpd.style.opacity = 0;
		c(a, d);
		a.mc.bdrawn = true;
		a.frcv.draw(a.mc, false);
		a.fct.restore();
		if (d >= a.c.length) {
			a.doAfterEffect();
			a.dltCv();
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	function c(a, b) {
		a.mc.cvt.clearRect(0, 0, a.mc.cv.width, a.mc.cv.height);
		a.mc.cvt.beginPath();
		a.mc.cvt.fillStyle = "green";
		l = a.mm * b;
		x = 0;
		y = 0;
		w = 0;
		h = 0;
		if (a.c.additionalData == 4) {
			w = l;
			h = a.h
		} else if (a.c.additionalData == 2) {
			w = l;
			x = a.w - l;
			h = a.h
		} else if (a.c.additionalData == 1) {
			w = a.w;
			h = l
		} else if (a.c.additionalData == 3) {
			w = a.w;
			h = l;
			y = a.h - l
		}
		a.mc.cvt.fillRect(x, y, w, h);
		a.mc.cvt.restore()
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Circle = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.cp = "destination-in";
			if ((this.c.state == -1 || this.c.state == 1) && this.c.additionalData == 19 || this.c.state == 2 && this.c.additionalData == 20)
				this.cp = "destination-out";
			this.mc = new CanvasEl(100, 100);
			this.rm = Math.sqrt(this.mc.cv.width * this.mc.cv.width + this.mc.cv.height * this.mc.cv.height) / 2;
			this.mm = this.rm / this.c.length;
			this.b = 3
		}
	}
};
Circle.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var d = a.gtime() - a.st - a.c.start;
		if (d <= 0) {
			if (Math.abs(d) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		var e = a.c.additionalData == 20 ? d * a.mm : d * a.mm > a.rm ? a.rm : a.rm - d * a.mm;
		a.fct.save();
		a.frcv.draw(a.bgcv, true);
		a.fct.beginPath();
		a.fct.globalCompositeOperation = a.cp;
		a.sV.dpd.style.opacity = 0;
		c(a, e);
		a.fct.scale(a.frcv.cv.width / a.mc.cv.width, a.frcv.cv.height / a.mc.cv.height);
		a.mc.bdrawn = true;
		a.frcv.draw(a.mc, false);
		a.fct.restore();
		if (d >= a.c.length) {
			a.doAfterEffect();
			a.dltCv();
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	function c(a, b) {
		var c = a.mc.cvt.createRadialGradient(a.mc.cv.width / 2, a.mc.cv.height / 2, b, a.mc.cv.width / 2, a.mc.cv.height / 2, b + a.b);
		c.addColorStop(0, "red");
		c.addColorStop(1, "rgba(0,255,0,0)");
		a.mc.cvt.fillStyle = c;
		a.mc.cvt.clearRect(0, 0, a.mc.cv.width, a.mc.cv.height);
		a.mc.cvt.beginPath();
		a.mc.cvt.arc(a.mc.cv.width / 2, a.mc.cv.width / 2, b + a.b, 0, Math.PI * 2, false);
		a.mc.cvt.fill();
		a.mc.cvt.restore()
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Diamond = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.mc = new CanvasEl(this.w, this.h);
			this.cp = "destination-in";
			if ((this.c.state == 1 || this.c.state == -1) && this.c.additionalData == 19 || this.c.state == 2 && this.c.additionalData == 20)
				this.cp = "destination-out"
		}
	}
};
Diamond.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		var d = a.c.additionalData == 20 ? a.w / a.c.length * c : a.w / a.c.length * (a.c.length - c);
		var e = a.c.additionalData == 20 ? a.h / a.c.length * c : a.h / a.c.length * (a.c.length - c);
		if (a.c.additionalData == 20 && (d > a.w || e > a.h)) {
			d = a.w;
			e = a.h
		} else if (a.c.additionalData == 19 && (d < 0 || e < 0)) {
			d = e = 0
		}
		a.fct.save();
		a.frcv.draw(a.bgcv, true);
		a.sV.dpd.style.opacity = 0;
		var f = a.w / 2 - d;
		var g = a.h / 2;
		var h = a.w / 2;
		var i = a.h / 2 - e;
		var j = a.w / 2 + d;
		var k = a.h / 2 + e;
		a.mc.cvt.save();
		a.mc.cvt.clearRect(0, 0, a.w, a.h);
		a.mc.cvt.beginPath();
		a.mc.cvt.moveTo(f, g);
		a.mc.cvt.lineTo(h, i);
		a.mc.cvt.lineTo(j, g);
		a.mc.cvt.lineTo(h, k);
		a.mc.cvt.lineTo(f, g);
		a.mc.cvt.fill();
		a.mc.cvt.restore();
		a.mc.bdrawn = true;
		a.fct.globalCompositeOperation = a.cp;
		a.frcv.draw(a.mc, false);
		a.fct.restore();
		if (c >= a.c.length) {
			a.doAfterEffect();
			a.dltCv();
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
DissolveIn = DissolveOut = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.bxs = new Array;
			this.mc = new CanvasEl(this.w, this.h);
			var b = this.w < this.h ? this.w : this.h;
			var c = b < 50 ? b : 50;
			var d = 0;
			this.thick = this.h / c;
			for (var e = 0; e <= this.w; e += this.thick)
				for (var f = 0; f <= this.h; f += this.thick)
					this.bxs[d++] = {
						x : e,
						y : f
					};
			this.arrayShuffle(this.bxs)
		}
	};
	this.arrayShuffle = function (a) {
		var b = a.length;
		var c = b;
		while (c--) {
			var d = parseInt(Math.random() * b);
			var e = a[c];
			a[c] = a[d];
			a[d] = e
		}
	}
};
DissolveIn.prototype.play = DissolveOut.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		a.fct.save();
		a.frcv.draw(a.bgcv, true);
		a.sV.dpd.style.opacity = 0;
		var d = Math.floor(a.bxs.length / a.c.length * c);
		a.fct.lineWidth = 1;
		for (var e = a.sr; e <= d; e++) {
			var f = a.bxs[e];
			if (typeof f == "undefined")
				break;
			a.mc.cvt.save();
			a.mc.cvt.beginPath();
			a.mc.cvt.fillRect(f.x, f.y, a.thick + 1, a.thick + 1);
			a.mc.cvt.restore()
		}
		a.fct.globalCompositeOperation = a.cp;
		a.mc.bdrawn = true;
		a.frcv.draw(a.mc, false);
		a.fct.restore();
		a.sr = d;
		if (c >= a.c.length) {
			a.doAfterEffect();
			a.dltCv();
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	this.sr = 0;
	var a = this;
	CallbackFn(cbk);
};
MotionPath = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.motionAnimation = new MotionAnimation(this)
		}
	}
};
MotionPath.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		var d = a.motionAnimation.getNextPoint(a.sV.d, c);
		if (null != d)
			a.setTranslate(d.x, d.y);
		if (c >= a.c.length) {
		    a.motionAnimation.setEndPoint();
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.motionAnimation.resetMotionAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
RandomBars = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.bars = new Array;
			this.mc = new CanvasEl(this.w, this.h);
			this.len = this.c.additionalData == 16 ? Math.ceil(this.h) : Math.ceil(this.w);
			for (var b = 0; b <= this.len; b++)
				this.bars[b] = b;
			this.arrayShuffle(this.bars)
		}
	};
	this.arrayShuffle = function (a) {
		var b = a.length;
		var c = b;
		while (c--) {
			var d = parseInt(Math.random() * b);
			var e = a[c];
			a[c] = a[d];
			a[d] = e
		}
	}
};
RandomBars.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		a.fct.save();
		a.frcv.draw(a.bgcv, true);
		a.sV.dpd.style.opacity = 0;
		var d = Math.floor(a.len / a.c.length * c);
		a.fct.lineWidth = 1;
		for (var e = a.sr; e <= d; e++) {
			if (a.c.additionalData == 16) {
				a.mc.cvt.save();
				a.mc.cvt.beginPath();
				a.mc.cvt.fillRect(0, a.bars[e], a.w, 1);
				a.mc.cvt.restore()
			} else if (a.c.additionalData == 17) {
				a.mc.cvt.save();
				a.mc.cvt.beginPath();
				a.mc.cvt.fillRect(a.bars[e], 0, 1, a.h);
				a.mc.cvt.restore()
			}
		}
		a.fct.globalCompositeOperation = a.cp;
		a.mc.bdrawn = true;
		a.frcv.draw(a.mc, false);
		a.fct.restore();
		a.sr = d;
		if (c >= a.c.length) {
			a.doAfterEffect();
			a.dltCv();
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	this.sr = 0;
	var a = this;
	CallbackFn(cbk);
};
Strips = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.cp = "destination-in";
			if (this.c.state == 2) {
				this.cp = "destination-out"
			}
			this.mc = new CanvasEl(this.w, this.h);
			this.stc = 13;
			this.stt = this.c.length / 2;
			this.mm = this.w / this.stt;
			this.std = this.stt / (this.stc - 1);
			this.sth = this.h / (this.stc - 2);
			this.b = 3
		}
	}
};
Strips.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var d = a.gtime() - a.st - a.c.start;
		if (d <= 0) {
			if (Math.abs(d) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		a.fct.save();
		a.frcv.draw(a.bgcv, true);
		a.fct.beginPath();
		a.fct.globalCompositeOperation = a.cp;
		a.sV.dpd.style.opacity = 0;
		c(a, d);
		a.mc.bdrawn = true;
		a.frcv.draw(a.mc, false);
		a.fct.restore();
		if (d >= a.c.length) {
			a.doAfterEffect();
			a.dltCv();
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	function c(a, b) {
		a.mc.cvt.clearRect(0, 0, a.mc.cv.width, a.mc.cv.height);
		a.mc.cvt.beginPath();
		var c = 70;
		for (i = 0; i < a.stc; i++){
			var d = 0;
			var e = 0;
			var f = 0;
			var g = 0;
			d = b - i * a.std;
			g = d * a.mm;
			if (a.c.state == 2) {
				if (a.c.additionalData == 8) {
					e = a.h - (i + 1) * a.sth;
					f = a.w - d * a.mm;
					g = f - c
				} else if (a.c.additionalData == 7) {
					e = i * a.sth;
					f = a.w - d * a.mm;
					g = f - c
				} else if (a.c.additionalData == 9) {
					e = a.h - (i + 1) * a.sth
				} else if (a.c.additionalData == 6) {
					e = i * a.sth
				}
			} else {
				if (a.c.additionalData == 8) {
					e = i * a.sth
				} else if (a.c.additionalData == 7) {
					e = a.h - (i + 1) * a.sth
				} else if (a.c.additionalData == 9) {
					e = i * a.sth;
					f = a.w - d * a.mm;
					g = f - c
				} else if (a.c.additionalData == 6) {
					e = a.h - (i + 1) * a.sth;
					f = a.w - d * a.mm;
					g = f - c
				}
			}
			if (d > 0) {
				a.mc.cvt.fillStyle = "green";
				a.mc.cvt.fillRect(f, e, d * a.mm + 1, a.sth + 1)
			} else {
				break
			}
		}
		a.mc.cvt.restore()
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Wedge = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.mc = new CanvasEl(this.w, this.h);
			this.mxDif = 1;
			this.r = (Math.sqrt(this.h * this.h + this.w * this.w) + 8) / 2;
			this.x = this.w / 2;
			this.y = this.h / 2
		}
	}
};
Wedge.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var d = a.gtime() - a.st - a.c.start;
		if (d <= 0) {
			if (Math.abs(d) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		var e = a.mxDif / a.c.length * d;
		if (e > a.mxDif)
			e = a.mxDif;
		a.fct.save();
		a.frcv.draw(a.bgcv, true);
		a.sV.dpd.style.opacity = 0;
		a.mc.cvt.save();
		a.mc.cvt.clearRect(0, 0, a.w, a.h);
		a.mc.cvt.beginPath();
		c(a, 1.5, e, true);
		c(a, 1.5, e, false);
		a.mc.cvt.fill();
		a.mc.cvt.restore();
		a.mc.bdrawn = true;
		a.fct.globalCompositeOperation = a.cp;
		a.frcv.draw(a.mc, false);
		a.fct.restore();
		if (d >= a.c.length) {
			a.doAfterEffect();
			a.dltCv();
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	function c(a, b, c, d) {
		var e = d ? b + c : b - c;
		a.mc.cvt.moveTo(a.x, a.y);
		a.mc.cvt.arc(a.x, a.y, a.r, b * Math.PI, e * Math.PI, d)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
LightSpeed = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.tDiff = this.sV.w + this.sV.l;
			this.xSpDist = (this.sV.h + this.sV.w * .2) / 2;
			if (this.c.state == 2)
				this.tDiff = gv.sw - this.sV.l
		}
	}
};
LightSpeed.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		var d = c / a.c.length * 100;
		var e = a.getTranslate();
		var f = 0;
		if (a.c.state == 1) {
			if (d < 60) {
				f = [d / 60 - 1] * a.tDiff;
				a.setTranslate(f, e.y)
			} else if (d > 60) {
				var g = [(d - 60) / 40] * 180;
				var h = Math.sin(Math.PI / 180 * g);
				var i = d >= 100 ? 0 : -45 * h;
				var j = d >= 100 ? 1 : 1 - .2 * h;
				f = d >= 100 ? 0 : a.xSpDist * h;
				a.setSkewX(i);
				a.setScale(j, 1);
				a.setTranslate(f, e.y)
			}
			a.sV.dpd.style.opacity = 1
		} else if (a.c.state == 2) {
			if (d < 20) {
				var g = d / 20 * 90;
				var h = Math.sin(Math.PI / 180 * g);
				var i = -45 * h;
				f = a.xSpDist * h;
				a.setSkewX(i);
				a.setTranslate(f, e.y)
			} else {
				f = d >= 100 ? a.tDiff : c / a.c.length * a.tDiff;
				a.setTranslate(f, e.y)
			}
		}
		if (c >= a.c.length) {
			if (a.c.state == 2)
				a.sV.dpd.style.opacity = 0;
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
FadedSwivel = Swivel = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a))
			this.isFaded = this.c.additionalData == 0 ? true : false
	}
};
FadedSwivel.prototype.play = Swivel.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		var d = c / a.c.length * 450;
		var e = a.c.state == 1 ? Math.sin(Math.PI / 180 * d) : Math.cos(Math.PI / 180 * d);
		var f = a.c.additionalData == 16 || a.isFaded ? e : 1;
		var g = a.c.additionalData == 16 || a.isFaded ? 1 : e;
		var h = c >= a.c.length ? 1 : c / a.c.length * 1;
		if (a.isFaded)
			a.sV.dpd.style.opacity = a.c.state == 1 ? h : 1 - h;
		else
			a.sV.dpd.style.opacity = a.c.state == 2 && c >= a.c.length ? 0 : 1;
		if (c >= a.c.length)
			f = g = 1;
		a.setScale(f, g);
		if (c >= a.c.length) {
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Wheel = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.mc = new CanvasEl(this.w, this.h);
			this.spks = this.c.additionalData;
			this.mxDif = 2 / this.spks;
			this.r = (Math.sqrt(this.h * this.h + this.w * this.w) + 8) / 2;
			this.x = this.w / 2;
			this.y = this.h / 2
		}
	}
};
Wheel.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var d = a.gtime() - a.st - a.c.start;
		if (d <= 0) {
			if (Math.abs(d) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		var e = a.mxDif / a.c.length * d;
		if (e > a.mxDif)
			e = a.mxDif;
		a.fct.save();
		a.frcv.draw(a.bgcv, true);
		a.sV.dpd.style.opacity = 0;
		a.mc.cvt.save();
		a.mc.cvt.clearRect(0, 0, a.w, a.h);
		a.mc.cvt.beginPath();
		if (a.spks >= 1)
			c(a, 1.5, e);
		if (a.spks >= 2 && a.spks != 3)
			c(a, .5, e);
		if (a.spks == 3) {
			c(a, .1666, e);
			c(a, .8333, e)
		}
		if (a.spks > 3) {
			c(a, 0, e);
			c(a, 1, e)
		}
		if (a.spks > 4) {
			c(a, 1.75, e);
			c(a, .25, e);
			c(a, .75, e);
			c(a, 1.25, e)
		}
		a.mc.cvt.fill();
		a.mc.cvt.restore();
		a.mc.bdrawn = true;
		a.fct.globalCompositeOperation = a.cp;
		a.frcv.draw(a.mc, false);
		a.fct.restore();
		if (d >= a.c.length) {
			a.doAfterEffect();
			a.dltCv();
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	function c(a, b, c) {
		var d = (b + c) % 2;
		a.mc.cvt.moveTo(a.x, a.y);
		a.mc.cvt.arc(a.x, a.y, a.r, b * Math.PI, d * Math.PI)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
FlyIn = FlyOut = CrawlOut = CrawlIn = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			currXYSlide(this);
			this.xDif = this.fX - this.dX;
			this.yDif = this.fY - this.dY;
			this.mX = this.xDif / this.c.length;
			this.mY = this.yDif / this.c.length
		}
	}
};
FlyIn.prototype.play = FlyOut.prototype.play = CrawlIn.prototype.play = CrawlOut.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		if (a.animstarted == false) {
			a.animstarted = true;
			if (a.c.state == 2) {
				var d = a.getTranslate();
				if (a.left == null)
					a.left = a.sV.d.style.left = parseInt(a.sV.d.style.left) + d.x + "px";
				else
					a.sV.d.style.left = a.left;
				if (a.top == null)
					a.top = a.sV.d.style.top = parseInt(a.sV.d.style.top) + d.y + "px";
				else
					a.sV.d.style.top = a.top;
				currXYSlide(a);
				a.xDif = a.fX - parseInt(a.sV.d.style.left);
				a.yDif = a.fY - parseInt(a.sV.d.style.top);
				a.mX = a.xDif / a.c.length;
				a.mY = a.yDif / a.c.length
			} else {
				a.sV.d.style.left = this.dx + "px";
				a.sV.d.style.top = this.dx + "py";
				a.setTranslate(-1 * this.xDif, -1 * this.yDif)
			}
			a.sV.dpd.style.opacity = 1
		}
		a.playAudio();
		var e = 0;
		var f = 0;
		if (a.c.state == 1) {
			e = c * a.mX - a.cX;
			f = c * a.mY - a.cY
		} else {
			e = c * a.mX;
			f = c * a.mY
		}
		a.setTranslate(e, f);
		if (c >= a.c.length) {
			if (a.c.state == 1) {
				a.setTranslate(0, 0)
			} else {
				a.sV.dpd.style.opacity = 0;
				a.setTranslate(0, 0)
			}
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	this.cX = this.xDif;
	this.cY = this.yDif;
	this.pt = 0;
	var a = this;
	this.animstarted = false;
	CallbackFn(cbk);
};
Fade = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.mO = 1 / this.c.length
		}
	}
};
Fade.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		if (a.animstarted == false) {
			a.animstarted = true;
			if (a.c.state == 2)
				a.oF = 0;
			else
				a.oF = 1
		}
		var d = c * a.mO;
		if (a.oF == 0)
			a.sV.dpd.style.opacity = 1 - d;
		else
			a.sV.dpd.style.opacity = d;
		if (c >= a.c.length) {
			a.sV.dpd.style.opacity = a.oF;
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	this.animstarted = false;
	var a = this;
	CallbackFn(cbk);
};
Pinwheel = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.fAngle = 720;
			this.mA = this.fAngle / this.c.length;
			this.mO = 1 / this.c.length;
			this.mS = 1 / this.c.length;
			if (this.c.state != 2) {
				this.fO = 1;
				this.fAngle = 720;
				this.fSCale = 1
			} else {
				this.mS = this.mO * -1;
				this.mA = this.mA * -1;
				this.fO = 0;
				this.fAngle = 0;
				this.fSCale = 0
			}
		}
	}
};
Pinwheel.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		var d = c * a.mA;
		var e = c * a.mS;
		var f = 0;
		if (a.fO == 0) {
			f = 1 - c * a.mO
		} else {
			f = c * a.mO
		}
		a.sV.dpd.style.opacity = f;
		a.setScale(f, f);
		a.setRotate(d);
		if (c >= a.c.length) {
			a.sV.dpd.style.opacity = a.fO;
			a.setScale(1, 1);
			a.setRotate(a.fAngle);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Ascend = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.mY = 48 / this.c.length;
			this.mO = 1 / this.c.length;
			if (this.c.state == 2) {
				this.fO = 0
			} else {
				this.fO = 1
			}
		}
	}
};
Ascend.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		var d;
		if (a.c.state == 1) {
			d = 48 - c * a.mY
		} else {
			d =  - (c * a.mY)
		}
		var e;
		if (a.fO == 0) {
			e = 1 - c * a.mO
		} else {
			e = c * a.mO
		}
		a.sV.dpd.style.opacity = e;
		a.setTranslate(0, d);
		if (c >= a.c.length) {
			a.setTranslate(0, 0);
			a.sV.dpd.style.opacity = a.fO;
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Descend = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.mY = -1 * (48 / this.c.length);
			this.mO = 1 / this.c.length;
			if (this.c.state == 2) {
				this.fO = 0
			} else {
				this.fO = 1
			}
		}
	}
};
Descend.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		var d;
		if (a.c.state == 1) {
			d = -48 - c * a.mY
		} else {
			d =  - (c * a.mY)
		}
		var e;
		if (a.fO == 0) {
			e = 1 - c * a.mO
		} else {
			e = c * a.mO
		}
		a.sV.dpd.style.opacity = e;
		a.setTranslate(0, d);
		if (c >= a.c.length) {
			a.setTranslate(0, 0);
			a.sV.dpd.style.opacity = a.fO;
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
GrowTurn = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.fAngle = 90;
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.mA = this.fAngle / this.c.length;
			this.mO = 1 / this.c.length;
			this.mS = 1 / this.c.length;
			if (this.c.state != 2) {
				this.fO = 1;
				this.fAngle = 90;
				this.fSCale = 1;
				this.mA = this.mA * -1
			} else {
				this.mS = this.mO * -1;
				this.fO = 0;
				this.fAngle = 0;
				this.fSCale = 0
			}
		}
	}
};
GrowTurn.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		var d;
		if (a.c.state == 1) {
			d = c * a.mA + 90
		} else {
			d = c * a.mA
		}
		var e = c * a.mS;
		var f = 0;
		if (a.fO == 0) {
			f = 1 - c * a.mO
		} else {
			f = c * a.mO
		}
		a.sV.dpd.style.opacity = f;
		a.setScale(f, f);
		a.setRotate(d);
		if (c >= a.c.length) {
			a.sV.dpd.style.opacity = a.fO;
			a.setScale(1, 1);
			a.setRotate(0);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Spinner = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.fAngle = 360;
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.mA = this.fAngle / this.c.length;
			this.mO = 1 / this.c.length;
			this.mS = 1 / this.c.length;
			if (this.c.state != 2) {
				this.fO = 1;
				this.fAngle = 360;
				this.fSCale = 1;
				this.mA = this.mA * -1
			} else {
				this.mS = this.mO * -1;
				this.fO = 0;
				this.fAngle = 0;
				this.fSCale = 0
			}
		}
	}
};
Spinner.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		var d;
		if (a.c.state == 1) {
			d = c * a.mA + 360
		} else {
			d = c * a.mA
		}
		var e = c * a.mS;
		var f = 0;
		if (a.fO == 0) {
			f = 1 - c * a.mO
		} else {
			f = c * a.mO
		}
		a.sV.dpd.style.opacity = f;
		a.setScale(f, f);
		a.setRotate(d);
		if (c >= a.c.length) {
			a.sV.dpd.style.opacity = a.fO;
			a.setScale(1, 1);
			a.setRotate(0);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Expand = Contract = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.mO = 1 / this.c.length;
			this.mS = .25 / this.c.length;
			if (this.c.state != 2) {
				this.fO = 1;
				this.fSCale = 1;
				this.mA = this.mA * -1
			} else {
				this.mO = this.mO * -1;
				this.fO = 0;
				this.fSCale = .75
			}
		}
	}
};
Expand.prototype.play = Contract.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		var d;
		var e = 0;
		if (a.fO == 0) {
			d = 1 - c * a.mS;
			e = 1 - c * a.mO * -1
		} else {
			d = .75 + c * a.mS;
			e = c * a.mO
		}
		a.sV.dpd.style.opacity = e;
		a.setScale(d, 1);
		if (c >= a.c.length) {
			a.sV.dpd.style.opacity = a.fO;
			a.setScale(1, 1);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
FadedZoom = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.mO = 1 / this.c.length;
			this.mS = 1 / this.c.length;
			if (this.c.state != 2) {
				this.fO = 1;
				this.fSCale = 1
			} else {
				this.mO = this.mO * -1;
				this.fO = 0;
				this.fSCale = 0
			}
		}
	}
};
FadedZoom.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		var d;
		var e = 0;
		if (a.fO == 0) {
			d = 1 - c * a.mS;
			e = 1 - c * a.mO * -1
		} else {
			d = c * a.mS;
			e = c * a.mO
		}
		a.sV.dpd.style.opacity = e;
		a.setScale(d, d);
		if (c >= a.c.length) {
			a.sV.dpd.style.opacity = a.fO;
			a.setScale(1, 1);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Zoom = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			var b = gv.sw;
			var c = gv.sh;
			var d = parseInt(this.sV.d.style.left);
			var e = parseInt(this.sV.d.style.top);
			var f = parseInt(this.sV.h);
			var g = parseInt(this.sV.w);
			this.difX = 0;
			this.difY = 0;
			switch (this.c.additionalData) {
			case 19:
				if (this.c.state == 1) {
					this.difScale = 1;
					this.startScale = 0
				} else {
					this.difScale = 3;
					this.startScale = 1
				}
				break;
			case 30:
			case 33:
				var h = b / 2 - d - g / 2;
				var i = c / 2 - e - f / 2;
				this.difScale = 1;
				this.startScale = 0;
				this.difX = h / this.c.length;
				this.difY = i / this.c.length;
				this.startX = h;
				this.startY = i;
				if (this.c.state == 2) {
					this.difX = -this.difX;
					this.difY = -this.difY;
					this.startX = 0;
					this.startY = 0;
					this.startScale = 1;
					this.difScale = -1
				}
				break;
			case 29:
				if (this.c.state == 1) {
					this.difScale = .3;
					this.startScale = .7
				} else {
					this.difScale = .3;
					this.startScale = 1
				}
				break;
			case 20:
				if (this.c.state == 1) {
					this.difScale = -3;
					this.startScale = 4
				} else {
					this.difScale = -1;
					this.startScale = 1
				}
				break;
			case 34:
			case 31:
				this.difScale = -7;
				this.startScale = 8;
				var i = c - e;
				this.difX = 0;
				this.difY = i / this.c.length;
				this.startX = 0;
				this.startY = i;
				if (this.c.state == 2) {
					this.difX = 0;
					this.difY = -this.difY;
					this.startX = 0;
					this.startY = 0;
					this.startScale = 1;
					this.difScale = 7
				}
				break;
			case 32:
				if (this.c.state == 1) {
					this.difScale =  - .3;
					this.startScale = 1.3
				} else {
					this.difScale =  - .3;
					this.startScale = 1
				}
				break
			}
		}
	}
};
Zoom.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		if (a.animstarted == false) {
			a.sV.dpd.style.opacity = 1;
			a.animstarted = true
		}
		var d = a.startX - a.difX * c;
		var e = a.startY - a.difY * c;
		var f = a.startScale + a.difScale * (c / a.c.length);
		a.setScale(f, f);
		a.setTranslate(d, e);
		if (c >= a.c.length) {
			a.sV.dpd.style.opacity = a.c.state == 1 ? 1 : 0;
			a.setScale(1, 1);
			a.setTranslate(0, 0);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	this.animstarted = false;
	var a = this;
	CallbackFn(cbk);
};
Stretch = Collapse = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {}

	}
};
Stretch.prototype.play = Collapse.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		if (a.animstarted == false) {
			a.animstarted = true;
			a.sV.dpd.style.opacity = 1
		}
		var d = 1;
		var e = 1;
		var f = 0;
		var g = 0;
		if (a.c.state == 1) {
			switch (a.c.additionalData) {
			case 1:
				g = (a.sV.h / a.c.length * c - a.sV.h) / 2;
				e = c * (1 / a.c.length);
				break;
			case 2:
				f = (a.sV.w - a.sV.w / a.c.length * c) / 2;
				d = c * (1 / a.c.length);
				break;
			case 3:
				g = (a.sV.h - a.sV.h / a.c.length * c) / 2;
				e = c * (1 / a.c.length);
				break;
			case 4:
				f = (a.sV.w / a.c.length * c - a.sV.w) / 2;
				d = c * (1 / a.c.length);
				break;
			case 16:
				d = c * (1 / a.c.length);
				break
			}
		} else {
			switch (a.c.additionalData) {
			case 1:
				g = a.sV.h / 2 - (a.sV.h / a.c.length * c - a.sV.h) / 2 - a.sV.h;
				e = 1 - c * (1 / a.c.length);
				break;
			case 2:
				f = a.sV.w / 2 - (a.sV.w - a.sV.w / a.c.length * c) / 2;
				d = 1 - c * (1 / a.c.length);
				break;
			case 3:
				g = a.sV.h / 2 - (a.sV.h - a.sV.h / a.c.length * c) / 2;
				e = 1 - c * (1 / a.c.length);
				break;
			case 4:
				f = a.sV.w / 2 - (a.sV.w / a.c.length * c - a.sV.w) / 2 - a.sV.w;
				d = 1 - c * (1 / a.c.length);
				break;
			case 16:
				d = 1 - c * (1 / a.c.length);
				break
			}
		}
		a.setTranslate(f, g);
		a.setScale(d, e);
		if (c >= a.c.length) {
			a.sV.dpd.style.opacity = a.c.state == 1 ? 1 : 0;
			a.setScale(1, 1);
			a.setTranslate(0, 0);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	this.animstarted = false;
	var a = this;
	CallbackFn(cbk);
};
Glide = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.mS = 1 / this.c.length;
			this.mX = 150 / this.c.length;
			this.mO = 1 / this.c.length
		}
	}
};
Glide.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		if (a.animstarted == false) {
			a.animstarted = true;
			if (a.c.state != 2) {
				a.fSCale = 1;
				a.fO = 1;
				a.fX = 0;
				a.sV.dpd.style.opacity = 0;
				a.setTranslate(-150, 0);
				a.setScale(0, 1)
			} else {
				a.fSCale = 0;
				a.fO = 0;
				a.fX = -150;
				a.sV.dpd.style.opacity = 1;
				a.setScale(1, 1);
				a.mX = a.mX * -1
			}
		}
		var d;
		var e;
		var f;
		if (a.c.state == 2) {
			d = 1 - c * a.mS;
			f = c * a.mX;
			e = 1 - c * a.mO
		} else {
			d = c * a.mS;
			f = c * a.mX - 150;
			e = c * a.mO
		}
		a.setTranslate(f, 0);
		a.setScale(d, 1);
		a.sV.dpd.style.opacity = e;
		if (c >= a.c.length) {
			a.sV.dpd.style.opacity = a.fO;
			a.setScale(1, 1);
			a.setTranslate(0, 0);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	this.animstarted = false;
	var a = this;
	CallbackFn(cbk);
};
Compress = Stretchy = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.mO = 1 / this.c.length;
			var b = this.sV.w;
			this.sDif = (b + 187) / b
		}
	}
};
Compress.prototype.play = Stretchy.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		var d;
		var e;
		if (a.c.state == 2) {
			d = 1 + c * (a.sDif - 1) / a.c.length;
			e = 1 - c * a.mO
		} else {
			d = a.sDif - c * (a.sDif - 1) / a.c.length;
			e = c * a.mO
		}
		a.sV.dpd.style.opacity = e;
		a.setScale(d, 1);
		if (c >= a.c.length) {
			a.sV.dpd.style.opacity = a.c.state == 2 ? 0 : 1;
			a.setScale(1, 1);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Credits = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.slH = parseInt(gv.sh);
			this.shT = parseInt(this.sV.d.style.top);
			this.shH = parseInt(this.sV.h);
			this.yDif = this.slH * 2;
			this.mY = this.yDif / this.c.length;
			if (this.c.state == 2) {
				this.slH = this.slH * -1
			}
		}
	}
};
Credits.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		if (a.animstarted == false) {
			a.setTranslate(0, a.slH);
			a.sV.dpd.style.opacity = 1;
			a.animstarted = true
		}
		var d = a.c.state == 1 ? a.cY - c * a.mY : a.cY + c * a.mY;
		a.setTranslate(0, d);
		if (c >= a.c.length) {
			if (a.c.state == 2)
				a.sV.dpd.style.opacity = 0;
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	this.animstarted = false;
	this.cY = this.slH;
	var a = this;
	this.df = false;
	CallbackFn(cbk);
};
FlashBulb = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.mO = .5 / (this.c.length / 2);
			this.mS = .025 / (this.c.length / 2);
			this.fO = 1;
			this.fSCale = 1
		}
	}
};
FlashBulb.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		var d = c / a.c.length * 100;
		var e;
		var f = 0;
		if (d < 50) {
			e = 1 + c * a.mS;
			f = 1 - c * a.mO
		} else {
			e = 1.05 - c * a.mS;
			f = c * a.mO
		}
		a.sV.dpd.style.opacity = f;
		a.setScale(e, e);
		if (c >= a.c.length) {
			a.setScale(a.fScale, a.fScale);
			a.sV.dpd.style.opacity = a.fO;
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Appear = Disappear = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {}

	}
};
Appear.prototype.play = Disappear.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c < 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		if (c >= a.c.length) {
			if (a.c.state == 1)
				a.sV.dpd.style.opacity = 1;
			else
				a.sV.dpd.style.opacity = 0;
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
FlashOnce = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {}

	}
};
FlashOnce.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c < 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		if (a.c.state == 1) {
			a.sV.dpd.style.opacity = 1
		} else {
			var d = c / a.c.length * 100;
			if (d < 50)
				a.sV.dpd.style.opacity = 0;
			else
				a.sV.dpd.style.opacity = 1
		}
		if (c >= a.c.length) {
			a.sV.dpd.style.opacity = 0;
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Bounce = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.dX = 187;
			this.tDif = this.dX / this.c.length;
			this.bTh = 630
		}
	}
};
Bounce.prototype.play = function () {
	function b(b, c, d, e) {
		var f = d - c;
		if (b < d) {
			var g = (b - c) / f * e;
			a.setScale(1, 1 - g)
		} else if (b < d + f) {
			var g = (b - (c + f)) / f * e;
			a.setScale(1, 1 - e + g)
		}
	}
	function c() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var d = a.gtime() - a.st - a.c.start;
		if (d <= 0) {
			if (Math.abs(d) > a.c.start)
				a.reset();
			else
				CallbackFn(c);
			return
		}
		a.playAudio();
		if (a.bStdAnm == false && a.c.state == 1) {
			a.setTranslate(a.dX, a.dX);
			a.sV.dpd.style.opacity = 1;
			this.bStdAnm = true
		}
		var e = d / a.c.length * 100;
		var f = d * a.tDif;
		var g = d / a.c.length * 630;
		var h = 90 - d / a.c.length * 90;
		var i;
		if (g < 90) {
			i = 187
		} else if (g < 270) {
			i = 75;
			b(e, 14, 18, .3)
		} else if (g < 450) {
			i = 37;
			b(e, 41, 45, .15)
		} else if (g < 630) {
			i = 17;
			b(e, 71, 75, .07)
		}
		var j = Math.cos(Math.PI / 180 * g);
		var k = 187 * (1 - Math.cos(Math.PI / 180 * h));
		var l = i * Math.abs(j);
		if (a.c.state == 1)
			a.setTranslate(-k, -l);
		else
			a.setTranslate(187 - k, 187 - l);
		if (d >= a.c.length) {
			if (a.c.state == 2)
				a.sV.dpd.style.opacity = 0;
			a.setTranslate(0, 0);
			a.setScale(1, 1);
			a.doRepeat();
			return
		}
		CallbackFn(c)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	this.bStdAnm = false;
	var a = this;
	CallbackFn(c);
};
CenterRevolve = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.dY = 175;
			this.dX = 115;
			this.tDif = this.dY / (this.c.length * .6);
			this.dO = 1 / (this.c.length * .1)
		}
	}
};
CenterRevolve.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		if (a.bStdAnm == false && a.c.state == 1) {
			a.sV.dpd.style.opacity = 1;
			a.setTranslate(0, a.dY);
			a.bStdAnm == true
		}
		var d = c / a.c.length * 100;
		if (d < 10 && a.c.state == 1) {
			var e = (c - a.c.length * .1) * a.dO;
			a.sV.dpd.style.opacity = 1 + e
		} else if (d > 90 && a.c.state == 2) {
			var e = (c - a.c.length * .9) * a.dO;
			a.sV.dpd.style.opacity = 1 - e
		} else if (d > 40 && a.c.state == 1) {
			var f = (c - a.c.length * .4) * a.tDif;
			var g = 0;
			var h = (c - a.c.length * .4) / (a.c.length * .6) * 180;
			var i = Math.sin(Math.PI / 180 * h);
			var j = a.dX * Math.abs(i);
			a.setTranslate(j, 175 - f)
		} else if (d < 60 && a.c.state == 2) {
			var f = (c - a.c.length * .6) * a.tDif;
			var g = 0;
			var h = (c - a.c.length * .6) / (a.c.length * .6) * 180;
			var i = Math.sin(Math.PI / 180 * h);
			var j = a.dX * Math.abs(i);
			a.setTranslate(j, 175 + f)
		}
		if (c >= a.c.length) {
			if (a.c.state == 2)
				a.sV.dpd.style.opacity = 0;
			a.setTranslate(0, 0);
			a.setScale(1, 1);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	this.bStdAnm = false;
	var a = this;
	CallbackFn(cbk);
};
CurveUp = CurveDown = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.dY = 550;
			this.dX = 200;
			this.yDif = this.dY / this.c.length;
			this.sDif = 2 / this.c.length;
			this.oDif = 1 / this.c.length
		}
	}
};
CurveUp.prototype.play = CurveDown.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		if (a.bStdAnm == false && a.c.state == 1) {
			a.sV.dpd.style.opacity = 1;
			a.setTranslate(a.dX, a.dY);
			a.bStdAnm == true
		}
		var d = c * a.yDif;
		var e = c / a.c.length * 270;
		var f;
		var g;
		if (a.c.state == 1) {
			var h = Math.cos(Math.PI / 180 * e);
			var i = a.dX * h;
			a.setTranslate(-i, a.dY - d);
			f = 3 - c * a.sDif;
			g = c * a.oDif
		} else {
			var h = Math.sin(Math.PI / 180 * e);
			var i = a.dX * h;
			a.setTranslate(i, d);
			f = 1 + c * a.sDif;
			g = 1 - c * a.oDif
		}
		a.setScale(f, f);
		a.sV.dpd.style.opacity = g;
		if (c >= a.c.length) {
			if (a.c.state == 2)
				a.sV.dpd.style.opacity = 0;
			a.setTranslate(0, 0);
			a.setScale(1, 1);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	this.bStdAnm = false;
	var a = this;
	CallbackFn(cbk);
};
RiseUp = SinkDown = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			var b = gv.sh;
			var c = parseInt(this.sV.d.style.top);
			var d = parseInt(this.sV.h);
			this.dY = b - c + 20;
			this.yDif1 = this.dY / (this.c.length * .9);
			this.yDif2 = 20 / (this.c.length * .1);
			this.oDif = 1 / this.c.length
		}
	}
};
RiseUp.prototype.play = SinkDown.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		if (a.bStdAnm == false && a.c.state == 1) {
			a.sV.dpd.style.opacity = 1;
			a.setTranslate(0, a.dY - 20);
			a.bStdAnm = true
		}
		var d;
		var e = c / a.c.length * 100;
		var f = 0;
		if (a.c.state == 1) {
			if (e < 90) {
				var g = (c - a.c.length * .1) / (a.c.length * .9) * 90;
				var h = Math.cos(Math.PI / 180 * g);
				var f = h * (a.c.length * .9 - c) * a.yDif1
			} else {
				f = (c - a.c.length * .9) * a.yDif2
			}
			a.setTranslate(0, f - 20);
			d = c * a.oDif
		} else {
			if (e < 10) {
				var f =  - (c * a.yDif2)
			} else {
				var g = (c - a.c.length * .1) / (a.c.length * .9) * 90;
				var h = Math.cos(Math.PI / 180 * g);
				f = a.dY - a.dY * h - 20
			}
			a.setTranslate(0, f);
			d = 1 - c * a.oDif
		}
		a.sV.dpd.style.opacity = d;
		if (c >= a.c.length) {
			if (a.c.state == 2)
				a.sV.dpd.style.opacity = 0;
			a.setTranslate(0, 0);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	this.bStdAnm = false;
	var a = this;
	CallbackFn(cbk);
};
Float = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.mX1 = 340 / (this.c.length * .8);
			this.mY1 = 280 / (this.c.length * .8);
			this.mX2 = 37 / (this.c.length * .2);
			this.mY2 = 56 / (this.c.length * .2);
			this.oDif = 1 / (this.c.length * .8);
			this.rDif = 90 / (this.c.length * .8)
		}
	}
};
Float.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		var d = 0;
		var e = c / a.c.length * 100;
		var f = 0;
		var g = 0;
		var h = 0;
		if (a.c.state == 1) {
			if (e < 80) {
				var i = (c - a.c.length * .2) / (a.c.length * .8) * 90;
				var j = Math.cos(Math.PI / 180 * i);
				g = (a.c.length * .8 - c) * a.mX1 * j - 37;
				f = (a.c.length * .8 - c) * a.mY1 * j - 56;
				h = (c - a.c.length * .8) * a.rDif * j;
				d = 1 + (c - a.c.length * .8) * a.oDif
			} else {
				var i = (c - a.c.length * .8) / (a.c.length * .2) * 90;
				var j = Math.sin(Math.PI / 180 * i);
				g = (c - a.c.length * .8) * a.mX2 * j - 37;
				f = (c - a.c.length * .8) * a.mY2 * j - 56;
				d = 1
			}
			a.setTranslate(g, -f);
			a.setRotate(h)
		} else {
			if (e > 20) {
				var i = (c - a.c.length * .2) / (a.c.length * .8) * 90;
				var j = Math.cos(Math.PI / 180 * i);
				g = 340 - 340 * j - 37;
				f = 280 - 280 * j - 56;
				h = 360 - (90 - 90 * j);
				d = 1 * j
			} else {
				var i = (c - a.c.length * .8) / (a.c.length * .2) * 90;
				var j = Math.sin(Math.PI / 180 * i);
				g =  - (c * a.mX2);
				f =  - (c * a.mY2);
				h = 0;
				d = 1
			}
			a.setTranslate(g, -f);
			a.setRotate(h)
		}
		a.sV.dpd.style.opacity = d;
		if (c >= a.c.length) {
			if (a.c.state == 2)
				a.sV.dpd.style.opacity = 0;
			a.setTranslate(0, 0);
			a.setRotate(0);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Boomerang = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {}

	}
};
Boomerang.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		var d = 0;
		var e = c / a.c.length * 100;
		var f = 0;
		var g = 0;
		var h = 0;
		var i;
		if (a.c.state == 2) {
			e = 100 - e
		}
		var j = (c - a.c.length * .5) / (a.c.length * .5) * 90;
		var k = Math.cos(Math.PI / 180 * j);
		if (e < 50) {
			g = 220 - 220 * k;
			f =  - (140 - 140 * k - 56);
			h =  - (45 - 45 * k);
			i = 1 - .9 * k;
			d = k
		} else {
			f = k * 56;
			i = 1 - .9 * k;
			d = 1
		}
		a.setTranslate(g, f);
		a.setRotate(h);
		a.setScale(i, 1);
		a.sV.dpd.style.opacity = d;
		if (c >= a.c.length) {
			if (a.c.state == 2)
				a.sV.dpd.style.opacity = 0;
			a.setTranslate(0, 0);
			a.setRotate(0);
			a.setScale(1, 1);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Sling = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			var b = parseInt(this.sV.w);
			var c = parseInt(this.sV.h);
			var d = parseInt(this.sV.d.style.left);
			var e = gv.sw;
			var f = e - (d + (b - c) / 2);
			this.x1 = f - 38 - c / 2;
			this.difX2 = 1400 / (this.c.length * .5);
			this.difX1 = this.x1 / (this.c.length * .5);
			this.cX = this.x1 - 1400;
			this.difA = 90 / (this.c.length * .2);
			this.difO = 1 / this.c.length
		}
	}
};
Sling.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		if (a.bStdAnm == false && a.c.state == 1) {
			a.setTranslate(a.cX, 0);
			a.setRotate(90);
			a.sV.dpd.style.opacity = 1;
			a.bStdAnm = true
		}
		var d = 0;
		var e = c / a.c.length * 100;
		var f = 0;
		var g = 0;
		if (a.c.state == 1) {
			if (e < 50) {
				f = a.cX + a.difX2 * (c - a.c.state * .5);
				a.setTranslate(f, 0)
			} else {
				f = a.x1 - (a.difX1 * (c - a.c.state * .5) - a.x1);
				a.setTranslate(f, 0);
				if (e > 80) {
					g = 90 - (c - a.c.state * .8) * a.difA;
					a.setRotate(g)
				}
			}
			d = c * a.difO
		} else {
			if (e <= 50) {
				f = a.difX1 * (c - a.c.state * .5);
				a.setTranslate(f, 0);
				if (e <= 20) {
					g = c * a.difA;
					a.setRotate(g)
				}
			} else {
				a.setRotate(90);
				f = 1400 + a.x1 - a.difX2 * (c - a.c.state * .5);
				a.setTranslate(f, 0)
			}
			d = 1 - c * a.difO
		}
		a.sV.dpd.style.opacity = d;
		if (c >= a.c.length) {
			if (a.c.state == 2)
				a.sV.dpd.style.opacity = 0;
			a.setTranslate(0, 0);
			a.setRotate(0);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	this.bStdAnm = false;
	var a = this;
	CallbackFn(cbk);
};
Fold = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			var b = parseInt(this.sV.d.style.top);
			var c = gv.sh;
			this.cY = c - b;
			this.difY = this.cY / this.c.length;
			this.difO = 1 / this.c.length;
			this.difSX = 1.5 / this.c.length;
			this.difSY = 1 / this.c.length
		}
	}
};
Fold.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		if (a.bStdAnm == false && a.c.state == 1) {
			a.setTranslate(0, a.cY);
			a.sV.dpd.style.opacity = 0;
			a.bStdAnm = true
		}
		var d = 0;
		var e = 0;
		var f = 1;
		var g = 1;
		if (a.c.state == 1) {
			e = a.cY - c * a.difY;
			d = c * a.difO;
			f = 2.5 - c * a.difSX;
			g = c * a.difSY
		} else {
			e = c * a.difY;
			d = 1 - c * a.difO;
			f = 1 + c * a.difSX;
			g = 1 - c * a.difSY
		}
		a.setTranslate(0, e);
		a.setScale(f, g);
		a.sV.dpd.style.opacity = d;
		if (c >= a.c.length) {
			if (a.c.state == 2)
				a.sV.dpd.style.opacity = 0;
			a.setTranslate(0, 0);
			a.setScale(1, 1);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	this.bStdAnm = false;
	var a = this;
	CallbackFn(cbk);
};
Magnify = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			var b = parseInt(this.sV.d.style.left);
			var c = parseInt(this.sV.d.style.top);
			var d = parseInt(this.sV.w);
			var e = parseInt(this.sV.h);
			var f = gv.sh;
			var g = gv.sw;
			this.cY = f / 2 - e / 2;
			if (b < g / 2) {
				this.cX = g / 2 - d / 2 - b
			} else {
				this.cX =  - (b - (g / 2 - d / 2))
			}
			this.difX = this.cX / (this.c.length * .6);
			this.difY = this.cY / (this.c.length * .6);
			this.difO = 1 / (this.c.length * .4);
			this.difSX1 = 2 / (this.c.length * .4);
			this.difSY1 = 4.5 / (this.c.length * .4);
			this.difSX2 = 1 / (this.c.length * .6);
			this.difSY2 = 3.5 / (this.c.length * .6)
		}
	}
};
Magnify.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		if (a.bStdAnm == false && a.c.state == 1) {
			a.setTranslate(a.cX, a.cY);
			a.sV.dpd.style.opacity = 1;
			a.bStdAnm = true
		}
		var d = 0;
		var e = 0;
		var f = 0;
		var g = 1;
		var h = 1;
		var i = c / a.c.length * 100;
		if (a.c.state == 1) {
			if (i < 40) {
				g = c * a.difSX1;
				h = c * a.difSY1;
				a.setScale(g, h);
				d = c * a.difO;
				a.sV.dpd.style.opacity = d
			} else {
				e = a.cX - (c - a.c.length * .4) * a.difX;
				f = a.cY - (c - a.c.length * .4) * a.difY;
				a.setTranslate(e, f);
				g = 2 - (c - a.c.length * .4) * a.difSX2;
				h = 4.5 - (c - a.c.length * .4) * a.difSY2;
				a.setScale(g, h)
			}
		} else {
			if (i < 60) {
				e = c * a.difX;
				f = c * a.difY;
				a.setTranslate(e, f);
				g = 1 + c * a.difSX2;
				h = 1 + c * a.difSY2;
				a.setScale(g, h)
			} else {
				g = 2 - (c - a.c.length * .6) * a.difSX1;
				h = 4.5 - (c - a.c.length * .6) * a.difSY1;
				a.setScale(g, h);
				d = 1 - (c - a.c.length * .6) * a.difO;
				a.sV.dpd.style.opacity = d
			}
		}
		if (c >= a.c.length) {
			if (a.c.state == 2)
				a.sV.dpd.style.opacity = 0;
			else
				a.sV.dpd.style.opacity = 1;
			a.setTranslate(0, 0);
			a.setScale(1, 1);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	this.bStdAnm = false;
	var a = this;
	CallbackFn(cbk);
};
Unfold = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.difX = 48 / this.c.length;
			this.difO = 1 / this.c.length
		}
	}
};
Unfold.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		var d = 0;
		var e = 0;
		if (a.c.state == 1) {
			d = c * a.difX - 48;
			e = c * a.difO
		} else {
			d =  - (c * a.difX);
			e = 1 - c * a.difO
		}
		a.sV.dpd.style.opacity = e;
		a.setTranslate(d, 0);
		if (c >= a.c.length) {
			if (a.c.state == 1) {
				a.sV.dpd.style.opacity = 1
			} else {
				a.sV.dpd.style.opacity = 0
			}
			a.setTranslate(0, 0);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Whip = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.difX = 70 / (this.c.length * .5);
			this.difO = 1 / (this.c.length * .5);
			this.difS = 1 / (this.c.length * .5)
		}
	}
};
Whip.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		var d = 0;
		var e = 0;
		var f = 1;
		var g = c / a.c.length * 100;
		if (a.c.state == 1) {
			if (g < 50) {
				d = c * a.difX;
				e = c * a.difO;
				f = c * a.difS;
				a.sV.dpd.style.opacity = e
			} else {
				d = 70 - (c - a.c.length * .5) * a.difX;
				f = 1
			}
		} else {
			if (g < 50) {
				d = 70 + (c - a.c.length * .5) * a.difX;
				f = 1
			} else {
				d = 70 - (c - a.c.length * .5) * a.difX;
				e = 1 - (c - a.c.length * .5) * a.difO;
				f = 1 - (c - a.c.length * .5) * a.difS;
				a.sV.dpd.style.opacity = e
			}
		}
		a.setTranslate(d, 0);
		a.setScale(f, f);
		if (c >= a.c.length) {
			if (a.c.state == 1) {
				a.sV.dpd.style.opacity = 1
			} else {
				a.sV.dpd.style.opacity = 0
			}
			a.setTranslate(0, 0);
			a.setScale(1, 1);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Thread = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			var b = parseInt(this.sV.w);
			this.sX = (b + 225) / b;
			this.cX = -225;
			this.difX = this.cX / (this.c.length * .7);
			this.difSX = (this.sX - 1) / (this.c.length * .3);
			this.difSY = .95 / (this.c.length * .3)
		}
	}
};
Thread.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		if (a.bStdAnm == false && a.c.state == 1) {
			a.setTranslate(a.cX, 0);
			a.setScale(a.sX, .05);
			a.sV.dpd.style.opacity = 1;
			a.bStdAnm = false
		}
		var d = 0;
		var e = 0;
		var f = 1;
		var g = 1;
		var h = c / a.c.length * 100;
		if (a.c.state == 1) {
			if (h < 70) {
				d = a.cX - c * a.difX;
				f = a.sX;
				g = .05
			} else {
				f = a.sX - (c - a.c.length * .7) * a.difSX;
				g = (c - a.c.length * .7) * a.difSY
			}
			a.setTranslate(d, 0);
			a.setScale(f, g)
		} else {
			if (h < 30) {
				f = 1 + c * a.difSX;
				g = 1 - c * a.difSY
			} else {
				d = (c - a.c.length * .3) * a.difX;
				f = a.sX;
				g = .05
			}
			a.setTranslate(d, 0);
			a.setScale(f, g)
		}
		if (c >= a.c.length) {
			if (a.c.state == 1) {
				a.sV.dpd.style.opacity = 1
			} else {
				a.sV.dpd.style.opacity = 0
			}
			a.setTranslate(0, 0);
			a.setScale(1, 1);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	this.bStdAnm = false;
	var a = this;
	CallbackFn(cbk);
};
Swish = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			var b = parseInt(this.sV.d.style.top);
			var c = parseInt(this.sV.h);
			var d = gv.sh;
			this.cY = d;
			this.difY1 = this.cY / (this.c.length * .5);
			this.difY2 = 50 / (this.c.length * .2);
			this.difA = 45 / (this.c.length * .2);
			this.difA2 = 45 / (this.c.length * .5);
			this.difA3 = 45 / this.c.length
		}
	}
};
Swish.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		if (a.bStdAnm == false && a.c.state == 1) {
			a.setTranslate(0, a.cY);
			a.setRotate(-45);
			a.sV.dpd.style.opacity = 1;
			a.bStdAnm = true
		}
		var d = c / a.c.length * 100;
		var e;
		if (a.c.state == 1) {
			if (d <= 50) {
				var f =  - (a.cY - c * a.difY1);
				a.setTranslate(0, f)
			} else if (d > 50) {
				var g = 360 * ((c - a.c.length * .5) / (a.c.length * .5));
				var h = Math.sin(Math.PI / 180 * g);
				var i = 0;
				if (g <= 180) {
					e = 50
				} else if (g > 180) {
					e = 10
				}
				var f = e * Math.abs(h);
				a.setTranslate(0, -f);
				if (d < 75) {
					i = -45 + a.difA * (c - a.c.length * .5);
					a.setRotate(i)
				} else if (d < 88) {
					i = 11 - a.difA2 * (c - a.c.length * .75);
					a.setRotate(i)
				} else {
					a.setRotate(0)
				}
			}
		} else {
			var g = 90 * (c / a.c.length);
			var h = Math.sin(Math.PI / 180 * g);
			var f = h * c * a.difY1;
			a.setTranslate(0, f);
			i = a.difA3 * c;
			a.setRotate(i)
		}
		if (c >= a.c.length) {
			if (a.c.state == 1) {
				a.sV.dpd.style.opacity = 1
			} else {
				a.sV.dpd.style.opacity = 0
			}
			a.setTranslate(0, 0);
			a.setRotate(0);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	this.bStdAnm = false;
	var a = this;
	CallbackFn(cbk);
};
Flip = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			var b = parseInt(this.sV.h);
			this.cY = parseInt(this.sV.d.style.top) + b;
			this.difY = this.cY / this.c.length;
			this.difA = 360 / this.c.length
		}
	}
};
Flip.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		if (a.bStdAnm == false && a.c.state == 1) {
			a.setTranslate(0, a.cY);
			a.sV.dpd.style.opacity = 1;
			a.bStdAnm = true
		}
		var d = 0;
		var e = 0;
		d = a.c.state == 1 ?  - (a.cY - c * a.difY) : c * a.difY;
		var f = c / a.c.length * 180;
		var g = Math.sin(Math.PI / 180 * f) * 37;
		a.setTranslate(g, d);
		e = c * a.difA;
		a.setRotate(e);
		var h = c / a.c.length * 360;
		var i = Math.cos(Math.PI / 180 * h);
		a.setScale(i, 1);
		if (c >= a.c.length) {
			a.sV.dpd.style.opacity = a.c.state == 1 ? 1 : 0;
			a.setTranslate(0, 0);
			a.setRotate(0);
			a.setScale(1, 1);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	this.bStdAnm = false;
	var a = this;
	CallbackFn(cbk);
};
SpiralIn = SpiralOut = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.cX = parseInt(this.sV.d.style.left) + parseInt(this.sV.w);
			this.difX = this.cX / this.c.length
		}
	}
};
SpiralIn.prototype.play = SpiralOut.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		if (a.bStdAnm == false && a.c.state == 1) {
			a.setTranslate(a.cX, 0);
			a.sV.dpd.style.opacity = 1;
			a.bStdAnm = true
		}
		var d = a.c.state == 1 ? a.cX - a.difX * c : a.difX * c;
		var e = -180 + c / a.c.length * 360;
		var f = Math.cos(e * Math.PI / 180) * d;
		var g = Math.sin(e * Math.PI / 180) * d;
		a.setTranslate(f, g);
		var h = c / a.c.length * 90;
		var i = a.c.state == 1 ? Math.sin(Math.PI / 180 * h) : Math.cos(Math.PI / 180 * h);
		a.setScale(i, i);
		if (c >= a.c.length) {
			a.sV.dpd.style.opacity = a.c.state == 1 ? 1 : 0;
			a.setTranslate(0, 0);
			a.setScale(1, 1);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	this.bStdAnm = false;
	var a = this;
	CallbackFn(cbk);
};
GrowShrink = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.rev = this.c.c7 == 1 ? false : true;
			this.scaleX = this.c.scaleX / 100;
			this.scaleY = this.c.scaleY / 100;
			this.animstarted = false
		}
	}
};
GrowShrink.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		if (a.animstarted == false) {
			var d = a.getScale();
			a.CSX = d.x - 1;
			a.CSY = d.y - 1;
			a.animstarted = true
		}
		var e = a.rev ? c / a.c.length * 180 : c / a.c.length * 90;
		var f = 1 + (a.scaleX - 1) * Math.sin(Math.PI / 180 * e);
		var g = 1 + (a.scaleY - 1) * Math.sin(Math.PI / 180 * e);
		a.setScale(a.CSX + f, a.CSY + g);
		if (c >= a.c.length) {
			if (a.rev == true)
				a.setScale(a.CSX + 1, a.CSY + 1);
			else
				a.setScale(a.CSX + a.scaleX, a.CSY + a.scaleY);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Spin = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (b) {
		if (this.initBaseAnimation(b)) {
			this.rev = this.c.c7 == 1 ? false : true;
			this.angle = a.s0;
			this.mA = this.rev == true ? this.angle / (this.c.length / 2) : this.angle / this.c.length;
			this.animstarted = false
		}
	}
};
Spin.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		if (a.animstarted == false) {
			a.oAngle = a.getRotate();
			a.animstarted = true
		}
		var d = 0;
		if (a.rev == false) {
			d = c * a.mA
		} else {
			var e = c / a.c.length * 100;
			d = e < 50 ? c * a.mA : a.angle - (c - a.c.length / 2) * a.mA
		}
		a.setRotate(a.oAngle + d);
		if (c >= a.c.length) {
			if (a.rev == true)
				a.setRotate(a.oAngle + 0);
			else
				a.setRotate(a.oAngle + a.angle);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Transparency = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
		    this.opac = this.c.transparency
		}
	}
};
Transparency.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		a.sV.dpd.style.opacity = a.opac;
		if (c >= a.c.length) {
			a.sV.dpd.style.opacity = 1;
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Blink = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {}

	}
};
Blink.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start) {
				a.reset()
			} else {
				CallbackFn(cbk)
			}
			return
		}
		a.playAudio();
		var d = c / a.c.length * 100;
		a.sV.dpd.style.opacity = d < 50 ? 0 : 1;
		if (c >= a.c.length) {
			a.sV.dpd.style.opacity = 1;
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Teeter = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.Color = this.c.color
		}
	}
};
Teeter.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		var d = c / a.c.length * 100;
		var e = c / a.c.length * 720;
		var f = 2 * Math.sin(Math.PI / 180 * e);
		a.setRotate(f);
		try {
			if (a.bgcv.bdrawn == true && a.drawn == false) {
				a.fct.save();
				a.frcv.draw(a.bgcv, true);
				a.sV.dpd.style.opacity = 1;
				a.drawn = true;
				a.fct.restore();
				var g = a.fct.getImageData(0, 0, a.w, a.h);
				var h = g.data;
				for (var i = 0, j = h.length; i < j; i += 4) {
					h[i] = a.Color[0];
					h[i + 1] = a.Color[1];
					h[i + 2] = a.Color[2]
				}
				a.fct.putImageData(g, 0, 0)
			}
		} catch (k) {}

		a.frcv.cv.style.opacity = d < 10 ? d / 10 : 1;
		if (c >= a.c.length) {
			a.setRotate(0);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	this.drawn = false;
	CallbackFn(cbk);
};
Darken = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.Color = [0, 0, 0]
		}
	}
};
Darken.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		try {
			if (a.bgcv.bdrawn == true && a.drawn == false) {
				a.fct.save();
				a.frcv.draw(a.bgcv, true);
				a.sV.dpd.style.opacity = 1;
				a.drawn = true;
				a.fct.restore();
				var d = a.fct.getImageData(0, 0, a.w, a.h);
				var e = d.data;
				for (var f = 0, g = e.length; f < g; f += 4) {
					e[f] = a.Color[0];
					e[f + 1] = a.Color[1];
					e[f + 2] = a.Color[2]
				}
				a.fct.putImageData(d, 0, 0)
			}
		} catch (h) {}

		a.frcv.cv.style.opacity = c >= a.c.length ? .6 : c / a.c.length * .6;
		if (c >= a.c.length) {
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	this.drawn = false;
	CallbackFn(cbk);
};
Desaturate = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {}

	}
};
Desaturate.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		try {
			if (a.bgcv.bdrawn == true && a.drawn == false) {
				a.fct.save();
				a.frcv.draw(a.bgcv, true);
				a.sV.dpd.style.opacity = 1;
				a.drawn = true;
				a.fct.restore();
				var d = a.fct.getImageData(0, 0, a.w, a.h);
				var e = d.data;
				for (var f = 0, g = e.length; f < g; f += 4) {
					var h = e[f] * .3 + e[f + 1] * .59 + e[f + 2] * .11;
					e[f] = h;
					e[f + 1] = h;
					e[f + 2] = h
				}
				a.fct.putImageData(d, 0, 0)
			}
		} catch (i) {}

		a.frcv.cv.style.opacity = c >= a.c.length ? 1 : c / a.c.length * 1;
		if (c >= a.c.length) {
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	this.drawn = false;
	CallbackFn(cbk);
};
ColorBlend = GrowwithColor = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.Color = this.c.color
		}
	}
};
ColorBlend.prototype.play = GrowwithColor.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		try {
			if (a.bgcv.bdrawn == true && a.drawn == false) {
				a.fct.save();
				a.frcv.draw(a.bgcv, true);
				a.sV.dpd.style.opacity = 1;
				a.drawn = true;
				a.fct.restore();
				var d = a.fct.getImageData(0, 0, a.w, a.h);
				var e = d.data;
				for (var f = 0, g = e.length; f < g; f += 4) {
					e[f] = a.Color[0];
					e[f + 1] = a.Color[1];
					e[f + 2] = a.Color[2]
				}
				a.fct.putImageData(d, 0, 0)
			}
		} catch (h) {}

		a.frcv.cv.style.opacity = c >= a.c.length ? 1 : c / a.c.length * 1;
		if (c >= a.c.length) {
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	this.drawn = false;
	CallbackFn(cbk);
};
Lighten = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {}

	}
};
Lighten.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		try {
			if (a.bgcv.bdrawn == true && a.drawn == false) {
				a.fct.save();
				a.frcv.draw(a.bgcv, true);
				a.sV.dpd.style.opacity = 1;
				a.drawn = true;
				a.fct.restore();
				var d = a.fct.getImageData(0, 0, a.w, a.h);
				var e = d.data;
				for (var f = 0, g = e.length; f < g; f += 4) {
					e[f] = 255;
					e[f + 1] = 255;
					e[f + 2] = 255
				}
				a.fct.putImageData(d, 0, 0)
			}
		} catch (h) {}

		a.frcv.cv.style.opacity = c >= a.c.length ? .5 : c / a.c.length * .5;
		if (c >= a.c.length) {
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	this.drawn = false;
	CallbackFn(cbk);
};
Flicker = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.Color = this.c.color
		}
	}
};
Flicker.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		try {
			if (a.bgcv.bdrawn == true && a.drawn == false) {
				a.fct.save();
				a.frcv.draw(a.bgcv, true);
				a.sV.dpd.style.opacity = 1;
				a.drawn = true;
				a.fct.restore();
				var d = a.fct.getImageData(0, 0, a.w, a.h);
				var e = d.data;
				for (var f = 0, g = e.length; f < g; f += 4) {
					var h = e[f] * .3 + e[f + 1] * .59 + e[f + 2] * .11;
					e[f] = a.Color[0];
					e[f + 1] = a.Color[1];
					e[f + 2] = a.Color[2]
				}
				a.fct.putImageData(d, 0, 0)
			}
		} catch (i) {}

		var j = c / a.c.length * 180;
		var k = Math.sin(Math.PI / 180 * j);
		a.frcv.cv.style.opacity = c >= a.c.length ? 0 : k;
		if (c >= a.c.length) {
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	this.drawn = false;
	CallbackFn(cbk);
};
VerticalHighlight = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.Color = this.c.color;
			this.difSY = .4 / (this.c.length * .25);
			this.difC = 1 / (this.c.length * .25)
		}
	}
};
VerticalHighlight.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		try {
			if (a.bgcv.bdrawn == true && a.drawn == false) {
				a.fct.save();
				a.frcv.draw(a.bgcv, true);
				a.sV.dpd.style.opacity = 1;
				a.drawn = true;
				a.fct.restore();
				var d = a.fct.getImageData(0, 0, a.w, a.h);
				var e = d.data;
				for (var f = 0, g = e.length; f < g; f += 4) {
					var h = e[f] * .3 + e[f + 1] * .59 + e[f + 2] * .11;
					e[f] = a.Color[0];
					e[f + 1] = a.Color[1];
					e[f + 2] = a.Color[2]
				}
				a.fct.putImageData(d, 0, 0)
			}
		} catch (i) {}

		var j = c / a.c.length * 100;
		var k = 1;
		var l = 0;
		if (j < 25) {
			k = 1 + c * a.difSY;
			l = a.difC * c
		} else if (j > 75) {
			k = 1.4 - (c - a.c.length * .75) * a.difSY;
			l = 1 - a.difC * (c - a.c.length * .75)
		} else {
			k = 1.4;
			l = 1
		}
		a.setScale(1, k);
		a.frcv.cv.style.opacity = l;
		if (c >= a.c.length) {
			a.setScale(1, 1);
			a.frcv.cv.style.opacity = 0;
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	this.drawn = false;
	CallbackFn(cbk);
};
ChangeFillColor = ChangeFontColor = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.Color = this.c.color;
			this.ColorStyle = 2;
			this.rev = this.c.c7 == 1 ? false : true
		}
	}
};
ChangeFillColor.prototype.play = ChangeFontColor.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		try {
			if (a.bgcv.bdrawn == true && a.drawn == false) {
				a.fct.save();
				a.frcv.draw(a.bgcv, true);
				a.sV.dpd.style.opacity = 1;
				a.drawn = true;
				a.fct.restore();
				var d = a.fct.getImageData(0, 0, a.w, a.h);
				var e = d.data;
				for (var f = 0, g = e.length; f < g; f += 4) {
					e[f] = a.Color[0];
					e[f + 1] = a.Color[1];
					e[f + 2] = a.Color[2]
				}
				a.fct.putImageData(d, 0, 0)
			}
		} catch (h) {}

		if (a.ColorStyle != 1) {
			var i = a.rev == false ? c / a.c.length * 90 : c / a.c.length * 180;
			var j = Math.sin(Math.PI / 180 * i);
			if (a.rev == true)
				a.frcv.cv.style.opacity = c >= a.c.length ? 0 : j;
			else
				a.frcv.cv.style.opacity = c >= a.c.length ? 1 : j
		} else {
			if (a.rev == true)
				a.frcv.cv.style.opacity = c >= a.c.length ? 0 : 1;
			else
				a.frcv.cv.style.opacity = 1
		}
		if (c >= a.c.length) {
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	this.drawn = false;
	CallbackFn(cbk);
};
Blast = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.Color = this.c.color;
			this.difSY1 = 1 / (this.c.length * .1);
			this.difSY2 = 1.5 / (this.c.length * .1)
		}
	}
};
Blast.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		try {
			if (a.bgcv.bdrawn == true && a.drawn == false) {
				a.fct.save();
				a.frcv.draw(a.bgcv, true);
				a.sV.dpd.style.opacity = 1;
				a.drawn = true;
				a.fct.restore();
				var d = a.fct.getImageData(0, 0, a.w, a.h);
				var e = d.data;
				for (var f = 0, g = e.length; f < g; f += 4) {
					e[f] = a.Color[0];
					e[f + 1] = a.Color[1];
					e[f + 2] = a.Color[2]
				}
				a.fct.putImageData(d, 0, 0)
			}
		} catch (h) {}

		var i = c / a.c.length * 100;
		var j = 1;
		if (i < 10) {
			j = 1 - a.difSY1 * c
		} else if (i < 20) {
			j = a.difSY2 * (c - a.c.length * .1)
		} else {
			j = 1.5
		}
		a.setScale(1, j);
		a.frcv.cv.style.opacity = c >= a.c.length ? 1 : c / a.c.length;
		if (c >= a.c.length) {
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	this.drawn = false;
	CallbackFn(cbk);
};
BrushOnColor = ColorWave = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.Color = this.c.color
		}
	}
};
BrushOnColor.prototype.play = ColorWave.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		try {
			if (a.bgcv.bdrawn == true && a.drawn == false) {
				a.fct.save();
				a.frcv.draw(a.bgcv, true);
				a.sV.dpd.style.opacity = 1;
				a.drawn = true;
				a.fct.restore();
				var d = a.fct.getImageData(0, 0, a.w, a.h);
				var e = d.data;
				for (var f = 0, g = e.length; f < g; f += 4) {
					e[f] = a.Color[0];
					e[f + 1] = a.Color[1];
					e[f + 2] = a.Color[2]
				}
				a.fct.putImageData(d, 0, 0)
			}
		} catch (h) {}

		a.frcv.cv.style.opacity = 1;
		if (c >= a.c.length) {
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	this.drawn = false;
	CallbackFn(cbk);
};
Wave = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {}

	}
};
Wave.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		var d =  - (c / a.c.length) * 180;
		var e = Math.sin(Math.PI / 180 * d);
		var f = 40 * e;
		a.setTranslate(0, f);
		var g = c / a.c.length * 360;
		var h = 25 * Math.sin(Math.PI / 180 * g);
		a.setRotate(h);
		a.sV.dpd.style.opacity = 1;
		if (c >= a.c.length) {
			a.setTranslate(0, 0);
			a.setRotate(0);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
ComplementaryColor = ComplementaryColor2 = ContrastingColor = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.Color = this.c.color;
			if (this.c.name == "ComplementaryColor")
				this.colMax = 120;
			else if (this.c.name == "ComplementaryColor2")
				this.colMax = 240;
			else
				this.colMax = 180;
			this.dif = this.colMax / this.c.length;
			this.animstarted = false
		}
	}
};
ComplementaryColor.prototype.play = ComplementaryColor2.prototype.play = ContrastingColor.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		if (a.animstarted == false) {
			a.animstarted = true;
			var d = rgb2hsv(a.Color);
			a.curr_h = d[0];
			a.bs = d[1];
			a.bv = d[2];
			a.cc = a.curr_h
		}
		a.curr_h = a.cc + a.dif * c;
		a.curr_h = a.curr_h % 360;
		var e = c >= a.c.length ? hsv2color((a.colMax + a.cc) % 360, a.bs, a.bv) : hsv2color(a.curr_h, a.bs, a.bv);
		try {
			if (a.bgcv.bdrawn == true) {
				a.fct.save();
				a.frcv.draw(a.bgcv, true);
				a.sV.dpd.style.opacity = 1;
				a.drawn = true;
				a.fct.restore();
				var f = a.fct.getImageData(0, 0, a.w, a.h);
				var g = f.data;
				for (var h = 0, i = g.length; h < i; h += 4) {
					g[h] = e[0];
					g[h + 1] = e[1];
					g[h + 2] = e[2]
				}
				a.fct.putImageData(f, 0, 0)
			}
		} catch (j) {}

		if (c >= a.c.length) {
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	this.drawn = false;
	CallbackFn(cbk);
};
Shimmer = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {}

	}
};
Shimmer.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		var d = c / a.c.length * 180;
		var e = Math.sin(Math.PI / 180 * d);
		var f = 1 - e * .2;
		var g = 10 * e;
		var h = a.sV.w / 2 * e;
		var i = a.sV.h / 6 * e;
		a.setScale(f, 1);
		a.setRotate(-g);
		a.setTranslate(h, -i);
		if (c >= a.c.length) {
			a.setTranslate(0, 0);
			a.setRotate(0);
			a.setScale(1, 1);
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
ColorTypewriter = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.Color1 = [192, 80, 77];
			this.Color2 = [0, 0, 255]
		}
	}
};
ColorTypewriter.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		var d = c / a.c.length * 100;
		var e = new Array;
		if (d < 50) {
			a.drawn = false;
			e = a.Color1
		} else {
			a.drawn = false;
			e = a.Color2
		}
		try {
			if (a.bgcv.bdrawn == true && a.drawn == false) {
				a.fct.save();
				a.frcv.draw(a.bgcv, true);
				a.sV.dpd.style.opacity = 1;
				a.drawn = true;
				a.fct.restore();
				var f = a.fct.getImageData(0, 0, a.w, a.h);
				var g = f.data;
				for (var h = 0, i = g.length; h < i; h += 4) {
					g[h] = e[0];
					g[h + 1] = e[1];
					g[h + 2] = e[2]
				}
				a.fct.putImageData(f, 0, 0)
			}
			a.drawn = true
		} catch (j) {}

		a.frcv.cv.style.opacity = 1;
		if (c >= a.c.length) {
			a.dltCv();
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	this.drawn = false;
	CallbackFn(cbk);
};
Cover = UnCover = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.csld = null;
			var b = this.sV.d;
			var c = b.style.height && b.style.height != "100%" ? parseFloat(b.style.height) : parseFloat(b.parentNode.style.height);
			var d = b.style.width && b.style.width != "100%" ? parseFloat(b.style.width) : parseFloat(b.parentNode.style.width);
			this.x1 = this.x2 = this.y1 = this.y2 = 0;
			var e = this.c.additionalData > 8 ? this.c.additionalData - 8 : this.c.additionalData;
			if (e == 2 || e == 5 || e == 6)
				this.x1 = d;
			else if (e == 3 || e == 7 || e == 8)
				this.x1 = d * -1;
			if (e == 4 || e == 6 || e == 8)
				this.y1 = c;
			else if (e == 1 || e == 5 || e == 7)
				this.y1 = c * -1;
			if (this.c.additionalData > 8) {
				this.x2 = this.x1 * -1;
				this.y2 = this.y1 * -1;
				this.x1 = this.y1 = 0
			}
			this.LMove = new Line(this.x1, this.y1, this.x2, this.y2, this.c.length)
		}
	}
};
Cover.prototype.play = UnCover.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		if (a.c.additionalData < 9) {
			var d = c >= a.c.length ? {
				x : 0,
				y : 0
			}
			 : a.LMove.getPointAfterT(c);
			a.setTranslate(d.x, d.y);
			a.sV.d.style.opacity = 1
		} else {
			if (a.csld == null) {
				a.csld = document.getElementById("s" + gc + "s0");
				a.sV.d = document.getElementById("s" + gpc + "s0");
				if (gc < gpc)
					a.sV.d.style.zIndex = a.csld.style.zIndex = "0";
				else
					a.sV.d.style.zIndex += 1;
				a.sV.d.style.opacity = a.csld.style.opacity = 1
			}
			if (a.csld.id == a.sV.d.id) {
				var d = c >= a.c.length ? {
					x : 0,
					y : 0
				}
				 : a.LMove.getRevPointAfterT(c);
				a.setTranslate(-d.x, -d.y)
			} else {
				var d = c >= a.c.length ? {
					x : 0,
					y : 0
				}
				 : a.LMove.getPointAfterT(c);
				a.setTranslate(d.x, d.y)
			}
		}
		if (c >= a.c.length) {
			a.csld = null;
			if (a.s0 > 8)
				a.sV.d.style.opacity = 0;
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Push = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.csld = null;
			var b = this.sV.d;
			var c = b.style.height && b.style.height != "100%" ? parseFloat(b.style.height) : parseFloat(b.parentNode.style.height);
			var d = b.style.width && b.style.width != "100%" ? parseFloat(b.style.width) : parseFloat(b.parentNode.style.width);
			this.x1 = this.x2 = this.y1 = this.y2 = 0;
			switch (this.c.additionalData) {
			case 1:
				this.y1 = -c;
				break;
			case 2:
				this.x1 = d;
				break;
			case 3:
				this.x1 = -d;
				break;
			case 4:
				this.y1 = c;
				break
			}
			this.LMove = new Line(this.x1, this.y1, this.x2, this.y2, this.c.length)
		}
	}
};
Push.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		if (a.csld == null) {
			a.csld = document.getElementById("s" + gc + "s0");
			a.sV.d = document.getElementById("s" + gpc + "s0");
			if (gc < gpc)
				a.sV.d.style.zIndex = a.csld.style.zIndex = "0";
			else
				a.sV.d.style.zIndex += 1;
			a.sV.d.style.opacity = a.csld.style.opacity = 1
		}
		if (a.csld.id == a.sV.d.id) {
			var d = c >= a.c.length ? {
				x : 0,
				y : 0
			}
			 : a.LMove.getPointAfterT(c);
			a.setTranslate(d.x, d.y)
		} else {
			var d = c >= a.c.length ? {
				x : 0,
				y : 0
			}
			 : a.LMove.getRevPointAfterT(c);
			a.setTranslate(-d.x, -d.y);
			d = c >= a.c.length ? {
				x : 0,
				y : 0
			}
			 : a.LMove.getPointAfterT(c);
			var e = a.sV.d;
			a.sV.d = a.csld;
			a.setTranslate(d.x, d.y);
			a.sV.d = e
		}
		if (c >= a.c.length) {
			a.csld = null;
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
NewsFlash = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.tAng = 360;
			this.tScl = 1
		}
	}
};
NewsFlash.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		var d = c >= a.c.length ? 0 : a.tAng * (1 - c / a.c.length);
		var e = c >= a.c.length ? 1 : a.tScl * (c / a.c.length);
		a.sV.d.style.opacity = 1;
		a.setScale(e, e);
		a.setRotate(d);
		if (c >= a.c.length) {
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
MskAnim = function (a) {
    this.inheritFrom = BaseAnimation;
    this.inheritFrom(a);
    this.initMskAnim = function (a) {
        if (this.initBaseAnimation(a)) {
            this.h = this.sV.h;
            this.w = this.sV.w;
            this.im = new Image;
            this.bgcv = new CanvasEl(this.w, this.h);
            this.frcv = new CanvasEl(this.w, this.h);
            if (this.c.state == -1)
                this.bgcv.drawCmpltDiv(this.sV.d, 0, 0);
            else
                this.bgcv.drawDiv(this.sV.dpd);
            this.fct = this.frcv.cvt;
            this.cp = "destination-in";
            if (this.c.state == 2)
                this.cp = "destination-out";
            return true
        } else
            return false
    };
    this.resetMskAnim = function () {
        if (!this.pozd) {
            if (this.c.state == -1)
                this.frcv.apndTo(this.sV.d.parentNode);
            else
                this.frcv.apndTo(this.sV.d)
        }
        this.resetBaseAnimation()
    };
    this.doAfterEffect = function () {
        if (this.c.state == -1) {
            this.sV.d.style.opacity = 1;
            this.reset()
        }
    };
    this.dltCv = function () {
        try {
            if (this.c.state == 2)
                this.sV.dpd.style.opacity = 0;
            if (this.c.state == 1)
                this.sV.dpd.style.opacity = 1;
            this.fct.clearRect(0, 0, this.w, this.h);
            if (this.c.state == -1)
                this.sV.d.parentNode.removeChild(this.frcv.cv);
            else
                this.sV.d.removeChild(this.frcv.cv)
        } catch (a) { }

    }
};
Cut = FadeThroughBlack = CutThroughBlack = function (a) {
	this.inheritFrom = BaseAnimation;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initBaseAnimation(a)) {
			this.csld = null
		}
	}
};
Cut.prototype.play = FadeThroughBlack.prototype.play = CutThroughBlack.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		if (a.csld == null) {
			a.csld = document.getElementById("s" + gc + "s0");
			a.sV.d = document.getElementById("s" + gpc + "s0")
		}
		switch (a.c.additionalData) {
		case 1: {
				var d = c >= a.c.length ? 1 : c / a.c.length;
				if (d < .5)
					a.sV.d.style.opacity = a.csld.style.opacity = 0;
				else
					a.csld.style.opacity = d
			}
			break;
		case 2:
			a.csld.style.opacity = 1;
			break;
		case 3: {
				var d = c >= a.c.length ? 1 : c / a.c.length;
				if (d < .5)
					a.sV.d.style.opacity = a.csld.style.opacity = 0;
				else
					a.csld.style.opacity = 1
			}
			break
		}
		if (c >= a.c.length) {
			a.csld = null;
			a.sV.d.style.opacity = 1;
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetBaseAnimation();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
Comb = function (a) {
	this.inheritFrom = MskAnim;
	this.inheritFrom(a);
	this.Initialize = function (a) {
		if (this.initMskAnim(a)) {
			this.mc = new CanvasEl(this.w, this.h);
			this.cp = "destination-out";
			this.dH = this.c.additionalData == 1 ? this.h / 20 : this.h;
			this.dW = this.c.additionalData == 1 ? this.w : this.w / 20;
			this.len = this.c.additionalData == 1 ? this.w : this.h
		}
	}
};
Comb.prototype.play = function () {
	function cbk() {
		if (a.pozd || a.stpd) {
			a.stopAudio();
			return
		}
		var c = a.gtime() - a.st - a.c.start;
		if (c <= 0) {
			if (Math.abs(c) > a.c.start)
				a.reset();
			else
				CallbackFn(cbk);
			return
		}
		a.playAudio();
		var d = c >= a.c.length ? a.len : a.len * (c / a.c.length);
		a.fct.save();
		a.frcv.draw(a.bgcv, true);
		a.sV.dpd.style.opacity = 0;
		a.mc.cvt.save();
		a.mc.cvt.clearRect(0, 0, a.w, a.h);
		var e = 0;
		var f = 0;
		for (var g = 0; g < 10; g++) {
			a.mc.cvt.beginPath();
			if (a.c.additionalData == 1) {
				a.mc.cvt.fillRect(e, f, a.dW - d, a.dH);
				f += a.dH;
				a.mc.cvt.fillRect(d, f, a.dW - d, a.dH);
				f += a.dH
			} else if (a.c.additionalData == 2) {
				a.mc.cvt.fillRect(e, f, a.dW, a.dH - d);
				e += a.dW;
				a.mc.cvt.fillRect(e, d, a.dW, a.dH - d);
				e += a.dW
			}
			a.mc.cvt.closePath()
		}
		a.mc.cvt.restore();
		a.mc.bdrawn = true;
		a.fct.globalCompositeOperation = a.cp;
		a.frcv.draw(a.mc, false);
		a.fct.restore();
		if (c >= a.c.length) {
			a.doAfterEffect();
			a.dltCv();
			a.doRepeat();
			return
		}
		CallbackFn(cbk)
	}
	this.resetMskAnim();
	this.plyBlockAnim();
	var a = this;
	CallbackFn(cbk);
};
