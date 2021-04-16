import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 725,
  },
});

export default function FileSystemNavigator() {
  const classes = useStyles();

  return (
    <TreeView
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
       
     <div style={{display:'flex',justifyContent:'space-between'}}>
         <span style={{color:"black",fontSize:"22px"}} >Frequently asked questions</span>
          
         <TreeItem nodeId="1" >
    
            <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est<br></br>minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p>
        
        </TreeItem>

     </div>
     <div style={{display:'flex',justifyContent:'space-between',marginTop:"30px"}}>
         <span style={{color:"black",fontSize:"22px"}} >Terms of services</span>
          
         <TreeItem nodeId="2" >
    
            <p>Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est<br></br>minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.</p>
        
        </TreeItem>

     </div>

 
    </TreeView>
  );
}
