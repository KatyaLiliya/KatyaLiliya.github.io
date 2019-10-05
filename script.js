var products = [
    { productId: 1, productName: 'Товар 1', categoryId: 1 },
    { productId: 2, productName: 'Товар 2', categoryId: 2 },
    { productId: 3, productName: 'Товар 3', categoryId: 3 },
    { productId: 4, productName: 'Товар 4', categoryId: 4 },
    { productId: 5, productName: 'Товар 5', categoryId: 5 },
    { productId: 6, productName: 'Товар 6', categoryId: 1 },
    { productId: 7, productName: 'Товар 7', categoryId: 2 },
    { productId: 8, productName: 'Товар 8', categoryId: 3 },
    { productId: 9, productName: 'Товар 9', categoryId: 4 },
    { productId: 10, productName: 'Товар 10', categoryId: 5 },
    { productId: 11, productName: 'Товар 11', categoryId: 1 },
    { productId: 12, productName: 'Товар 12', categoryId: 2 },
    { productId: 13, productName: 'Товар 13', categoryId: 3 },
    { productId: 14, productName: 'Товар 14', categoryId: 4 },
    { productId: 15, productName: 'Товар 15', categoryId: 5 },
    { productId: 16, productName: 'Товар 16', categoryId: 1 },
    { productId: 17, productName: 'Товар 17', categoryId: 2 },
    { productId: 18, productName: 'Товар 18', categoryId: 3 },
    { productId: 19, productName: 'Товар 19', categoryId: 4 },
    { productId: 20, productName: 'Товар 20', categoryId: 5 },
    { productId: 21, productName: 'Товар 21', categoryId: 1 },
    { productId: 22, productName: 'Товар 22', categoryId: 2 },
    { productId: 23, productName: 'Товар 23', categoryId: 3 },
    { productId: 24, productName: 'Товар 24', categoryId: 4 },
    { productId: 25, productName: 'Товар 25', categoryId: 5 },
];

var categories = {
    'tShirt': 1 ,
    'top': 2 ,
    'socks': 3 ,
    'jeans': 4 ,
    'pants': 5 ,
};
var pict = {
    'pic1': 1 ,
    'pic2': 2 ,
    'pic3': 3 ,
    'pic4': 4 ,
    'pic5': 5 ,
};
var array = ['tShirt', 'top', 'socks', 'jeans', 'pants'];
//var array2 = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5'];
var buttons = document.querySelectorAll('.tablinks_js');
var content = document.querySelectorAll('.a');
    function clothes(evt, clothesName) {
    var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
        tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
        document.getElementById(clothesName).style.display = "block";
        evt.currentTarget.className += " active";
        let index = 0 
    for(let j=0; j < products.length; j++){
    if (products[j].categoryId == categories[clothesName]){
        content[index++].innerHTML = products[j].productName;
        }
    }
    
    }
    for ( let j = 0; j < buttons.length; j++) {
        buttons[j].addEventListener('click', function (event) {
            clothes(event, array[j])
        })
    }
   /* var pictures = [
        { productId: 1, p: src = 'image\tShirt-1.jpg', categoryId: 1 },
        { productId: 2, p: src = 'image\top-1.jpg', categoryId: 2 },
        { productId: 3, p: src = 'image\socks-1.jpg', categoryId: 3 },
        { productId: 4, p: src = 'image\jeans-1.jpg', categoryId: 4 },
        { productId: 5, p: src = 'image\pants-1.jpg', categoryId: 5 },
        { productId: 6, p: src = 'image\tShirt-2.jpg', categoryId: 1 },
        { productId: 7, p: src = 'image\top-2.jpg', categoryId: 2 },
        { productId: 8, p: rc = 'image\socks-2.jpg', categoryId: 3 },
        { productId: 9, p: src = 'image\jeans-2.jpg', categoryId: 4 },
        { productId: 10, p: src = 'image\pants-2.jpg', categoryId: 5 },
        { productId: 11, p: src = 'image\tShirt-3.jpg', categoryId: 1 },
        { productId: 12, p: src = 'image\top-3.jpg', categoryId: 2 },
        { productId: 13, p: src = 'image\socks-3.jpg', categoryId: 3 },
        { productId: 14, p: src = 'image\jeans-3.jpg', categoryId: 4 },
        { productId: 15, p: src = 'image\pants-3.jpg', categoryId: 5 },
        { productId: 16, p: src = 'image\tShirt-4.jpg', categoryId: 1 },
        { productId: 17, p: src = 'image\top-4.jpg', categoryId: 2 },
        { productId: 18, p: src = 'image\socks-4.jpg', categoryId: 3 },
        { productId: 19, p: src = 'image\jeans-4.jpg', categoryId: 4 },
        { productId: 20, p: src = 'image\pants-4.jpg', categoryId: 5 },
        { productId: 21, p: src = 'image\tShirt-5.jpg', categoryId: 1 },
        { productId: 22, p: src = 'image\top-5.jpg', categoryId: 2 },
        { productId: 23, p: src = 'image\socks-5.jpg', categoryId: 3 },
        { productId: 24, p: src = 'image\jeans-5.jpg', categoryId: 4 },
        { productId: 25, p: src = 'image\pants-5.jpg', categoryId: 5 },
    ];
    var categories = {
        'tShirt': 1 ,
        'top': 2 ,
        'socks': 3 ,
        'jeans': 4 ,
        'pants': 5 ,
    };
    var pict = document.write('.pic');
    let index2 = 0 
    for(let g=0; g < pictures.length; g++){
        if (pictures[g].categoryId == categories[clothesName]){
            pict[index2++].innerHTML = pictures[g].p;
            }
        }*/