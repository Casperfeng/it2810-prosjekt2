import React from 'react'
import './HistoryMenu.css';
class HistoryMenu extends React.Component { //TODO: Useless constructor?
  constructor(props) {
    super(props);
  }
  undoColor() {
    return this.props.historyIndex > 1 ? "white" : "#444444";
  }

  redoColor() {
    return this.props.historyIndex < this.props.historySize ? "white" : "#444444";
  }

  render() {
    return <div className="historymenu">
      <svg className="historyBtn" onClick = {this.props.handleUndo}>
        <polygon fill = {this.undoColor()} 
        points="25,15 25,22 41,22 41,38 25,38 25,45 5,30"/>
      </svg>
      <svg className="historyBtn" onClick = {this.props.handleRedo}>
        <polygon fill = {this.redoColor()}
        points="20,15 20,22 4,22 4,38 20,38 20,45 40,30"/>
      </svg>
    </div>
  }
}

export default HistoryMenu;