export default function async(vals) {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve(vals.reduce((total, val) => total + val, 0)); 
    }, 700);
  }) 
}