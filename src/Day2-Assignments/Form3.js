import React, { useState, useEffect } from 'react';

const PageTitleComponent = () => {
  // State variable to track the value of D
  const [D, setD] = useState('');

  // State variable to track if it's the first render
  const [isFirstRender, setIsFirstRender] = useState(true);

  // Update the title only the first time
  useEffect(() => {
    if (isFirstRender) {
      document.title = D;
      setIsFirstRender(false);
    }
  }, [isFirstRender, D]);

  // Update the title on every render
  useEffect(() => {
    document.title = D;
    // setD
  }, [D]);

  
  const handleChange = (event) => {
    setD(event.target.value);
  };

  return (
    <div>
      <h5 style={{color:'blue'}}>Change Title by using UseEffect</h5>
      {/* <input
        type="text"
        value={D}
        onChange={handleChange}
        placeholder="Enter value for D"
      /> <br></br>
     

      <button type="button" class="btn btn-outline-warning" onClick={() => setD(D)}>
     
     Update D</button> */}

     <div class="form-floating">
  <input type="text" class="form-control" id='text' />
  <label for="text"  value={D}
        onChange={handleChange}>Enter value for D</label>
</div>
<br></br>
<button type="submit" class="btn btn-success" style={{width:'400px'}} onClick={() => setD(D)}>
     
     Update D</button>
    </div>
  );
};

export default PageTitleComponent;
