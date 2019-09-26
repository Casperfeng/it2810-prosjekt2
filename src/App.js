import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Container from './components/Container/Container.js';

function App() {
  //Returns the locally stored category (svgIndex, poemIndex, audioIndex, tabIndex)
  //If no categories are found, return the default (0,0,0,0)
  const loadCategories = () => {
    const data = localStorage.getItem('category');
    if (data === null) return [0, 0, 0, 0];
    return data.split(',').map(e => parseInt(e));
  };
  const categories = loadCategories();

  const [svg, setSvg] = useState('');
  const [poem, setPoem] = useState('');
  const [audio, setAudio] = useState('');
  const [svgs, setSvgs] = useState([
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', '']
  ]);
  const [poems, setPoems] = useState([
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', '']
  ]);
  const [svgIndex, setSvgIndex] = useState(categories[0]);
  const [poemIndex, setPoemIndex] = useState(categories[1]);
  const [audioIndex, setAudioIndex] = useState(categories[2]);
  const [tabIndex, setTabIndex] = useState(categories[3]);
  const [historySize, setHistorySize] = useState(0);
  const [historyIndex, setHistoryIndex] = useState(0);

  //Loads the svg corresponding to the svgIndex & tabIndex
  useEffect(() => {
    if (svgs[svgIndex][tabIndex] === '') {
      const categories = ['autumn', 'sommer', 'winter'];
      fetch('media/svg/' + categories[svgIndex] + (tabIndex + 1) + '.svg')
        .then(r => r.text())
        .then(text => {
          const newSvgs = svgs;
          newSvgs[svgIndex][tabIndex] = text;
          setSvgs(newSvgs);
          setSvg(text);
        })
        .catch(error => console.log(error));
    } else setSvg(svgs[svgIndex][tabIndex]);
  }, [svgIndex, svgs, tabIndex]);
  //Loads the poem corresponding to the poemIndex & tabIndex
  useEffect(() => {
    if (poems[poemIndex][tabIndex] === '') {
      const categories = ['cat', 'dog', 'love'];
      fetch('media/poems/' + categories[poemIndex] + (tabIndex + 1) + '.json')
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
          newPoems[poemIndex][tabIndex] = 'Something wrong happened';
          setPoems(newPoems);
        });
    } else setPoem(poems[poemIndex][tabIndex]);
  }, [poemIndex, poems, tabIndex]);
  //Loads the audiopath corresponding to the audioIndex & tabIndex
  useEffect(() => {
    const categories = ['japanese', 'laugh', 'music'];
    setAudio(
      'media/sounds/' + categories[audioIndex] + (tabIndex + 1) + '.mp3'
    );
  }, [audioIndex, tabIndex]);

  //Whenever the category is changed, save it to localStorage
  //and save it to sessionStorage if it is new (not a undo or redo)
  useEffect(() => {
    const data = [svgIndex, poemIndex, audioIndex, tabIndex].join();
    //If new data(category) is found, save it to sessionStorage
    if (sessionStorage.getItem('history' + historyIndex) !== data) {
      const size = historyIndex + 1;
      setHistoryIndex(size);
      setHistorySize(size);
      sessionStorage.setItem('history' + size, data);
    }
    localStorage.setItem('category', data);
  }, [svgIndex, poemIndex, audioIndex, tabIndex, historyIndex]);

  const handleUndo = () => {
    if (historyIndex > 1) updateHistory(historyIndex - 1);
  };

  const handleRedo = () => {
    if (historyIndex < historySize) updateHistory(historyIndex + 1);
  };

  //Loads the category from the corresponding historyIndex
  const updateHistory = newIndex => {
    setHistoryIndex(newIndex);
    const history = sessionStorage.getItem('history' + newIndex);
    const indexes = history.split(',').map(e => parseInt(e));
    setSvgIndex(indexes[0]);
    setPoemIndex(indexes[1]);
    setAudioIndex(indexes[2]);
    setTabIndex(indexes[3]);
  };

  return (
    <div className='App'>
      <Header
        svgIndex={svgIndex}
        poemIndex={poemIndex}
        audioIndex={audioIndex}
        onSvgIndexChanged={setSvgIndex}
        onPoemIndexChanged={setPoemIndex}
        onAudioIndexChanged={setAudioIndex}
        handleUndo={handleUndo}
        handleRedo={handleRedo}
        historyIndex={historyIndex}
        historySize={historySize}
      />
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
