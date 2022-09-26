var checkboxes = document.querySelectorAll("input[type = 'checkbox']");
const toggleBtn = document.querySelector('#toggleBtn');
const divList = document.querySelector('.listHolder');
let filterText = document.getElementById("myInput");
let rotateBtn = document.getElementById("leftarrow");
let rotateBtnValue = false;
let toggleValue = true;
const myulel = document.getElementById("#myUL");
// Hiding the div tag when the minimize button is clicked
function toggleClick() {
    if (divList.style.display === 'none') {
        divList.style.display = 'block';
        filterText.style.display = 'block';
        toggleValue = true;
        // console.log("toggle " + toggleValue)
        toggleBtn.innerHTML = "";
    } else {
        divList.style.display = 'none';
        filterText.style.display = 'none';
        toggleValue = false;
        // console.log("toggle " + toggleValue)
        toggleBtn.innerHTML = '<img id="aftertoggle" src="bar.png" </img>';

    }

}

// Rotating the div tag 270 degree when the leftarrow button is clicked
rotateBtn.addEventListener("click", function() {
    if (rotateBtnValue === false && toggleValue === false) {
        rotateBtn.style.transform = `rotate(-90deg)`;
        document.getElementById("id1").style.transform = `rotate(-90deg)`;
        rotateBtnValue = true;
        // console.log("rotBtn " + rotateBtnValue);
        // console.log("toggle " + toggleValue);
    } else if (rotateBtnValue === false && toggleValue === true) {
        toggleClick()
        rotateBtn.style.transform = `rotate(-90deg)`;
        document.getElementById("id1").style.transform = `rotate(-90deg)`;
        rotateBtnValue = true;
        toggleValue = false;
        // console.log("rotBtn " + rotateBtnValue);
        // console.log("toggle " + toggleValue);

    } else if (rotateBtnValue === true && toggleValue === true) {
        toggleClick();
        rotateBtn.style.transform = `rotate(0deg)`;
        document.getElementById("id1").style.transform = `rotate(0deg)`;
        rotateBtnValue = false;
        toggleValue = false;
        // console.log("rotBtn " + rotateBtnValue);
        // console.log("toggle " + toggleValue);
    } else if (rotateBtnValue === true && toggleValue === false) {
        rotateBtnValue = false;
        rotateBtn.style.transform = `rotate(0deg)`;
        document.getElementById("id1").style.transform = `rotate(0deg)`;
    }

})

// Searching the list if the input value matches then display the list or display none
function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Clearing all check box when function clearAll is called
function clearAll(myCheckbox) {
    if (myCheckbox.checked == true) {
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = true;
        })
    } else {
        checkboxes.forEach(function(checkbox) {
            checkbox.checked = false;
        })
    }
}
// Performing scrollIntoView function for each character and when a character is clicked then it should  scroll the list to the first item starting with that letter. 
function searchA() {
    const e = document.getElementById("a-letter");
    e.scrollIntoView();
}


function searchB() {
    const e = document.getElementById("b-letter");
    e.scrollIntoView();
}

function searchC() {
    const e = document.getElementById("c-letter");
    e.scrollIntoView();
}

function searchD() {
    const e = document.getElementById("d-letter");
    e.scrollIntoView();
}

function searchE() {
    const e = document.getElementById("e-letter");
    e.scrollIntoView();
}

function searchF() {
    const e = document.getElementById("f-letter");
    e.scrollIntoView();
}

function searchG() {
    const e = document.getElementById("g-letter");
    e.scrollIntoView();
}

function searchH() {
    const e = document.getElementById("h-letter");
    e.scrollIntoView();
}

function searchK() {
    const e = document.getElementById("k-letter");
    e.scrollIntoView();
}

function searchM() {
    const e = document.getElementById("m-letter");
    e.scrollIntoView();
}

function searchN() {
    const e = document.getElementById("n-letter");
    e.scrollIntoView();
}

function searchW() {
    const e = document.getElementById("w-letter");
    e.scrollIntoView();
}