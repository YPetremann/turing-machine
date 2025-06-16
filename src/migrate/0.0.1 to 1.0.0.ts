// migrate save data from old format to new format:
// - add a version field to 1.0
export const from = "0.0.1";
export const to = "1.0.0";
export function migrate(save) {
  // Helper to generate codes and res objects
  const newSave={
    info: {
      user: save.user,
      game: save.game,
    },
    codes:{},
    res:{},
    deduct:{},
    notes:{},
  }
  for (let i = 0; i <= 8; i++) {
    newSave.codes[i] = {
      T: save[`turn.${i + 1}.T`],
      R: save[`turn.${i + 1}.R`],
      C: save[`turn.${i + 1}.C`],
    };
    newSave.res[i] = {
      "A": save[`turn.${i + 1}.1`],
      "B": save[`turn.${i + 1}.2`],
      "C": save[`turn.${i + 1}.3`],
      "D": save[`turn.${i + 1}.4`],
      "E": save[`turn.${i + 1}.5`],
      "F": save[`turn.${i + 1}.6`],
    };
  }
  // Helper to generate deduct object
  for (let n = 1; n <= 5; n++) {
    for (const l of ["T", "R", "C"]) {
      newSave.deduct[`${l}${n}`] = save[`hyp.${l}${n}`];
    }
  }
  // Helper to generate notes object
  for (const l of ["A", "B", "C", "D", "E", "F"]) {
    newSave.notes[l] = save[`note.${l}`];
  }
  return newSave;
}
