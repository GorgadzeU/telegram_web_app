import {useEffect} from 'react'

const App = () => {
  useEffect(() => {
    //@ts-ignore
    window.Telegram.WebApp.ready();
  }, [])
  // useEffect(() => {
  //  console.log({window}); 
  // })
  return ( 
    <div className="App">
      <h1>Testing</h1>

      {/* <TestComp1 />
      <TestComp2 />
      <TestComp3 /> */}
    </div>
  );
};

export default App;
