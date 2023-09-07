function myFunction()
{

let caption = document.querySelectorAll('li.title');
let input= search.target.value.toLowerCase();  
let search = document.getElementById('search');
let li= document.getElementsByTagName('li');

for(let i=0; i < li.length; i++)
{
if(input === caption)
{
  caption.parentNode.parentNode.style.display = 'block';
}
else
{
caption.parentNode.parentNode.style.display = 'none';

}

}
}