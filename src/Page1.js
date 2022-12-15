import react,{Component} from 'react';
import one from './images/one.png';
import xc90r from './images/xc90_recharge.jpg';
import xc60r from './images/xc60_recharge.jpg';
import xc40r from './images/xc40_recharge.jpg';




class Home extends Component{
    constructor() {
        super();
        this.state = {
         gallery : [
            {
              id: "xc90-recharge",
              modelName: "XC90 Recharge", 
              bodyType: "suv",
              modelType: "plug-in hybrid",
              imageUrl: <img src={xc90r}  class="pic" />
            },
            {
                id: "xc60-recharge",
                modelName: "XC60 Recharge", 
                bodyType: "suv",
                modelType: "plug-in hybrid",
                imageUrl: <img src={xc60r}  class="pic" />
            },
            {
                id: "xc40-recharge",
                modelName: "XC40 Recharge", 
                bodyType: "suv",
                modelType: "plug-in hybrid",
                imageUrl: <img src={xc40r}  class="pic" />
            }
        ]
      }
    }

    image1 = () => {
        return document.write("hellow");
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

                                    <div id="pic2">
                                    <p>{ele.imageUrl}</p>
                                    </div>
                                <div id='text2'>
                                    <a href="#" > LEARN > </a>
                                    <a href="#" > SHOP > </a>
                                    </div>
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
