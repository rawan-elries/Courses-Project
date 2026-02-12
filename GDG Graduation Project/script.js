async function getData()
{
  const response = await fetch("./data.json");
  const data = await response.json();
  return data;
}

async function renderCourses()
{
  const data = await getData();
  const container = document.getElementById("courses");

  container.innerHTML = data.courses.map(course => `
    <div class="coursecard">
      <img src="${course.image}">
      <h3>${course.title}</h3>
      <p>Mentor: ${course.mentor}</p>
      <p>Category: ${course.category}</p>
      <p>Price: $${course.price}</p>
      <p>⭐ ${course.rating}</p>
    </div>
  `).join("");
}

async function renderMentors()
{
  const data = await getData();
  const container = document.getElementById("mentors");

  container.innerHTML = data.mentors.map(mentor => `
    <div class="mentorcard">
      <img src="${mentor.image}">
      <h3>${mentor.name}</h3>
      <p>${mentor.jobTitle}</p>
      <p>⭐ ${mentor.rating}</p>
    </div>
  `).join("");
}

async function renderTestimonials()
{
  const data = await getData();
  const container = document.getElementById("testimonials");

  container.innerHTML = data.testimonials.map(item => `
    <div class="testimonialcard">
      <img src="${item.image}">
      <h4>${item.name}</h4>
      <p>${item.job}</p>
      <p>"${item.comment}"</p>
      <p>⭐ ${item.rating}</p>
    </div>
  `).join("");
}

renderCourses();
renderMentors();
renderTestimonials();


const productGrid= document.querySelector('.product-grid')
const nextArrow= document.querySelector('.next')
const prevArrow= document.querySelector('.prev')


// nextArrow.addEventListener('click' , ()=>
// {
//   productGrid.scrollLeft+=270
// })


// prevArrow.addEventListener('click' , ()=>
// {
//   productGrid.scrollLeft-=270
// })


const productsList = document.getElementById('products-list');

async function data() 
{
    try 
    {
        const response = await fetch('./data.json');
        const data = await response.json();

        if(data.courses)
          data.courses.slice(0, 10).map(course => 
          {
            const element = document.createElement('li');
            let content = '';

            if (course.image)
                content += `<div class="img-container"> <img src="${course.image}" alt="${course.title || course.name}"></div>`;

            content += `<div class="info">`;
            if (course.category) content += `<span class="category">${course.category}</span>`;
            if (course.title) content += `<h4>${course.title}</h4>`;
            else if (course.name) content += `<h4>${course.name}</h4>`;
            content += `</div>`;

            element.innerHTML = content;
            productsList.appendChild(element);
            return 0;
        });

        if(data.mentors)
          data.mentors.slice(0, 10).map(mentor =>
          {
            const element = document.createElement('li');
            let content = "";

            if (mentor.image)
              {
                content += `
                    <div class="img-container">
                        <img src="${mentor.image}" alt="${mentor.title || mentor.name}">
                    </div>
                `;
            }

            content += `<div class="info">`;
            if (mentor.category) content += `<span class="category">${mentor.category}</span>`;
            if (mentor.title) content += `<h4>${mentor.title || mentor.name}</h4>`;
            content += `</div>`;

            element.innerHTML = content;
            productsList.append(element);
            return 0;
        });

       if(data.testimonials)
         data.testimonials.slice(0, 10).map(testimonial =>
          {
            const element = document.createElement('li');
            let content = "";

            if (testimonial.image)
              {
                content += `<div class="img-container"><img src="${testimonial.image}" alt="${testimonial.title || testimonial.name}"></div>`;
              }

            content += `<div class="info">`;
            if (testimonial.category) content += `<span class="category">${testimonial.category}</span>`;
            if (testimonial.title) content += `<h4>${testimonial.title || testimonial.name}</h4>`;
            content += `</div>`;

            element.innerHTML = content;
            productsList.appendChild(element);
            return 0;
        });

    } 
    catch (error)
    {
        console.error(error);
    }
}

data();