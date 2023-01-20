import React, { useEffect , useState } from 'react';


function Loader() {
    const [hideLoader, setHideLoader] = useState(false);
  
    useEffect(() => {
      setTimeout(() => {
        setHideLoader(true);
      }, 1000);
    }, []);
  
    return (
      <div id="loader" style={{ display: hideLoader ? 'none' : 'block' }}>
        {/* loader content */}
      </div>
    );
  }
  
  export default Loader;

  
  
  