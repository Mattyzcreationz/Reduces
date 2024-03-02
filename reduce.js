//Extract Value
/*Write a function called extractValue which accepts an array of objects
and a key and returns a new array with teh value of each object
at the key.
 */

const arrays = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']

function extractValue(arrays, key){
    let newArr = [];
    newArr.reduce(function(object, key){
        return object += '' + key
    });
    return key;
     
}



/*VowelCount
Write a function called vowelCount which accepts a string 
and returns an object with the keys as the vowewl and the
values as the number of times the vowel appears in the string.
This function should be case insetivie so a lowercase letter and uppercase letter should count.
*/
vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
VowelCount()

function VowelCount(str){
    const vowels = 'aeiou';
    for(i = 0; i < str.lenght; i++){
        if(vowels.includes(str[i].toLowerCase())){
            count++;
        }
    }
    return count;
}
 
/*### **addKeyAndValue**

Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.
 */

const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

addKeyAndValue(arr, 'title', 'Instructor') //

[
  {title: 'Instructor', name: 'Elie'},
  {title: 'Instructor', name: 'Tim'},
  {title: 'Instructor', name: 'Matt'},
  {title: 'Instructor', name: 'Colt'}
]

function addKeyAndValue(array, key, value){
    for(let i = 0; i <array.length; i++){

    }
    return array;
}

function partition(array, callback){
    const trueValue = [];
    const falseValue = [];
    for(let i = 0; i < array.length; i++){
        if(callback(array[i])){
trueValues.push(array[i]);
        } else {
            falseValues.push(array[i]);
        }
    }
    return [trueValues, falseValues];
}