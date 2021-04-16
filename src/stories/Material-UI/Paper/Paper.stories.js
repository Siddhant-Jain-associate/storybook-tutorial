import React from 'react';
import Papers from './Paper';

export default {
    title:"Material-UI/Paper",
    components:"Papers",
    argTypes:{
        variant:{
            control:{
                type:'select',
                options:['outlined','elevation']
            }
        }
    }
}

const paperTemplate = (args)=><Papers {...args}/>
export const PaperWithMinElevation = paperTemplate.bind({});
PaperWithMinElevation.args={
    elevation:1,
    square:true
}
export const PaperWithMaxElevation = paperTemplate.bind({});
PaperWithMaxElevation.args={
    elevation:23,
    square:true
}
export const PaperWithSquare = paperTemplate.bind({});
PaperWithSquare.args={
    elevation:10,
    square:true
}
export const PaperWithoutSquare = paperTemplate.bind({});
PaperWithoutSquare.args={
    elevation:10,
    square:false
}