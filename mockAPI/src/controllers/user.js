import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const userLogin = async(req,res) => {
  console.log("hi");
res.send("Hi");
}


export const getProducts=async(req,res) =>{

  res.header("Content-Type",'application/json');
  
  res.sendFile(path.join(__dirname, '../db/products.json'));
}