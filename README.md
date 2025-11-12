
# Mercedes-Benz Kazakhstan - Project Documentation

## Project Overview

This is the official website for **Mercedes-Benz Kazakhstan**, showcasing a range of premium-class vehicles. The website provides detailed information about various sedan models, company news, and special offers.

## Project Structure

```
mercedes-benz-kazakhstan/
│
├── Mainpage.html
├── David/
│   ├── cclass.html
│   ├── special.html
│   ├── cclass.css
│   ├── special.css
│   ├── cclass.js
│   └── special.js
│
├── Bibarys/
│   ├── Eclass.html
│   ├── news.html
│   ├── Bibaryspartstyle.css
│   ├── e-class-scripts.js
│   └── news-scripts.js
│
├── Tairkhan/
│   ├── sclass.html
│   ├── buyNow.html
│   ├── sclass.css
│   ├── buyNow.css
│   ├── buyNow-custom.css
│   ├── sclass.js
│   └── buyNow.js
│
├── Yeraly/
│   └── Mainpage.html
│
├── assets/
│   ├── img/
│   ├── icons/
│   └── fonts/
│
├── navbar.css
├── navbar.js
├── signup.html
├── login.html
└── README.md
```

## Technology Stack

### Frontend Technologies

* **HTML5**: For structuring the content.
* **CSS3**: Used for styling and layout, including custom properties (CSS variables) for dynamic theme switching.
* **JavaScript**: For implementing interactive features and client-side logic.
* **Bootstrap 5.3**: A framework for building responsive, mobile-first websites.
* **jQuery 3.7.1**: For handling DOM manipulation and simple animations.

### Key Features

* **Responsive Web Design**: Ensures that the website is fully functional on any device, from smartphones to desktops.
* **Light/Dark Theme Support**: Allows users to toggle between light and dark themes based on their preference.
* **Interactive Galleries**: Galleries with carousels and flip cards for showcasing Mercedes-Benz models.
* **Form Validation**: Real-time form validation to ensure user input is accurate.
* **Local Storage Integration**: Preserves user preferences (e.g., theme choice) even after a page refresh.


## Installation & Setup

### Requirements

* **Modern web browser** with support Chrome.


### Running the Project

1. **Clone the repository**:

   ```bash
   https://github.com/ETairkhan/FrontendAitu.git
   ```

## Website Pages

### Main Pages

* **Main Page** (`Mainpage.html`) - Brand introduction and navigation to other sections.
* **C-Class Sedans** (`cclass.html`) - Detailed information about the C-Class models.
* **E-Class Sedans** (`Eclass.html`) - Overview of the E-Class sedans.
* **S-Class Sedans** (`sclass.html`) - Luxury sedan showcase.
* **News** (`news.html`) - Latest updates and search functionality for news articles.
* **Special Offers** (`special.html`) - Promotions, credit programs, and offers from Mercedes-Benz.
* **Contact Form** (`buyNow.html`) - Form to inquire about purchasing and available offers.
* **Authentication** (`signup.html`, `login.html`) - User registration and login functionality.

## Core Functionality

### Navigation & UI

* **Responsive navbar with theme toggle**: The navigation bar adapts to different screen sizes. A theme toggle button allows users to switch between light and dark modes.

  * **How it works**: When the user clicks the theme toggle button, the website switches between light and dark modes using **CSS custom properties**.

* **Smooth scrolling and progress indicators**: Scrolling between sections is smooth, and a progress bar at the top indicates how far along the user is on the page.

  * **How it works**: The smooth scrolling feature improves user experience by creating fluid transitions between sections.

* **Mobile-friendly navigation**: The navbar collapses into a hamburger menu on smaller screens, making it easy to navigate the site on mobile devices.

### Content Display

* **Interactive image galleries with carousels**: Image carousels display pictures of various Mercedes-Benz models, allowing users to easily browse through them.

  * **How it works**: Clicking on the carousel's "next" and "previous" buttons allows users to cycle through images.

* **3D flip cards for model configurations**: Hovering over cards displaying car models causes them to flip, revealing additional information about the configuration, features, and price.

  * **How it works**: This is achieved using **CSS transitions** and **transformations** to create a smooth flip effect when users hover over the cards.

* **Accordion FAQ sections**: A collapsible FAQ section allows users to expand and collapse answers to frequently asked questions.

  * **How it works**: The accordion uses JavaScript to toggle visibility of answers, making it easy to organize and display large amounts of information without clutter.

* **Hover effects and animations**: Hover effects such as enlarging images or changing text color provide visual feedback to users.

  * **How it works**: **CSS hover** properties are used to trigger animations when the user interacts with certain elements.

### User Interaction

* **Form validation with real-time feedback**: Forms on the site provide immediate feedback if the user enters incorrect or incomplete information.

  * **How it works**: JavaScript validates each form field as the user types or submits the form, ensuring that all data entered is correct before submission.

* **Star rating system**: Users can rate their experiences with different car models using a star rating system, which helps others gauge the quality of the product.

  * **How it works**: JavaScript handles user input, displaying the selected rating in real-time.

* **Search functionality with highlighting**: A search bar allows users to find specific content on the website, with matching results highlighted for easy viewing.

  * **How it works**: The search function uses JavaScript to filter through content and highlight matching text.

* **Theme preference persistence**: The website remembers the user's theme preference (light or dark mode) even after they refresh or revisit the site.

  * **How it works**: **LocalStorage** is used to store the user's theme preference, which is then applied when the site is reloaded.

### Theme System

* **Light and dark mode support**: The website supports both light and dark modes, providing users with a customizable experience based on their preference.

  * **How it works**: Users can switch between themes via a toggle button, and their preference is saved in **localStorage** for future visits.

* **CSS custom properties for consistent theming**: CSS variables are used to manage colors, fonts, and other design elements in one place, making it easier to adjust the theme globally.

  * **How it works**: Changing the values of CSS custom properties (like `--bg-body` and `--text`) adjusts the entire theme dynamically.

* 

  * **How it works**: **CSS media queries** (`prefers-color-scheme`) are used to detect the system's theme preference.

* **Local storage for user preferences**: User settings such as theme preference are saved in **localStorage**, ensuring that these preferences persist between visits.

  * **How it works**: When a user selects a theme, it's stored in **localStorage** and automatically applied the next time the user visits the site.

## Responsive Design

### Breakpoints

* **Mobile**: < 576px
* **Tablet**: 576px - 991px
* **Desktop**: ≥ 992px

### Adaptive Features

* **Flexible grid layouts**: The layout adjusts to fit the screen size, whether on a mobile device, tablet, or desktop.
* **Responsive typography**: Font sizes scale depending on the screen size to ensure readability on all devices.
* **Adaptive images**: Images are resized and optimized based on the user's screen size to improve loading times and performance.
* **Mobile-first approach**: The website is designed to work seamlessly on mobile devices first, ensuring a smooth experience for mobile users.

## JavaScript Modules

### Theme Management

```javascript
// Theme toggle functionality
function toggleTheme() {
    
}
```

### Form Handling

```javascript
// Form validation and submission
function validateForm(formData) {
    
}
```

### UI Components

```javascript
// Interactive elements
function initAccordions() {
    
}

function initGalleries() {
    // Controls image galleries and carousels
}
```

### Utilities

```javascript

const storage = {
    get: (key) => {},
    set: (key, value) => {},
    remove: (key) => {}
};
```


## Performance Features
* Optimized image loading
* CSS and JavaScript minification
* Efficient resource caching

## Development Team

### Team Members

* **Tairkhan** - S-Class pages, contact forms
* **David** - C-Class pages, special offers
* **Yeraly** - Main page architecture
* **Bibarys** - E-Class pages, news system

### Group Information

* **Group**: SE-2412
* **Project**: Mercedes-Benz Kazakhstan Website


