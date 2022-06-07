import React,{useState,useRef, useEffect} from 'react'
import  {Export}  from './Export';
const Player = () => {
    const ref = useRef();
    const [play,setPlay] = useState(false);
    const [input,setInput] = useState(0);
    let time;
    const plays = () =>{
        if(ref.current.ended){
            alert("the end")
            clearInterval(time)
        }else{
            setInput((ref.current.currentTime/ref.current.duration)*100)    
        }
    }
    const playFun = () =>{
        if(play){
            ref.current.pause()
            setPlay(!play)
        }else{
            ref.current.play()
            setPlay(!play)
             time = setInterval(plays,1000)
        }
        console.log(ref);
    }
    const playTime  = (e) =>{
        console.log(e.target.value);
        ref.current.currentTime =( ref.current.duration/100) * e.target.value;
        setInput(e.target.value);
    }
    useEffect(()=>{
      const mylist=  ['apple','banana','orange'].map((item)=>console.log(item[0]))
        
    },[])
  let   hello = function(){
        return "hhhh"
    }
    let   hello1 = ()=>{
        return "hhhh"
    }
    console.log(hello);
    console.log(hello1);
  return (
    <div>
        <div className="video">
            <video ref={ref} src="./video/video.mp4"></video>
            <button onClick={playFun}>Play</button>
        </div>
        <input type="range" value={input} onChange={playTime}/>
        <Export/>
    </div>
  )
}

export default Player