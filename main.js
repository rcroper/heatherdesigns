            const contact = document.querySelector('#contactlink');
            const events = document.querySelector('#eventslink');
            const about = document.querySelector('#aboutlink');
            const top= document.querySelector('#toplink');


            contact.onclick = function () {
                contact.classList.add("active");
                about.classList.remove("active");
                events.classList.remove("active");
                top.classList.remove("active");
            };
            events.onclick = function () {
                contact.classList.remove("active");
                about.classList.remove("active");
                events.classList.add("active");
                top.classList.remove("active");
            };
            about.onclick = function () {
                top.classList.remove("active");
                contact.classList.remove("active");
                about.classList.add("active");
                events.classList.remove("active");
            };
            top.onclick = function () {
                top.classList.add("active");
                contact.classList.remove("remove");
                about.classList.add("remove");
                events.classList.remove("remove");
            };