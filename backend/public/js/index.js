function toggle_visibility() {
    var e = document.getElementById('feedback-main');
    let form = document.getElementById('form');
    if (e.style.display == 'block'){
        e.style.display = 'none';
        form.style.display = 'block';
    }else {
        e.style.display = 'block';
        form.style.display = 'none';
    }
 }

