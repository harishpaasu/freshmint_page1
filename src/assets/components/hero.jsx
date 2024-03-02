import React from 'react'

const hero = () => {
  return (<>
    <section className='flex justify-between items-center pb-8 px-8 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10'>
        <div className='lg:block ssm:hidden  font-primary font-extrabold text-3xl '> Events </div>

            <div className= "lg:block ssm:hidden"> <button type="button" className="text-white font-primary tracking-widest bg-black hover:bg-slate-800 rounded-full px-4 py-2"> create event</button>
            </div>
    </section>


    <section className='flex justify-center space-x-10 '>
        
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img  src="file:///E:/chaalpritam/freshmint/fresh-mint/src/assets/starkcon.png"  alt="Starkcon event"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 font-primary"> StarkCon IIT Madras</div>
    <div className='text-red-500 mb-4'> IITM Research Park</div>
    <p class="text-gray-700 text-base">
    The future of Web3, The StarkWare & ZKX Community building in Web3.
    </p>
  </div>
  <div className='flex justify-between'>
    <img src="file:///E:/chaalpritam/freshmint/fresh-mint/src/assets/Ellipse%207.png" alt='ellipse'></img>
    <div className='text-decoration-line: underline p-6'><a href="#"> manage event </a> </div>
  </div>
</div>

<div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src="fresh-mint\src\starkcon.png" alt="Starkcon event"/>
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2 font-primary"> StarkCon IIT Madras</div>
    <div className='text-red-500 mb-4'> IITM Research Park</div>
    <p class="text-gray-700 text-base">
    The future of Web3, The StarkWare & ZKX Community building in Web3.
    </p>
  </div>
  <div className='flex justify-between'>
    <img src="fresh-mint\src\assets\Ellipse 7.png" alt='ellipse'></img>
    <div className='text-decoration-line: underline p-6 '><a href="#">manage event </a>  </div>
  </div>
</div>

    </section>
    </>
  )
}

export default hero