import React,{useState} from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '../Button/Button';

const Snackbars = (props)=>{

    const [open,setOpen] = useState(false);

    const openHandler = () =>{
        setOpen(true);
    }
    
    const closehandler=(reason)=>{
        if(reason==='clickway'){
            return;
        }
        setOpen(false);
    }
    console.log(props);

    return(
        <div>
            <Button clicked={openHandler} {...props}/>
            <Snackbar
                anchorOrigin={{
                    vertical:props.vertical,
                    horizontal:props.horizontal
                }}
                open={open}
                onClose={closehandler}
                message={props.message}
                autoHideDuration={props.second}
                action={
                    <Button clicked={closehandler} {...props}/>
                }
            >

            </Snackbar>
        </div>
    )
};


export default Snackbars;