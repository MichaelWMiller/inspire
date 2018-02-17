function ImageController() {
    //Your ImageService is a global constructor function what can you do here if you new it up?
    var imageService = new ImageService()


    this.getImage = function getImage() {
        debugger
        imageService.getImage(updateImage)
    }

    function updateImage(imgObj) {
        var largeImage = imgObj.large_Image
            //var largeImage = "https://splashbase.s3.amazonaws.com/moveast/large/tumblr_o5y039e0vg1tomxvuo10_1280.jpg"
        document.body.style.backgroundImage = largeImage
    }

    //getImage()
}