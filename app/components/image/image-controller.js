function ImageController() {
    //Your ImageService is a global constructor function what can you do here if you new it up?
    var imageService = new ImageService()


    this.getImage = function getImage() {

        imageService.getImage(updateImage)
    }

    function updateImage(imgObj) {
        
        var largeImage = imgObj.large_url
         $('body').css('background-image', 'url("' + largeImage + '")')
     }

    //getImage()
}