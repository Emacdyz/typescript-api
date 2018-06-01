// src/games/color.ts

export const colorAllowed = ['red', 'blue', 'green', 'yellow', 'magenta'];

export const newGameColor = () => {
    return colorAllowed[Math.floor(Math.random()*colorAllowed.length)];
} 

export const colorIsValid = (colorUpdate) =>  {       
   if (colorAllowed.includes(colorUpdate)) return colorUpdate
}
 
