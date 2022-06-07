import React,{useRef,useState,useEffect} from 'react'
const UseRefHook = () => {
  const ref = useRef();
  const [play,setPlay] = useState(false);
  const [input,setInput] = useState("")

  let time;
  const plays = () =>{
    if(ref.current.ended){
      alert("tugadi")
      clearInterval(time)
    }else{
      console.log(ref.current);
      console.log((ref.current.currentTime / ref.current.duration)*100);
      setInput((ref.current.currentTime / ref.current.duration)*100)
    }
  }

  const player =() =>{
    console.log(ref);
    if(play){
      ref.current.pause();
      setPlay(!play)
      clearInterval(time)
    }else{
      ref.current.play()
      setPlay(!play)
      time = setInterval(plays,1000)
    }
  
  }

  return (
    <div>
      <div className="video">
        <video  ref={ref} src="./video/video.mp4" ></video>
        <button onClick={player}>play</button>
      </div>
      <input type="range" value={input} />
    </div>
  )
}
export default UseRefHook;
