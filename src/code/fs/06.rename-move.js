const fs = require('fs');
const path = require('path');

/**
 * fs.renameSync(oldPath, newPath)
 */
try {
  fs.renameSync(path.resolve(__dirname, '../../files/input.txt'), path.resolve(__dirname, '../../files/input-copy.txt'));
  console.log('Rename complete!');
} catch (error) {
  console.log('Rename failed!');
}

/**
 * fs.rename(oldPath, newPath, callback)
 */
fs.rename(path.resolve(__dirname, '../../files/input-copy.txt'), path.resolve(__dirname, '../../files/input.txt'), (err) => {
  if (err) {
    console.log('Rename failed!');
    return;
  }
  console.log('Rename complete!');
});
