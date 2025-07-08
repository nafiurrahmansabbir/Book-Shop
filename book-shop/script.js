fetch('./public/allbooks.json')
  .then(response => {
    if (!response.ok) throw new Error("Failed to fetch JSON");
    return response.json();
  })
  .then(data => {
    // 🔹 Render first 4 books to #mangaGrid
    const mangaGrid = document.getElementById('mangaGrid');
    mangaGrid.innerHTML = data.slice(0, 4).map(manga => `
      <div class="bg-white rounded-lg shadow-md p-4 flex flex-col">
        <img src="${manga.image}" alt="${manga.title}" class="h-48 object-contain mb-4" />
        <h3 class="font-semibold text-lg">${manga.title}</h3>
        <p class="text-sm text-gray-500">By ${manga.author}</p>
        <p class="mt-2 text-sm">${manga.description}</p>
        <div class="mt-auto flex justify-between items-center pt-4">
          <span class="text-blue-600 font-bold">${manga.price}</span>
           <a href="details.html?id=${manga.id}" class="btn btn-sm btn-primary">Details</a>
        </div>
      </div>
    `).join('');

    // 🔹 Render books with category === "topBook" to #topbookGrid
    const topbookGrid = document.getElementById('topbookGrid');
    const topBooks = data.filter(book => book.category === "topBook");
    topbookGrid.innerHTML = topBooks.slice(0, 4).map(manga => `
      <div class="bg-white rounded-lg shadow-md p-4 flex flex-col">
        <img src="${manga.image}" alt="${manga.title}" class="h-48 object-contain mb-4" />
        <h3 class="font-semibold text-lg">${manga.title}</h3>
        <p class="text-sm text-gray-500">By ${manga.author}</p>
        <p class="mt-2 text-sm">${manga.description}</p>
        <div class="mt-auto flex justify-between items-center pt-4">
          <span class="text-blue-600 font-bold">${manga.price}</span>
            <a href="details.html?id=${manga.id}" class="btn btn-sm btn-primary">Details</a>
        </div>
      </div>
    `).join('');


    // 🔹 Render books with category === "islamic" to #islamicGrid
const islamicGrid = document.getElementById('islamicGrid');
const islamicBooks = data.filter(book => book.category.toLowerCase() === "islamic");

islamicGrid.innerHTML = islamicBooks.slice(0, 4).map(manga => `
  <div class="bg-white rounded-lg shadow-md p-4 flex flex-col">
    <img src="${manga.image}" alt="${manga.title}" class="h-48 object-contain mb-4" />
    <h3 class="font-semibold text-lg">${manga.title}</h3>
    <p class="text-sm text-gray-500">By ${manga.author}</p>
    <p class="mt-2 text-sm">${manga.description}</p>
    <div class="mt-auto flex justify-between items-center pt-4">
      <span class="text-blue-600 font-bold">${manga.price}</span>
      <a href="details.html?id=${manga.id}" class="btn btn-sm btn-primary">Details</a>
    </div>
  </div>
`).join('');


    
  })
  .catch(error => console.error('Fetch error:', error));



