const API = "https://turingmachine.info/api/";
const userID = getUuid();

function getUuid() {
  let uuid= localStorage.getItem("uuid");
  if (!uuid) {
    uuid = genUuid();
    localStorage.setItem("uuid", uuid);
  }
  return uuid;
}

function genUuid() {
  let d = Date.now(); //Timestamp
  let d2 = (typeof performance !== "undefined" && performance.now && performance.now() * 1000) || 0;
   //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    let r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = ((d + r) % 16) | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = ((d2 + r) % 16) | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

export function loadHistoricalGame(params) {
  return loadGame({ ...params, solo: true });
}

export function quickGame(hash) {
  return loadGame(hash ? { h: hash, solo: true } : { s: 0 });
}

export function gameOfTheDay() {
  const curDate = Math.floor(new Date().getTime() / 1000.0) - new Date().getTimezoneOffset() * 60;
  return loadGame({ s: 1, curDate, solo: true });
}
export function hashGame(hash) {
  return loadGame({ h: hash, solo: true });
}
export function playAdvanced(params) {
  this.state.soloPlay = this.state.advancedSettings[0] === 1;
  this.loadGame({ ...params });
}
export async function loadGame(params) {
  const url = new URL(`${API}api.php`);

  if (params.h) params.h = params.h.toUpperCase();

  const solo = params.solo;
  params.solo = undefined;

  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value);
  url.searchParams.set("uuid", userID);
  const res = await fetch(url.href);
  const game = await res.json();
  game.solo = solo;

  if (game.m > 0) {
    // if mode is 1 or 2, then par is set to 1.5 times the original value
    game.par = Math.ceil(game.par * 1.5);
  }
  if (game.m === 1)
    for (const i in game.ind) {
      const a = game.ind[i];
      const b = game.fake[i];
      game.ind[i] = Math.min(a, b);
      game.fake[i] = Math.max(a, b);
    }
  if (game.m === 2) game.ind.sort();

  if (this.state.dailyText !== "") {
    Moment.locale("en");
    const time = Math.floor(new Date().getTime() / 1000.0) - new Date().getTimezoneOffset() * 60;
    this.state.dailyText = Moment.unix(time).format(traduction[this.state.language].DATEFORMAT);
  }
  return game;
}
export async function generateGame(params) {
  // Generate a new game by calling the API with the provided params
  const url = new URL(`${API}api.php`);
  for (const [key, value] of Object.entries(params)) url.searchParams.set(key, value);
  url.searchParams.set("uuid", userID);
  url.searchParams.set("generate", "1");
  const res = await fetch(url.href);
  const game = await res.json();
  return game;
}
export async function loadGameFromHash(hash) {
  return await loadGame({ h: hash, solo: true });
}
