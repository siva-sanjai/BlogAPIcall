// Fetch data from the API
fetch('https://admin.processdrive.com/api/blogs')
  .then(response => response.json())  // Parse the response as JSON
  .then(data => {
    // Sort the data based on the updated_at date in descending order
    const latestBlogs = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at)).slice(0, 3);

    // Get the container where the posts will be displayed
    const postsContainer = document.getElementById('posts');

    // Loop through the latest 3 blogs and create a list of posts
    latestBlogs.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
      <div class="make-card">
        <div class="flex-container">
        
        <img class="dp" height="200px" width="360px"  src="${post.image}" alt="Blog Image"/>
        <h3 class="title-line">${post.title}</h3>
        <div class="profile">
          <img height="40px" width="40px" id="dp" src="${post.profile}" alt="Author Image">
          <h6><big><big>${post.published_date}</big></big></h6>
        </div>
        <div class="flex-container">
        <div>${post.short_content}</div>

        </div>
       
        <a href="blog-detail.html?slug=${post.slug}" class="read-more">Read More</a>

        </div>
          </div>
      `;
      postsContainer.appendChild(postElement);  // Append the post to the container
    });
  })
  // .catch(error => {
  //   console.error('Error:', error);  // Log any error that occurs during the fetch
  // });

// Helper function to format the date as 'day-month-year'
// function formatDate(dateString) {
//   const updatedAt = new Date(dateString);
  
//   const day = updatedAt.getDate();
//   const month = updatedAt.toLocaleString('en-US', { month: 'long' }); // Get full month name
//   const year = updatedAt.getFullYear();
  
//   // Add "th", "st", "nd", "rd" suffixes based on the date
//   const suffix = ['th', 'st', 'nd', 'rd'][(day % 10 > 3 || [11, 12, 13].includes(day % 100)) ? 0 : day % 10];

//   return `${day}${suffix} ${month} ${year}`;
// }

// function formatDate(dateString) {
//   const updatedAt = new Date(dateString);
//   return `${String(updatedAt.getDate()).padStart(2, '0')}-${String(updatedAt.getMonth() + 1).padStart(2, '0')}-${updatedAt.getFullYear()}`;
// }

