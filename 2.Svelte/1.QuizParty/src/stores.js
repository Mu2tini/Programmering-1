import { writable, derived } from 'svelte/store';

export const pointcounter = writable(0);
export const  Quiz= writable([{Question:"Hur m�nga ben har en anka",Options:["3","2","1"], RightOption:1}
,{Question:"Vem �r snurrespr�tt?",Options:["En kanin som gillar mor�tter","En anka som spottar mycket","En j�gare med vapen"], RightOption:0},{Question:"Vem �r Kalle anka?",Options:["En kanin som gillar mor�tter","En anka som spottar mycket","En j�gare med vapen"], RightOption:1 },{Question:"Vem �r Superman?",Options:["En man som kan krocka med ett t�g","Ett t�g","En m�ltid"], RightOption:0 },{Question:"Vem �r Kalle anka?",Options:["En kanin som gillar mor�tter","En anka som spottar mycket","En j�gare med vapen"], RightOption:1 }])

// export const getQuestion =  Quiz[0];
// export const getQuestion= function()

// 		{return  Quiz[0];
// 		}
// export const getQuestion = ()=>{
// 	return  Quiz[0];
// }

export const getPoints = derived(
	pointcounter,
	pointcounter => `Points: ${pointcounter}`
);