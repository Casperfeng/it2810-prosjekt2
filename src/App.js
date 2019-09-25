import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Container from './components/Container/Container.js';


function App() {
  const [svg, setSvg] = useState("");
  const [poem, setPoem] = useState("");
  const [audio, setAudio] = useState("");
  const [svgs, setSvgs] = useState([["", "", "", ""], ["", "", "", ""], ["", "", "", ""]]);
  const [poems, setPoems] = useState([["", "", "", ""], ["", "", "", ""], ["", "", "", ""]]);
  const [svgIndex, setSvgIndex] = useState(0);
  const [poemIndex, setPoemIndex] = useState(0);
  const [audioIndex, setAudioIndex] = useState(0);
  const [tabIndex, setTabIndex] = useState(0);
  const [historySize, setHistorySize] = useState(0);
  const [historyIndex, setHistoryIndex] = useState(0);

  useEffect(() => {
    if (svgs[svgIndex][tabIndex] === "") {
      const categories = ["autumn", "sommer", "winter"];
      fetch("media/svg/" + categories[svgIndex] + (tabIndex + 1) + ".svg")
        .then(r => r.text())
        .then(text => {
          const newSvgs = svgs;
          newSvgs[svgIndex][tabIndex] = text;
          setSvgs(newSvgs);
          setSvg(text);
        })
        .catch(error => console.log(error));
    } else
      setSvg(svgs[svgIndex][tabIndex])
  }, [svgIndex, svgs, tabIndex])

  useEffect(() => {
    if (poems[poemIndex][tabIndex] === "") {
      const categories = ["cat", "dog", "love"];
      fetch("media/poems/" + categories[poemIndex] + (tabIndex + 1) + ".json")
        .then(res => res.json())
        .then(result => {
          const text = result.text;
          const newPoems = poems;
          newPoems[poemIndex][tabIndex] = text;
          setPoems(newPoems);
          setPoem(text);
        })
        .catch(error => {
          const newPoems = poems;
          newPoems[poemIndex][tabIndex] = "Something wrong happened";
          setPoems(newPoems);
        })
    } else
      setPoem(poems[poemIndex][tabIndex])
  }, [poemIndex, poems, tabIndex])

  useEffect(() => {
    const categories = ["japanese", "laugh", "music"] 
    setAudio("media/sounds/" + categories[audioIndex] + (tabIndex + 1) + ".mp3");
  }, [audioIndex, tabIndex])

  useEffect(() => {
    let data = [svgIndex, poemIndex, audioIndex,tabIndex].join();
    //If new data is found, add it to undostack
    if (sessionStorage.getItem("history" + historyIndex) != data){
      let size = historyIndex + 1;
      setHistoryIndex(size);
      setHistorySize(size);
      sessionStorage.setItem("history" + size, [svgIndex,poemIndex,audioIndex,tabIndex].join());
    }
  }, [svgIndex, poemIndex, audioIndex, tabIndex])

  const handleUndo = () => {
    if (historyIndex > 1)
      updateHistory(historyIndex - 1);
  }

  const handleRedo = () => {
    if (historyIndex < historySize)
      updateHistory(historyIndex + 1);
  }

  const updateHistory = (newIndex) => {
    setHistoryIndex(newIndex)
    let history = sessionStorage.getItem("history" + newIndex);
    let indexes = history.split(",").map(e => parseInt(e));
    setSvgIndex(indexes[0]);
    setPoemIndex(indexes[1]);
    setAudioIndex(indexes[2]);
    setTabIndex(indexes[3]);
  }


  return (
    <div className="App">
      <Header
        svgIndex={svgIndex}
        poemIndex={poemIndex}
        audioIndex={audioIndex}
        onSvgIndexChanged={setSvgIndex}
        onPoemIndexChanged={setPoemIndex}
        onAudioIndexChanged={setAudioIndex} 
        handleUndo = {handleUndo}
        handleRedo = {handleRedo}
        historyIndex = {historyIndex}
        historySize = {historySize}/>
      <Container
        svg={svg}
        poem={poem}
        audio={audio}
        onTabIndexChanged={setTabIndex}
        tabIndex={tabIndex}
      />
    </div>
  );
}

export default App;
