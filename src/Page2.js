import react,{Component} from 'react';
import one from './images/one.png';
import xc40b from './images/xc40_bev.jpg';
import v90r from './images/v90_recharge.jpg';
import v60r from './images/v60_recharge.jpg';






class Home extends Component{
    constructor() {
        super();
        this.state = {
         gallery : [
            {
                id: "xc40-bev",
                modelName: "XC40 Recharge", 
                bodyType: "suv",
                modelType: "pure electric",
                imageUrl: <img src={xc40b}  class="pic" />
            },
            {
                id: "v90-recharge",
                modelName: "V90 Recharge", 
                bodyType: "estate",
                modelType: "plug-in hybrid",
                imageUrl: <img src={v90r}  class="pic" />
            },
            {
                id: "v60-recharge",
                modelName: "V60 Recharge", 
                bodyType: "estate",
                modelType: "plug-in hybrid",
                imageUrl: <img src={v60r}  class="pic" />
            }
        ]
      }
    }
    render(){
        return(
            <div>













                <div id="navbar">
                        <img src={one} id='img'  alt='Background' />
                        <a href="#" class="right">ABOUT US</a>
                        <a href="#" class="right">SERVICE</a>
                        <a href="#" class="right">TECHNOLOGIES</a>
                        <a href="#" class="right">CAREERS</a>
                        <a href="#" class="right"><i class="fa-solid fa-magnifying-glass" id="icon"></i></a>
                </div>



<div class="outerpro">
    <table>
        {
          this.state.gallery.map(
            function (ele){
                return <div class="outer">
                                <div class="inner">
                                    <p>{ele.bodyType}</p>
                                    <h4>{ele.modelName}</h4>
                                    <p>{ele.modelType}</p>
                                    <p>{ele.imageUrl}</p>
                                    
                                    <a href="#" > LEARN > </a>
                                    <a href="#" > SHOP > </a>
                                 </div>
                         </div>
            }
          )
        }
    </table>
</div>









            </div>
        );
    }
}

export default Home;

