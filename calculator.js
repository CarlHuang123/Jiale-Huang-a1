var btn = document.getElementById("btn");
var num = 5;
btn.addEventListener("click",function(){
    var tbl = document.getElementById("tbl");
    var tr = document.createElement("tr");
    tr.classList.add("row");
    tr.innerHTML = `<td>Activity ${num}  </td>
    <td>A1  </td>
    <td><input type ="number" placeholder="Weight" class = "weight">  </td>
    <td><input type ="number" placeholder="grade" class = "grade"> / <input type ="number" placeholder="total grade"  class = "totalgrade"></td>
    <td class="percent"></td>`
    tbl.appendChild(tr);
    num++;
    var inputs = document.querySelectorAll(".grade, .totalgrade");
    inputs.forEach(function(input){
    input.addEventListener("change", function(){
        var tempgrade = input.parentElement.querySelector(".grade").value;
        console.log(tempgrade);
        var temptotal = input.parentElement.querySelector(".totalgrade").value;
        console.log(temptotal);
        if (!tempgrade || !temptotal) return;
        var meangrade = tempgrade / temptotal;
        var Result = input.parentElement.parentElement.querySelector(".percent");
        Result.innerHTML = meangrade;
})})
})
var btnMean = document.getElementById("mean");
btnMean.addEventListener("click", function(){
    var allrows = document.querySelectorAll(".row");
    var arr = [];
    allrows.forEach(function(row){
        var tempgrade = row.querySelector(".grade").value;
        var temptotal = row.querySelector(".totalgrade").value;
        if (!tempgrade || !temptotal){ 
            alert("you did not fill all the grades, will calculate without omitted item");
            return;
        }
        var meangrade = tempgrade / temptotal;
        arr.push(meangrade);
    })
    var total = arr.reduce((acc, curr) => acc + curr, 0);
    var final = total/arr.length;
    var Result = document.getElementById("result");
    Result.innerHTML = final;
})
var inputs = document.querySelectorAll(".grade, .totalgrade");
inputs.forEach(function(input){
    input.addEventListener("change", function(){
        var tempgrade = input.parentElement.querySelector(".grade").value;
        var temptotal = input.parentElement.querySelector(".totalgrade").value;
        if (!tempgrade || !temptotal) return;
        var meangrade = tempgrade / temptotal;
        var Result = input.parentElement.parentElement.querySelector(".percent");
        Result.innerHTML = meangrade;
})})
var btnWeight = document.getElementById("Weightbtn");
btnWeight.addEventListener("click",function(){
    var allrows = document.querySelectorAll(".row");
    var arr = [];
    var totalWeight = 0;
    allrows.forEach(function(row){
        var tempgrade = row.querySelector(".grade").value;
        var temptotal = row.querySelector(".totalgrade").value;
        var tempWeight = row.querySelector(".weight").value;
        if (!tempgrade || !temptotal || !tempWeight) { 
            alert("you did not fill all the grades or weight, will calculate without omitted item");
            return;
        }
        totalWeight += parseFloat(tempWeight);
        var meangrade = tempgrade / temptotal;
        var resultGrade = meangrade * tempWeight;
        arr.push(resultGrade);
    })
    // console.log(arr);
    // console.log(totalWeight);
    var total = arr.reduce((acc, curr) => acc + curr, 0);
    //console.log(total);
    var finalWeight = total/totalWeight;
    var Result = document.getElementById("result");
    Result.innerHTML = finalWeight;
})