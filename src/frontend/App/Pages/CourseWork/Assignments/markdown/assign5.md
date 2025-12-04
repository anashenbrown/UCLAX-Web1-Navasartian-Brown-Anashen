### Assignment 5: In React, what are the different ways we can link to resources?

In React, you can link to resources in different ways depending on where the files are stored. Files inside the src folder are usually imported directly (e.g., import img from "./img.png"), while files in the public folder are accessed with root-relative paths like /img.png. Document-relative paths (like ./img.png) can also be used but are less reliable because they depend on the component’s folder structure.
