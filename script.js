document.addEventListener("DOMContentLoaded", function() {
    carroussel = document.getElementsByClassName("coucou_les_congolais")[0];
    point = document.getElementsByClassName("point")[0];
    points = point.querySelectorAll("img");

    bodyy = document.querySelector("body");

    point1 = points[0];
    point2 = points[1];
    point3 = points[2];
    point4 = points[3];
    point5 = points[4];
    point6 = points[5];

    left = document.getElementById("back");
    right = document.getElementById("right");
    imagees = carroussel.querySelectorAll("img");

    image1 = imagees[2];
    image2 = imagees[3];
    image3 = imagees[4];
    image4 = imagees[5];
    image5 = imagees[6];
    image6 = imagees[7];
    pointss = [point1, point2, point3, point4, point5, point6];
    o1 = true;
    o2 = false;
    o3 = false;
    o4 = false;
    o5 = false;
    o6 = false;
    
    if (o1 === true) {
        point1.src = "assets/point/on.png";
        point2.src = "assets/point/none.png";
        point3.src = "assets/point/none.png";
        point4.src = "assets/point/none.png";
        point5.src = "assets/point/none.png";
        point6.src = "assets/point/none.png";
    } else if (o2 === true) {
        point1.src = "assets/point/none.png";
        point2.src = "assets/point/on.png";
        point3.src = "assets/point/none.png";
        point4.src = "assets/point/none.png";
        point5.src = "assets/point/none.png";
        point6.src = "assets/point/none.png";
    } else if (o3 === true) {
        point1.src = "assets/point/none.png";
        point2.src = "assets/point/none.png";
        point3.src = "assets/point/on.png";
        point4.src = "assets/point/none.png";
        point5.src = "assets/point/none.png";
        point6.src = "assets/point/none.png";
    } else if (o4 === true) {
        point1.src = "assets/point/none.png";
        point2.src = "assets/point/none.png";
        point3.src = "assets/point/none.png";
        point4.src = "assets/point/on.png";
        point5.src = "assets/point/none.png";
        point6.src = "assets/point/none.png";
    } else if (o5 === true) {
        point1.src = "assets/point/none.png";
        point2.src = "assets/point/none.png";
        point3.src = "assets/point/none.png";
        point4.src = "assets/point/none.png";
        point5.src = "assets/point/on.png";
        point6.src = "assets/point/none.png";
    } else if (o6 === true) {
        point1.src = "assets/point/none.png";
        point2.src = "assets/point/none.png";
        point3.src = "assets/point/none.png";
        point4.src = "assets/point/none.png";
        point5.src = "assets/point/none.png";
        point6.src = "assets/point/on.png";
    }

    left.addEventListener("click", function() {
        if (o1 === true) {
            image1.style.display = "flex";
        } else if (o2 === true) {
            image2.style.display = "none";
            o2 = false;
            image1.style.display = "flex";
            o1 = true;
        } else if (o3 === true) {
            image3.style.display = "none";
            o3 = false;
            image2.style.display = "flex";
            o2 = true;
        } else if (o4 === true){
            image4.style.display = "none";
            o4 = false;
            image3.style.display = "flex";
            o3 = true;
        } else if (o5 === true){
            image5.style.display = "none";
            o5 = false;
            image4.style.display = "flex";
            o4 = true;
        } else if (o6 === true) {
            image6.style.display = "none";
            o6 = false;
            image5.style.display = "flex";
            o5 = true;
        }
        if (o1 === true) {
            point1.src = "assets/point/on.png";
            point2.src = "assets/point/none.png";
            point3.src = "assets/point/none.png";
            point4.src = "assets/point/none.png";
            point5.src = "assets/point/none.png";
            point6.src = "assets/point/none.png";
        } else if (o2 === true) {
            point1.src = "assets/point/none.png";
            point2.src = "assets/point/on.png";
            point3.src = "assets/point/none.png";
            point4.src = "assets/point/none.png";
            point5.src = "assets/point/none.png";
            point6.src = "assets/point/none.png";
        } else if (o3 === true) {
            point1.src = "assets/point/none.png";
            point2.src = "assets/point/none.png";
            point3.src = "assets/point/on.png";
            point4.src = "assets/point/none.png";
            point5.src = "assets/point/none.png";
            point6.src = "assets/point/none.png";
        } else if (o4 === true) {
            point1.src = "assets/point/none.png";
            point2.src = "assets/point/none.png";
            point3.src = "assets/point/none.png";
            point4.src = "assets/point/on.png";
            point5.src = "assets/point/none.png";
            point6.src = "assets/point/none.png";
        } else if (o5 === true) {
            point1.src = "assets/point/none.png";
            point2.src = "assets/point/none.png";
            point3.src = "assets/point/none.png";
            point4.src = "assets/point/none.png";
            point5.src = "assets/point/on.png";
            point6.src = "assets/point/none.png";
        } else if (o6 === true) {
            point1.src = "assets/point/none.png";
            point2.src = "assets/point/none.png";
            point3.src = "assets/point/none.png";
            point4.src = "assets/point/none.png";
            point5.src = "assets/point/none.png";
            point6.src = "assets/point/on.png";
        }
    })
    right.addEventListener("click", function() {
        if (o6 === true) {
            image6.style.display = "flex";
        } else if (o5 === true) {
            image5.style.display = "none";
            o5 = false;
            image6.style.display = "flex";
            o6 = true;
        } else if (o4 === true) {
            image4.style.display = "none";
            o4= false;
            image5.style.display = "flex";
            o5 = true;
        } else if (o3 === true){
            image3.style.display = "none";
            o3 = false;
            image4.style.display = "flex";
            o4 = true;
        } else if (o2 === true){
            image2.style.display = "none";
            o2 = false;
            image3.style.display = "flex";
            o3 = true;
        } else if (o1 === true) {
            image1.style.display = "none";
            o1 = false;
            image2.style.display = "flex";
            o2 = true;
        }
        if (o1 === true) {
            point1.src = "assets/point/on.png";
            point2.src = "assets/point/none.png";
            point3.src = "assets/point/none.png";
            point4.src = "assets/point/none.png";
            point5.src = "assets/point/none.png";
            point6.src = "assets/point/none.png";
        } else if (o2 === true) {
            point1.src = "assets/point/none.png";
            point2.src = "assets/point/on.png";
            point3.src = "assets/point/none.png";
            point4.src = "assets/point/none.png";
            point5.src = "assets/point/none.png";
            point6.src = "assets/point/none.png";
        } else if (o3 === true) {
            point1.src = "assets/point/none.png";
            point2.src = "assets/point/none.png";
            point3.src = "assets/point/on.png";
            point4.src = "assets/point/none.png";
            point5.src = "assets/point/none.png";
            point6.src = "assets/point/none.png";
        } else if (o4 === true) {
            point1.src = "assets/point/none.png";
            point2.src = "assets/point/none.png";
            point3.src = "assets/point/none.png";
            point4.src = "assets/point/on.png";
            point5.src = "assets/point/none.png";
            point6.src = "assets/point/none.png";
        } else if (o5 === true) {
            point1.src = "assets/point/none.png";
            point2.src = "assets/point/none.png";
            point3.src = "assets/point/none.png";
            point4.src = "assets/point/none.png";
            point5.src = "assets/point/on.png";
            point6.src = "assets/point/none.png";
        } else if (o6 === true) {
            point1.src = "assets/point/none.png";
            point2.src = "assets/point/none.png";
            point3.src = "assets/point/none.png";
            point4.src = "assets/point/none.png";
            point5.src = "assets/point/none.png";
            point6.src = "assets/point/on.png";
        }
    })
    point1.addEventListener("mouseover", function() {
        point1.src = "assets/point/hover.png";
        if (o1 === true) {
            point1.src = "assets/point/on.png";
        } else if (o2 === true) {
            point2.src = "assets/point/on.png";
        }
        else if (o3 === true) {
            point3.src = "assets/point/on.png";
        }
        else if (o4 === true) {
            point4.src = "assets/point/on.png";
        }
        else if (o5 === true) {
            point5.src = "assets/point/on.png";
        }
        else if (o6 === true) {
            point6.src = "assets/point/on.png";
        }
    })
    point2.addEventListener("mouseover", function() {
        point2.src = "assets/point/hover.png";
        if (o1 === true) {
            point1.src = "assets/point/on.png";
        } else if (o2 === true) {
            point2.src = "assets/point/on.png";
        }
        else if (o3 === true) {
            point3.src = "assets/point/on.png";
        }
        else if (o4 === true) {
            point4.src = "assets/point/on.png";
        }
        else if (o5 === true) {
            point5.src = "assets/point/on.png";
        }
        else if (o6 === true) {
            point6.src = "assets/point/on.png";
        }
    })
    point3.addEventListener("mouseover", function() {
        point3.src = "assets/point/hover.png";
        if (o1 === true) {
            point1.src = "assets/point/on.png";
        } else if (o2 === true) {
            point2.src = "assets/point/on.png";
        }
        else if (o3 === true) {
            point3.src = "assets/point/on.png";
        }
        else if (o4 === true) {
            point4.src = "assets/point/on.png";
        }
        else if (o5 === true) {
            point5.src = "assets/point/on.png";
        }
        else if (o6 === true) {
            point6.src = "assets/point/on.png";
        }
    })
    point4.addEventListener("mouseover", function() {
        point4.src = "assets/point/hover.png";
        if (o1 === true) {
            point1.src = "assets/point/on.png";
        } else if (o2 === true) {
            point2.src = "assets/point/on.png";
        }
        else if (o3 === true) {
            point3.src = "assets/point/on.png";
        }
        else if (o4 === true) {
            point4.src = "assets/point/on.png";
        }
        else if (o5 === true) {
            point5.src = "assets/point/on.png";
        }
        else if (o6 === true) {
            point6.src = "assets/point/on.png";
        }
    })
    point5.addEventListener("mouseover", function() {
        point5.src = "assets/point/hover.png";
        if (o1 === true) {
            point1.src = "assets/point/on.png";
        } else if (o2 === true) {
            point2.src = "assets/point/on.png";
        }
        else if (o3 === true) {
            point3.src = "assets/point/on.png";
        }
        else if (o4 === true) {
            point4.src = "assets/point/on.png";
        }
        else if (o5 === true) {
            point5.src = "assets/point/on.png";
        }
        else if (o6 === true) {
            point6.src = "assets/point/on.png";
        }
    })
    point6.addEventListener("mouseover", function() {
        point6.src = "assets/point/hover.png";
        if (o1 === true) {
            point1.src = "assets/point/on.png";
        } else if (o2 === true) {
            point2.src = "assets/point/on.png";
        }
        else if (o3 === true) {
            point3.src = "assets/point/on.png";
        }
        else if (o4 === true) {
            point4.src = "assets/point/on.png";
        }
        else if (o5 === true) {
            point5.src = "assets/point/on.png";
        }
        else if (o6 === true) {
            point6.src = "assets/point/on.png";
        }
    })
    pointss.forEach(point => {
        point.addEventListener("mouseout", function() {
            point.src = "assets/point/none.png";
        })
    });
})