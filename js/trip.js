function startCounter(counterId, targetNumber, speed) {
    let counter = document.getElementById(counterId);
    let count = 0;
    let interval = setInterval(() => {
        count++;
        counter.textContent = count;
        if (count === targetNumber) {
            clearInterval(interval);
        }
    }, speed);
}

window.onload = function() {
    startCounter('counter1', 388, 10); 
    startCounter('counter2', 352, 10); 
    startCounter('counter3', 321, 10); 
};
document.getElementById('l1').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('i1').style.display = 'block';
    document.getElementById('i2').style.display = 'none';
});

document.getElementById('l2').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('i1').style.display = 'none';
    document.getElementById('i2').style.display = 'block';
});
