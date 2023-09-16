function overlayShow_minhkhoi() {
    let popup = document.getElementById("minhkhoi-overlay")
    let opacity = document.getElementById("container")
    popup.classList.add("open-popup");
    opacity.classList.add("overlay-container");
}

function overlayShow_baongoc() {
    let popup = document.getElementById("baongoc-overlay")
    let opacity = document.getElementById("container")
    popup.classList.add("open-popup");
    opacity.classList.add("overlay-container");
}

function overlayShow_quangnhat() {
    let popup = document.getElementById("quangnhat-overlay")
    let opacity = document.getElementById("container")
    popup.classList.add("open-popup");
    opacity.classList.add("overlay-container");
}

function overlayShow_dongquan() {
    let popup = document.getElementById("dongquan-overlay")
    let opacity = document.getElementById("container")
    popup.classList.add("open-popup");
    opacity.classList.add("overlay-container");
}

function overlayHide_minhkhoi() {
    let popup = document.getElementById("minhkhoi-overlay")
    let opacity = document.getElementById("container")
    popup.classList.remove("open-popup");
    opacity.classList.remove("overlay-container");
}

function overlayHide_quangnhat() {
    let popup = document.getElementById("quangnhat-overlay")
    let opacity = document.getElementById("container")
    popup.classList.remove("open-popup");
    opacity.classList.remove("overlay-container");
}

function overlayHide_baongoc() {
    let popup = document.getElementById("baongoc-overlay")
    let opacity = document.getElementById("container")
    popup.classList.remove("open-popup");
    opacity.classList.remove("overlay-container");
}

function overlayHide_dongquan() {
    let popup = document.getElementById("dongquan-overlay")
    let opacity = document.getElementById("container")
    popup.classList.remove("open-popup");
    opacity.classList.remove("overlay-container");
}