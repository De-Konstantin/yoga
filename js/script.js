const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		iconMenu.classList.toggle('menu-open');
		menuBody.classList.toggle('menu-open');
	});
}

const swiper = new Swiper('.swiper', {
	// Optional parameters
	
	// loop: true,
	slidesPerView: 2,
	spaceBetween: 32,
	
	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		type: 'fraction',
		renderFraction: function(currentClass, totalClass){
			return '<span class="'+currentClass+'"></span>'+'<span class="'+totalClass+'"></span>';
		}
	 },
 
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	  
	},
 
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	//   draggable: true,
	  
	  
	},
	// autoplay: {
	// 	delay: 3500,
	// 	disableOnInteraction: false,
	//  },

	breakpoints:{
		320:{
			slidesPerView: 1,
		},
		768:{
			slidesPerView: 2,
		}
	}
 });



 const swiper2 = new Swiper('.courses__swiper', {
	// Optional parameters
	
	loop: true,
	slidesPerView: 3,
	spaceBetween: 26,
	
	
	// If we need pagination
	
 
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	  
	},
 
	  
	
	// autoplay: {
	// 	delay: 3500,
	// 	disableOnInteraction: false,
	//  },

	breakpoints:{
		320:{
			slidesPerView: 1,
		},
		548:{
			slidesPerView: 2,
		},
		768:{
			slidesPerView: 3,
		}
	}
 });


 
 const swiper3 = new Swiper('.teacher__swiper', {
	// Optional parameters
	
	loop: true,
	spaceBetween: 28,
	
	
	// If we need pagination
	
 
	// Navigation arrows
	navigation: {
	  nextEl: '.teacher-btn-prev',
	  prevEl: '.teacher-btn-next',
	  
	},
 
	  
	
	// autoplay: {
	// 	delay: 3500,
	// 	disableOnInteraction: false,
	//  },

	breakpoints:{
		320:{
			slidesPerView: 2,
		},
		548:{
			slidesPerView: 3,
		},
		768:{
			slidesPerView: 4,
		}
	}
 });


// scroll animatuon
 const animItems = document.querySelectorAll('._anim-items');

 if (animItems.length > 0) {
	 window.addEventListener('scroll', animOnScroll);
	 function animOnScroll() {
		 for (let index = 0; index < animItems.length; index++) {
			 const animItem = animItems[index];
			 const animItemHeight = animItem.offsetHeight;
			 const animItemOffset = offset(animItem).top;
			 const animStart = 4;
 
			 let animItemPoint = window.innerHeight - animItemHeight / animStart;
			 if (animItemHeight > window.innerHeight) {
				 animItemPoint = window.innerHeight - window.innerHeight / animStart;
			 }
 
			 if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				 animItem.classList.add('_active');
			 } else {
				 if (!animItem.classList.contains('_anim-no-hide')) {
					 animItem.classList.remove('_active');
				 }
			 }
		 }
	 }
	 function offset(el) {
		 const rect = el.getBoundingClientRect(),
			 scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			 scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		 return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	 }
 
	 setTimeout(() => {
		 animOnScroll();
	 }, 300);
 }