import React from "react"
import data from "../data"
import Option from "./Options"
import {nanoid} from 'nanoid'

export default function Question(props){
    
    const quesData = data;
    const [count,setCount] = React.useState(0);
    const [option,setOption] = React.useState(allOptions)
    
    function allOptions(){
        const newOptions = []
        for(let i = 0; i < 4; i++)
        {
            newOptions.push(generateOption(quesData[count][i]))
        }
        return newOptions;
    }
    
    function nextQuestion(){
        setCount(prevCount => {
            return prevCount + 1;
        })
    } 
    
    React.useEffect(()=>{
        setOption(allOptions);
    },[count])
    
    function generateOption(value){   
        return{
                value: value,
                isHeld: 0,
                id: nanoid()
                }
    }
    
    function handleOnClick(id){
        setOption(prevOption => prevOption.map(option => {
            return option.id === id ? {...option,isHeld: option.isHeld === 1 ? 0 : 1} : {...option,isHeld: 0}
        }))
    }
    
    const optionComponents = option.map((option) => {
        return <Option 
                    value={option.value} 
                    isHeld={option.isHeld} 
                    key={option.id} 
                    handleOnClick={() => handleOnClick(option.id)}
                />
    })
    
    function checkAnswer(){
        let flag = 0;
        let id;
        
        for(let i=0; i < 4; i++)
        {
            if(option[i].isHeld)
            {
                if(option[i].value === quesData[count].correct)
                    flag = 1;
                
                id = option[i].id;
                break;
            }
        }
        if(flag)
        {
            setOption(prevOption => prevOption.map(option => {
                return option.id === id ? {...option,isHeld: 2} : option
            }))
        }
        else{
            setOption(prevOption => prevOption.map(option => {
                return option.id === id ? {...option,isHeld: 3} : option
            }))
        }
    }
    
    return (
        <div className="ques-container">
         <p className="ques-statement">{count + 1 + ". " }{quesData[count].question}</p>
         <ul className="options-container">
            {optionComponents}
         </ul>  
         {count < quesData.length-1  &&   <button className="btn" onClick={nextQuestion}>Next</button>}     
         <button className="btn" onClick={checkAnswer}>Check</button>
        </div>
    )
}