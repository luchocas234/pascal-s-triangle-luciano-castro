


function pascalTriangle(n, resultado) {
    //n is my number of rows 
    var texto = '';
    //We made A(n) matrix and B(n) matrix
    var A = new Array(n);   //older vector, this is the previous  
    var B = new Array(n);   //new vector  
    //We convert all the elements of vector a (n) to zero
    for (var k = 0; k <= n; k++) {
        A[k] = 0;
    }
    //feed the matrix 
    A[1] = 1; //The first 1 of the triangle vertex
    texto = A[1] + '<br>';      //we print the vetex 
    for (var i = 2; i <= n; i++) {    //i give us the row  
        for (var j = 1; j <= i; j++) {   //j give us the column 
            B[j] = A[j - 1] + A[j];    //B elements are formed by adding 2 elements of A
            texto += B[j] + " ";     //we print an element 
        }
        for (j = 1; j <= i; j++) {
            A[j] = B[j];        // Vector B becomes previous
        }
        texto += "<br>";      //jump to new row  
    }
    return document.getElementById(resultado).innerHTML = texto;
}
var n = Number(prompt('Number of rows: ')) + 1
if (n > 0) { pascalTriangle(n, "result") }
else { alert('Only numbers are supported') }


