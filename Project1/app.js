const burger = document.querySelector('.fa-bars');
const sideBar = document.querySelector('.side-bar');
const effect = document.querySelectorAll('.kembar');

const x = document.querySelector('.fa-times');

const y = document.querySelectorAll('.date div')

const logos = document.querySelectorAll('.card i')


burger.addEventListener('click',()=>{
		//burger.parentElement.classList.add('other-effect')
		  effect.forEach(item =>{
					item.classList.add('other-effect')
})
				
				
				sideBar.classList.add('sidebar-on')
	
})


x.addEventListener('click',()=>{
				//burger.parentElement.classList.remove('other-effect');
				
				sideBar.classList.remove('sidebar-on')
				effect.forEach(item =>{
					 item.classList.remove('other-effect')})
				
})

const screenHeight= window.innerHeight;
window.addEventListener('scroll',()=>{
logos.forEach((logo)=>{
      let distance = logo.getBoundingClientRect().top;
      
				if(distance < screenHeight*9/10) {
								logo.parentElement.classList.add('normal')
								logo.classList.add('normalChild')
				}else{
								logo.parentElement.classList.remove('normal')
								logo.classList.remove('normalChild')
				}
		})
})


y[2].innerHTML=`<h1>${new Date().getDay()}</h1>
<p>Day</p>`;

y[1].innerHTML=`<h1>${new Date().getMonth()}</h1>
<p>Month</p>`;

y[0].innerHTML=`<h1>${new Date().getFullYear()}</h1>
<p>year</p>`;


/*
let date=[
				new Date().getFullYear(),
				new Date().getMonth(),
				new Date().getDate(),
				new Date().getDay(),
]

let yy=y.innerHtml(`date.forEach((data)=>{
				data,
})`);*/
