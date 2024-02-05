//The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

//Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"

function rgb(r, g, b) {
  const convertedR =
    r < 0 ? "00" : r > 255 ? "FF" : r.toString(16).padStart(2, 0);
  const convertedG =
    g < 0 ? "00" : g > 255 ? "FF" : g.toString(16).padStart(2, 0);
  const convertedB =
    b < 0 ? "00" : b > 255 ? "FF" : b.toString(16).padStart(2, 0);
  return (convertedR + convertedG + convertedB).toUpperCase();
}

console.log(rgb(256, -12, 50));
