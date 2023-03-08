// var x= document.getElementsByClassName("list-group-item")
// console.log(x)
// // console.log(x)
// // document.getElementById

// console.log(x[0])
// x[1].textContent="Updated item"
// x[1].style.fontWeight='bold';
// x[2].style.backgroundColor="green"


//querySelector

// var i= document.querySelector('#main-header');
// i.style.borderBottom= 'solid 4px #ccc';


// var k= document.querySelector('input');
// var l= document.querySelector('input[type="submit"]');
// k.value="hello world";

// l.value="defmkmfk";


// var upd= document.querySelector('.list-group-item:nth-child(3)')
// upd.style.color='red'

var nd1= document.createElement('div');
nd1.className='hello';
nd1.id='hello1';
nd1.setAttribute('title','hello world')
// nd1.setAttribute('fg','jh')

var netext= document.createTextNode('helooooooooooooo')
nd1.appendChild(netext);

var insert= document.querySelector('header .container')
var h1= document.querySelector('header h1')

nd1.style.fontSize='90 px'
insert.insertBefore(nd1,h1)

console.log(nd1)