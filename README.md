# Testing out NCC by Zeit
## https://github.com/zeit/ncc

Node.js Compiler Collection is a compiler that combines all dependencies and code of a node project into one file. This allows smaller package size overall and quicker bootup time. It is as zero configuration as possible, all you have to do is run `ncc build index.js` and you will get a file with all npm modules and code together. The build file is output to `dist/index.js` by default so you can then run `node dist/index.js`. It works well for what I have done so far!
