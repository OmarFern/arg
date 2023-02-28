
//alert("hola")
const marvel={
    render:()=> {
       // const urlAPI=""
        const urlAPI='https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=c36c66ee479625a651a74dbd070201c2&hash=929f6dd36453416f546563d4afb393f9'
        const container=document.querySelector("#marvel-row");
        let contenHTML='';
        fetch(urlAPI)
        .then(res => res.json())
        .then((json)=>{
            //console.log(json,"RES.JSON") 
             for ( const hero of json.data.results){
                let urlHero=hero.urls[0].url;
                contenHTML+= `
                       
                      
                            <div class="col-md-4"> 
                    
                              <a href="${urlHero}" target="_blanck" >
                               <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" alt="${hero.name}" class="img-thumbnail" >
                               </a>
                               <h4 class="title"> Id ${hero.id}</h4>
                               <h4 class="title">${hero.name}</h4>
                            
                             </div> 
                   
                
                       
                              `;
            } 
            container.innerHTML=contenHTML;
        })

    },
}
marvel.render();
//console.log("scrip")
/*publica c36c66ee479625a651a74dbd070201c2 */

/*privada 6e1bd6921f2fc01dafef5237fcc527aa57e09c64 */
/* 
16e1bd6921f2fc01dafef5237fcc527aa57e09c64c36c66ee479625a651a74dbd070201c2
 */