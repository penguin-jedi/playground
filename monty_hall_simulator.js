///////////////   Monty Hall   \\\\\\\\\\\\\\\\
const SAMPLE_SIZE = 3000000;
const random_1_3 = () => Math.floor(Math.random() * 3 + 1);
const random_1_3_test = [null, 0, 0, 0];
for (let i = 0; i < SAMPLE_SIZE; i++) random_1_3_test[random_1_3()]++;

const mod = (a , b) => a % b === 0 ? b : a % b;
const wrong_one_i_didnt_choose = (answer, i_choose) => {
  if(i_choose === answer) return mod((i_choose + 1), 3);
  return (1 + 2 + 3) - answer - i_choose;
};
let not_change_counter = 0;
let do_change_counter = 0;
for (let i = 0; i < SAMPLE_SIZE; i++) {
  const answer =  random_1_3();
  const i_choose = random_1_3();

  // if i didnt change my choosen
  if (answer === i_choose) not_change_counter++;

  // if i did change my choosen
  const additional_clue = wrong_one_i_didnt_choose(answer, i_choose);
  const new_choose = (1 + 2 + 3) - additional_clue - i_choose;
  if (answer === new_choose) do_change_counter++;
}
console.log({ SAMPLE_SIZE, do_change_counter, not_change_counter, random_1_3_test });
// {SAMPLE_SIZE: 3000000, do_change_counter: 1999397, not_change_counter: 1000602, random_1_3_test: [null, 999574, 1000826, 999599]}



///////////////   Poisonous Frog #1 •generate with condition to croak  \\\\\\\\\\\\\\\\
// MALE = true
// FEMALE = false
const SAMPLE_SIZE = 3000000;
const random_bool = () => Math.floor(Math.random() * 100) % 2 === 0;
const random_bool_test = [0, 0];
for (let i = 0; i < SAMPLE_SIZE; i++) random_bool_test[random_bool() ? 1 : 0]++;

const need_to_croak = (frog_1) => frog_1 ? true : random_bool();
let contain_female_counter = 0;
for (let i = 0; i < SAMPLE_SIZE; i++) {
  const frog_1 = random_bool();
  const frog_2 = need_to_croak(frog_1);
  if (frog_1 && frog_2) contain_female_counter++;
}
console.log({ SAMPLE_SIZE, contain_female_counter, random_bool_test });
// {SAMPLE_SIZE: 3000000, contain_female_counter: 1499811, random_bool_test: [1498703, 1501296]



///////////////   Poisonous Frog #2 •re-generate if they cant croak  \\\\\\\\\\\\\\\\
// MALE = true
// FEMALE = false
const SAMPLE_SIZE = 3000000;
const random_bool = () => Math.floor(Math.random() * 100) % 2 === 0;
const random_bool_test = [0, 0];
for (let i = 0; i < SAMPLE_SIZE; i++) random_bool_test[random_bool() ? 1 : 0]++;

let contain_female_counter = 0;
for (let i = 0; i < SAMPLE_SIZE; i++) {
  let frog_1 = random_bool();
  let frog_2 = random_bool();
  while((frog_1 === false) && (frog_2 === false)) {
    frog_1 = random_bool();
    frog_2 = random_bool();
  }
  if ((frog_1 && frog_2) === false) contain_female_counter++;
}
console.log({ SAMPLE_SIZE, contain_female_counter, random_bool_test });
// {SAMPLE_SIZE: 3000000, contain_female_counter: 1999788, random_bool_test: [1499978, 1500022]}
