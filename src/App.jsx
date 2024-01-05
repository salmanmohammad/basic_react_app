/*import coreImg from './assets/components.png';
import confImg from './assets/config.png';
import stateImg from './assets/state-mgmt.png';
import jsxImg from './assets/jsx-ui.png';*/

import { useState, Fragment } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept  from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
import { EXAMPLES } from './data.js';
function App() {
 const [selectedTopic, updateSelectedTopic] =  useState();

  let tabContent = <p>Please select topic</p>;

  if(selectedTopic)
  {
    tabContent = <div id="tab-content">
    <h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>{EXAMPLES[selectedTopic].code}</code>
    </pre>
</div>;
  }
  function handleSelect(selectedButton){
    console.log(selectedButton + " Button clicked");
    updateSelectedTopic(selectedButton);
  }
  return (
    <>    
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* simple way to use props 
            <CoreConcept title="Components" description="The core UI building blocks" img={coreImg}/>
            <CoreConcept title="Props" description="Send data between component and UI element" img={jsxImg}/>
            <CoreConcept title="Configs" description="Do the applkication configuration" img={confImg}/>
            <CoreConcept title="State" description="Manage state" img={stateImg}/>
          */}

          {/* another way to use props */}
          { /*
          <CoreConcept {...CORE_CONCEPTS[0]} />
          <CoreConcept {...CORE_CONCEPTS[1]} />
          <CoreConcept {...CORE_CONCEPTS[2]} />
          <CoreConcept {...CORE_CONCEPTS[3]} />
        */}

          {/* dynamically repeat the element via array */}
          { CORE_CONCEPTS.map((coreItem) =>  <CoreConcept key= {coreItem.title} {...coreItem} />  )}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'}  onSelect={() => handleSelect('components')}>Component</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic ==='props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state') }>State</TabButton>
          </menu>

          {/* one way to show content conditionally */}
          {/*{ !selectedTopic ? <p>Please select Topic</p> : <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
        </div> } */}

        {tabContent}
         
        </section> 
      </main>
    </>
  );
}

export default App;
