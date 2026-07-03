module.exports = async (p) => {
  console.log("Installing dependencies...");
  // Install the python requirements using pip
  await p.install('requirements.txt', { pip: true });
  console.log("Installation complete!");
};

