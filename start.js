module.exports = async (p) => {
  console.log("Starting the Aspect Cropper...");
  await p.run({
    file: 'app.py',
    // Pinokio will automatically detect the port Gradio opens
  });
};
