export default function createHTML(itemArrayList, domElm) {
  let itemHTML = "";
  itemArrayList.forEach(function (item) {
    itemHTML += `<li>
				<span class="item alexander">${item}</span>
		</li>`;
  });
  console.log(itemHTML);
  document.querySelector(domElm).innerHTML += itemHTML;
}
