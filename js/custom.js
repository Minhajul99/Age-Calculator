var _date = new Date();
var _tDay = _date.getDate();
var _tMonth = _date.getMonth() + 1;
var _tYear = _date.getFullYear();

// document.getElementById("tDay").value = _tDay;
// document.getElementById("tMonth").value = _tMonth;
// document.getElementById("tYear").value = _tYear;

var _btn = document.getElementById("btn");
_btn.onclick = function () {
  var _bDay = document.getElementById("bDay").value;
  var _bMonth = document.getElementById("bMonth").value;
  var _bYear = document.getElementById("bYear").value;

  if (_tDay < _bDay) {
    _tDay = _tDay + 30 - _bDay;
    _tMonth = _tMonth - 1;
    document.getElementById("rDay").innerHTML = _tDay + " Days";

    if (_tMonth < _bMonth) {
      _tMonth = _tMonth + 12 - _bMonth;
      _tYear = _tYear - 1 - _bYear;
      document.getElementById("rMonth").innerHTML = _tMonth + " Months";
      document.getElementById("rYear").innerHTML = _tYear + " Years";
    } else {
      _tMonth = _tMonth - _bMonth;
      _tYear = _tYear - _bYear;
      document.getElementById("rMonth").innerHTML = _tMonth + " Months";
      document.getElementById("rYear").innerHTML = _tYear + " Years";
    }
  } else if (_tMonth < _bMonth) {
    _tDay = _tDay - _bDay;
    _tMonth = _tMonth + 12 - _bMonth;
    _tYear = _tYear - 1 - _bYear;
    document.getElementById("rDay").innerHTML = _tDay + " Days";
    document.getElementById("rMonth").innerHTML = _tMonth + " Months";
    document.getElementById("rYear").innerHTML = _tYear + " Years";
  } else {
    _tDay = _tDay - _bDay;
    _tMonth = _tMonth - _bMonth;
    _tYear = (_tYear - _bYear);
    document.getElementById("rDay").innerHTML = _tDay + " Days";
    document.getElementById("rMonth").innerHTML = _tMonth + " Months";
    document.getElementById("rYear").innerHTML = _tYear + " Years";
  }
};
