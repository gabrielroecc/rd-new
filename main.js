var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);

document.querySelectorAll(".show_services").forEach((item) =>
	item.addEventListener("click", () => {
		document.querySelector(".show_more_services").classList.toggle("active");
	})
);
document.querySelectorAll(".menu img").forEach((item) =>
	item.addEventListener("click", () => {
		document.querySelector(".menu_mob").classList.toggle("active");
	})
);
document.querySelectorAll(".close_menu img").forEach((item) =>
	item.addEventListener("click", () => {
		document.querySelector(".menu_mob").classList.toggle("active");
	})
);

const image = document.querySelectorAll(".galery_img_wrapper img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal_img");
const closeImg = document.querySelector(".close_img");

image.forEach((element) => {
	element.addEventListener("click", (e) => {
		const image = e.target.src;
		modal.style.opacity = 1;
		modal.style.pointerEvents = 1;
		modalImg.src = image;
	});
});
closeImg.addEventListener("click", (e) => {
	console.log("Clicou");
	modal.style.opacity = 0;
	modal.style.pointerEvents = none;
});
