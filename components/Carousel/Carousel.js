class Carousel {
    constructor(carousel) {
        // assign this.carousel to the carousel DOM reference
        this.carousel = carousel

        // create a reference to the '.left-button' class in the this.carousel DOM reference       
        this.leftBtn = carousel.querySelector('.left-button')
        
        // create a reference to the '.right-button' class in the this.carousel DOM reference
        this.rightBtn = carousel.querySelector('.right-button')

        // create a reference to all of the images in the this.carousel DOM reference
        this.images = carousel.querySelectorAll('img')
        console.log(this.images)
        
        

    }
}

let carousel = document.querySelector('.carousel')
carousel = new Carousel(carousel)


/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
