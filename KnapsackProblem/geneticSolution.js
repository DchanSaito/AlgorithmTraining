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
function fitness(population, costsOfItems, valuesOfItems, totalCapacity) {
  var allFitnessOfAllGene = new Array(population.length);

  population.forEach(function (gene, index, array) {
    var sumOfCosts = 0;
    var sumOfValues = 0;
    for (var i in gene) {
      sumOfCosts += gene[i] * costsOfItems[i];
      sumOfValues += gene[i] * valuesOfItems[i];
    }
    console.log('合計費用'+sumOfCosts);
    console.log((sumOfCosts <= totalCapacity) ? sumOfValues : 0);
    allFitnessOfAllGene[index] = (sumOfCosts <= totalCapacity) ? sumOfValues : 0
  });
  return allFitnessOfAllGene;
}

// 初期個体生成
function initPoplation(ITEMS) {
  var poplation = new Array(ITEMS);
  for (var i=0; i < ITEMS; i++) {
    var gene = new Array(ITEMS);
    for (var j = 0; j < ITEMS; j++) {
      gene[j] = Math.floor(Math.random() * 2);
    }
    poplation[i] = gene;
  }
  return poplation;
}

// エリート保存
function eliteSave(fitnessInGene) {
  var sortFitness = [].concat(fitnessInGene).sort(function(a, b) {return b - a;});
  var maxFitness = sortFitness[0];
  console.log('エリートやで〜',maxFitness);
}

var ITEMS = 20;
var costsOfItems = new Array(ITEMS);
var valuesOfItems = new Array(ITEMS);
var totalCapacity = 50;
var elite = null;
// とりあえずランダムに作ります
for(var i=0;i<ITEMS;i++){
  costsOfItems[i] = Math.floor(Math.random()*8)+1;//ランダム
  valuesOfItems[i] = Math.floor(Math.random()*10)+1;//ランダム
};
console.log('容量: ',costsOfItems); 
console.log('価値: ',valuesOfItems); 
var poplation = initPoplation(ITEMS);
console.log(poplation);
var allFitnessOfAllGene = fitness(poplation, costsOfItems, valuesOfItems, totalCapacity);
eliteSave(allFitnessOfAllGene);
