import React from 'react';
import './TaskListStyle.css'

const TaskListV2 = () => {
    return(
        <div className='boxContainer'>
            <header>
                <img src="https://i.imgur.com/x5Kd8Rp.jpg" alt="logoTaskWit" />
                <img src="https://i.imgur.com/3ipHp2e.jpg" alt="iconoUser" />
            </header>
            <main>
                <section>
                    <div className='search'>
                        search
                    </div>
                    <div className='today-Add'>
                        <img src="https://i.imgur.com/Xt8Tl3W.jpg" alt="TodayImg" />
                        <span className='btnAdd'>
                            <img src="https://i.imgur.com/4hay4Sa.jpg" alt="AddImg" />
                        </span>
                    </div>
                    <div className='boxItem'>

                        <div className='Item'>
                            <div className='check-Title'>
                                <label>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                <div className='titleItem'>
                                    <p>algo asda sad sdaas ds adsa dsd ssd </p>
                                </div>
                            </div>
                            <div className='btnDelete'>
                                <label>
                                    <span></span>
                                </label>
                            </div>
                        </div> 
                        

                    </div>
                    
                </section>
            </main>
    </div>
    )
}

export { TaskListV2 }