import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/TidbitsJS/Summize", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden' />
        <span className='blue_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      Today in this fast faced modern world humans have achieved significant progres in 
          information technology but with the increasing number of attractive apps and social
          media and websites humans have lost one thing and that is ATTENTION SPAN.
          But we always come across lot of politiocal,financial,market related important
          blogs and articles everyday but often they are really big and we don't really
          feel like reading it all . That is why this article summarizer app which makes 
          your life easier by making summaries of huge articles and blogs and saving your Time.
      </h2>
    </header>
  );
};

export default Hero;
/*   Today in this fast faced modern world humans have achieved significant progres in 
          information technology but with the increasing number of attractive apps and social
          media and websites humans have lost one thing and that is ATTENTION SPAN.
          But we always come across lot of politiocal,financial,market related important
          blogs and articles everyday but often they are really big and we don't really
          feel like reading it all . That is why this article summarizer app which makes 
          your life easier by making summaries of huge articles and blogs and saving your Time. */