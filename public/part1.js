/// <reference path="../restaurants.js" />


var choise = "Delivery";//initial state
var total;
relevantIndex=[];
var index = 0;
var amount = 12;
console.log(Restaurants);
let arrCuisines = [];
for (var i = 0; i < 1000; i++) {
    arrCuisines[i] = Restaurants[i]["Cuisines"];
}
console.log(arrCuisines);
let arrNew = [];
let arrTemp = [];
s = 0;
for (var i = 0; i < 1000; i++) {
    arrTemp = arrCuisines[i].split(", ");
    for (var j = 0; j < arrTemp.length; j++) {
        arrNew[s] = arrTemp[j];
        s++;
    }
}
let arrCuisinesUnique = [...new Set(arrNew)];//leave only unique values
let strA = "";
for (var i = 0; i < arrCuisinesUnique.length; i++) {
    if (arrCuisinesUnique[i] == "")//ignore empty cuisints-dont show it in the filters
        continue;
    strA += `<input type="checkbox" class="inputCheckBox" value="${[i]}" /><label>${arrCuisinesUnique[i]}</label>
    <br />`;
}
document.getElementById("multiple-select-Cuisines").innerHTML = strA;
console.log(arrCuisinesUnique);

arrImg = ['src="assets/img/gallery/steak.png"', 'src = "assets/img/gallery/sub-sandwich.png"', 'src = "assets/img/gallery/toffes-cake.png"', 'src="assets/img/gallery/thai-soup.png"', 'src = "assets/img/gallery/noodles.png"',
    'src="assets/img/gallery/dancake.png"', 'src="assets/img/gallery/cheese-burger.png"', 'src = "assets/img/gallery/burger.png"'];//restaurants images
randNumImages = 0;
console.log(arrImg);

let strB = "";//show restaurants
strB += `<div class="container">
        <div class="row h-100">
            <div class="col-lg-7 mx-auto text-center mb-6">
                <h5 class="fw-bold fs-3 fs-lg-5 lh-sm mb-3">Restaurants</h5>
            </div>
        </div>
        <div class="row gx-2">`
for (var i = 0; i < 1000; i++) {
    strB += print(i);
    relevantIndex.push(i)
}
document.getElementById("testimonial").innerHTML = strB + `</div>
                                                                            </div>`;


function print(i) {
    randNumImages = Math.floor(Math.random() * arrImg.length);
    strfunc = "";
    if ((Restaurants[i]["Has Table booking"] == "Yes") && (Restaurants[i]["Has Online delivery"] == "Yes"))//show shop logo and motorcycle
    {
        strfunc += `<div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
                                    <div class="card card-span resDiv h-100 text-white rounded-3"><img class="img-fluid rounded-3 h-100" ${arrImg[randNumImages]} alt="..." />
                                        <div class="card-img-overlay ps-0" id="${i}"><div><span class="badge bg-danger p-2 ms-3"><i class="fas fa-tag me-2 fs-0"></i><span class="fs-0">${Restaurants[i]["Rating text"]}</span></span><span class="badge bg-primary ms-2 me-1 p-2"><i class="fas fa-concierge-bell me-1 fs-0"></i></span><span class="badge bg-primary ms-2 me-1 p-2"><i class="fas fa-motorcycle me-1 fs-0"></i></span></div>
<div style="
    margin-top: 5px;
    margin-left: 8px;"
><button type="button" class="PutToFav badge bg-primary ms-2 me-1 p-2"><i class="fas fa-solid fa-star me-1 fs-0"></i></button>
<button type="button" class="addCom badge bg-primary ms-2 me-1 p-2"><i class="fas fa-solid fa-comment me-1 fs-0"></i></button></div></div>
                                            <div class="card-body ps-0">
                                                <div class="flex-1 ms-3">
                                                    <h5 class="mb-0 fw-bold text-1000">${Restaurants[i]["Restaurant Name"]}</h5>
                                                    <h6>Address: ${Restaurants[i]["Address"]}</h6>
                                                    <h6>cuisines: ${Restaurants[i]["Cuisines"]}</h6>
                                                    <h6>Average Cost for two: ${Restaurants[i]["Average Cost for two"]}</h6>
                                                    <span class="text-primary fs--1 me-1"><i class="fas fa-star"></i></span><span class="mb-0 text-primary">${Restaurants[i]["Aggregate rating"]}</span></br>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`
    }
    else if (Restaurants[i]["Has Online delivery"] == "Yes")//show motorcycle logo
    {
        strfunc += `<div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
                                    <div class="card card-span resDiv h-100 text-white rounded-3"><img class="img-fluid rounded-3 h-100" ${arrImg[randNumImages]} alt="..." />
                                        <div class="card-img-overlay ps-0"><div><span class="badge bg-danger p-2 ms-3"><i class="fas fa-tag me-2 fs-0"></i><span class="fs-0">${Restaurants[i]["Rating text"]}</span></span><span class="badge bg-primary ms-2 me-1 p-2"><i class="fas fa-motorcycle me-1 fs-0"></i></span></div>
<div id="${i}" style="
    margin-top: 5px;
    margin-left: 8px;"
><button type="button" class="PutToFav badge bg-primary ms-2 me-1 p-2"><i class="fas fa-solid fa-star me-1 fs-0"></i></button>
<button type="button" class="addCom badge bg-primary ms-2 me-1 p-2"><i class="fas fa-solid fa-comment me-1 fs-0"></i></button></div></div>
                                            <div class="card-body ps-0">
                                                <div class="flex-1 ms-3">
                                                   <h5 class="mb-0 fw-bold text-1000">${Restaurants[i]["Restaurant Name"]}</h5>
                                                    <h6>Address: ${Restaurants[i]["Address"]}</h6>
                                                    <h6>cuisines: ${Restaurants[i]["Cuisines"]}</h6>
                                                    <h6>Average Cost for two: ${Restaurants[i]["Average Cost for two"]}</h6>
                                                    <span class="text-primary fs--1 me-1"><i class="fas fa-star"></i></span><span class="mb-0 text-primary">${Restaurants[i]["Aggregate rating"]}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`
    }

    else if (Restaurants[i]["Has Table booking"] == "Yes")//show shop logo
    {
        strfunc += `<div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
                                    <div class="card card-span resDiv h-100 text-white rounded-3"><img class="img-fluid rounded-3 h-100" ${arrImg[randNumImages]} alt="..." />
                                        <div class="card-img-overlay ps-0" ><div><span class="badge bg-danger p-2 ms-3"><i class="fas fa-tag me-2 fs-0"></i><span class="fs-0">${Restaurants[i]["Rating text"]}</span></span><span class="badge bg-primary ms-2 me-1 p-2"><i class="fas fa-concierge-bell me-1 fs-0"></i></span></div>
<div id="${i}" style="
    margin-top: 5px;
    margin-left: 8px;"
><button type="button" class="PutToFav badge bg-primary ms-2 me-1 p-2"><i class="fas fa-solid fa-star me-1 fs-0"></i></button>
<button type="button" class="addCom badge bg-primary ms-2 me-1 p-2"><i class="fas fa-solid fa-comment me-1 fs-0"></i></button></div></div>
                                            <div class="card-body ps-0">
                                                <div class="flex-1 ms-3">
                                                   <h5 class="mb-0 fw-bold text-1000">${Restaurants[i]["Restaurant Name"]}</h5>
                                                    <h6>Address: ${Restaurants[i]["Address"]}</h6>
                                                    <h6>cuisines: ${Restaurants[i]["Cuisines"]}</h6>
                                                    <h6>Average Cost for two: ${Restaurants[i]["Average Cost for two"]}</h6>
                                                    <span class="text-primary fs--1 me-1"><i class="fas fa-star"></i></span><span class="mb-0 text-primary">${Restaurants[i]["Aggregate rating"]}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`
    }
    else// don't show any logo
    {
        strfunc += `<div class="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
                                    <div class="card card-span resDiv h-100 text-white rounded-3"><img class="img-fluid rounded-3 h-100" ${arrImg[randNumImages]} alt="..." />
                                        <div class="card-img-overlay ps-0" id="${i}"><div><span class="badge bg-danger p-2 ms-3"><i class="fas fa-tag me-2 fs-0"></i><span class="fs-0">${Restaurants[i]["Rating text"]}</span></span></div>
<div id="${i}" style="
    margin-top: 5px;
    margin-left: 8px;"
><button type="button" class="PutToFav badge bg-primary ms-2 me-1 p-2"><i class="fas fa-solid fa-star me-1 fs-0"></i></button>
<button type="button" class="addCom badge bg-primary ms-2 me-1 p-2"><i class="fas fa-solid fa-comment me-1 fs-0"></i></button></div></div>
                                            <div class="card-body ps-0">
                                                <div class="flex-1 ms-3">
                                                   <h5 class="mb-0 fw-bold text-1000">${Restaurants[i]["Restaurant Name"]}</h5>
                                                    <h6>Address: ${Restaurants[i]["Address"]}</h6>
                                                    <h6>cuisines: ${Restaurants[i]["Cuisines"]}</h6>
                                                    <h6>Average Cost for two: ${Restaurants[i]["Average Cost for two"]}</h6>
                                                    <span class="text-primary fs--1 me-1"><i class="fas fa-star"></i></span><span class="mb-0 text-primary">${Restaurants[i]["Aggregate rating"]}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>`
    }
    return strfunc;
}

function findFood() {
    removeMarkers()
    var latitude = 14.565443;//just for here, there are no restaurants close to any place in Israel
    var longitude = 121.027535
    relevantIndex = [];
    index = 0;
    let selectedCuisines = [];//collect selected cuisines
    let tempMulti = document.getElementById("multiple-select-Cuisines");
    let AllInputs = tempMulti.getElementsByClassName("inputCheckBox");//all the inputs of the checkbox
    let index1 = 0;
    for (var i = 0; i < AllInputs.length; i++)//collect sellected
    {
        if (AllInputs[i].checked == true) {
            selectedCuisines[index1] = tempMulti.getElementsByTagName("label")[i].innerHTML;
            index1++;
        }
    }
    ranges = [
        {
            min: 0,
            max: 99
        },
        {
            min: 100,
            max: 299
        },
        {
            min: 300,
            max: 599
        },
        {
            min: 600,
            max: 999
        },
        {
            min: 1000,
            max: 1999
        },
        {
            min: 2000,
            max: 1000000000
        }
    ]
    let AllInputsRange = [];
    currntMin = 0;
    currentMax = 0;
    AllInputsRange = document.getElementById("select-AverageCostfortwo").getElementsByTagName("input");
    for (var i = 0; i < 6; i++)//collect sellected radio btn. 6 ranges
    {
        if (AllInputsRange[i].checked == true) {
            currntMin = ranges[i].min;
            currentMax = ranges[i].max;
            break;
        }
    }

    //strFilter = "";//show restaurants
    for (var i = 0; i < Restaurants.length; i++) {
        let findRestToAdd = false;
        if ((choise == "Delivery" && Restaurants[i]["Has Online delivery"] == "Yes") || (choise == "Sitting" && Restaurants[i]["Has Table booking"] == "Yes")) //check delivery or sitting-one of them will be checked
        {
            if (((Restaurants[i]["Average Cost for two"] <= currentMax) && (Restaurants[i]["Average Cost for two"] >= currntMin)) || ((currntMin == 0) && (currentMax == 0))) {
                for (var j = 0; j < selectedCuisines.length; j++)//run on all the selected cuisins in the document-if not selected-it will not run
                {
                    let resturantKitchens = Restaurants[i].Cuisines.split(", ");
                    for (var z = 0; z < resturantKitchens.length; z++) {
                        if (resturantKitchens[z] == selectedCuisines[j])//match!
                        {
                            relevantIndex.push(i);
                            findRestToAdd = true;
                            break;
                        }
                    }
                    if (findRestToAdd)
                        break;
                }
                if (selectedCuisines.length == 0) {
                    findRestToAdd = true;
                    relevantIndex.push(i);
                }
            }
        }
    }
    initializeMap(latitude, longitude)
    showmore();
    if ($("#MainLogin").attr('value') != "Login / Sign In") {
        $(".PutToFav").show();
    }
}


function showmore()
{
    index++;
    strFilter = `<div class="container">
        <div class="row h-100">
            <div class="col-lg-7 mx-auto text-center mb-6">
                <h5 class="fw-bold fs-3 fs-lg-5 lh-sm mb-3">Restaurants</h5>
            </div>
        </div>
        <div class="row gx-2">`
    strFilter += printResturant(relevantIndex);
    let strbtn = `<div class="col-12 d-flex justify-content-center mt-5"> <a class="btn btn-lg btn-primary" onclick="showmore()" href="#!">Show more<i class="fas fa-chevron-right ms-2"> </i></a></div>`;
    if (relevantIndex.length == total) {
        strbtn = "";
    }
    document.getElementById("testimonial").innerHTML = strFilter + strbtn + `</div>
    </div>`;
    if (localStorage["cgroup64"] != undefined) {
        cgroup64 = JSON.parse(localStorage["cgroup64"]);
        if (cgroup64.activeUser != null) {
            $(".PutToFav").show();
            $(".addCom").show();
        }
    }
}


function printResturant(Arraytoprint) {
    let strprinrest = "";
    if (Arraytoprint.length < amount * index) {
        total = Arraytoprint.length;
    } else {
        total = amount * index;
    }

    for (let i = 0; i < total; i++) {
        strprinrest += print(Arraytoprint[i]);
    }
    return strprinrest;
}


function onTabChange(val) {
    choise = val;
}