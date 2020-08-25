var promotions = [
	{
		id: "5f2bda2a237d2a466b9d59fb",
		slug: "cillum",
		title: "ea nostrud duis",
		ctaLabel: "sint sint proident",
		terms:
			"deserunt id cinostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudllum cupidatat in",
		isDisabled: false,
	},
	{
		id: "5f2bda2ab2eebb0883461a74",
		slug: "sint",
		title: "ad enim voluptate",
		ctaLabel: "anim in fugiat",
		terms: "elit Lorem sit ea quis",
		isDisabled: true,
	},
	{
		id: "5f2bda2a97ab6e127f2915b3",
		slug: "anim",
		title: "in ex deserunt",
		ctaLabel: "laboris pariatur in",
		terms: "adipisicing amet laborum ea nisi",
		isDisabled: false,
	},
	{
		id: "5f2bda2abccd2a55fb41e7d4",
		slug: "proident",
		title: "elit amet id",
		ctaLabel: "commodo veniam tempor",
		terms: "sint sit eu commodo ea",
		isDisabled: true,
	},
	{
		id: "5f2bda2acd58edb08f2829a5",
		slug: "culpa",
		title: "amet veniam elit",
		ctaLabel: "aliquip dolore aute",
		terms: "dolore laborum labore incididunt nulla",
		isDisabled: false,
	},
	{
		id: "5f2bda2a171524c0e205ab2e",
		slug: "fugiat",
		title: "labore est irure",
		ctaLabel: "exercitation duis eiusmod",
		terms: "mollit aliquip occaecat laboris duis",
		isDisabled: false,
	},
	{
		id: "5f2bda2a98542c1545f2d15a",
		slug: "eiusmod",
		title: "fugiat quis elit",
		ctaLabel: "deserunt dolor ea",
		terms: "reprehenderit nostrud ullamco ut enim",
		isDisabled: true,
	},
	{
		id: "5f2bda2a9d1da38121bfa070",
		slug: "et",
		title: "consequat aliquip aliqua",
		ctaLabel: "nulla sit officia",
		terms: "laboris ipsum culpa veniam laborum",
		isDisabled: false,
	},
	{
		id: "5f2bda2a0a5e4ee63569e898",
		slug: "consectetur",
		title: "amet quis consequat",
		ctaLabel: "veniam in sunt",
		terms: "eu officia nulla consectetur incididunt",
		isDisabled: true,
	},
	{
		id: "5f2bda2a99dc835ec7ad114f",
		slug: "cupidatat",
		title: "ullamco nulla commodo",
		ctaLabel: "tempor eiusmod enim",
		terms: "labore ad eiusmod aliquip consequat",
		isDisabled: false,
	},
	{
		id: "5f2bda2a1442e2a27f80252e",
		slug: "ut",
		title: "dolore tempor deserunt",
		ctaLabel: "occaecat nulla laboris",
		terms: "officia sit minim et esse",
		isDisabled: false,
	},
];

//creating a list of CTA Buttons
//each element in the list is a button bound with its promo
const ctaBtn = document.getElementsByClassName("ctaButton");

//modal window that appear after clicking CTA button
const modal = document.getElementById("myModal");

//two buttons at modal window
const acceptPromoBtn = document.getElementById("acceptPromo");
const declinePromoBtn = document.getElementById("declinePromo");



function createHtmlElements() {
	let template = ``;

	for (let i = 0; i < promotions.length; i++) {
        
        //create HTML elements based on promotions[] 
		template += `
            <div class="promoContainer" id=${promotions[i].id}>
                    <h1 class="promoClass" id="promo_title_${i}">"test"{{promo_title}}</h1>

                    <button class="ctaButton" id="promo_ctaLabel_${i}">{{ctaLabel}}</button>

                    <p class="promoTerms" id="promo_terms_${i}">{{promo_terms}}</p>
            </div>
            `;
	}

	return template;
}

function disablePromo(i) {
	if (promotions[i].isDisabled === true) {
        
		//change the style of promo which is disabled
		document.getElementById(promotions[i].id)
                .style.background = "#A9A9A9";
      
//		document.getElementById("promo_ctaLabel_" + i)
//                .style.background = "#C0C0C0";

		document.getElementById("promo_ctaLabel_" + i)
                .classList.add("disabledButton");

		//disable button of disabled promo
		ctaBtn[i].disabled = true;
	}
}

(() => {
    //create and assign HTML elements to already existing div
	document.getElementById("column").innerHTML = createHtmlElements();

	for (let i = 0; i < promotions.length; i++) {
		//at start disable all promos that have isDisabled flag set to true
		disablePromo(i);

		//set title, terms and ctaLabel for newly created HTML elements
		document.getElementById("promo_title_" + i).innerHTML = promotions[i].title;

		document.getElementById("promo_terms_" + i).innerHTML = promotions[i].terms;

		document.getElementById("promo_ctaLabel_" + i).innerHTML = promotions[i].ctaLabel;
      
        
        ctaBtn[i].onclick = () => {
				console.log(i);

				//display window after clicking CTA button
				modal.style.display = "block";

				//set text in window to terms of that promo
				let modalText = document.createTextNode(promotions[i].terms);

				document.getElementById("modal-text").appendChild(modalText);

				acceptPromoBtn.onclick = () => {
					//set isDisabled flag to true if clicked Accpet
					promotions[i].isDisabled = true;
					console.log("isDisabled: " + promotions[i].isDisabled);

					//use disablePromo function on this element
					disablePromo(i);

					//close the window
					modal.style.display = "none";

					//clearing text in window because of prev appending
					document.getElementById("modal-text").innerHTML = "";
				};

				declinePromoBtn.onclick = () => {
					modal.style.display = "none";
					console.log("isDisabled: " + promotions[i].isDisabled);

					//clearing text in window because of prev appending
					document.getElementById("modal-text").innerHTML = "";
				};
		};
	}
})();


