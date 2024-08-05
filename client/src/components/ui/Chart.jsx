import { React } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import { TreeCard, Img, ColoredDiv, CardTop, Name, Role, Empty } from "./styles";
import UserIcon from "../../assets/images/UserIcon.png";

function Chart(props){
  const {type} = props;

  function renderCard(subordinate){
    return(
      <TreeCard>
        <CardTop> 
          <Img src={UserIcon} />
          <Name>{subordinate.name}</Name>
          <Role>{subordinate.role || "Sem cargo"}</Role>
        </CardTop>
        <ColoredDiv></ColoredDiv>
      </TreeCard>
    )
  }

  function renderPairs(pairs){
    return pairs.map((pair) => (
      <TreeNode label={renderCard(pair)} key={pair.id} />
    ))
  }

  function renderNodesSubordinates(subordinates){
    return subordinates.map((subordinate) => (
      <TreeNode label={renderCard(subordinate)} key={subordinate.id} />
    ))
  }

  function renderNodesSecondLevel(subordinates){
    return subordinates.map((subordinate) => (
      <TreeNode label={renderCard(subordinate)} key={subordinate.id}>
        {subordinate.subordinates && renderNodesSecondLevel(subordinate.subordinates)}
      </TreeNode>
    ))
  }

  function renderChart(employee){
    switch(type){
      case "pairs":
        return (
          <>
            <Tree lineWidth={"2px"} nodePadding={"10px"}  lineBorderRadius={"10px"} label={<div />} key={employee.id}>
              {renderPairs(employee.pairs)}
            </Tree>
            {employee.pairs.length < 2 && <Empty>Não há pares. :(</Empty>} 
          </>
        );
      case "subordinates":
        return (
          <>
            <Tree lineWidth="2px" nodePadding="10px" lineBorderRadius="10px" label={renderCard(employee)} key={employee.id}>
              {renderNodesSubordinates(employee.subordinates)}
            </Tree>
            {employee.subordinates.length < 1 && <Empty>Não há colaboradores que são liderados por {employee.name}. :(</Empty>} 
          </>
        )
      case "second_level":
        return(
          <>
            <Tree lineWidth="2px" nodePadding="10px" lineBorderRadius="10px" label={renderCard(employee)} key={employee.id}>
              {renderNodesSecondLevel(employee.subordinates)}
            </Tree>
            {employee.subordinates.length < 1 && <Empty>Não há colaboradores que são liderados por {employee.name}. :(</Empty>} 
          </>
        )
    }
  }
  
  return (
    renderChart(props.employee)
  )
}

export default Chart;