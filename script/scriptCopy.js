function setUpEvents(){

    const contactList = document.getElementById("contact-list");
    const searchIcon = document.getElementById('search-icon');
   // const contactNames = document.querySelectorAll('.contactName');
    const closeDetails = document.getElementById('close-details');
    //const faSearch = document.getElementById("fa-search");
  
    function render() {
      contactList.innerHTML = "";
  
      for (var i = 0; i < contacts.length; i++) {
        var el = document.createElement("div");
        //console.log(el);
        el.innerHTML = contacts[i].name;
        //console.log(el.innerHTML);
        el.className = 'contactName';
        el.id = i;
        //console.log(el.id);
        el.onclick = e => {
          var contactId = parseInt(e.currentTarget.id);
          console.log(contactId);
          var contactDetails = document.getElementById('contactDetails');
          var favouriteClass = contacts[parseInt(e.currentTarget.id)].favourite ? "favourite" : "";
          contactDetails.innerHTML =
            "<span id='close-details'>x</span>" +
            "<span id='favourite' class='" + favouriteClass + "'>*</span>" +
            "<div>" + contacts[parseInt(e.currentTarget.id)].name + "</div>" +
            "<div>" + contacts[parseInt(e.currentTarget.id)].email + "</div>";
          contactDetails.setAttribute("class", "");
  
          document.getElementById('favourite').onclick = function (e) {
            contacts[contactId].favourite = !contacts[contactId].favourite;
  
            if (e.currentTarget.getAttribute("class") == "favourite") {
              e.currentTarget.setAttribute("class", "");
            } else {
              e.currentTarget.setAttribute("class", "favourite");
            }
          }
  
          document.getElementById('close-details').onclick = function () {
            contactDetails.innerHTML = "";
            contactDetails.setAttribute("class", "hidden");
          }
  
        };
  
        document.getElementById("contact-list").appendChild(el);
      }
  
      document.getElementById('contactFilter').onclick = function (e) {
        var contactNames = document.querySelectorAll('.contactName');
  
        if (e.currentTarget.innerText === "Visa alla") {
          e.currentTarget.innerText = "Filtrera favoriter"
          contactNames.forEach(function (node, i) {
            node.setAttribute("class", "contactName");
            contactDetails.style.display = "block";
            console.log("myNode", node);
          })
        } else {
          e.currentTarget.innerText = "Visa alla";
          contactNames.forEach(function (node, i) {
            if (contacts[i].favourite) {
              node.setAttribute("class", "contactName");
            } else {
              node.setAttribute("class", "hidden contactName");
            }
          })
        }
      };
  
  
      //search function
      searchIcon.addEventListener("click", (e) => { 
        const contactNames = document.querySelectorAll('.contactName');
        //console.log(contactNames)
        contactNames.forEach((node) => {
          var regexp = new RegExp(document.getElementById('search-txt').value.toLowerCase());
          if (regexp.test(node.innerText.toLowerCase())) {
            node.setAttribute("class", "contactName");
          } else {
            node.setAttribute("class", "hidden contactName");
          }
        })
  
      }) 
    }
    render();
  };
  
  
  window.onload = function () {
    setUpEvents();
  };
  