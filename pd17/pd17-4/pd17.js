function changeParagraphColor(paragraphId, color) {
    const paragraph = document.getElementById(paragraphId);
    paragraph.style.color = color;
}

changeParagraphColor('first-paragraph', 'blue');
changeParagraphColor('second-paragraph', 'red');
changeParagraphColor('third-paragraph', 'green');