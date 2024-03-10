import React, { useEffect, useState } from 'react'

function Autotimer() {
    
        const [min, setMin] = useState(0);
        const [sec, setSec] = useState(0);
        const [running, setRunning] = useState(true);
    
        useEffect(() => {
            let timer;
            if (running) {
                timer = setTimeout(() => {
                    setSec((prevSec) => {
                        if (prevSec === 59) {
                            setMin((prevMin) => prevMin + 1);
                            return 0;
                        } else {
                            return prevSec + 1;
                        }
                    });
                }, 800);
            }
    
            return () => clearTimeout(timer);
        }, [min, sec]);

        function reset() {
            setMin(0);
            setSec(0);
            setRunning(true);
        }
        function stop() {
            setRunning(false);
        }
    
    
        
    
  return (
    <>
           <div className="bg-white  flex justify-center items-center flex-col rounded-md p-10 ">
            <h1 style={{textAlign:'center',color:'red'}}>
                Automatic Counter App
            </h1>
            <h2 className="space-x-3 text-4xl font-bold text-sky" style={{textAlign:'center'}}>
                <span>{min < 10 ? "0" + min : min}</span>
                <span>:</span>
                <span>{sec < 10 ? "0" + sec : sec}</span>
            </h2>
            <div style={{paddingLeft:'600px',justifyContent:'space-around'}}>
                <button
                    className="btn btn-primary"
                    onClick={reset}
                    style={{}}
                >
                    Reset
                </button>
                &nbsp; &nbsp; &nbsp;
                <button
                    className="btn btn-danger"
                    onClick={stop}
                >
                    Stop
                </button>
            </div>
        </div>

    </>
  )
}

export default Autotimer