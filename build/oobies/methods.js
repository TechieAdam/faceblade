function setFaceColor(color) {
    var $smiley = document.getElementById('smiley');
    $smiley.style.backgroundColor = color; 
}

function setBackgroundColor(color) {
    document.getElementById('body').style.backgroundColor = color;
}

function setFaceSize(size) {
    var $smiley = document.getElementById('smiley');
    $smiley.style.width = size + 'px';
    $smiley.style.height = size + 'px';
    $smiley.style.borderRadius = size/2 + 'px';
}