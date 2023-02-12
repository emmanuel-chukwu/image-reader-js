# image-reader-js

Image Reader JS is simple Javascript library for reading file input (best for images) into base64, blob and File object.

The minified file is <960B.

# Usage
You need to get the file input element and a preview element (optional). The image will automatically be displayed in the preview element after the image is read (which happens lightning fast). At this point, only one input element can be read at a time and only one preview element is supported.

### Vanilla JS:

```
//include image-reader.min.js

let input = document.querySelector('#image-input');
let previewElement = document.querySelector('#image-preview');

ImageReader.readFile(input, previewElement)
  .then(resp => {
    console.log(resp)
  })
```
    
 # Arguments
 
```
input: A valid HTML file input element //required

previewElement: A valid HTML element in which preview image is rendered. A div or label is sufficient. //defaults to null
 ```

# Response
The promise returns the following object when successful.

    {
      message: "Image read successfully",
      file: //file object,
      base64image: //base64image,
      blog: //image blog
    }
 
If you have any ideas or new functionality that you would like to see included, please do not hesitate to send me an email at limbowe.me@gmail.com. I am always open to hearing from my users and am eager to learn about new ways to improve my offerings. Whether you have a suggestion for a new feature or simply want to provide feedback, I would love to hear from you. So, please don't hesitate to drop me a line at limbowe.me@gmail.com, and I will do my best to respond promptly and thoughtfully to your message. Thank you for your time and consideration!
