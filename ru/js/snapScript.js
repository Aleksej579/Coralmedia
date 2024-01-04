
;function num() {
	var s = Snap('#num-year');

	var numYearT = s.text(150, 0, 0).attr({'text-anchor':'middle'}),
			numYearTPl = s.text(200, 0, '+').attr({'text-anchor':'middle'}),
			numYearGoda = s.text(150,40,'ГОДА').attr({'fontSize':'30px','text-anchor':'middle'}),
			numYearIt = s.text(150, 80,'НА IT РЫНКЕ').attr({'fontSize':'20px','text-anchor':'middle'});

	Snap.animate(0, 3, function (value) {
		numYearT.attr({text: Math.round(value)});
	}, 2000);

	var s = Snap('#num-success');

	var numSuccessT = s.text(140, 0, 0).attr({'text-anchor':'middle'}),
			numSuccessTPl = s.text(245, 0, '+').attr({'text-anchor':'middle'}),
			numSuccessUspe = s.text(150, 40, 'УСПЕШНО').attr({'fontSize':'30px','text-anchor':'middle'}),
			numSuccessVipoln = s.text(150, 80, 'ВЫПОЛНЕННЫХ ПРОЕКТОВ').attr({'fontSize':'20px','text-anchor':'middle'});

	Snap.animate(0, 104, function (value) {
		numSuccessT.attr({text: Math.round(value)});
	}, 2000);

	var s = Snap('#num-let');

	var numLetT = s.text(150, 0, 0).attr({'text-anchor':'middle'}),
			numLetTPl = s.text(200, 0, '+').attr({'text-anchor':'middle'}),
			numLetLet = s.text(150, 40, 'ЛЕТ').attr({'fontSize':'30px','text-anchor':'middle'}),
			numLetOpita = s.text(150, 80,'ОПЫТА В СФЕРЕ').attr({'fontSize':'20px','text-anchor':'middle'});

	Snap.animate(0, 7, function (value) {
		numLetT.attr({text: Math.round(value)});
	}, 2000);


};