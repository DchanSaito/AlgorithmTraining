// 
// 動的計画法による三角形分割(6角形)
// 返り値は動的計画法によるテーブルを返す
//
function dp(points, table, n) {
  var s = 4;
  while(s <= n) {
    var tableRow = new Array();
    for (var i=0; i < n; i++) {
      var tmp = distance(points[(i+1)%n], points[(i+s-1)%n]) + table[s-1][(i+1)%n];
      var tmp2 = distance(points[i], points[(i+s-2)%n]) + table[s-1][i];
      var tmp3 = new Array();
      if (s > 4) {
        for (var j=i+2; j<i+s-2; j++) {
          var t = distance(points[i], points[j%n]) + distance(points[(i+s-1)%n], points[j%n]) +
            table[j-i+1][i] + table[s-j+i][j%n];
          if(!isNaN(t)) {
            tmp3.push(t);
          }
        }
        tmp3.push(tmp);
        tmp3.push(tmp2);
        tableRow.push(Math.min.apply(null, tmp3));
      } else {
        tableRow.push(Math.min(tmp, tmp2));
      }
    }
    table.push(tableRow);
    s++;
  }
  return table;
}


//
// ユークリッド距離を計算する
//
function distance(point, anotherPoint) {
  dist = Math.pow((point.x - anotherPoint.x), 2) +
    Math.pow((point.y - anotherPoint.y), 2);
  dist = Math.sqrt(dist);
  return dist;
}

//
// 初期化
// テーブルの
//
function initTable(points) {
  var table = new Array(); //動的計画法のテーブル
  table.push([0, 0, 0, 0, 0, 0]);
  table.push([0, 0, 0, 0, 0, 0]);
  table.push([0, 0, 0, 0, 0, 0]);
  table.push([0, 0, 0, 0, 0, 0]);
  return table;
}

//
// 座標データ入力(手動)
//
function inputPointsData() {
  var points = new Array();
  points.push({x: 1, y: 8});
  points.push({x: 4, y: 8});
  points.push({x: 7, y: 7});
  points.push({x: 7, y: 3});
  points.push({x: 3, y: 0});
  points.push({x: 0, y: 3});
  return points;
}

//
// ------------------
// エントリーポイント
// ------------------
//
points = inputPointsData();
console.log('座標データ');
console.log(points);
table = initTable(points);
console.log('初期テーブル');
console.log(table);
resultTable = dp(points, table, 6);
console.log('処理結果');
console.log(resultTable);
