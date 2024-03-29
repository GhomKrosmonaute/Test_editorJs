module.exports = (image, req, res) => {

    // If no image submitted, exit
    if (!image){
        console.log('je suis dans le premier if')
        return res.sendStatus(400);
    } 

    // If does not have image mime type prevent from uploading
    if (!image.mimetype.startsWith("image")){
        console.log('je suis dans le deuxième if ')
        return res.status(400)        
    } 

    if(image.mimetype.startsWith("image")){
        const destructuring = image.name.split('.')

        const name = destructuring[0].split(' ').join('_')
        const extension = destructuring[1]

        image.name = (name + '_' + Date.now() + '.' + extension)

        const url = '/upload/'+image.name

        image.mv(__dirname+ '/upload/' + image.name)
        console.log('dans le dernier if : ',image)

        value_img_upload = {
            success: 1,
            file: {
                url
            }
        }

        return value_img_upload
    }
    
}