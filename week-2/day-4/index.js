       // largest scope
       let position = 0;
           
        const nextSlide = function () {   // block scoped
            
            if (position <= -800) {
                position = 400
            }
            
            // grab the element from the DOM
            const imageSlider = document.getElementById('imageSlider')
            // decrement the position by the width of the image
            position -= 400;
            // access the style transform on the element and apply the position
            imageSlider.style.transform = `translateX(${position}px)`;
        }

       const previousSlide = function () {   // block scoped

            if (position >= 0) {
                position = -1200
            }

            // grab the element from the DOM
            const imageSlider = document.getElementById('imageSlider')
            // decrement the position by the width of the image
            position += 400;
            // access the style transform on the element and apply the position
            imageSlider.style.transform = `translateX(${position}px)`;
       }