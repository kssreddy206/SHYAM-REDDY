import react,{Component} from 'react';
import one from './images/one.png';
import s90r from './images/s90_recharge.jpg';
import s60r from './images/s60_recharge.jpg';




class Home extends Component{
    constructor() {
        super();
        this.state = {
         gallery : [
            {
                id: "s90-recharge",
                modelName: "S90 Recharge", 
                bodyType: "sedan",
                modelType: "plug-in hybrid",
                imageUrl: <img src={s90r}  class="pic" />
            },
            {
                id: "s60-recharge",
                modelName: "S60 Recharge", 
                bodyType: "sedan",
              modelType: "plug-in hybrid",
              imageUrl: <img src={s60r}  class="pic" />
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

