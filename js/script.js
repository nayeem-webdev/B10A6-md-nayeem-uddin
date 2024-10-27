// All API URL
const fetchAllPetsURL = "https://openapi.programming-hero.com/api/peddy/pets";

const fetchDogURL =
  "https://openapi.programming-hero.com/api/peddy/category/dog";
const fetchCatURL =
  "https://openapi.programming-hero.com/api/peddy/category/cat";
const fetchRabbitURL =
  "https://openapi.programming-hero.com/api/peddy/category/rabbit";
const fetchBirdURL =
  "https://openapi.programming-hero.com/api/peddy/category/bird";

const fetchAllCategoriesURL =
  "https://openapi.programming-hero.com/api/peddy/categories";

const categoryContainer = document.getElementById("categoryContainer");
const petContainer = document.getElementById("petDataContainer");
const LikedImageContainer = document.getElementById("LikedImageContainer");
// Fetch Pet Details by ID
// Endpoint:https://openapi.programming-hero.com/api/peddy/pet/${id}

// ! FETCH All PET DATA
const fetchAllPetData = async () => {
  try {
    const response = await fetch(fetchAllPetsURL);
    const data = await response.json();
    showAllPetData(data);
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    console.log("All Pet Data Fetched");
  }
};
// * Show All Pet on Box
const waitForTwoAll = setTimeout(() => {
  fetchAllPetData();
}, 2000);
const showAllPetData = (data) => {
  petContainer.innerHTML = "";
  data.pets.forEach((pet) => {
    const div = document.createElement("div");
    div.classList.add("border", "rounded-xl", "p-5", "petCard");
    div.setAttribute("id", `${pet.petId}`);
    div.innerHTML = `
    <img
        class="h-[250px] sm:h-[320px] md:h-[220px] xl:h-[160px] object-cover w-full rounded-lg"
        src="${pet.image}"
        alt="Pet Image"
      />
      <p class="font-black text-xl mt-6 mb-2">${pet.pet_name}</p>
      <p class="text-text70">
        <i class="fa-solid fa-dna mr-2"></i> Breed: ${
          pet.breed === null || pet.breed === undefined
            ? "Unspecified"
            : pet.breed
        }
      </p>
      <p class="text-text70">
        <i class="fa-regular fa-calendar mr-2"></i> Birth: ${
          pet.date_of_birth === null || pet.date_of_birth === undefined
            ? "Not Provided"
            : pet.date_of_birth
        }
      </p>
      <p class="text-text70">
        <i class="fa-solid fa-mercury mr-2"></i> Gender: ${
          pet.gender === null || pet.gender === undefined
            ? "Unspecified"
            : pet.gender
        }
      </p>
      <p class="text-text70 mb-4">
        <i class="fa-solid fa-tag mr-2"></i> Price: $ <span class="petPrice">${
          pet.price === null || pet.price === undefined
            ? "Not Listed"
            : pet.price
        }</span>
      </p>
      <hr />
      <div class="grid grid-cols-8 gap-4 mt-4">
        <button
        onclick="likeButton(this)"
        id="${pet.date_of_birth}"
          class="border text-primary border-primary20 transition hover:bg-primary15 hover:text-red-700 font-bold text-lg py-2 rounded-lg col-span-2"
        >
          <i class="fa-solid fa-heart"></i>
        </button>
        <button
        onclick="adoptMe(this)"
          class="border text-primary border-primary20 transition hover:bg-primary15 disabled:bg-gray-200 disabled:text-gray-400 font-bold text-lg py-2 rounded-lg col-span-3"
        >
          Adopt
        </button>
        <button
          onclick="showDetails(this)"
          class="border text-primary border-primary20 transition hover:bg-primary15 disabled:bg-gray-400 disabled:text-gray-600 font-bold text-lg py-2 rounded-lg col-span-3"
        >
          Details
        </button>
      </div>
    `;
    petContainer.appendChild(div);
  });
};

// ! FETCH CATEGORY DATA
const fetchCategoryData = async () => {
  try {
    const response = await fetch(fetchAllCategoriesURL);
    const data = await response.json();
    showAllCategory(data);
  } catch (error) {
    console.log("Error: ", error);
  } finally {
    console.log("All Categories Fetched");
  }
};
fetchCategoryData();
// * Display Category
const showAllCategory = (data) => {
  categoryContainer.innerHTML = "";
  data.categories.forEach((cat) => {
    const div = document.createElement("div");
    div.classList.add(
      "cursor-pointer",
      "border-2",
      "border-primary15",
      "rounded-xl",
      "flex",
      "justify-center",
      "items-center",
      "py-6",
      "gap-3",
      "w-full",
      "transition",
      "hover:rounded-[120px]",
      "hover:border-primary",
      "hover:bg-primary15"
    );
    div.setAttribute("id", `cat${cat.id}`);
    div.setAttribute("onclick", "petByCategoryTime(this)");
    div.innerHTML = `
    <img class="h-14" src="${cat.category_icon}" alt="" />
    <h3 class="text-2xl font-black text-text">${cat.category}</h3>
    `;
    categoryContainer.appendChild(div);
  });
};

// TODO Button Function Like, Adopt & Details

const likeButton = (e) => {
  e.classList.toggle("text-red-600");
  e.classList.toggle("text-primary");
  if (e.classList.contains("text-red-600")) {
    const fetchCategoryImage = async () => {
      try {
        const response = await fetch(
          `https://openapi.programming-hero.com/api/peddy/pet/${e.parentNode.parentNode.id}`
        );
        const data = await response.json();
        displayImage(data);
      } catch (error) {
        console.log("Error: ", error);
      } finally {
        console.log("Image Fetched");
      }
    };
    fetchCategoryImage();

    const displayImage = (data) => {
      let img = document.createElement("img");
      img.classList.add(
        "h-[100px]",
        "sm:h-[200px]",
        "xl:h-[100px]",
        "object-cover",
        "w-full",
        "rounded-lg"
      );
      img.setAttribute("src", `${data.petData.image}`);
      img.setAttribute(
        "id",
        `${data.petData.date_of_birth + data.petData.petId}`
      );
      LikedImageContainer.appendChild(img);
    };
  } else {
    const id = e.id + e.parentNode.parentNode.id;
    const deleteChildElement = document.getElementById(id);
    LikedImageContainer.removeChild(deleteChildElement);
  }
};

// Show Pets By Category

function petByCategoryTime(e) {
  petContainer.innerHTML = "";
  const children = e.parentNode.children;
  for (child of children) {
    child.classList.remove("rounded-[120px]", "border-primary", "bg-primary15");
    child.classList.add("border-primary15", "rounded-xl");
  }
  e.classList.add("rounded-[120px]", "border-primary", "bg-primary15");
  e.classList.remove("border-primary15", "rounded-xl");

  const div = document.createElement("div");
  div.classList.add(
    "w-full",
    "row-span-2",
    "col-span-1",
    "md:col-span-2",
    "lg:col-span-3",
    "flex",
    "items-center",
    "justify-center"
  );
  div.innerHTML = `
   <div>
     <img class="w-[600px]" src="images/happydog.gif" alt="" />
     <p class="text-2xl text-center font-bold">
       Hold on! My Friends are Coming...
     </p>
   </div>
  `;
  petContainer.appendChild(div);
  setTimeout(() => {
    const petByCategory = () => {
      if (e.id === "cat1") {
        catUrl = fetchCatURL;
      } else if (e.id === "cat2") {
        catUrl = fetchDogURL;
      } else if (e.id === "cat3") {
        catUrl = fetchRabbitURL;
      } else if (e.id === "cat4") {
        catUrl = fetchBirdURL;
      }

      const fetchByCat = async () => {
        try {
          const response = await fetch(catUrl);
          const data = await response.json();
          displayDataByCat(data);
        } catch (error) {
          console.log("Error: ", error);
        } finally {
          console.log("Category Data Fetched");
        }
      };
      fetchByCat();
      const displayDataByCat = (data) => {
        petContainer.innerHTML = "";
        if (data.data.length === 0) {
          const infoDiv = document.createElement("div");
          infoDiv.classList.add(
            "flex",
            "w-full",
            "row-span-2",
            "col-span-1",
            "md:col-span-2",
            "lg:col-span-3",
            "items-center",
            "justify-center",
            "bg-stone-50",
            "rounded-xl",
            "p-10"
          );
          infoDiv.innerHTML = `
          <div>
            <img class="w-[600px]" src="images/dog.gif" alt="" />
            <p class="text-2xl text-center font-bold">
              🌟 Oops! It looks like we don’t have pets available.
            </p>
            <br>
            <p class="text-center">
               But don’t worry! We’re working hard to bring
              in more friendly pets soon. 🐾  <br>If you’d like to stay updated on
              our newest arrivals, please subscribe to our newsletter.💖
            </p>
          </div>
          `;

          petContainer.appendChild(infoDiv);
          return;
        }
        data.data.forEach((pet) => {
          const div = document.createElement("div");
          div.classList.add("border", "rounded-xl", "p-5", "petCard");
          div.setAttribute("id", `${pet.petId}`);
          div.innerHTML = `
          <img
              class="h-[250px] sm:h-[320px] md:h-[220px] xl:h-[160px] object-cover w-full rounded-lg"
              src="${pet.image}"
              alt="Pet Image"
            />
            <p class="font-black text-xl mt-6 mb-2">${pet.pet_name}</p>
            <p class="text-text70">
              <i class="fa-solid fa-dna mr-2"></i> Breed: ${
                pet.breed === null || pet.breed === undefined
                  ? "Unspecified"
                  : pet.breed
              }
            </p>
            <p class="text-text70">
              <i class="fa-regular fa-calendar mr-2"></i> Birth: ${
                pet.date_of_birth === null || pet.date_of_birth === undefined
                  ? "Not Provided"
                  : pet.date_of_birth
              }
            </p>
            <p class="text-text70">
              <i class="fa-solid fa-mercury mr-2"></i> Gender: ${
                pet.gender === null || pet.gender === undefined
                  ? "Unspecified"
                  : pet.gender
              }
            </p>
            <p class="text-text70 mb-4">
              <i class="fa-solid fa-tag mr-2"></i> Price: $ <span class="petPrice">${
                pet.price === null || pet.price === undefined
                  ? "Not Listed"
                  : pet.price
              }</span>
            </p>
            <hr />
            <div class="grid grid-cols-8 gap-4 mt-4">
              <button
              onclick="likeButton(this)"
              id="${pet.date_of_birth}"
                class="border text-primary border-primary20 transition hover:bg-primary15 hover:text-red-700 font-bold text-lg py-2 rounded-lg col-span-2"
              >
                <i class="fa-solid fa-heart"></i>
              </button>
              <button
              onclick="adoptMe(this)"
                class="border text-primary border-primary20 transition hover:bg-primary15 disabled:bg-gray-200 disabled:text-gray-400 font-bold text-lg py-2 rounded-lg col-span-3"
              >
                Adopt
              </button>
              <button
                onclick="showDetails(this)"
                class="border text-primary border-primary20 transition hover:bg-primary15 disabled:bg-gray-400 disabled:text-gray-600 font-bold text-lg py-2 rounded-lg col-span-3"
              >
                Details
              </button>
            </div>
          `;
          petContainer.appendChild(div);
        });
      };
    };
    petByCategory();
  }, 2000);
}

// MODAL

function showDetails(e) {
  const fetchDetails = async () => {
    try {
      const response = await fetch(
        `https://openapi.programming-hero.com/api/peddy/pet/${e.parentNode.parentNode.id}`
      );
      const data = await response.json();
      displayData(data.petData);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      console.log("Pet Details Fetched");
    }
  };
  fetchDetails();
  const displayData = (pet) => {
    const container = document.getElementById("infoModal");
    const div = document.createElement("div");
    container.innerHTML = "";
    div.innerHTML = `
      <div
      class="bg-black bg-opacity-40 h-screen fixed inset-0 flex items-center justify-center"
      >
      <div
        class="bg-white shadow-xl rounded-lg p-5 w-[90%] md:w-[650px] flex flex-col justify-center gap-3"
      >
        <img
          class="w-full h-[300px] object-cover object-top rounded-md"
          src="${pet.image}"
          alt=""
        />
        <h1 class="font-extrabold text-4xl">${pet.pet_name}</h1>
        <div class="flex gap-5 md:gap-20">
          <div>
            <p class="text-text70">
              <i class="fa-solid fa-dna mr-2"></i> Breed: ${
                pet.breed === null || pet.breed === undefined
                  ? "Unspecified"
                  : pet.breed
              }
            </p>
            <p class="text-text70">
              <i class="fa-solid fa-mercury mr-2"></i> Gender: ${
                pet.gender === null || pet.gender === undefined
                  ? "Unspecified"
                  : pet.gender
              }
            </p>
            <p class="text-text70">
              <i class="fa-solid fa-syringe"></i> Vaccinated status:
              ${
                pet.vaccinated_status === null ||
                pet.vaccinated_status === undefined
                  ? "No Information"
                  : pet.vaccinated_status
              }
            </p>
          </div>
          <div>
            <p class="text-text70">
              <i class="fa-regular fa-calendar mr-2"></i> Birth: ${
                pet.date_of_birth === null || pet.date_of_birth === undefined
                  ? "Not Provided"
                  : pet.date_of_birth
              }
            </p>
            <p class="text-text70 mb-4">
              <i class="fa-solid fa-tag mr-2"></i> Price: $${
                pet.price === null || pet.price === undefined
                  ? "Not Listed"
                  : pet.price
              }
            </p>
          </div>
        </div>
        <hr />
        <p class="font-bold text-xl">
          Details Information
        </p>
        <p class="">
        ${
          pet.pet_details === null || pet.pet_details === undefined
            ? "No Information"
            : pet.pet_details
        }
        </p>
        <button
          id="closeInfo"
          class="border bg-primary15 text-primary border-primary transition hover:bg-primary30 font-bold text-lg py-2 rounded-lg col-span-3"
        >
          Close
        </button>
      </div>
      </div>
    `;

    container.appendChild(div);
    container.classList.remove("hidden");

    document.getElementById("closeInfo").addEventListener("click", function () {
      document.getElementById("infoModal").classList.add("hidden");
    });
  };
}

// SORT BUTTON
document.getElementById("sortByPrice").addEventListener("click", function () {
  sortCardsDesc();
});

// Sort Cards Desc
function sortCardsDesc() {
  const ArrayCards = Array.from(petContainer.querySelectorAll(".petCard"));

  ArrayCards.sort((a, b) => {
    const priceA = getPrice(a);
    const priceB = getPrice(b);

    return priceB - priceA;
  });
  petContainer.innerHTML = "";
  ArrayCards.forEach((card) => petContainer.appendChild(card));
}

// Selecting all the price
function getPrice(aNb) {
  const petPriceElement = aNb.querySelector(".petPrice");

  const petPriceText = petPriceElement
    ? petPriceElement.textContent.trim()
    : "Not Listed";

  return petPriceText === "Not Listed" ? 0 : parseFloat(petPriceText) || 0;
}

// Adopt Btn
const adoptMe = (e) => {
  const infoModal = document.getElementById("infoModal");
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="bg-black bg-opacity-40 h-screen fixed inset-0 flex items-center justify-center">
      <div class="bg-white shadow-xl rounded-lg p-5 w-[90%] md:w-[450px] flex flex-col justify-center gap-3">
        <img class="w-[200px] self-center rounded-md" src="/images/runDog.gif" alt="Running dog gif" />
        <h1 class="font-extrabold text-center text-3xl">Thanks for picking me!</h1>
        <p class="text-center">Adoption is in process.</p>
        <div id="infoModalInnerText">
          <h1 class="font-extrabold text-center text-2xl">Checking Availability.</h1>
        </div>
      </div>
    </div>
  `;

  infoModal.appendChild(div);

  // Function to change the text
  const changeText = (newText, delay) => {
    setTimeout(() => {
      const textContainer = document.getElementById("infoModalInnerText");
      if (textContainer) {
        textContainer.innerHTML = "";
        textContainer.innerHTML = `
          <h1 class="font-extrabold text-center text-2xl">${newText}</h1>
        `;
      }
    }, delay);
  };

  changeText("Getting washed and dressed.", 1200);
  changeText("I am ready, let's go!", 2400);
  changeText("We are now BBF ❤️!", 3600);

  // Close Button
  const closeInfoModal = (delay) => {
    setTimeout(() => {
      infoModal.innerHTML = "";
    }, delay);
  };
  closeInfoModal(4800);
  // Disable Button
  e.setAttribute("disabled", true);
  e.innerText = "Adopted";
};
