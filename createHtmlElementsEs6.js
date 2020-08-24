var promotions = [
    {
      "id": "5f2bda2a237d2a466b9d59fb",
      "slug": "cillum",
      "title": "ea nostrud duis",
      "ctaLabel": "sint sint proident",
      "terms": "deserunt id cinostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudnostrudllum cupidatat in",
      "isDisabled": false
    },
    {
      "id": "5f2bda2ab2eebb0883461a74",
      "slug": "sint",
      "title": "ad enim voluptate",
      "ctaLabel": "anim in fugiat",
      "terms": "elit Lorem sit ea quis",
      "isDisabled": true
    },
    {
      "id": "5f2bda2a97ab6e127f2915b3",
      "slug": "anim",
      "title": "in ex deserunt",
      "ctaLabel": "laboris pariatur in",
      "terms": "adipisicing amet laborum ea nisi",
      "isDisabled": false
    },
    {
      "id": "5f2bda2abccd2a55fb41e7d4",
      "slug": "proident",
      "title": "elit amet id",
      "ctaLabel": "commodo veniam tempor",
      "terms": "sint sit eu commodo ea",
      "isDisabled": true
    },
    {
      "id": "5f2bda2acd58edb08f2829a5",
      "slug": "culpa",
      "title": "amet veniam elit",
      "ctaLabel": "aliquip dolore aute",
      "terms": "dolore laborum labore incididunt nulla",
      "isDisabled": false
    },
    {
      "id": "5f2bda2a171524c0e205ab2e",
      "slug": "fugiat",
      "title": "labore est irure",
      "ctaLabel": "exercitation duis eiusmod",
      "terms": "mollit aliquip occaecat laboris duis",
      "isDisabled": false
    },
    {
      "id": "5f2bda2a98542c1545f2d15a",
      "slug": "eiusmod",
      "title": "fugiat quis elit",
      "ctaLabel": "deserunt dolor ea",
      "terms": "reprehenderit nostrud ullamco ut enim",
      "isDisabled": true
    },
    {
      "id": "5f2bda2a9d1da38121bfa070",
      "slug": "et",
      "title": "consequat aliquip aliqua",
      "ctaLabel": "nulla sit officia",
      "terms": "laboris ipsum culpa veniam laborum",
      "isDisabled": false
    },
    {
      "id": "5f2bda2a0a5e4ee63569e898",
      "slug": "consectetur",
      "title": "amet quis consequat",
      "ctaLabel": "veniam in sunt",
      "terms": "eu officia nulla consectetur incididunt",
      "isDisabled": true
    },
    {
      "id": "5f2bda2a99dc835ec7ad114f",
      "slug": "cupidatat",
      "title": "ullamco nulla commodo",
      "ctaLabel": "tempor eiusmod enim",
      "terms": "labore ad eiusmod aliquip consequat",
      "isDisabled": false
    },
    {
      "id": "5f2bda2a1442e2a27f80252e",
      "slug": "ut",
      "title": "dolore tempor deserunt",
      "ctaLabel": "occaecat nulla laboris",
      "terms": "officia sit minim et esse",
      "isDisabled": false
    }
  ];

function createHtmlElements() {
    
    let template = ``;
    
    for (let i = 0; i < promotions.length; i++) {

    template += `
            <div class="promoContainer" id=${promotions[i].id}>
                    <h1 class="promoClass" id="promo_title_${i}">"test"{{promo_title}}</h1>

                    <button class="ctaButton" id="promo_ctaLabel_${i}">{{ctaLabel}}</button>

                    <p class="promoTerms" id="promo_terms_${i}">{{promo_terms}}</p>
            </div>
            `;
    }
    return template;
};

createHtmlElements();

console.log(createHtmlElements());
