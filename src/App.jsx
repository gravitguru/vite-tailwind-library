import {G_Button,G_Search} from "./lib";

const App  = () => {

  return (
    <div>
        <G_Button g_onButtonHandle={(a)=>console.log(a)}/>
        <G_Search g_handleSearch={(e)=>console.log(e)} />
    </div>
  );
};

export default App ;
