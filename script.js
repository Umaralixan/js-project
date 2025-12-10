let elCountryList = document.querySelector(".country-list");
let elCountrySelect = document.querySelector(".country-select");
let elSearchInput = document.querySelector(".search-input ");
let elLikeBtn = document.querySelector(".Like-Btn");

// Select part start
function renderSelectOptions(arr, list) {
  let countryRes = arr.reduce((prevValue, item) => {
    if (!prevValue.includes(item.region)) {
      prevValue.push(item.region);
    }
    return prevValue;
  }, []);

  countryRes.forEach((item) => {
    let elOption = document.createElement("option");
    elOption.textContent = item;
    elOption.value = item.toLowerCase();
    list.appendChild(elOption);
  });
}
renderSelectOptions(countries, elCountrySelect);
// console.log(evt.target.value);
elCountrySelect.addEventListener("change", (evt) => {
  const selecedList = countries.filter(
    (item) => item.region.toLowerCase() == evt.target.value
  );
  renderCountries(selecedList, elCountryList);
});
// Select part end

function renderCountries(arr, list) {
  list.innerHTML = null;
  arr.forEach((item) => {
    let elitem = document.createElement("li");
    elitem.className = "w-[300px] overflow-hidden";
    elitem.innerHTML = `
         <img
                class="w-[300px] h-[200px] mt-[50px]"
                src="${item.img}"
                alt="Flag"
                w-[300px]
                h-[200px]
              />
              <div class="p-[5]">
                <p class="">Country: ${item.name}</p>
                <p>Capital: ${item.capital}</p>
                <p>Population: ${item.population}</p>
                <p>Region; ${item.region}</p>
              </div>
                  <div class= "mt-5 flex-between">
               <button onclick="handleLikeBtnClick(${item.id})" class= ${
      item.active ? "bg-slate-300 text-white" : ""
    } "rounded md border-[1px] border-slate-300 w-10"> ❤️ </button>
                  <button onclick="handleLikeBtnClick(${item.id})" class= ${
      item.active ? "bg-green-500 text-white" : ""
    }  class= "rounded md border-[1px] border-slate-300 w-10 ml-10"> ☑️ </button>
                     <button class= "rounded md border-[1px] border-slate-300 w-10 ml-10">🌟 </button>
             </div>
              `;

    list.appendChild(elitem);
  });
  elLikeBtn.children[0].textContent = countries.filter(
    (item) => item.active
  ).length;
}
renderCountries(countries, elCountryList);

// Search part
elSearchInput.addEventListener("input", (evt) => {
  const searchedlist = countries.filter(
    (item) =>
      item.name.toLowerCase().includes(evt.target.value.toLowerCase()) ||
      item.capital.toLowerCase().includes(evt.target.value.toLowerCase())
  );
  renderCountries(searchedlist, elCountryList);
});
// Search end

// Like btn part
function handleLikeBtnClick(id) {
  const findedObj = countries.find((item) => item.id == id);
  findedObj.active = findedObj.active ? false : true;
  renderCountries(countries, elCountryList);
}
// Like btn end
