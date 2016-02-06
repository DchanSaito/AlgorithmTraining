// 
// ナップサック問題を遺伝的アルゴリズムを用いて解く
// author: D. Saito
//
// 品物の数 items
// 品物の価値 value
// 品物の重み cost
// バックの容量 totalCapacity
// 
// 遺伝子の設定
// 0なら品物を入れない
// 1なら品物を入れる
//

// 評価値関数
function fitness(gene, costsOfItems, valuesOfItems, totalCapacity) {
  var sumOfCosts = 0;
  var sumOfValues = 0;

  for (var i in gene) {
    sumOfCosts += gene[i] * costsOfItems[i];
    sumOfCosts += gene[i] * valuesOfItems[i];
  }

  return (sumOfCosts < totalCapacity) ? sumOfValues : 0;
}

var ITEMS = 20;
var costsOfItems = new Array(ITEMS);
var valuesOfItems = new Array(ITEMS);
var totalCapacity = 30;
var elite = null;
// とりあえずランダムに作ります
for(var i=0;i<ITEMS;i++){
  costsOfItems[i] = Math.floor(Math.random()*8)+1;//ランダム
  valuesOfItems[i] = Math.floor(Math.random()*10)+1;//ランダム
};
console.log('容量: ',costsOfItems); 
console.log('価値: ',valuesOfItems); 
