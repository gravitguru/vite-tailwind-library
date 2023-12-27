const G_Button  = ({g_onButtonHandle,}) => {
    const  onButtonHandle=() => {
        g_onButtonHandle ? g_onButtonHandle() : ""
    }

  return (
    <div>
      <button onClick={onButtonHandle} className="px-2 py-2 rounded-full bg-teal-600 hover:bg-teal-500 text-white ">button</button>
    </div>
  );
};

export default G_Button ;
