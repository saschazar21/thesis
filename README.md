<div align="center">
<h1>A Selective Rendering Concept for Static Site Generators</h1>
<i>
Master's thesis, 2017<br />
Interactive Media<br />
University of Applied Sciences Upper Austria
</i>
<br />
<br />
<hr />
<br />
<br />
</div>

This is the source code for my Master's thesis, which was submitted to the [University of Applied Sciences Upper Austria, Campus Hagenberg](https://www.fh-ooe.at/en/hagenberg-campus/) in June 2017.

## Abstract

Whereas modern content management systems provide a solid environment
for dynamic content creating and editing, their dependency on external ser-
vices like database services or authentication providers often complicate
their abilities to scale. Additional duties for keeping them responsive in
larger ecosystems are therefore often responsible for slowing down the over-
all workflow of a developer.

Static site generators on the other hand offer an easy solution for steadily
growing websites. Their only task is to create a full-featured file structure,
which contains browser-readable HTML files that do not require any on-
the-fly rendering upon request. However, static site generators contain a
significant drawback, as the rendering mechanism normally cannot distin-
guish between already present files and new content. In fact, the build time
increases every time a new file is added to the source directory.

This Master’s thesis therefore tries to compensate the full extent of a
complete rebuild every single build cycle by providing a caching mechanism
based on a selective approach, together with a remotely working REST API
as wrapping interface for user-friendly interaction and improved division of
work.

## Prerequisites

A working TeX distribution is needed to compile the source code (e.g. _pdflatex_ for generating PDF outputs). Check the [docs](https://www.latex-project.org/get/) on how to install TeX for your operating system.

Furthermore, there are also some online services supporting editing and compiling LaTeX files. I was using [Overleaf](https://www.overleaf.com) right from the start and made good experiences with their service.

## Compile

If everything has been installed correctly, a simple `pdflatex ./_thesis.tex` should suffice for compiling the contents into a single `_thesis.pdf`.

## Disclaimer

A significant amount of the contents got deprecated throughout the years since their first introduction into this thesis. I consider it as the nature of web projects, which eventually will become deprecated due to new techniques replacing them as a constant, ongoing process.

Please always have the state-of-the-art in the beginning of 2017 in mind, when reading through the contents of this thesis.

## License

This work is published under the conditions of the [Creative Commons
License Attribution–NonCommercial–NoDerivatives (CC BY-NC-ND)](https://creativecommons.org/licenses/by-nc-nd/3.0/).

Copyright ©️ 2017 [Sascha Zarhuber](https://sascha.work)
