function getBmi(height,weight,point =2){
    return (weight/(height/100)**2).toFixed(point);
}
function calcBmi(){
    let name = nameEl.value;
    let height = heightEl.value;
    let weight = weightEl.value;

    let bmi= getBmi(height,weight);

    if (isNaN(bmi)){
        alert("輸入錯誤");
        return;
    }

    console.log(name,height,weight,bmi);

}

console.log(getBmi(176,65.5,3));

const calcEl = document.querySelector("#calc");
const heightEl = document.querySelector("#height");
const weightEl = document.querySelector("#weight");
const nameEl = document.querySelector("#name");