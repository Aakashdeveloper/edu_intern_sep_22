// let location = "https://zomatoapi.onrender.com/location";
// let rest = "https://zomatoapi.onrender.com/restaurants?city=3";

// const Test = () => {
//     alert("hiii")
// 

async function getCity(){
    let res = await fetch("https://zomatoapi.onrender.com/location",{method: "GET",})
    let data = await res.json();
    data.map((item) => {
        let element = document.createElement('option') //<option></option>
        let text = document.createTextNode(item.state) ///delhi
        element.appendChild(text) //<option>delhi</option>
        element.value = item.state_id //<option value="1">delhi</option>
        document.getElementById('city').appendChild(element)
    })
}


// const getCity = async() => {
//     let res = await fetch("https://zomatoapi.onrender.com/location",{method: "GET",})
//     let data = await res.json();
//     data.map((item) => {
//         let element = document.createElement('option') //<option></option>
//         let text = document.createTextNode(item.state) ///delhi
//         element.appendChild(text) //<option>delhi</option>
//         element.value = item.state_id //<option value="1">delhi</option>
//         document.getElementById('city').appendChild(element)
//     })
// }

// function getCity(){
//     // alert("hiii")
//     fetch("https://zomatoapi.onrender.com/location",{method: "GET",})
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//         data.map((item) => {
//             let element = document.createElement('option') //<option></option>
//             let text = document.createTextNode(item.state) ///delhi
//             element.appendChild(text) //<option>delhi</option>
//             element.value = item.state_id //<option value="1">delhi</option>
//             document.getElementById('city').appendChild(element)
//             //<select><option value="1">delhi</option></select>
//         })
//     })
// }


function getRest(){
    let cityId = document.getElementById('city').value;
    let rest = document.getElementById('restSelect1');
    while(rest.length > 0 ){
        rest.remove(0)
    }
    fetch(`https://zomatoapi.onrender.com/restaurants?city=${cityId}`,{method: "GET",})
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        data.map((item) => {
            let element = document.createElement('option');
            let text = document.createTextNode(`${item.restaurant_name}-${item.address}`);
            element.appendChild(text)
            rest.appendChild(element)
        })
    })
}