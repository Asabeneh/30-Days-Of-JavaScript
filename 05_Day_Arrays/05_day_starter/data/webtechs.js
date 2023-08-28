const webTechs = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node', 
    'PHP', 'EastJS', 'SQL', 'SASS', 'AngolaJS'
]

const isSass = webTechs.includes('SASS');
if (isSass) {
    console.log('SASS is a CSS preprocessor');
} else {
    webTechs.push('SASS');
    console.log(webTechs);
}

//exo 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);