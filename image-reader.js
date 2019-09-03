const ImageReader = class ImageReader {};
  
ImageReader.readFile = (input, previewElement = null) => {
    return new Promise((resolve, reject) => {
        let file = input.files[0];
    
        let reader = new FileReader();
    
        reader.readAsDataURL(file);
        
        reader.onerror = error => reject(error);

        if (ImageReader.parameterIsElement(previewElement))  {
            previewElement.innerHTML = `<img src='https://upload.wikimedia.org/wikipedia/commons/d/de/Ajax-loader.gif'/>`;
        }
        else {
            console.warning(`The second argument to ImageReader.readFile should be a valid HTML element. '${previewElement.nodeName}' received instead.`);
        }
    
        reader.onload = () => {
            base64image = reader.result;
            
            ImageReader.parameterIsElement(previewElement) && (previewElement.innerHTML = `<img src='${base64image}'/>`);
            
            resolve({
                message: "Image read successfully",
                file,
                base64image,
                blob: ImageReader.convertbase64ToBlob(base64image)
            });
        };
    });
}

ImageReader.parameterIsElement = (element) => {
    return (
        typeof HTMLElement === "object" ? element instanceof HTMLElement :
          element && typeof element === "object" && element !== null && element.nodeType === 1 && typeof element.nodeName === "string"
    );
}

ImageReader.convertbase64ToBlob = (base64image) => {
    let blob = new Blob([base64image], {type: 'text/plain'});
    let imageBlob = new FormData();
    imageBlob.append('data', blob, "Image.txt");
    return imageBlob;
}