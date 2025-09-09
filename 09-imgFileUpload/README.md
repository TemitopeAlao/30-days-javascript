# Image Upload Preview

This project demonstrates how to preview images in the browser immediately after selecting them from your computer, without uploading them to a server.

It uses:

- **HTML** for structure
- **CSS** for basic styling
- **JavaScript** for handling file input and generating temporary preview URLs with `URL.createObjectURL()`

---

## Features

- Select a file from your computer
- Instantly display the chosen image in the browser
- Simple and beginner-friendly implementation

---

## How It Works

1. The `<input type="file">` element lets you select files.
2. When a file is selected, it is available in `event.target.files`.
3. The first file is accessed with `event.target.files[0]`.
4. A temporary URL is created using `URL.createObjectURL()`.
5. This URL is assigned to an `<img>` tag’s `src` attribute to display the preview.

## Example Code

```js
function uploadFile(event) {
  if (event.target.files && event.target.files[0]) {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    image.src = imageURL;
  }
}
```

---

## Disclaimer

This project is **not originally mine**.
I’m using it for learning and practice purposes.
