


  function allProduct()
  {
    var a=new XMLHttpRequest();
    a.open("GEt","https://5d76bf96515d1a0014085cf9.mockapi.io/product",true)
    a.send();
    a.onreadystatechange=function()
    {
        if(this.status==200 && this.readyState==4)
        {
            var productList=JSON.parse(a.responseText);

            for( var i in productList)
            {
                var div_tag = document.createElement('a');
                // console.log(productList[i].id)

                // var baseurl="https://test-hosting-8f9bf.web.app/product/details.html?p="
                
                // div_tag.href=baseurl+productList[i].id;
                div_tag.href = "details.html?id=" + productList[i].id;


                //div_tag.href="details.html"
                div_tag.className="box";
                for(var j in productList[i])
                {
                    
                    if(j=="preview")
                    {
                        var img_tag = document.createElement('img')
                        img_tag.src=productList[i][j];
                        img_tag.className="imgbox";
                        div_tag.appendChild(img_tag)
                    }
                    
                }
                for(var k in productList[i])
                {
                    if(k=="name")
                    {
                        var nametag=document.createElement('p')
                        nametag.className="name"
                        nametag.innerHTML+= productList[i][k]+"<br>";
                        div_tag.appendChild(nametag)
                    }
                    if(k=="brand")
                    {
                        var brandtag=document.createElement('p')
                        brandtag.className="brand"
                        brandtag.innerHTML+= productList[i][k]+"<br>";
                        div_tag.appendChild(brandtag)
                    }
                    if(k=="price")
                    {
                        var pricetag=document.createElement('p')
                        pricetag.className="price"
                        pricetag.innerHTML+= "Rs  "+productList[i][k]+"<br>";
                        div_tag.appendChild(pricetag)
                    }

                }
                for(var l in productList[i])
                {
                    if(l=="isAccessory"&&productList[i][l]==false)
                    {
                    document.getElementById('sub_section1').appendChild(div_tag)
                    }

                    if(l=="isAccessory"&&productList[i][l]==true)
                    {
                    document.getElementById('sub_section2').appendChild(div_tag)
                    }

                }

                

            }
        }
    }
}
allProduct();
// if(typeof(Storage)=="undefined"){
//     localStorage.clickcount=0;
// }
// localStorage.clickcount=0;
if(localStorage.clickcount=="undefined")
{
    document.getElementById('cart_num').innerHTML="0"
}

document.getElementById('cart_num').innerHTML=localStorage.clickcount;

document.getElementById('cart_div').addEventListener('click', () => {
    window.location.href = 'checkout.html';
})
  
