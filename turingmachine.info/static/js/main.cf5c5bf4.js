// MARK:shareButton.jsx
import React, {Component} from "react";
import "./css/shareButton.css";
import "./css/icofonts/icofont.min.css";
import traduction from "./traduction";
class ShareButton extends Component{
    state = {
        copied: false
    };
    shareToFb(){
        let url = 'https://www.facebook.com/sharer.php?';
        let dynUrl = 'http://elyoukey.com/turingmachine/shareapp/?';
        let sequence = '';
        let seq = '';
        let seqArr = [];
        for(let r=0; r < this.props.finalTab.length ; r++ ){
            seq = '';
            for(let c=0; c < this.props.finalTab[r].length ; c++ ) {
                switch(this.props.finalTab[r][c]){
                    case 1:
                        seq += c+'1';
                        break;
                    case 2:
                        seq += c+'0';
                        break;
                }
            }
            seqArr.push(seq);
        }
        sequence = seqArr.join('_');
        dynUrl += 'pb='+this.props.game.hash.replace(/ /g,"");
        dynUrl += '&daily='+this.props.dailyText;
        dynUrl += '&n='+this.props.game.n;
        dynUrl += '&seq='+sequence;
        dynUrl += '&win='+this.props.winSolo;
        url += 'u='+encodeURIComponent(dynUrl);
        let pop= window.open(url , 'shareFB', 'height=400,menubar=no,width,400');
    }
    sharetoTwitter(){
        let url = 'https://twitter.com/intent/tweet?o=0';
        // text
        let text = this.props.socialTXT+"\n#TuringMachineGame\n";
        text = encodeURIComponent(text);
        url += '&text='+text;
        // url
        let dynUrl = 'http://elyoukey.com/turingmachine/shareapp/?';
        let sequence = '';
        let seq = '';
        let seqArr = [];
        for(let r=0; r < this.props.finalTab.length ; r++ ){
            seq = '';
            for(let c=0; c < this.props.finalTab[r].length ; c++ ) {
                switch(this.props.finalTab[r][c]){
                    case 1:
                        seq += c+'1';
                        break;
                    case 2:
                        seq += c+'0';
                        break;
                }
            }
            seqArr.push(seq);
        }
        sequence = seqArr.join('_');
        dynUrl += 'pb='+this.props.game.hash.replace(/ /g,"");
        dynUrl += '&daily='+this.props.dailyText;
        dynUrl += '&n='+this.props.game.n;
        dynUrl += '&seq='+sequence;
        dynUrl += '&win='+this.props.winSolo;
        url += '&url='+encodeURIComponent(dynUrl);
        let pop= window.open(url , 'shareFB', 'height=400,menubar=no,width,400');
    }
    copyToClipboard() {
        const el = document.createElement("textarea");
        el.value = this.props.socialTXT.toUpperCase()+"\n#TuringMachineGame\n\nhttps://www.turingmachine.info\n";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        this.setState({copied: true});
    }
    render(){
        let href ="mailto:?subject=turingmachine&body=";
        let text = this.props.socialTXT;
        text = encodeURIComponent(text);
        href += text;
        return(
            <div className="shareButton">
                <a
                    className="button fullgreen"
                    onClick={()=>this.copyToClipboard()}
                >
                    <span className="icofont-copy"></span>&nbsp;
                    {(this.state.copied)?traduction[this.props.language]["COPIED"]:traduction[this.props.language]["SHARE"]}
                </a>
                {(this.state.copied)?traduction[this.props.language]["PASTEYOURRESULT"]:null}
            </div>
        );
    }
}
export default ShareButton;
// MARK:PageResultMachine.jsx
import { Component } from "react";
import ShareButton from "./shareButton";
import "./styles.css";
import "./css/PageResultMachine.css";
import traduction from "./traduction";
import idPage from "./idPage";
import appface0 from "./images/appface0.png";
import appface1 from "./images/appface1.png";
import CopyButton from "./copyButton";
import MarkCell from "./markCell";
class PageResultMachine extends Component {
    render() {
        let vsmachinetext1 = traduction[this.props.language]["VSMACHINETEXT1"];
        vsmachinetext1 = vsmachinetext1.replace( '{$c}', this.props.game.code );
        vsmachinetext1 = vsmachinetext1.replace( '{$r}', this.props.roundValue );
        vsmachinetext1 = vsmachinetext1.replace( '{$q}', this.props.questionValue );
        let roundMachine = Math.ceil(this.props.game.par / 3);
        let questionMachine = this.props.game.par;
        let vsmachinetext2 = traduction[this.props.language]["VSMACHINETEXT2"];
        vsmachinetext2 = vsmachinetext2.replace( '{$c}', this.props.game.code );
        vsmachinetext2 = vsmachinetext2.replace( '{$r}', roundMachine );
        vsmachinetext2 = vsmachinetext2.replace( '{$q}', questionMachine );
        let letters = [];
        for (let i = 0; i < this.props.game.n; i++) {
            letters.push(String.fromCharCode(97 + i));
        }
        let grid = [];
        for (let i = 0; i < this.props.finalTab.length ; i++) {
            let row = [];
            for (let j = 0; j < this.props.finalTab[i].length ; j++) {
                row.push(
                    <div className='cell'>
                        <MarkCell
                            value={this.props.finalTab[i][j]}
                            row={i}
                            cell={j}
                            disabled={true}
                        />
                    </div>
                );
            }
            grid.push(<div className='row'>{row}</div>);
        }
        return (
            <div className="mainTab pageResultMachine">
                {this.props.winSolo === 0
                    ?
                    (
                        <div className="">
                            <h2
                            className="failure"
                            dangerouslySetInnerHTML={{ __html: traduction[this.props.language]["WINSOLO0"] }}
                            ></h2>
                            <div className="imageContainer failure">
                                <img
                                    className="face failure"
                                    src={appface0}
                                />
                            </div>
                        </div>
                    )
                : null}
                {this.props.winSolo === 1 || this.props.winSolo === 2
                    ? (
                        <div className="">
                            <h2
                            className="success"
                            dangerouslySetInnerHTML={{ __html: traduction[this.props.language]["WINSOLO2"] }}
                            ></h2>
                            <div className="imageContainer success">
                                <img
                                    className="face"
                                    src={appface1}
                                />
                            </div>
                        </div>
                    )
                : null}
                <div className="hash">
                    #{this.props.game.hash}
                </div>
                <p dangerouslySetInnerHTML={{ __html: vsmachinetext1 }}
                ></p>
                <p dangerouslySetInnerHTML={{ __html: vsmachinetext2 }}
                ></p>
                <div className="answerGrid">
                    <div className="row">
                        {letters.map(function (letter, index) {
                            return (
                                <div key={index} className="cell letter">{letter}</div>
                            );
                        })}
                    </div>
                    {grid}
                </div>
                <div className="shareLabel">
                    {traduction[this.props.language]["SHARERESULTS"]}
                </div>
                <ShareButton
                    language={this.props.language}
                    socialTXT={this.props.socialTXT}
                    game={this.props.game}
                    winSolo={this.props.winSolo}
                    finalTab={this.props.finalTab}
                    dailyText={this.props.dailyText}
                />
                <div className="footer">
                    <a
                        id="homeBut"
                        className="backlink"
                        type="submit"
                        onClick={() => this.props.changePage(idPage["P_ASKSOLOPAGE1"])}
                    >
                        {traduction[this.props.language]["BACK"]}
                    </a>
                </div>
            </div>
        );
    }
}
export default PageResultMachine;
// MARK:burgerMenu.jsx
import React, {Component} from "react";
import "./css/burgerMenu.css";
import traduction from "./traduction";
import idPage from "./idPage";
import config from "./config";
import LanguageMenu from "./LanguageMenu";
class BurgerMenu extends Component{
    state ={
        opened: false
    }
    toggleState(){
        this.setState({opened: !this.state.opened} );
    }
    changePage(p){
        this.setState({opened: false} );
        this.props.changePage(p);
    }
    gameOfTheDay(){
        this.setState({opened: false} );
        this.props.gameOfTheDay();
    }
    render(){
        let className = "burgerMenu " + ((this.state.opened)?"opened":"");
        return(
            <div className={className}>
                <div
                    className="holder"
                    onClick={()=>this.toggleState()}
                >
                    <span className="bar bar1"></span>
                    <span className="bar bar2"></span>
                    <span className="bar bar3"></span>
                </div>
                <div className="container">
                    <LanguageMenu
                        language={this.props.language}
                        swapLanguage={(value) => this.props.swapLanguage(value)}
                    />
                    <a
                        className="green button homeButton"
                        onClick={() => this.props.changePage(idPage["P_ADV"])}
                    >
                        {traduction[this.props.language]["QUICK"]}
                    </a>
                    <a
                        className="orange button homeButton"
                        onClick={() => this.props.changePage(idPage["P_CREATECHALLENGE"])}
                    >
                        {traduction[this.props.language]["CREATECHALLENGE"]}
                    </a>
                    <a
                        className="yellow button homeButton"
                        onClick={() => this.props.gameOfTheDay()}
                    >
                        {traduction[this.props.language]["DAiLYCHALLENGE"]}
                    </a>
                    <a
                        className="blue button homeButton"
                        onClick={() => this.props.changePage(idPage["P_SEARCH"])}
                    >
                        {traduction[this.props.language]["SEARCH"]}
                    </a>
                    <a
                        className="purple button homeButton"
                        onClick={() => this.props.changePage(idPage["P_HIST"])}
                    >
                        {traduction[this.props.language]["GAMEHISTORY"]}
                    </a>
                </div>
                <div className="overlay" onClick={()=>this.toggleState()}></div>
            </div>
        );
    }
}
export default BurgerMenu
// MARK:cardPicker.jsx
import React, {Component} from "react";
import "./css/cardPicker.css";
import traduction from "./traduction";
import config from "./config";
import idPage from "./idPage";
class CardPicker extends Component{
    state = {
        open: false,
        selectedCards: [],
        availableCards: [],
        loading: false
    }
    constructor(props){
        super(props);
        for(let i=1;i<=48;i++){
            let cards = this.state.availableCards;
            cards.push(i);
            this.setState({availableCards:cards});
        }
    }
    open(){ this.setState({open:true});}
    close(){ this.setState({open:false});}
    pick( cardIndex ){
        this.setState({loading:true});
        this.state.selectedCards.push(cardIndex);
        this.props.setSelectedCards(this.state.selectedCards); //update parent module
        this.call();
    }
    remove( cardIndex ){
        this.setState({loading:true});
        let index = this.state.selectedCards.indexOf(cardIndex);
        this.state.selectedCards.splice(index, 1);
        this.props.setSelectedCards(this.state.selectedCards); //update parent module
        this.setState(this.state.selectedCards);
        this.call();
    }
    call(){
        var xhr = new XMLHttpRequest();
        var nbCards = this.props.advancedSettings[3]+4;
        xhr.addEventListener("load", () => {
            var data = xhr.responseText;
            var jsonResponse = JSON.parse(data);
            this.setState({availableCards:jsonResponse['c']});
            this.setState({loading:false});
            this.close();
        });
        xhr.addEventListener("error", () => {
        });
        xhr.addEventListener("abort", () => {
        });
        xhr.open(
            "GET",
            config.API+"wizard.php?n=" + nbCards + "&cards=[" + this.state.selectedCards.join(',') + ']'
        );
        xhr.send();
    }
    render(){
        var langcode = traduction[this.props.language]["LANGCODE"];
        var selectedCardsListing = [];
        for(let i=0;i<this.state.selectedCards.length;i++){
            let cardNb = this.state.selectedCards[i].toString().padStart(2,'0');
            selectedCardsListing.push(
                <div class="card" id="card">
                    <img
                        className="imgCard"
                        src={config.FOLDER_IMAGES_CARDS+langcode + '/TM_GameCards_'+langcode+'-'+ cardNb +'.png'}
                    />
                    <div className="cardRemove" onClick={() => this.remove(this.state.selectedCards[i])}>
                        &times;
                    </div>
                </div>
            );
        }
        var availableCardsListing = [];
        for(let i=0;i<this.state.availableCards.length;i++){
            let cardNb = this.state.availableCards[i].toString().padStart(2,'0');
            availableCardsListing.push(
                <div class="card" onClick={()=>this.pick(this.state.availableCards[i])}>
                    <div className="holder">
                        <img
                            className="imgCard"
                            src={config.FOLDER_IMAGES_CARDS+langcode + '/TM_GameCards_'+langcode+'-'+ cardNb +'.png'}
                        />
                    </div>
                </div>
            );
        }
        return(
            <div class="cardpicker">
                <div
                    class="cardList"
                >
                    {this.state.selectedCards.length > 0 ? (
                        <div >
                            {selectedCardsListing}
                            {this.state.selectedCards.length < this.props.advancedSettings[3]+4 ? (
                            <div
                                className="card openListing"
                                onClick={() =>this.open()}
                            >
                                <label>{traduction[this.props.language]["CLICKTOSELECT"]}</label>
                            </div>
                            ):null}
                        </div>
                    ):(
                        <a className="placeholder" onClick={() =>this.open()}>
                            <label>
                                {traduction[this.props.language]["CHOOSECARDS"]}
                            </label>
                        </a>
                    )}
                </div>
                {this.state.open === true ? (
                    <div class="cardListing">
                        <h1>{traduction[this.props.language]["SELECTCARDS"]}</h1>
                        <a className="close" onClick={() =>this.close()}>&times;</a>
                        {availableCardsListing}
                    </div>
                ):null}
                {this.state.loading === true ? (
                    <div class="loader"><h2>{traduction[this.props.language]["LOADING"]}<span>...</span></h2></div>
                ):null}
            </div>
        );
    }
}
export default CardPicker;

/********************************
 * MARK:PageCreateChallenge.jsx *
 ********************************/

import {Component} from "react";
import "./styles.css";
import "./css/PageCreateChallenge.css";
import traduction from "./traduction";
import idPage from "./idPage";
import CardPicker from "./cardPicker";
import config from "./config";
class PageCreateChallenge extends Component {
    state = {
        gameType: 'solo',
        nbCards: 4,
        selectedCards: [],
        render: true
    }
    constructor(props) {
        super(props);
        this.props.clickAdvanced(3, 0);
    }
    changeVerificator( x ){
        this.props.clickAdvanced(3, x);
        this.setState({render:!this.state.render})
    }
    setSelectedCards( cardList ){
        this.setState({selectedCards:cardList });
    }
    generate(){
        var xhr = new XMLHttpRequest();
        var nbCards = this.props.advancedSettings[3]+4;
        xhr.addEventListener("load", () => {
            var data = xhr.responseText;
            var jsonResponse = JSON.parse(data);
            this.props.loadGame("h=" + jsonResponse['h'] );
        });
        xhr.addEventListener("error", () => {
        });
        xhr.addEventListener("abort", () => {
        });
        xhr.open(
            "GET",
            config.API+"wizard.php?n=" + nbCards + "&cards=[" + this.state.selectedCards.join(',') + ']' + '&mode=' + 'normal'
        );
        xhr.send();
    }
    render(){
        this.selectedCardList = this.state.selectedCards;
        return(
            <div className="mainTab pageCreateChallenge">
                <h2>{traduction[this.props.language]["CREATECHALLENGE"]}</h2>
                <label className="label">
                    {traduction[this.props.language]["GAMETYPE"]}
                </label>
                <div className="radioGroup">
                    <input
                        type="button"
                        className={!this.props.soloPlay
                            ? "active"
                            : "inactive"
                        }
                        value={traduction[this.props.language]["COMPETITIVE"]}
                        onClick={() => this.props.goCompetitive()}
                    />
                    <input
                        type="button"
                        className={this.props.soloPlay
                            ? "active"
                            : "inactive"
                        }
                        value={traduction[this.props.language]["SOLO"]}
                        onClick={() => this.props.goSolo()}
                    />
                </div>
                <label className="label">
                    {traduction[this.props.language]["STEP3"]}
                </label>
                <div className="radioGroup">
                    <input
                        type="button"
                        className={ this.props.advancedSettings[3] === 0
                            ? "active"
                            : "inactive"
                        }
                        value={traduction[this.props.language]["V4"]}
                        onClick={() => this.changeVerificator(0)}
                    />
                    <input
                        type="button"
                        className={ this.props.advancedSettings[3] === 1
                            ? "active"
                            : "inactive"
                        }
                        value={traduction[this.props.language]["V5"]}
                        onClick={() => this.changeVerificator(1)}
                    />
                    <input
                        type="button"
                        className={ this.props.advancedSettings[3] === 2
                            ? "active"
                            : "inactive"
                        }
                        value={traduction[this.props.language]["V6"]}
                        onClick={() => this.changeVerificator(2)}
                    />
                </div>
                <label className="label">
                    {traduction[this.props.language]["CRITERIACARDS"]}
                </label>
                <CardPicker
                    language = {this.props.language}
                    setSelectedCards = {(selectedCards)=>this.setSelectedCards(selectedCards)}
                    advancedSettings = {this.props.advancedSettings}
                    key={this.state.render}
                >
                </CardPicker>
                <div className="footer">
                    { ( this.state.selectedCards.length != this.props.advancedSettings[3]+4 ) ?
                        (
                    <input
                        className="grey"
                        type="button"
                        value={traduction[this.props.language]["PLAY"]}
                        disabled="disabled"
                    />
                        ):(
                            <input
                                className="fullgreen"
                                type="button"
                                value={traduction[this.props.language]["PLAY"]}
                                onClick={() => this.generate()}
                            />
                        )}
                    <a
                        id="homeBut"
                        className="backlink"
                        type="submit"
                        onClick={() => this.props.changePage(idPage["P_MAIN"])}
                    >
                        {traduction[this.props.language]["BACKHOME"]}
                    </a>
                </div>
            </div>
        );
    }
}
export default PageCreateChallenge;
