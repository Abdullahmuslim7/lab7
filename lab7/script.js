const meals = [
  { name: "Pizza", image: "pizza.jpg", calories: 480, vegetarian: false },
  { name: "Grilled Chicken & Fries", image: "chicken.jpg", calories: 650, vegetarian: false },
  { name: "Veggie Pasta", image: "pasta.jpg", calories: 420, vegetarian: true },
  { name: "Beef Burger", image: "burger.jpg", calories: 700, vegetarian: false }
];

function renderMeals(){
  const box=document.getElementById("meals");
  box.innerHTML="";
  meals.forEach(m=>{
    const el=document.createElement("div");
    el.className="card";
    el.innerHTML=`
      <h3>${m.name}</h3>
      <img src="${m.image}" alt="${m.name}">
      <div class="meta">Calorie Count: <b>${m.calories}</b></div>
      <div class="badge">${m.vegetarian?"Vegetarian":"Non-Vegetarian"}</div>
    `;
    box.appendChild(el);
  });
}

function addMeal(){
  const name=prompt("Meal name:");
  if(!name)return;
  const image=prompt("Image URL:");
  if(!image)return;
  const caloriesStr=prompt("Calories (number):");
  if(!caloriesStr)return;
  const calories=parseInt(caloriesStr,10);
  if(Number.isNaN(calories))return;
  const vegAns=prompt("Is it vegetarian? (yes/no):");
  if(!vegAns)return;
  const vegetarian=vegAns.trim().toLowerCase().startsWith("y");
  meals.push({name,image,calories,vegetarian});
  renderMeals();
}

function suggestMeal(){
  const rnd=Math.floor(Math.random()*meals.length);
  const m=meals[rnd];
  const box=document.getElementById("suggestionCard");
  box.innerHTML=`
    <div class="card">
      <h3>${m.name}</h3>
      <img src="${m.image}" alt="${m.name}">
      <div class="meta">Calorie Count: <b>${m.calories}</b></div>
      <div class="badge">${m.vegetarian?"Vegetarian":"Non-Vegetarian"}</div>
    </div>
  `;
  box.scrollIntoView({behavior:"smooth"});
}

document.addEventListener("DOMContentLoaded",renderMeals);