import { React, useState } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import { TreeCard, Img, ColoredDiv, CardTop, Name, Role } from "./styles";
import UserIcon from "../../assets/images/UserIcon.png";

function Chart(props){
  
  function renderCard(subordinate){
    return(
      <>
        <TreeCard>
          <CardTop>
            <Img src={UserIcon} />
            <Name>{subordinate.name}</Name>
            <Role>{subordinate.role || "Sem cargo"}</Role>
          </CardTop>
          <ColoredDiv></ColoredDiv>
        </TreeCard>
      </>
    )
  }

  function renderNodes(subordinates){
    console.log(subordinates)
     
    return subordinates.map((subordinate) => (
      <TreeNode label={renderCard(subordinate)}>
        {subordinate.subordinates && renderNodes(subordinate.subordinates)}
      </TreeNode>
    ))
  }

  function renderTree(){
    return(
      <Tree lineWidth={'4px'} lineBorderRadius={'20px'} label={renderCard(props.employee)}>
        {renderNodes(props.employee.subordinates)}
      </Tree>
    )
  }


  return (
    renderTree()
  )
}

export default Chart;