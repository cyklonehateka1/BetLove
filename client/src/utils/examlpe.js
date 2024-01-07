const inputArray = [12, [11, 5, 6, 10, 8, 11, 7, 1, 8, 11, 3, 11]];

function plusMinus(ranked, player) {
  const joinArr = ranked.concat(player);
  let newArr = joinArr.sort((a, b) => b - a);
  let sortPlayer = player.sort((a, b) => b - a);

  const leaderboardRank = [];
  let playerRank = [];

  for (let i = 0; i < newArr.length; i++) {
    // let checkPlayer = player.filter((item) => item === newArr[i]).length > 0;
    if (leaderboardRank.length === 0) {
      leaderboardRank.push(1);
    } else if (newArr[i] === newArr[i - 1]) {
      leaderboardRank.push(leaderboardRank[leaderboardRank.length - 1]);
    } else if (newArr[i] < newArr[i - 1]) {
      leaderboardRank.push(leaderboardRank[leaderboardRank.length - 1] + 1);
    }
  }
  let checkPlayer = player.forEach((item) => {
    for (let i = 0; i < joinArr.length; i++) {
      if (item === joinArr[i]) {
        playerRank.push(leaderboardRank[i]);
      }
    }
  });
  return playerRank;
}
console.log(plusMinus([34, 21, 98, 34, 65, 86, 34], [90, 98, 21, 18]));
