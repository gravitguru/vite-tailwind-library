const G_Search  = ({g_handleSearch}) => {
    const handleEnter = (e) => {
        if(e.key==='Enter'){
            g_handleSearch(e)
        }
    }
  return (
    <div className="bg-teal-600 text-white rounded-full">
      <input type="text" placeholder="search"  className="px-3 text-[15px] py-2 outline-none bg-transparent w-full" onKeyDown={handleEnter}/>
    </div>
  );
};

export default G_Search ;
