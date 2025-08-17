


const fn = async (n) => { 
  await new Promise(res => setTimeout(res, 100)); 
  return n * n; 
}
const inputs = [5]
const t = 50


