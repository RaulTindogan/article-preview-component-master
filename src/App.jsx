import { useState } from 'react'
function App() {
  const [shareBtn, setShareBtn] = useState(false)

  const handleShareBtn = ()=>{
    console.log('hello')
    if(window.innerWidth >= 768) {
      return
    }
    setShareBtn(!shareBtn)
  }
  return (
    <main className='w-full flex justify-center items-center px-5 py-[3rem] min-h-[100vh]'>
      <section className='
        rounded-lg
        w-[280px]
        sm:w-[320px]
        md:w-[650px]
        md:flex
        bg-[white]
        font-Manrope
        shadow-lg shadow-Light-Dark-Grayish-Blue/10
      '>
        <article>
          <img src="https://raw.githubusercontent.com/RaulTindogan/article-preview-component-master/main/src/images/drawers.jpg" alt="Drawers Image" className='rounded-t-lg md:rounded-l-md md:rounded-r-none md:h-full'/>
        </article>
        <article className='px-5 pt-5 md:px-7'>
          <h1 className='font-[700] mb-3 text-Very-Dark-Grayish-Blue md:text-xl'>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
          <p className='text-sm text-Desaturated-Dark-Blue'>
            Ever been in a room and felt like something was missing? Perhaps it felt slightyly bare and uninviting
            I've got some simple tips to help you make any room feel complete.
          </p>
          <div className={`mt-2 ${shareBtn?' hidden': ' block'}`}>
            <div className='flex justify-between items-center py-4 md:py-5'>
              <div className='flex gap-3'>
                <img src="https://raw.githubusercontent.com/RaulTindogan/article-preview-component-master/main/src/images/avatar-michelle.jpg" alt="Michelle Avatar" className='rounded-full size-10'/>
                <div className='text-sm'>
                  <h2 className='font-[700] text-Very-Dark-Grayish-Blue'>Michelle Appleton</h2>
                  <h3 className='text-Grayish-Blue'>28 Jun 2020</h3>    
                </div>
              </div>
              <div>
                <button className='group first:bg-Very-Dark-Grayish-Blue p-2 rounded-full relative inline-block' onClick={handleShareBtn}>
                  <img src="https://raw.githubusercontent.com/RaulTindogan/article-preview-component-master/0da9b89903837955d4dd683a0ac6741df99746e6/src/images/icon-share.svg" alt="Share Icon" />
                  <div className='
                    text-sm
                    shadow-lg shadow-Light-Dark-Grayish-Blue/10
                    invisible
                    bg-Very-Dark-Grayish-Blue
                    text-[white] 
                    py-4 
                    rounded-xl
                    absolute 
                    z-10 
                    flex justify-center items-center 
                    gap-3 w-[200px] 
                    left-[50%] 
                    bottom-[150%] 
                    ml-[-100px] 
                    after:absolute
                    after:top-[100%]
                    after:left-[50%]
                    after:ml-[-10px]
                    after:border-[10px]
                    after:border-solid
                    after:border-t-Very-Dark-Grayish-Blue
                    after:border-r-[transparent]
                    after:border-b-[transparent]
                    after:border-l-[transparent]
                    group-hover:visible
                  '
                  >
                    <p className='tracking-[.3rem]'>SHARE</p>
                    <img src="./src/images/icon-facebook.svg" alt="Facebook Icon"  className='size-4'/>
                    <img src="./src/images/icon-twitter.svg" alt="Twitter Icon"  className='size-4'/>
                    <img src="./src/images/icon-pinterest.svg" alt="Pinterest icon"  className='size-4'/>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </article>
        <div className={`${shareBtn?'flex ': 'hidden '}rounded-b-lg bg-Very-Dark-Grayish-Blue justify-between px-5 py-5 mt-5 text-sm text-Grayish-Blue md:hidden`}>
              <div className='flex gap-4 items-center'>
                <p className='tracking-[.3rem]'>SHARE</p>
                <img src="https://raw.githubusercontent.com/RaulTindogan/article-preview-component-master/0b8f45262b011d17df5ec4ed137262067aedc545/src/images/icon-facebook.svg" alt=""  className='size-4'/>
                <img src="https://raw.githubusercontent.com/RaulTindogan/article-preview-component-master/0b8f45262b011d17df5ec4ed137262067aedc545/src/images/icon-pinterest.svg" alt=""  className='size-4'/>
                <img src="https://raw.githubusercontent.com/RaulTindogan/article-preview-component-master/0b8f45262b011d17df5ec4ed137262067aedc545/src/images/icon-pinterest.svg" alt=""  className='size-4'/>
              </div>
              <button className='rounded-full bg-Grayish-Blue p-2' onClick={handleShareBtn}>
                <img src="https://raw.githubusercontent.com/RaulTindogan/article-preview-component-master/0da9b89903837955d4dd683a0ac6741df99746e6/src/images/icon-share.svg" alt="Share Icon" className='size-3'/>
              </button>
            </div>
      </section>
    </main>
  )
}

export default App
