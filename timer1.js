const ti = process.argv.slice(2);
if (ti.length === 0){
  console.log("we are exiting!there is no number")
  process.exit(22);
}
for (let i = 0; i < ti.length; i++) {
  let potentialNumber = Number(ti[i]) * 1000;
  if (potentialNumber  < 0 || isNaN(potentialNumber )) {
    continue;
  } 
  setTimeout(() => {
    process.stdout.write(`beeeping ${potentialNumber} \n`)}, potentialNumber)
}
