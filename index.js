((d) => {
    // select body and head selectors
    let head_left = d.getElementById('head_left');
    let head_right = d.getElementById('head_right');

    let body_left = d.getElementById('body_left');
    let body_right = d.getElementById('body_right');

    let currentHead = true;
    let currentBody = true;


    // select body parts
    let head = d.getElementById('head');
    let body = d.getElementById('body');

    // Select head and body
    head_left.addEventListener("click", () => {
        currentHead ? currentHead = false : currentHead = true;

        if (currentHead) {
            head.style.borderRadius = "50px"
        } else {
            head.style.borderRadius = "0"
        }
        
    });
    head_right.addEventListener("click", () => {
        currentHead ? currentHead = false : currentHead = true;
        
        if (currentHead) {
            head.style.borderRadius = "50px"
        } else {
            head.style.borderRadius = "0"
        }
    });

    body_left.addEventListener("click", () => {
        currentBody ? currentBody = false : currentBody = true;

        if (currentBody) {
            body.style.borderRadius = "0"
        } else {
            body.style.borderRadius = "30px"
        }
    });
    body_right.addEventListener("click", () => {
        currentBody ? currentBody = false : currentBody = true;

        if (currentBody) {
            body.style.borderRadius = "0"
        } else {
            body.style.borderRadius = "30px"
        }
    });



        


    
})(document)