const func = (x, n) => {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  console.log(`������� ${n} �� ��������������, ����������� ����������� �����`);
} else {
  console.log( func(x, n) );
}