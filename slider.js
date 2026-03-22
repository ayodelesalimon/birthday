// Photo Slider functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.photo-slide');
const totalSlides = slides.length;

// Create slider dots
const dotsContainer = document.getElementById('sliderDots');
for (let i = 0; i < totalSlides; i++) {
	const dot = document.createElement('div');
	dot.className = 'dot';
	if (i === 0) dot.classList.add('active');
	dot.onclick = () => goToSlide(i);
	dotsContainer.appendChild(dot);
}

function moveSlide(direction) {
	currentSlide += direction;
	if (currentSlide >= totalSlides) currentSlide = 0;
	if (currentSlide < 0) currentSlide = totalSlides - 1;
	updateSlider();
}

function goToSlide(index) {
	currentSlide = index;
	updateSlider();
}

function updateSlider() {
	const track = document.querySelector('.photo-track');
	track.style.transform = `translateX(-${currentSlide * 100}%)`;
	
	// Update dots
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, index) => {
		if (index === currentSlide) {
			dot.classList.add('active');
		} else {
			dot.classList.remove('active');
		}
	});
}

// Auto-advance slider
let autoSlide = setInterval(() => moveSlide(1), 4000);

// Pause auto-advance on hover
const sliderContainer = document.querySelector('.photo-slider');
sliderContainer.addEventListener('mouseenter', () => clearInterval(autoSlide));
sliderContainer.addEventListener('mouseleave', () => {
	autoSlide = setInterval(() => moveSlide(1), 4000);
});

// Lightbox functionality - All images randomized
const lightboxImages = [
	{ src: 'assets/23.jpeg', caption: 'My beautiful love' },
	{ src: 'assets/BIBI(59).jpg', caption: 'My everything' },
	{ src: 'assets/8.jpeg', caption: 'Pure joy' },
	{ src: 'assets/31.jpeg', caption: 'Endless love' },
	{ src: 'assets/BIBI(93).jpg', caption: 'Endless love' },
	{ src: 'assets/14.jpeg', caption: 'Together forever' },
	{ src: 'assets/BIBI(25).jpg', caption: 'My beautiful wife' },
	{ src: 'assets/42.jpeg', caption: 'Forever and always' },
	{ src: 'assets/5.jpeg', caption: 'Precious moments' },
	{ src: 'assets/BIBI(7).jpg', caption: 'Forever in my heart' },
	{ src: 'assets/27.jpeg', caption: 'Love of my life' },
	{ src: 'assets/BIBI(102).jpg', caption: 'My heart' },
	{ src: 'assets/19.jpeg', caption: 'Perfect together' },
	{ src: 'assets/BIBI(43).jpg', caption: 'Always and forever' },
	{ src: 'assets/11.jpeg', caption: 'My soulmate' },
	{ src: 'assets/38.jpeg', caption: 'You complete me' },
	{ src: 'assets/BIBI(11).jpg', caption: 'Love captured' },
	{ src: 'assets/3.jpeg', caption: 'Beautiful memories' },
	{ src: 'assets/BIBI(74).jpg', caption: 'You and me' },
	{ src: 'assets/29.jpeg', caption: 'My queen' },
	{ src: 'assets/16.jpeg', caption: 'Forever yours' },
	{ src: 'assets/BIBI(90).jpg', caption: 'My soulmate' },
	{ src: 'assets/7.jpeg', caption: 'Pure happiness' },
	{ src: 'assets/33.jpeg', caption: 'Cherished memories' },
	{ src: 'assets/BIBI(52).jpg', caption: 'Love of my life' },
	{ src: 'assets/21.jpeg', caption: 'My treasure' },
	{ src: 'assets/BIBI(12).jpg', caption: 'Precious moments' },
	{ src: 'assets/44.jpeg', caption: 'My angel' },
	{ src: 'assets/10.jpeg', caption: 'Sweet love' },
	{ src: 'assets/BIBI(81).jpg', caption: 'Perfect together' },
	{ src: 'assets/35.jpeg', caption: 'My sunshine' },
	{ src: 'assets/2.jpeg', caption: 'Beautiful soul' },
	{ src: 'assets/BIBI(95).jpg', caption: 'My queen' },
	{ src: 'assets/25.jpeg', caption: 'Forever love' },
	{ src: 'assets/13.jpeg', caption: 'My heartbeat' },
	{ src: 'assets/BIBI(19).jpg', caption: 'Pure happiness' },
	{ src: 'assets/39.jpeg', caption: 'Amazing moments' },
	{ src: 'assets/6.jpeg', caption: 'My everything' },
	{ src: 'assets/BIBI(46).jpg', caption: 'Cherished memories' },
	{ src: 'assets/28.jpeg', caption: 'Love eternal' },
	{ src: 'assets/17.jpeg', caption: 'My beloved' },
	{ src: 'assets/BIBI(100).jpg', caption: 'Forever yours' },
	{ src: 'assets/40.jpeg', caption: 'Magical moments' },
	{ src: 'assets/1.jpeg', caption: 'Beautiful you' },
	{ src: 'assets/BIBI(71) (1).jpg', caption: 'Together forever' },
	{ src: 'assets/32.jpeg', caption: 'My princess' },
	{ src: 'assets/9.jpeg', caption: 'Wonderful you' },
	{ src: 'assets/24.jpeg', caption: 'Sweet memories' },
	{ src: 'assets/46.jpeg', caption: 'Love divine' },
	{ src: 'assets/15.jpeg', caption: 'My world' },
	{ src: 'assets/37.jpeg', caption: 'Pure love' },
	{ src: 'assets/4.jpeg', caption: 'Lovely you' },
	{ src: 'assets/22.jpeg', caption: 'My dream' },
	{ src: 'assets/30.jpeg', caption: 'Beautiful love' },
	{ src: 'assets/12.jpeg', caption: 'My star' },
	{ src: 'assets/41.jpeg', caption: 'Eternal love' },
	{ src: 'assets/20.jpeg', caption: 'My happiness' },
	{ src: 'assets/34.jpeg', caption: 'Sweet love' },
	{ src: 'assets/26.jpeg', caption: 'My blessing' },
	{ src: 'assets/18.jpeg', caption: 'True love' },
	{ src: 'assets/36.jpeg', caption: 'My joy' },
	{ src: 'assets/43.jpeg', caption: 'Forever together' },
	{ src: 'assets/47.jpeg', caption: 'Always yours' }
];

let currentLightboxIndex = 0;

function openLightbox(index) {
	const lightbox = document.getElementById('lightbox');
	const lightboxImage = document.getElementById('lightboxImage');
	const lightboxCaption = document.getElementById('lightboxCaption');
	
	currentLightboxIndex = index;
	lightbox.classList.add('active');
	lightboxImage.src = lightboxImages[index].src;
	lightboxCaption.textContent = lightboxImages[index].caption;
	document.body.style.overflow = 'hidden';
}

function closeLightbox() {
	const lightbox = document.getElementById('lightbox');
	lightbox.classList.remove('active');
	document.body.style.overflow = 'auto';
}

function navigateLightbox(direction) {
	currentLightboxIndex += direction;
	
	// Loop around if at ends
	if (currentLightboxIndex >= lightboxImages.length) {
		currentLightboxIndex = 0;
	}
	if (currentLightboxIndex < 0) {
		currentLightboxIndex = lightboxImages.length - 1;
	}
	
	// Update image and caption
	const lightboxImage = document.getElementById('lightboxImage');
	const lightboxCaption = document.getElementById('lightboxCaption');
	lightboxImage.src = lightboxImages[currentLightboxIndex].src;
	lightboxCaption.textContent = lightboxImages[currentLightboxIndex].caption;
}

// Close lightbox on background click
document.getElementById('lightbox').addEventListener('click', function(e) {
	if (e.target === this) closeLightbox();
});

// Close lightbox on Escape key, navigate with arrow keys
document.addEventListener('keydown', function(e) {
	const lightbox = document.getElementById('lightbox');
	if (!lightbox.classList.contains('active')) return;
	
	if (e.key === 'Escape') {
		closeLightbox();
	} else if (e.key === 'ArrowLeft') {
		navigateLightbox(-1);
	} else if (e.key === 'ArrowRight') {
		navigateLightbox(1);
	}
});
