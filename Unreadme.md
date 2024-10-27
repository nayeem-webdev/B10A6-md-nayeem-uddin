# Peddy - Pet Adoption Platform

**Welcome to Assignment 6 !!!**
In this assignment You have to create a pet adoption platform where users can browse and adopt pets. We will provides you APIs to fetch pet-related data such as all pets, categories of pets, and specific pet details , pet data based on category

## Key Requirements

### 1. **Navbar**

- Implement the navbar as per the Figma design. <!-- * Done -->
- Ensure it is responsive across Desktop, Tablet, and Mobile devices. <!-- * Done -->
- The navbar should collapse into a mobile menu on smaller screens. <!-- * Done -->

### 2. **Banner Section**

- Design the banner section as per Figma design. <!-- * Done -->
- Include a "View More" button that, when clicked, scrolls down to the “Adopt Your Best Friend” section. <!-- * Done -->
- Ensure the banner is fully responsive. <!-- * Done -->

### 3. **Adopt Your Best Friend Section**

- **Left Side**:
  - Display 4 dynamic categories below the section title and subtitle, fetched from the provided API. <!-- * Done -->
  - Add a "Sort By Price" button on the right, with a subtitle on the left, as per the design. <!-- * Done -->
  - By default, show all available pets, with the active category styled according to Figma. <!-- * Done -->
  - After clicking on a category, fetch and display pets from that category in a grid layout. <!-- * Done -->
  - If no pets are available for a category, show a meaningful message. <!-- * Done -->
  - Each card must display the following: <!-- * Done -->
    - Thumbnail/Image <!-- * Done -->
    - Pet Name <!-- * Done -->
    - Breed <!-- * Done -->
    - Birth Date <!-- * Done -->
    - Gender <!-- * Done -->
    - Price <!-- * Done -->
    - Buttons: "Like", "Adopt", and "Details" <!-- * Done -->
  - If any field is missing from the API response, handle it by displaying a placeholder or meaningful message. <!-- * Done -->
- **Right Side**:
  - Clicking the "Like" button should add the pet's thumbnail to the right-side grid. <!-- * Done -->
  - Display a 2-column layout for liked pet thumbnails. <!-- * Done -->

### 4. **Modal Window**

- When the "Details" button is clicked, open a modal that displays all pet information like figma <!-- * Done -->
- The modal should close when the user clicks close button. <!-- * Done -->

### 5. **Footer**

- Implement the footer as per the Figma design. <!-- * Done -->
- Ensure it is responsive. <!-- * Done -->

### 6. **Responsive Design**

- The entire platform must be responsive and functional on Desktop, Tablet, and Mobile devices. <!-- * Done -->
- Use Tailwind CSS breakpoints for responsiveness. <!-- * Done -->

## Challenges

### 1. **Loading Spinner**

- Display a loading spinner for at least 2 seconds when fetching data from the API. <!-- * Done -->

### 2. **Sort by Price**

- Implement sorting functionality for pets. When the "Sort by Price" button is clicked, sort pets in descending order based on price . sorting on active category is recommended but if you can sort all the data you will get full mark for this requirement. <!-- * Done -->

### 3. **Adopt Button Behavior**

- Implement an adoption process. When the "Adopt" button is clicked, show a countdown (3, 2, 1) and then change the button text to "Adopted." <!-- * Done -->

### 4. **Handle Null or Undefined Values**

- If any values from the API (e.g., pet breed, birth date) are null or undefined, display a placeholder or relevant message instead of leaving it blank. <!-- * Done -->

## 5. A beautiful README.md File

Ensure the final project includes a `README.md` file with the following details: <!-- * Done -->

- Project name.
- Short description of the project.
- 5 key features of the project.
- ES6 features used.
- Live link to the deployed project.
