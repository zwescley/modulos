var data = new Date();
var dia = ("0" + data.getDate()).slice(-2);
var mes = ("0" + (data.getMonth() + 1)).slice(-2);
var ano = data.getFullYear()
var date = (dia + mes + ano).split("").reverse().join("");

var gray = '<i style="color: #2b2b2b46; margin-left:8px;"class="fa-solid fa-check"></i>';
var check = '<i style="color: #00af0083; margin-left:8px;"class="fa-solid fa-check"></i>';
var spinner = '<div class="lds-ring" style="margin-left:8px;"><div></div><div></div><div></div><div></div></div>';

var dt1 = document.getElementById("dt1").textContent.match(/\d/g).join('')
var in1 = document.getElementById("in1").textContent.match(/\d/g).join('')
var num1 = dt1.split("").reverse().join("")
var nom1 = in1.split("").reverse().join("")
var sub1 = num1 - date
var sob1 = nom1 - date
if (sub1 < 0) {
    document.getElementById("md1").innerHTML = check
} else if (nom1 < date ) {
    document.getElementById("md1").innerHTML = spinner
} else {
    document.getElementById("md1").innerHTML = gray
}

var dt2 = document.getElementById("dt2").textContent.match(/\d/g).join('')
var in2 = document.getElementById("in2").textContent.match(/\d/g).join('')
var num2 = dt2.split("").reverse().join("")
var nom2 = in2.split("").reverse().join("")
var sub2 = num2 - date
var sob2 = nom2 - date
if (sub2 < 0) {
    document.getElementById("md2").innerHTML = check
} else if (nom2 < date ) {
    document.getElementById("md2").innerHTML = spinner
} else {
    document.getElementById("md2").innerHTML = gray
}

var dt3 = document.getElementById("dt3").textContent.match(/\d/g).join('')
var in3 = document.getElementById("in3").textContent.match(/\d/g).join('')
var num3 = dt3.split("").reverse().join("")
var nom3 = in3.split("").reverse().join("")
var sub3 = num3 - date
var sob3 = nom3 - date
if (sub3 < 0) {
    document.getElementById("md3").innerHTML = check
} else if (nom3 < date ) {
    document.getElementById("md3").innerHTML = spinner
} else {
    document.getElementById("md3").innerHTML = gray
}

var dt4 = document.getElementById("dt4").textContent.match(/\d/g).join('')
var in4 = document.getElementById("in4").textContent.match(/\d/g).join('')
var num4 = dt4.split("").reverse().join("")
var nom4 = in4.split("").reverse().join("")
var sub4 = num4 - date
var sob4 = nom4 - date
if (sub4 < 0) {
    document.getElementById("md4").innerHTML = check
} else if (nom4 < date ) {
    document.getElementById("md4").innerHTML = spinner
} else {
    document.getElementById("md4").innerHTML = gray
}

var dt5 = document.getElementById("dt5").textContent.match(/\d/g).join('')
var in5 = document.getElementById("in5").textContent.match(/\d/g).join('')
var num5 = dt5.split("").reverse().join("")
var nom5 = in5.split("").reverse().join("")
var sub5 = num5 - date
var sob5 = nom5 - date
if (sub5 < 0) {
    document.getElementById("md5").innerHTML = check
} else if (nom5 < date ) {
    document.getElementById("md5").innerHTML = spinner
} else {
    document.getElementById("md5").innerHTML = gray
}

var dt6 = document.getElementById("dt6").textContent.match(/\d/g).join('')
var in6 = document.getElementById("in6").textContent.match(/\d/g).join('')
var num6 = dt6.split("").reverse().join("")
var nom6 = in6.split("").reverse().join("")
var sub6 = num6 - date
var sob6 = nom6 - date
if (sub6 < 0) {
    document.getElementById("md6").innerHTML = check
} else if (nom6 < date ) {
    document.getElementById("md6").innerHTML = spinner
} else {
    document.getElementById("md6").innerHTML = gray
}

var dt7 = document.getElementById("dt7").textContent.match(/\d/g).join('')
var in7 = document.getElementById("in7").textContent.match(/\d/g).join('')
var num7 = dt7.split("").reverse().join("")
var nom7 = in7.split("").reverse().join("")
var sub7 = num7 - date
var sob7 = nom7 - date
if (sub7 < 0) {
    document.getElementById("md7").innerHTML = check
} else if (nom7 < date ) {
    document.getElementById("md7").innerHTML = spinner
} else {
    document.getElementById("md7").innerHTML = gray
}

var dt8 = document.getElementById("dt8").textContent.match(/\d/g).join('')
var in8 = document.getElementById("in8").textContent.match(/\d/g).join('')
var num8 = dt8.split("").reverse().join("")
var nom8 = in8.split("").reverse().join("")
var sub8 = num8 - date
var sob8 = nom8 - date
if (sub8 < 0) {
    document.getElementById("md8").innerHTML = check
} else if (nom8 < date  ){
    document.getElementById("md8").innerHTML = spinner
} else {
    document.getElementById("md8").innerHTML = gray
}

var dt9 = document.getElementById("dt9").textContent.match(/\d/g).join('')
var in9 = document.getElementById("in9").textContent.match(/\d/g).join('')
var num9 = dt9.split("").reverse().join("")
var nom9 = in9.split("").reverse().join("")
var sub9 = num9 - date
var sob9 = nom9 - date
if (sub9 < 0) {
    document.getElementById("md9").innerHTML = check
} else if (nom9 < date ){
    document.getElementById("md9").innerHTML = spinner
} else {
    document.getElementById("md9").innerHTML = gray
}

var dt10 = document.getElementById("dt10").textContent.match(/\d/g).join('')
var in10 = document.getElementById("in10").textContent.match(/\d/g).join('')
var num10 = dt10.split("").reverse().join("")
var nom10 = in10.split("").reverse().join("")
var sub10 = num10 - date
var sob10 = nom10 - date
if (sub10 < 0) {
    document.getElementById("md10").innerHTML = check
} else if (nom10 < date ) {
    document.getElementById("md10").innerHTML = spinner
} else {
    document.getElementById("md10").innerHTML = gray
}

var dt11 = document.getElementById("dt11").textContent.match(/\d/g).join('')
var in11 = document.getElementById("in11").textContent.match(/\d/g).join('')
var num11 = dt11.split("").reverse().join("")
var nom11 = in11.split("").reverse().join("")
var sub11 = num11 - date
var sob11 = nom11 - date
if (sub11 < 0) {
    document.getElementById("md11").innerHTML = check
} else if (nom11 < date ) {
    document.getElementById("md11").innerHTML = spinner
} else {
    document.getElementById("md11").innerHTML = gray
}

var dt12 = document.getElementById("dt12").textContent.match(/\d/g).join('')
var in12 = document.getElementById("in12").textContent.match(/\d/g).join('')
var num12 = dt12.split("").reverse().join("")
var nom12 = in12.split("").reverse().join("")
var sub12 = num12 - date
var sob12 = nom12 - date
if (sub12 < 0) {
    document.getElementById("md12").innerHTML = check
} else if (nom12 < date ) {
    document.getElementById("md12").innerHTML = spinner
} else {
    document.getElementById("md12").innerHTML = gray
}

var dt13 = document.getElementById("dt13").textContent.match(/\d/g).join('')
var in13 = document.getElementById("in13").textContent.match(/\d/g).join('')
var num13 = dt13.split("").reverse().join("")
var nom13 = in13.split("").reverse().join("")
var sub13 = num13 - date
var sob13 = nom13 - date
if (sub13 < 0) {
    document.getElementById("md13").innerHTML = check
} else if (nom13 < date ) {
    document.getElementById("md13").innerHTML = spinner
} else {
    document.getElementById("md13").innerHTML = gray
}

var dt14 = document.getElementById("dt14").textContent.match(/\d/g).join('')
var in14 = document.getElementById("in14").textContent.match(/\d/g).join('')
var num14 = dt14.split("").reverse().join("")
var nom14 = in14.split("").reverse().join("")
var sub14 = num14 - date
var sob14 = nom14 - date
if (sub14 < 0) {
    document.getElementById("md14").innerHTML = check
} else if (nom14 < date ) {
    document.getElementById("md14").innerHTML = spinner
} else {
    document.getElementById("md14").innerHTML = gray
}

var dt15 = document.getElementById("dt15").textContent.match(/\d/g).join('')
var in15 = document.getElementById("in15").textContent.match(/\d/g).join('')
var num15 = dt15.split("").reverse().join("")
var nom15 = in15.split("").reverse().join("")
var sub15 = num15 - date
var sob15 = nom15 - date
if (sub15 < 0) {
    document.getElementById("md15").innerHTML = check
} else if (nom15 < date ) {
    document.getElementById("md15").innerHTML = spinner
} else {
    document.getElementById("md15").innerHTML = gray
}

var dt16 = document.getElementById("dt16").textContent.match(/\d/g).join('')
var in16 = document.getElementById("in16").textContent.match(/\d/g).join('')
var num16 = dt16.split("").reverse().join("")
var nom16 = in16.split("").reverse().join("")
var sub16 = num16 - date
var sob16 = nom16 - date
if (sub16 < 0) {
    document.getElementById("md16").innerHTML = check
} else if (nom16 < date ) {
    document.getElementById("md16").innerHTML = spinner
} else {
    document.getElementById("md16").innerHTML = gray
}

var dt17 = document.getElementById("dt17").textContent.match(/\d/g).join('')
var in17 = document.getElementById("in17").textContent.match(/\d/g).join('')
var num17 = dt17.split("").reverse().join("")
var nom17 = in17.split("").reverse().join("")
var sub17 = num17 - date
var sob17 = nom17 - date
if (sub17 < 0) {
    document.getElementById("md17").innerHTML = check
} else if (nom17 < date ) {
    document.getElementById("md17").innerHTML = spinner
} else {
    document.getElementById("md17").innerHTML = gray
}

var dt18 = document.getElementById("dt18").textContent.match(/\d/g).join('')
var in18 = document.getElementById("in18").textContent.match(/\d/g).join('')
var num18 = dt18.split("").reverse().join("")
var nom18 = in18.split("").reverse().join("")
var sub18 = num18 - date
var sob18 = nom18 - date
if (sub18 < 0) {
    document.getElementById("md18").innerHTML = check
} else if (nom18 < date ) {
    document.getElementById("md18").innerHTML = spinner
} else {
    document.getElementById("md18").innerHTML = gray
}

var dt19 = document.getElementById("dt19").textContent.match(/\d/g).join('')
var in19 = document.getElementById("in19").textContent.match(/\d/g).join('')
var num19 = dt19.split("").reverse().join("")
var nom19 = in19.split("").reverse().join("")
var sub19 = num19 - date
var sob19 = nom19 - date
if (sub19 < 0) {
    document.getElementById("md19").innerHTML = check
} else if (nom19 < date ) {
    document.getElementById("md19").innerHTML = spinner
} else {
    document.getElementById("md19").innerHTML = gray
}

var dt20 = document.getElementById("dt20").textContent.match(/\d/g).join('')
var in20 = document.getElementById("in20").textContent.match(/\d/g).join('')
var num20 = dt20.split("").reverse().join("")
var nom20 = in20.split("").reverse().join("")
var sub20 = num20 - date
var sob20 = nom20 - date
if (sub20 < 0) {
    document.getElementById("md20").innerHTML = check
} else if (nom20 < date ) {
    document.getElementById("md20").innerHTML = spinner
} else {
    document.getElementById("md20").innerHTML = gray
}

var dt21 = document.getElementById("dt21").textContent.match(/\d/g).join('')
var in21 = document.getElementById("in21").textContent.match(/\d/g).join('')
var num21 = dt21.split("").reverse().join("")
var nom21 = in21.split("").reverse().join("")
var sub21 = num21 - date
var sob21 = nom21 - date
if (sub21 < 0) {
    document.getElementById("md21").innerHTML = check
} else if (nom21 < date ) {
    document.getElementById("md21").innerHTML = spinner
} else {
    document.getElementById("md21").innerHTML = gray
}

var dt22 = document.getElementById("dt22").textContent.match(/\d/g).join('')
var in22 = document.getElementById("in22").textContent.match(/\d/g).join('')
var num22 = dt22.split("").reverse().join("")
var nom22 = in22.split("").reverse().join("")
var sub22 = num22 - date
var sob22 = nom22 - date
if (sub22 < 0) {
    document.getElementById("md22").innerHTML = check
} else if (nom22 < date ) {
    document.getElementById("md22").innerHTML = spinner
} else {
    document.getElementById("md22").innerHTML = gray
}

var dt23 = document.getElementById("dt23").textContent.match(/\d/g).join('')
var in23 = document.getElementById("in23").textContent.match(/\d/g).join('')
var num23 = dt23.split("").reverse().join("")
var nom23 = in23.split("").reverse().join("")
var sub23 = num23 - date
var sob23 = nom23 - date
if (sub23 < 0) {
    document.getElementById("md23").innerHTML = check
} else if (nom23 < date ) {
    document.getElementById("md23").innerHTML = spinner
} else {
    document.getElementById("md23").innerHTML = gray
}

var dt24 = document.getElementById("dt24").textContent.match(/\d/g).join('')
var in24 = document.getElementById("in24").textContent.match(/\d/g).join('')
var num24 = dt24.split("").reverse().join("")
var nom24 = in24.split("").reverse().join("")
var sub24 = num24 - date
var sob24 = nom24 - date
if (sub24 < 0) {
    document.getElementById("md24").innerHTML = check
} else if (nom24 < date ) {
    document.getElementById("md24").innerHTML = spinner
} else {
    document.getElementById("md24").innerHTML = gray
}

var dt25 = document.getElementById("dt25").textContent.match(/\d/g).join('')
var in25 = document.getElementById("in25").textContent.match(/\d/g).join('')
var num25 = dt25.split("").reverse().join("")
var nom25 = in25.split("").reverse().join("")
var sub25 = num25 - date
var sob25 = nom25 - date
if (sub25 < 0) {
    document.getElementById("md25").innerHTML = check
} else if (nom25 < date ) {
    document.getElementById("md25").innerHTML = spinner
} else {
    document.getElementById("md25").innerHTML = gray
}

var dt26 = document.getElementById("dt26").textContent.match(/\d/g).join('')
var in26 = document.getElementById("in26").textContent.match(/\d/g).join('')
var num26 = dt26.split("").reverse().join("")
var nom26 = in26.split("").reverse().join("")
var sub26 = num26 - date
var sob26 = nom26 - date
if (sub26 < 0) {
    document.getElementById("md26").innerHTML = check
} else if (nom26 < date ) {
    document.getElementById("md26").innerHTML = spinner
} else {
    document.getElementById("md26").innerHTML = gray
}

var dt27 = document.getElementById("dt27").textContent.match(/\d/g).join('')
var in27 = document.getElementById("in27").textContent.match(/\d/g).join('')
var num27 = dt27.split("").reverse().join("")
var nom27 = in27.split("").reverse().join("")
var sub27 = num27 - date
var sob27 = nom27 - date
if (sub27 < 0) {
    document.getElementById("md27").innerHTML = check
} else if (nom27 < date ) {
    document.getElementById("md27").innerHTML = spinner
} else {
    document.getElementById("md27").innerHTML = gray
}

var dt28 = document.getElementById("dt28").textContent.match(/\d/g).join('')
var in28 = document.getElementById("in28").textContent.match(/\d/g).join('')
var num28 = dt28.split("").reverse().join("")
var nom28 = in28.split("").reverse().join("")
var sub28= num28 - date
var sob28 = nom28 - date
if (sub28 < 0) {
    document.getElementById("md28").innerHTML = check
} else if (nom28 < date ) {
    document.getElementById("md28").innerHTML = spinner
} else {
    document.getElementById("md28").innerHTML = gray
}

var dt29 = document.getElementById("dt29").textContent.match(/\d/g).join('')
var in29 = document.getElementById("in29").textContent.match(/\d/g).join('')
var num29 = dt29.split("").reverse().join("")
var nom29 = in29.split("").reverse().join("")
var sub29 = num29 - date
var sob29 = nom29 - date
if (sub29 < 0) {
    document.getElementById("md29").innerHTML = check
} else if (nom29 < date ) {
    document.getElementById("md29").innerHTML = spinner
} else {
    document.getElementById("md29").innerHTML = gray
}

var dt30 = document.getElementById("dt30").textContent.match(/\d/g).join('')
var in30 = document.getElementById("in30").textContent.match(/\d/g).join('')
var num30 = dt30.split("").reverse().join("")
var nom30 = in30.split("").reverse().join("")
var sub30 = num30 - date
var sob30 = nom30 - date
if (sub30 < 0) {
    document.getElementById("md30").innerHTML = check
} else if (nom30 < date ) {
    document.getElementById("md30").innerHTML = spinner
} else {
    document.getElementById("md30").innerHTML = gray
}

var dt31 = document.getElementById("dt31").textContent.match(/\d/g).join('')
var in31 = document.getElementById("in31").textContent.match(/\d/g).join('')
var num31 = dt31.split("").reverse().join("")
var nom31 = in31.split("").reverse().join("")
var sub31 = num31 - date
var sob31 = nom31 - date
if (sub31 < 0) {
    document.getElementById("md31").innerHTML = check
} else if (nom31 < date ) {
    document.getElementById("md31").innerHTML = spinner
} else {
    document.getElementById("md31").innerHTML = gray
}