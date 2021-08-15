// GET THE REFERENCES
const links = document.querySelectorAll(".nav");
const container = document.querySelector(".dynamic-content");
let url = './partials/home.html';

// CREATE THE FUNCTION THAT WILL LOAD THE REQUESTED PARTIAL
// const loadContent ...
   /*
   IMPORTANT NOTES:
   loadContent RUNS EVERY TIME A LINK IS CLICKED.
   loadContent REQUIRES THE INPUT. THIS INPUT IS
   THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK.
   EVERY TIME A LINK IS CLICKED, urlFeed WILL GET 
   THE UPDATED PATH TO THE REQUESTED CONTENT.
   */
function loadContent() {
       // RUN THE fetch(urlFeed).then().then().catch()
            fetch(url)
            .then(function (rsp) {
                if (rsp.ok) {
                    return rsp.text();
                }
                // handle error
                throw new Error(rsp.statusText);
                })
                .then(function (data) {
                    container.innerHTML = data;
                })
                .catch(function (err) {
                    console.log(err.message);
                });
    // CLOSE YOUR FUNCTION loadContent HERE
    }

// CALL loadContent WITH THE CURRENT VALUE OF url 
loadContent(url);


// CREATE THE FUNCTION THAT WILL SELECT A PARTIAL:
// const selectContent ...
   // PREVENT DEFAULT BEHAVIOUR OF A LINK TAG
   // GET THE VALUE OF href ATTRIBUTE OF THE CLICKED LINK
   // CALL THE FUNCTION loadContent PROVIDING THE href
   // VALUE OF THE CLICKED LINK AS THE VALUE FOR THE PARAMETER
   // OF loadContent FUNCTION.
function selectContent(e) {
  e.preventDefault();
    let cntLink = e.target;
    url = cntLink.href;
    loadContent();

// CLOSE YOUR FUNCTION selectContent HERE
};
    
// REGISTER links FOR CLICK EVENT WITH selectContent AS EVENT HANDLER!
for (let i = 0; i < links.length; i++) {
    
    links[i].addEventListener("click", selectContent);
  };


