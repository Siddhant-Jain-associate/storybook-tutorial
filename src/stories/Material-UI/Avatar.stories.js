import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import AssignmentFolder from '@material-ui/icons/Assignment';


export default{
    title:'Material-UI/Avatar'
}

export const AvatarImages = () =>(
    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
)

export const iconAvatar = () =>{
    return( 
        <div><Avatar variant="square"><FolderIcon /></Avatar>
        <Avatar varaint="rounded"><AssignmentFolder/></Avatar></div>
    )
}