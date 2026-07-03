
module.exports = async (p) => {
  console.log("Installing requirements...");
  
  // Install python dependencies via pip
  await p.install('requirements.txt', { pip: true });
  
  console.log("Installation complete!");
};
