const multer = require('multer')
const fs = require('fs')

exports.keyUpload = 'image'

exports.config = {
    // save date via storage
    storage: multer.diskStorage({
        // create destination file
        destination: (req, file, next) => {
            const folder = './images/'            
            //  if have no folde, it will create asap
            if (!fs.existsSync(folder)) {
                fs.mkdirSync(folder)
            }
            next(null, folder)
        },
        // config file name , when save
        filename: (req, file, next) => {
            const ext = file.mimetype.split('/')[1] // get surname file (import)
            next(null, `${file.fieldname}-${Date.now()}.${ext}`) // change name file and join file surname
        }
    }),
    // set limit image ( byte )
    limits: {
        fieldSize: 1024 * 1024 * 10,
    },
    fileFilter(req, file, next) {
        const image = file.mimetype.startsWith('image/')
        if(image) { // check image only
            next(null, true)
        } else {
            next({ message: "File type not supported"}, false)
        }
    }
}