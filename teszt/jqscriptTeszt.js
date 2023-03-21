QUnit.module('1. táblázat lista elso tulajdonsaga', function () {
  QUnit.test('nev', function (assert) {
    assert.equal(lista.tul1);
  });

});

QUnit.module('2. Táblázat különböző elemei megjelenítése egyszerre', function () {
  QUnit.test('nev', function (assert) {
    assert.equal(lista.nev,lista.tul1,lista.tul2);
  });

});

QUnit.module('3. táblázat lista neve', function () {
  QUnit.test('nev', function (assert) {
    assert.equal(lista.nev);
  });

});

QUnit.module('4.táblázat lista 2-ik tulajdonsaga', function () {
  QUnit.test('nev', function (assert) {
    assert.equal(lista.tul2);
  });

});
