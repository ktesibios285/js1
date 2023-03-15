function addImage() {
    let image = new Array();
    image[0] = "./images/image_1.jpg"  
    image[1] = "./images/image_2.jpg" 
    image[2] = "./images/image_3.jpg" 
    image[3] = "./images/image_4.jpg" 
    image[4] = "./images/image_5.jpg"  
    image[5] = "./images/image_6.jpg" 
    image[6] = "./images/image_7.jpg"
    image[7] = "./images/image_8.jpg"
    image[8] = "./images/image_9.jpg"
    image[9] = "./images/image_10.jpg"
    image[10] = "./images/image_11.jpg"
    image[11] = "./images/image_12.jpg"
    image[12] = "./images/image_13.jpg"
    image[13] = "./images/image_14.jpg"
    image[14] = "./images/image_15.jpg"
    image[15] = "./images/image_16.jpg"
    
    let number = Math.floor(Math.random() * image.length);

    return document.getElementById("result").innerHTML = '<img src="' + image[number]+'" />';
}