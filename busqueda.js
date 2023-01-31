const bB = (array, find) => {

    let izquierda = 0, derecha = array.length - 1;


    while (derecha >= izquierda) {

        let Em = Math.floor((derecha + izquierda) / 2);
        let vM = array[Em];
 
        if (find === vM) {
            return Em;
        } else {
            
            if (find > vM) {

                izquierda = Em + 1

            } else 
		{
                
                derecha = Em - 1
                
            }
        }

    }
    return -1;
}

const array = [1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    find = 20;
const indice = bB(array, find);
console.log("El valor %s está en el índice %d", find, indice);