var test1 = [1, 0, 0, 0, 1]; //1
var test2 = [1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1]; //4
var test3 = [0, 0, 1, 0, 0, 0, 1]; //2
var test4 = [0, 0, 0, 0, 1, 0, 0, 1]; //2
function canPlaceFlowers(flowerbed, n) {
    var count = 0;
    var availablePlots = flowerbed.join('').split('1');
    var endPlots = [availablePlots.pop(), availablePlots.shift()];
    console.log(availablePlots, endPlots);
    availablePlots.forEach(function (plot) {
        if (plot.length >= 3) {
            count += (1 + Math.floor((plot.length - 3) / 2));
        }
    });
    endPlots.forEach(function (plot) {
        if (plot.length >= 2) {
            count += (1 + Math.floor((plot.length - 2) / 2));
        }
    });
    return n <= count ? true : false;
}
;
console.log(canPlaceFlowers(test1, 1), true); //true
// console.log(canPlaceFlowers(test2, 4), true); //true 
console.log(canPlaceFlowers(test3, 2), true); //true
console.log(canPlaceFlowers(test4, 2), true); //true
// console.log(canPlaceFlowers(test4, 3), false); //false
