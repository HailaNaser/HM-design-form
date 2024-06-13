import React from 'react';
import Cong from './Cong';
import { useState } from 'react';
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

 function Form(props) {
  
    const  [namt , setName] = useState("");
    const [age , setAge] = useState('');
    const [city , setCity] =useState("");
    const [answer , setAnswer] = useState("");
    const [answerT , setAnswerT] = useState("");
    const [answerThree , setAnswerThree] = useState("");
    let navigate = useNavigate();


    let clickhandler = (e) => {
        let date = new Date();
        const birth = new Date(age);
        const culAge = date.getFullYear() - birth.getFullYear();
        if(namt.length > 4 && culAge > 18 && culAge < 70){
            navigate("/Cong")
        }
        else {

          
        }
    
    }
    return (
        <>
       
        <div className='flex-col justify-between items-center mb-[40px] max-sm:flex-col'>
            <div className="container m-auto p-[40px] pb-[10px] rounded-lg bg-[#fdf2dc] flex justify-center items-center outline-[transparent] border-[transparent] max-w-[80%] mx-sm:w-full  max-sm:p-20px max-sm:flex-col">
            <div className="form  mx-sm:w-full">
                <input className='name bg-[#fff] rounded-[6px] h-[20px] block m-left p-[15px] mt-[15px] mb-[0] outline-[transparent] border-[transparent] w-[60%]  mx-sm:w-full' onChange={(e)=> setName(e.target.value)} type="text" placeholder='Your Name'/>
                <input className='age bg-[#fff]  rounded-[6px] h-[20px] block m-left p-[15px] mt-[15px] mb-[0] outline-[transparent] border-[transparent] w-[60%]  mx-sm:w-full'  type='date' value={age} onChange={(e)=> setAge(e.target.value)}/>
                <input className='city bg-[#fff]  rounded-[6px] h-[20px] block m-left p-[15px] mt-[15px] outline-[transparent] border-[transparent] mb-[0] w-[60%] text-[#ddd]  mx-sm:w-full' type="text"  placeholder='Your Age'/>
             <div className="box flex m-auto mt-[15px] mb-[0]">
            <p className=" mt-[15px] mb-[0] mr-[10px]">Expected Salary:</p>
            <select className=" mt-[15px] mb-[0] mr-[20px] p-[5px] outline-[transparent]" >
            <option className=" mt-[15px] mb-[0] mr-[20px] p-[5px] h-[10px]" value="">3000 to 8000</option>
            <option value="">9000 to 13000</option>
            <option value="">15000 and more</option>
             </select>
            </div>
            <textarea className='bg-[#fff] h-[150px] rounded-[6px]   text-[#ddd] font-n resize-0 outline-[transparent] border-[transparent] block m-left p-[15px] mt-[15px]  w-[60%] mb-[15px]  max-sm:w-full'  placeholder='Why did you choose this job ?'></textarea>
            <div className="qustion"> 
                <p>Do you have experience in web development using JavaScript?</p>
                <div className="box flex items-center ">
                    <p className='mr-[5px] '>Yes</p>
                    <input checked={answer == "Yes"} onChange={(e)=> setAnswer(e.target.value)} type='radio' value='Yes' />
                </div>
            <div className="box flex items-center ">
                    <p className='mr-[8px] ' >No</p>
                    <input checked={answer == "No"} onChange={(e)=> setAnswer(e.target.value)} type='radio' value='No' />
            </div>
            </div>
            <div className="qustion">
                <p>Do you have experience in developing user interfaces using React?</p>
                <div className="box flex items-center">
                    <p className='mr-[5px] '>Yes</p>
                    <input checked={answerT == "Yes"} onChange={(e)=> setAnswerT(e.target.value)} type='radio' value='Yes' />
                </div>
            <div className="box flex items-center ">
                    <p className='mr-[8px]'>No</p>
                    <input checked={answerT == "No"}  onChange={(e)=> setAnswerT(e.target.value)} type='radio' value='No' />
            </div>
            </div>
            <div className="qustion">
                <p>Have you worked on developing artificial intelligence or machine learning applications?</p>
                <div className="box flex items-center">
                    <p className='mr-[5px] '>Yes</p>
                    <input checked={answerThree == "Yes"} onChange={(e)=> setAnswerThree(e.target.value)} type='radio' value='Yes' />
                </div>
            <div className="box flex items-center ">
                    <p className='mr-[8px] ' >No</p>
                    <input checked={answerThree == "No"} onChange={(e)=> setAnswerThree(e.target.value)} type='radio' value='No' />
            </div>
                
            </div>
            <button onClick={clickhandler} className='block text-[#fff] font-bold bg-[#33864e] m-auto rounded-full py-2 px-5 w-[50%] text-center'>SUBMIT</button>
            </div>
            <div className="theImage w-[500] h-[500px] mx-sm:flex-col">
            <h1 className=' text mt-[-10vh] mb-[10vh]  text-[#33864e] text-center text-[30px] mx-sm:text-[10px] max-sm:mt-[-110vh]  max-sm:p-[10px] '>Find work that's worth it</h1>
                    <img className='w-full h-[100%]' src="https://img.freepik.com/photos-premium/prendre-soin-plantes-illustration-vectorielle_1031776-8971.jpg" alt="" />
                </div>
                </div>
            
        </div>
        </>
    )
    }
    export default Form