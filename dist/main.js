!function(t){var e={};function a(i){if(e[i])return e[i].exports;var s=e[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=t,a.c=e,a.d=function(t,e,i){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(a.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)a.d(i,s,function(e){return t[e]}.bind(null,s));return i},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=0)}([function(t,e,a){"use strict";a.r(e);class i{constructor(){this.boardSize=8,this.container=null,this.boardEl=null,this.cells=[],this.cellClickListeners=[],this.cellEnterListeners=[],this.cellLeaveListeners=[],this.newGameListeners=[],this.saveGameListeners=[],this.loadGameListeners=[]}bindToDOM(t){if(!(t instanceof HTMLElement))throw new Error("container is not HTMLElement");this.container=t}drawUi(t){this.checkBinding(),this.container.innerHTML='\n      <div class="controls">\n        <button data-id="action-restart" class="btn">New Game</button>\n        <button data-id="action-save" class="btn">Save Game</button>\n        <button data-id="action-load" class="btn">Load Game</button>\n      </div>\n      <div class="board-container">\n        <div data-id="board" class="board"></div>\n      </div>\n    ',this.newGameEl=this.container.querySelector("[data-id=action-restart]"),this.saveGameEl=this.container.querySelector("[data-id=action-save]"),this.loadGameEl=this.container.querySelector("[data-id=action-load]"),this.newGameEl.addEventListener("click",t=>this.onNewGameClick(t)),this.saveGameEl.addEventListener("click",t=>this.onSaveGameClick(t)),this.loadGameEl.addEventListener("click",t=>this.onLoadGameClick(t)),this.boardEl=this.container.querySelector("[data-id=board]"),this.boardEl.classList.add(t);for(let t=0;t<this.boardSize**2;t+=1){const i=document.createElement("div");i.classList.add("cell","map-tile","map-tile-"+(e=t,a=this.boardSize,0===e?"top-left":e===a-1?"top-right":e>0&&e<a-1?"top":e===a*(a-1)?"bottom-left":e===a*a-1?"bottom-right":e>a*(a-1)&&e<a*a-1?"bottom":e%a==0?"left":e%a==a-1?"right":"center")),i.addEventListener("mouseenter",t=>this.onCellEnter(t)),i.addEventListener("mouseleave",t=>this.onCellLeave(t)),i.addEventListener("click",t=>this.onCellClick(t)),this.boardEl.appendChild(i)}var e,a;this.cells=Array.from(this.boardEl.children)}redrawPositions(t){for(const t of this.cells)t.innerHTML="";for(const a of t){const t=this.boardEl.children[a.position],i=document.createElement("div");i.classList.add("character",a.character.type);const s=document.createElement("div");s.classList.add("health-level");const r=document.createElement("div");r.classList.add("health-level-indicator","health-level-indicator-"+((e=a.character.health)<15?"critical":e<50?"normal":"high")),r.style.width=a.character.health+"%",s.appendChild(r),i.appendChild(s),t.appendChild(i)}var e}addCellEnterListener(t){this.cellEnterListeners.push(t)}addCellLeaveListener(t){this.cellLeaveListeners.push(t)}addCellClickListener(t){this.cellClickListeners.push(t)}addNewGameListener(t){this.newGameListeners.push(t)}addSaveGameListener(t){this.saveGameListeners.push(t)}addLoadGameListener(t){this.loadGameListeners.push(t)}onCellEnter(t){t.preventDefault();const e=this.cells.indexOf(t.currentTarget);this.cellEnterListeners.forEach(t=>t.call(null,e))}onCellLeave(t){t.preventDefault();const e=this.cells.indexOf(t.currentTarget);this.cellLeaveListeners.forEach(t=>t.call(null,e))}onCellClick(t){const e=this.cells.indexOf(t.currentTarget);this.cellClickListeners.forEach(t=>t.call(null,e))}onNewGameClick(t){t.preventDefault(),this.newGameListeners.forEach(t=>t.call(null))}onSaveGameClick(t){t.preventDefault(),this.saveGameListeners.forEach(t=>t.call(null))}onLoadGameClick(t){t.preventDefault(),this.loadGameListeners.forEach(t=>t.call(null))}static showError(t){alert(t)}static showMessage(t){alert(t)}selectCell(t,e="yellow"){this.deselectCell(t),this.cells[t].classList.add("selected","selected-"+e)}deselectCell(t){const e=this.cells[t];e.classList.remove(...Array.from(e.classList).filter(t=>t.startsWith("selected")))}showCellTooltip(t,e){this.cells[e].title=t}hideCellTooltip(t){this.cells[t].title=""}showDamage(t,e){return new Promise(a=>{const i=this.cells[t],s=document.createElement("span");s.textContent=e,s.classList.add("damage"),i.appendChild(s),s.addEventListener("animationend",()=>{i.removeChild(s),a()})})}setCursor(t){this.boardEl.style.cursor=t}checkBinding(){if(null===this.container)throw new Error("GamePlay not bind to DOM")}}var s={prairie:"prairie",desert:"desert",arctic:"arctic",mountain:"mountain"};var r={auto:"auto",pointer:"pointer",crosshair:"crosshair",notallowed:"not-allowed"};function n(t,e){const a=Math.ceil(t),i=Math.floor(e);return Math.floor(Math.random()*(i-a)+a)}function o(t,e,a){const i=function*(t,e){let a=0;for(;a<7;){const i=n(0,t.length),s=n(1,e+1),r=new t[i];a+=1,r.level=s,yield r}}(t,e),s=[];for(let t=0;t<a;t+=1)s.push(i.next().value);return s}class h{constructor(t){this.turnPlayer=!0,this.isGameOver=!1,this.level=1,this.score=0,this.maxScore=t,this.positions=[],this.theme=s.prairie}}class l{constructor(t,e="generic"){if(this.level=t,this.attack=0,this.defence=0,this.health=50,this.type=e,"Character"===new.target.name)throw new Error("You cannot create an object of the Character class")}levelUp(){this.level+=1,this.attack=Math.max(this.attack,Math.round(this.attack*(1.8-this.health/100))),this.defence=Math.max(this.defence,Math.round(this.defence*(1.8-this.health/100))),this.health=this.health+80>100?100:this.health+80}}class c{constructor(t,e){if(!(t instanceof l))throw new Error("character must be instance of Character or its children");if("number"!=typeof e)throw new Error("position must be a number");this.character=t,this.position=e}}class d extends l{constructor(){super(1,"bowman"),this.attack=25,this.defence=25,this.health=100,this.distance=2,this.distanceAttack=2,this.isEnemy=!1}}class m extends l{constructor(){super(1,"swordsman"),this.attack=40,this.defence=10,this.health=100,this.distance=4,this.distanceAttack=1,this.isEnemy=!1}}class u extends l{constructor(){super(1,"magician"),this.attack=10,this.defence=40,this.health=100,this.distance=1,this.distanceAttack=4,this.isEnemy=!1}}class g extends l{constructor(){super(1,"daemon"),this.attack=10,this.defence=40,this.health=100,this.distance=1,this.distanceAttack=4,this.isEnemy=!0}}class p extends l{constructor(){super(1,"vampire"),this.attack=25,this.defence=25,this.health=100,this.distance=2,this.distanceAttack=2,this.isEnemy=!0}}class S extends l{constructor(){super(1,"undead"),this.attack=40,this.defence=10,this.health=100,this.distance=4,this.distanceAttack=1,this.isEnemy=!0}}const f=new i;f.bindToDOM(document.querySelector("#game-container"));const y=new class{constructor(t){this.storage=t}save(t){this.storage.setItem("state",JSON.stringify(t))}load(){try{return JSON.parse(this.storage.getItem("state"),(t,e)=>("character"===t&&Object.setPrototypeOf(e,Object.create(l.prototype)),e))}catch(t){throw new Error("Invalid state")}}}(localStorage);new class{constructor(t,e){this.gamePlay=t,this.stateService=e}init(){this.gamePlay.addCellEnterListener(t=>this.onCellEnter(t)),this.gamePlay.addCellLeaveListener(t=>this.onCellLeave(t)),this.gamePlay.addCellClickListener(t=>this.onCellClick(t)),this.gamePlay.addNewGameListener(()=>this.initGame()),this.gamePlay.addSaveGameListener(()=>this.saveGame()),this.gamePlay.addLoadGameListener(()=>this.loadGame()),this.loadGame(),this.gameState||this.initGame()}initGame(){this.loadGame();const t=this.gameState&&this.gameState.maxScore?this.gameState.maxScore:0;this.gameState=new h(t),this.gamePlay.drawUi(this.gameState.theme);const e=o([d,m],1,2),a=o([g,S,p],1,2);this.initTeam(e,a),this.saveGame()}saveGame(){this.stateService.save(this.gameState)}loadGame(){try{this.gameState=this.stateService.load(),this.gameState&&(this.gamePlay.drawUi(this.gameState.theme),this.gamePlay.redrawPositions(this.gameState.positions))}catch(t){i.showError(t.message)}}initTeam(t,e){this.gameState.positions=[];const a=this.playersPositions(),i=this.enemyPositions();t.forEach(t=>{let e=-1;for(;e<0;){const t=a[n(0,a.length)];this.gameState.positions.find(e=>e.position===t)||(e=t)}this.gameState.positions.push(new c(t,e))}),e.forEach(t=>{let e=-1;for(;e<0;){const t=i[n(0,i.length)];this.gameState.positions.find(e=>e.position===t)||(e=t)}this.gameState.positions.push(new c(t,e))}),this.gamePlay.redrawPositions(this.gameState.positions)}onCellClick(t){if(this.gameState.turnPlayer&&!this.gameState.isGameOver){const e=this.gameState.positions.find(e=>e.position===t);if(e&&!e.character.isEnemy)this.currentPositionCharacter&&this.gamePlay.deselectCell(this.currentPositionCharacter.position),this.gamePlay.selectCell(t),this.currentPositionCharacter=e;else if(!e&&this.currentPositionCharacter&&this.checkDistanceAllowed(this.currentPositionCharacter,t)){const e=this.currentPositionCharacter.position;this.currentPositionCharacter.position=t,this.gamePlay.deselectCell(e),this.gamePlay.deselectCell(t),this.currentPositionCharacter=void 0,this.gamePlay.redrawPositions(this.gameState.positions),this.gameState.turnPlayer=!1,this.enemyAction()}else e&&e.character.isEnemy&&this.currentPositionCharacter&&this.checkAttackAllowed(this.currentPositionCharacter,t)?(this.gamePlay.deselectCell(this.currentPositionCharacter.position),this.attack(this.currentPositionCharacter,e).then(()=>{this.gameState.isGameOver||this.gameState.isLevelUp?this.gameState.isLevelUp&&(this.gameState.isLevelUp=!1):this.enemyAction()}),this.currentPositionCharacter=void 0):e&&e.character.isEnemy&&i.showError("Это персонаж компьютера!")}}visualCallback(t,e,a,i){if(void 0===e||i&&i.position===this.currentCellEnter||this.gamePlay.deselectCell(e),this.currentCellEnter=a,t){i?t.character.isEnemy&&this.checkAttackAllowed(this.currentPositionCharacter,a)?(this.gamePlay.selectCell(a,"red"),this.gamePlay.setCursor(r.crosshair)):!this.checkAttackAllowed(this.currentPositionCharacter,a)&&t.character.isEnemy?this.gamePlay.setCursor(r.notallowed):this.gamePlay.setCursor(r.pointer):this.gamePlay.setCursor(r.pointer);const{character:e}=t;this.gamePlay.showCellTooltip(function(t){return`${String.fromCodePoint(127894)}${t.level} ${String.fromCodePoint(9876)}${t.attack} ${String.fromCodePoint(128737)}${t.defence} ${String.fromCodePoint(10084)}${t.health}`}(e),a)}else i?this.checkDistanceAllowed(i,a)?(this.gamePlay.selectCell(a,"green"),this.gamePlay.setCursor(r.pointer)):this.gamePlay.setCursor(r.notallowed):this.gamePlay.setCursor(r.auto)}onCellEnter(t){if(this.gameState.turnPlayer&&!this.gameState.isGameOver){const e=this.gameState.positions.find(e=>e.position===t);this.visualCallback(e,this.currentCellEnter,t,this.currentPositionCharacter)}}onCellLeave(t){this.gamePlay.hideCellTooltip(t)}checkDistanceAllowed(t,e){const a=t.position%this.gamePlay.boardSize,i=e%this.gamePlay.boardSize,s=Math.floor(t.position/this.gamePlay.boardSize),r=Math.floor(e/this.gamePlay.boardSize);return Math.abs(a-i)<=t.character.distance&&Math.abs(s-r)<=t.character.distance&&(Math.abs(a-i)===Math.abs(s-r)||0===Math.abs(a-i)||0===Math.abs(s-r))}checkAttackAllowed(t,e){const a=t.position%this.gamePlay.boardSize,i=e%this.gamePlay.boardSize,s=Math.floor(t.position/this.gamePlay.boardSize),r=Math.floor(e/this.gamePlay.boardSize);return Math.abs(a-i)<=t.character.distanceAttack&&Math.abs(s-r)<=t.character.distanceAttack&&(Math.abs(a-i)===Math.abs(s-r)||0===Math.abs(a-i)||0===Math.abs(s-r))}playersPositions(){const t=[];for(let e=0;e<this.gamePlay.boardSize*this.gamePlay.boardSize;e+=1){const a=e%this.gamePlay.boardSize;0!==a&&1!==a||t.push(e)}return t}enemyPositions(){const t=[];for(let e=0;e<this.gamePlay.boardSize*this.gamePlay.boardSize;e+=1){const a=e%this.gamePlay.boardSize;a!==this.gamePlay.boardSize-1&&a!==this.gamePlay.boardSize-2||t.push(e)}return t}enemyAction(){const t=this.gameState.positions.filter(t=>t.character.isEnemy),e=this.gameState.positions.filter(t=>!t.character.isEnemy),a=t.find(t=>{for(let a=0;a<e.length;a+=1)if(this.checkAttackAllowed(t,e[a].position))return!0;return!1});if(a){const t=e.find(t=>this.checkAttackAllowed(a,t.position));this.attack(a,t)}else{const a=t[n(0,t.length)],i=a.position%this.gamePlay.boardSize;let s=n(0,2);i>0&&0===s?i>=a.character.distance?a.position-=a.character.distance:a.position-=i:i+a.character.distance<this.gamePlay.boardSize?a.position+=a.character.distance:i+1<this.gamePlay.boardSize?a.position+=this.gamePlay.boardSize-1-i:(a.position-=a.character.distance,s=0),e.find(t=>t.position===a.position)&&t.find(t=>t.position===a.position)&&(0===s?a.position+=1:a.position-=1),this.gamePlay.redrawPositions(this.gameState.positions),this.gameState.turnPlayer=!this.gameState.turnPlayer}}attack(t,e){const a=t.character.attack,s=e.character.defence,r=Math.round(Math.max(a-s,.1*a)),n=this.gamePlay.showDamage(e.position,r),o=e;return n.then(()=>{const t=this.gameState.positions.findIndex(t=>t===e);o.character.health-=r,o.character.health<=0&&this.gameState.positions.splice(t,1);const a=this.gameState.positions.filter(t=>t.character.isEnemy);this.gameState.positions.filter(t=>!t.character.isEnemy).length<=0?(this.gameState.maxScore<this.gameState.score&&(this.gameState.maxScore=this.gameState.score),i.showMessage(`GAME OVER \n Ваш счёт: ${this.gameState.score} \n Ваш максимальный счёт: ${this.gameState.maxScore}`),this.gameState.isGameOver=!0,this.saveGame()):a.length<=0?this.nextLevel():this.gameState.turnPlayer=!this.gameState.turnPlayer,this.gamePlay.redrawPositions(this.gameState.positions)}),n}nextLevel(){let t=this.gameState.positions.filter(t=>!t.character.isEnemy).map(t=>t.character);if(this.gameState.score+=t.reduce((t,e)=>t+e.health,0),this.gameState.level+=1,5===this.gameState.level)this.gameState.maxScore<this.gameState.score&&(this.gameState.maxScore=this.gameState.score),i.showMessage(`WINNER WINNER CHICKEN DINNER \n Ваш счёт: ${this.gameState.score} \n Ваш максимальный счёт: ${this.gameState.maxScore}`),this.gameState.isGameOver=!0;else{let e;t.forEach(t=>t.levelUp()),2===this.gameState.level&&(this.gamePlay.drawUi(s.desert),this.gameState.theme=s.desert,t=t.concat(o([d,m,u],1,1)),e=o([g,S,p],2,t.length)),3===this.gameState.level&&(this.gamePlay.drawUi(s.arctic),this.gameState.theme=s.arctic,t=t.concat(o([d,m,u],2,2)),e=o([g,S,p],3,t.length)),4===this.gameState.level&&(this.gamePlay.drawUi(s.mountain),this.gameState.theme=s.mountain,t=t.concat(o([d,m,u],3,2)),e=o([g,S,p],4,t.length)),this.initTeam(t,e),this.gameState.turnPlayer=!0,this.gameState.isLevelUp=!0}this.saveGame()}}(f,y).init()}]);