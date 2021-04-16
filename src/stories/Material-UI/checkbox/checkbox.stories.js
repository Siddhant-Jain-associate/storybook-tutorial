import React from 'react';
import CheckBox from './checkbox';
import CheckBoxwithLabel from './checkboxwithlabels';
export default{
    title:"Material-UI/Checkbox",
    components:CheckBox,
    argTypes:{
        color:{
            control:{
                type:'select',
                options:['default','primary','secondary']
            }
        },
        disabled:{
            control:{
                type:'radio',
                options:[true,false]
            }
        },
        size:{
            control:{
                type:'radio',
                options:['small','medium']
            }
        }
    }
}

const CheckBoxTemplate = (args)=><CheckBox {...args} />
const CheckBoxwithLabelTemplate = (args)=><CheckBoxwithLabel {...args}/>

export const SimpleCheckbox = CheckBoxTemplate.bind({});
SimpleCheckbox.args={
    size:"small",
    checked:false,
}

export const CheckboxWithlabels = CheckBoxwithLabelTemplate.bind({});
CheckboxWithlabels.args={
    size:"medium",
    checked:true,
    label:"Custom Icons"
}

export const indeterminateCheckbox = CheckBoxTemplate.bind({});
indeterminateCheckbox.args={
    size:"'small",
    checked:true,
    indeterminate:true,
}