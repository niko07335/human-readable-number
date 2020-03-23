module.exports = function toReadable (number) {
  if (!number) return 'zero';
  const numArr1 = ['','ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
  const numArr2 = ['','one','two','three','four','five','six','seven','eight','nine','ten',
                  'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  let num = number + '';
  let arr = num.split('');
  const length = num.length;
  let res = '';
  if (length == 1 ) res = numArr2[arr[0]];
  else if (number % 100 == 0) res = numArr2[arr[0]] + ' hundred';
  else if (length == 2  && arr[0] < 2) res = numArr2[10+Number(arr[1])];
  else if (length == 2  && arr[0] >= 2 && arr[1] == 0) res = numArr1[arr[0]];
  else if (length == 2  && arr[0] >= 2) res = numArr1[arr[0]] + ' ' + numArr2[arr[1]];
  else if (length == 3  && arr[1] == 1) res = numArr2[arr[0]] + ' hundred ' +  numArr2[10+Number(arr[2])];
  else if (length == 3  && arr[1] == 0) res = numArr2[arr[0]] + ' hundred ' +  numArr2[arr[2]];
  else if (length == 3  && arr[1] >= 2 && arr[2] != 0) res = numArr2[arr[0]] + ' hundred ' + numArr1[arr[1]] + ' ' +  numArr2[arr[2]];
  else if (length == 3  && arr[1] >= 2 && arr[2] == 0) res = numArr2[arr[0]] + ' hundred ' + numArr1[arr[1]];
  if(res[length - 1] == ' ') res.substring(0, res.length - 1);
  return res;
}
