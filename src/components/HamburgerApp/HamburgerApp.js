import React, { Component } from "react";
import malzemeler from "../../constants/malzemeler";
import "./styles.css";
import { Hamburger, Materials, TotalPrice , ResetHamburger} from "../../components";

class HamburgerApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secilenMalzemeler: [],
      totalPrice: 0,
    };
  }

  totalPriceFunc = () => {
    let totalP = 0;
    this.state.secilenMalzemeler.map((malzeme) => {
      totalP += parseInt(malzeme.count * malzeme.price);
      return totalP;
    });
    this.setState({
      totalPrice: totalP,
    });
  };

  malzemeEkle = (malzeme) => {
    // var mi yok mu kontrol ediyoruz
    const varMi = this.state.secilenMalzemeler.find(
      (secilenMalzeme) => secilenMalzeme.id === malzeme.id
    );
    // var ise sayisini artircaz, yok ise arraye ekliyoruz
    if (varMi) {
      this.setState(
        {
          secilenMalzemeler: this.state.secilenMalzemeler.map(
            (secilenMalzeme) => {
              if (secilenMalzeme.id === malzeme.id) {
                return { ...secilenMalzeme, count: secilenMalzeme.count + 1 };
              } else {
                return secilenMalzeme;
              }
            }
          ),
        },
        this.totalPriceFunc
      );
    } else {
      this.setState(
        {
          secilenMalzemeler: [
            ...this.state.secilenMalzemeler,
            { ...malzeme, count: 1 },
          ],
        },
        this.totalPriceFunc
      );
    }
  };

  malzemeCikar = (malzeme) => {
    /// olmadigi durumda azalta hic basilamayacagi icin bu satirda malzemenin secili olduguna eminim.
    const secilenMalzeme = this.state.secilenMalzemeler.find(
      (secilen) => secilen.id === malzeme.id
    );
    const secilenMalzemeCount = secilenMalzeme.count;
    // sayi 1 ise secilenlerden tamamen cikartiyorum, 1 den buyuk ise bu sayiyi azaltiyorum
    if (secilenMalzemeCount > 1) {
      this.setState(
        {
          secilenMalzemeler: this.state.secilenMalzemeler.map((secilen) => {
            if (secilen.id === malzeme.id) {
              return { ...secilen, count: secilen.count - 1 };
            }
            return secilen;
          }),
        },
        this.totalPriceFunc
      );
    } else {
      this.setState(
        {
          secilenMalzemeler: this.state.secilenMalzemeler.filter((secilen) => {
            return secilen.id !== malzeme.id;
          }),
        },
        this.totalPriceFunc
      );
    }
  };

  resetHamburger=()=>{
    this.setState({
      secilenMalzemeler: []
    })
  }

  render() {
    const { secilenMalzemeler, totalPrice } = this.state;
    return (
      <div className="card">
        <h2>Hmm... Hamburger Preparation Application</h2>
        <div className="wrap">
          <div className="left">
            <Hamburger secilenMalzemeler={secilenMalzemeler} />
          </div>
          <div className="right">
            <Materials
              malzemeler={malzemeler}
              secilenMalzemeler={secilenMalzemeler}
              malzemeEkle={this.malzemeEkle}
              malzemeCikar={this.malzemeCikar}
            />
            <ResetHamburger resetHamburger={this.resetHamburger} />
            <TotalPrice totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    );
  }
}

export default HamburgerApp;
