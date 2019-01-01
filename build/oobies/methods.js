var faceState = {
    faceColor: '#ffff00',
    bgColor: '#ffffff',
    faceWidth: 600,
    faceHeight: 600
};

function setFaceColor(color) {
    faceState.faceColor = color;
    render();
}

function setBackgroundColor(color) {
    faceState.bgColor = color;
    render();
}

function setFaceSize(size) {
    faceState.faceWidth = size;
    faceState.faceHeight = size;
    render();
}

function render() {
    // update face color
    var $smiley = document.getElementById('smiley');
    $smiley.style.backgroundColor = faceState.faceColor; 

    // update background color
    document.getElementById('body').style.backgroundColor = faceState.bgColor;

    // update face size
    var $smiley = document.getElementById('smiley');
    $smiley.style.width = faceState.faceWidth + 'px';
    $smiley.style.height = faceState.faceHeight + 'px';
    $smiley.style.borderRadius = faceState.faceWidth/2 + 'px';

    // eyes common
    var eyeWidth = faceState.faceWidth/10;
    var eyeHeight = faceState.faceHeight/5;
    var eyePositionTop = faceState.faceHeight/5 + 'px';

    // update left eye
    var $leftEye = document.getElementById('leftEye');
    $leftEye.style.width = eyeWidth + 'px';
    $leftEye.style.height = eyeHeight + 'px';
    $leftEye.style.borderRadius = '50%';
    $leftEye.style.top = eyePositionTop;
    $leftEye.style.left = (faceState.faceWidth/3 - eyeWidth/2) + 'px';


    // update right eye
    var $rightEye = document.getElementById('rightEye');
    $rightEye.style.width = eyeWidth + 'px';
    $rightEye.style.height = eyeHeight + 'px';
    $rightEye.style.borderRadius = '50%';
    $rightEye.style.top = eyePositionTop;
    $rightEye.style.left = (2*faceState.faceWidth/3 - eyeWidth/2) + 'px';

    // update smile
    var $topLip = document.getElementById('topLip');
    $topLip.style.top = faceState.faceHeight/3 + 'px';
    $topLip.style.width = faceState.faceWidth-(0.2*faceState.faceWidth) + 'px';
    $topLip.style.height = faceState.faceHeight/2 + 'px';
    $topLip.style.left = (0.1*faceState.faceWidth) + 'px';
    $topLip.style.borderRadius = '50%';
    $topLip.style.backgroundColor = faceState.faceColor; 

    var $bottomLip = document.getElementById('bottomLip');
    $bottomLip.style.top = faceState.faceHeight/3+(0.05*faceState.faceHeight) + 'px';
    $bottomLip.style.width = faceState.faceWidth-(0.2*faceState.faceWidth) + 'px';
    $bottomLip.style.height = faceState.faceHeight/2 + 'px';
    $bottomLip.style.borderRadius = '50%';
    $bottomLip.style.left = (0.1*faceState.faceWidth) + 'px';

}

window.onload = function() {
    render();
};
