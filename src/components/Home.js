import React from "react"

function Home() {
    return (
    <div className="homePage" >
         <img className="logo" src="https://i.pinimg.com/originals/84/a8/9d/84a89db200ff128434563be98dd887fb.jpg"
        alt="oh no!"/> 
        <div className="homeheader">Visit  Animals Saving-Wildlife Experiences Learn Support</div>
        <h1 className="pageTitle">Adopt-a-Zoo-Animal!</h1> 
        <div className="exhibit">
            <img class="img1" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/siberian-tiger-portrait-square-by-tl-wilson-photography-teresa-wilson.jpg" alt="tiger" />
            <img class="img2" src="https://pyxis.nymag.com/v1/imgs/678/d4e/13f195917dd4a1be8176b65677bef6a2ad-GettyImages-912244040.rsquare.w700.jpg" alt="otter" />
            <img class="img3" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/monarch-butterfly-square-christina-rollo.jpg" alt="butterfly" />
            <img class="img4" src="https://media.istockphoto.com/photos/ring-tailed-lemur-picture-id494932131?k=20&m=494932131&s=612x612&w=0&h=NDsK8RMPOjDXUQWf1aF6O9cOFjUEXW5VFRO9L59cyb0=" alt="mort" />
             {/* <img class="img5" src="https://i.natgeofe.com/n/07328292-fe1e-4b68-8ce1-4f2a863e47b3/3671910_square.jpg" alt="po" />  PANDA IMAGE */}
        
        </div >
        <div className="container"> <h4 className="exhibitTitle">Explore By Exhibit</h4></div>
        <div>
            <h4 className="title1">Savanna</h4>
            <h4 className="title2">Rivers</h4>
            <h4 className="title3">Forests</h4>
            <h4 className="title4">Primates</h4>
             {/* <h4 className="title5">Endangered</h4>  PANDA TITLE */}



        </div>
       
    </div>
    )
    
  }
  
  export default Home;