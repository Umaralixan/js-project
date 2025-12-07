let elCountryList = document.querySelector(".country-list");
let elCountrySelect = document.querySelector(".country-select");

// Select part start
// function renderSelectOptions(arr, list){
//     let countryRes = arr.reduce((prevValue, item) => {
//         if(!prevValue.includes(item.region)){
//             prevValue.push(item.region)
//         }
//         return prevValue
//     },[])

//     countryRes.forEach(item => {
//         let elOption = document.createElement("option")
//         elOption.text = item
//         elOption.value = item.toLowerCase()
//         list.appendChild(elOption)
//     })

// }
// renderSelectOptions(countries, elCountrySelect)
// Select part end  


function renderCountries(arr, list) {
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
              </div>`;

            
              

            list.appendChild(elitem)
  });
}
renderCountries(countries, elCountryList);

