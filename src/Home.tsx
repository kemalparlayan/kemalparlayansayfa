import React from 'react';
import './Home.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

interface myProps{
  ilkSayi:number;
  ikinciSayi:number;
  sonuc:number;
}

interface myState{
  ilkSayi:number;
  ikinciSayi:number;
  sonuc:number;
}

class Home extends React.Component<myProps,myState>{
  constructor(props:myProps){
    super(props);
    this.state={ilkSayi:props.ilkSayi,ikinciSayi:props.ikinciSayi,sonuc:props.sonuc};
    this.topla=this.topla.bind(this);
    this.cikar=this.cikar.bind(this);
    this.carp=this.carp.bind(this);
    this.bol=this.bol.bind(this);
    this.BirinciSayiDegisti=this.BirinciSayiDegisti.bind(this);
    this.IkinciSayiDegisti=this.IkinciSayiDegisti.bind(this);
    this.temizle=this.temizle.bind(this);
  }
  topla(){
    this.setState({sonuc:this.state.ilkSayi+this.state.ikinciSayi});
  }
  cikar(){
    this.setState({sonuc:this.state.ilkSayi-this.state.ikinciSayi});
  }
  carp(){
    this.setState({sonuc:this.state.ilkSayi*this.state.ikinciSayi});
  }
  bol(){
    this.setState({sonuc:this.state.ilkSayi/this.state.ikinciSayi});
  }
  BirinciSayiDegisti(event: { target: { value: any; }; })
  {
    this.setState({ilkSayi:parseInt(event.target.value)});
  }
  IkinciSayiDegisti(event: { target: { value: any; }; })
  {
    this.setState({ikinciSayi:parseInt(event.target.value)});
  }
  temizle()
  {
    this.setState({ilkSayi:0,ikinciSayi:0,sonuc:0});
  }
  
  render()
  {
  return (
    <>
    <div className="container">
      <div className="row">
        <aside className="col-4 sol-taraf">
          <div className="foto-container">
          <img src={require("./profil-foto.jpg")} className="foto"></img>
          </div>
        </aside>
        <div className="col-8 sag-taraf">
          <p>1.Sayıyı Giriniz:</p>
            <input id="birinciSayi" type="text" onChange={this.BirinciSayiDegisti} value={this.state.ilkSayi}></input>
          <p>2.Sayıyı Giriniz:</p>
            <input id="ikinciSayi" type="text" onChange={this.IkinciSayiDegisti} value={this.state.ikinciSayi}></input>
          <button onClick={this.topla}>Topla</button>
          <button onClick={this.cikar}>Çıkar</button>
          <button onClick={this.carp}>Çarp</button>
          <button onClick={this.bol}>Böl</button>
          <button onClick={this.temizle}>Temizle</button>
          <p>Sonuc:{this.state.sonuc}</p>
        </div>
        </div>
      </div>
      </>
  );
}
}

export default Home;
