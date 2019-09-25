import React from 'react'
import './HistoryMenu.css';
class HistoryMenu extends React.Component { //TODO: Useless constructor?
  constructor(props) {
    super(props);
  }
  undoColor() {
    return this.props.historyIndex > 1 ? "white" : "#222222"
  }

  redoColor() {
    return this.props.historyIndex < this.props.historySize ? "white" : "#222222"
  }

  render() {
    return <div className="historymenu">
      <svg className="historyBtn" onClick = {this.props.handleUndo}>
        <polygon fill = {this.undoColor()} 
        points="25,10 25,20 45,20 45,40 25,40 25,50 0,30"/>
      </svg>
      <svg className="historyBtn" onClick = {this.props.handleRedo}>
        <polygon fill = {this.redoColor()}
        points="20,10 20,20 0,20 0,40 20,40 20,50 45,30"/>
      </svg>
    </div>
  }
}

export default HistoryMenu;