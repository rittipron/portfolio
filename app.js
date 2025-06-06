
function renderTechStack(data, elementId) {
  const container = document.getElementById(elementId);
  if (!container) return;

  data.forEach(item => {
    const html = `
        <img
            class="max-h-12 w-full object-contain lg:col-span-1"
            src="./images/techstack/${item.src}"
            alt="${item.alt}"
            width="${item.width}"
            height="${item.height}"
            />
    `;
    container.insertAdjacentHTML("beforeend", html);
  });

   renderPJGitHub(frontend, "frontend");
   renderPJGitHub(backend, "backend");
  
}


function renderPJGitHub(data, elementId) {
  const container = document.getElementById(elementId);
  if (!container) return;

  data.forEach(item => {
    const html = `
        <article
                class="flex max-w-xl flex-col items-start justify-between"
              >
                <div
                  class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
                >
                  <a class="relative flex items-center gap-x-4">
                    <img
                      src="./images/techstack/${item.img}"
                      alt=""
                      class="size-10 rounded-full bg-gray-50"
                    />
                    <div class="text-sm/6">
                      <h5
                        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
                      >
                        ${item.name}
                      </h5>
                    </div>
                  </a>
                  <p class="my-3 font-normal text-gray-700 dark:text-gray-400">
                    ${item.description}
                  </p>
                  <a
                    href="${item.link}"
                    target="_blank"
                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </article>
    `;
    container.insertAdjacentHTML("beforeend", html);
  });
}


renderTechStack(tech, "techstack");
