const Leaderboard = require("../models/leaderboard");


const leaderboard = async (req, res) => {
    // console.log('dir', process.cwd()) 
    
  const leaderboardData = await Leaderboard().findAll();
    
  res.render('leaderboard', {
      locals: {
          leaderboard: leaderboardData, 
      },
      partials: {
          header: process.cwd() + '/templates/partials/header.html',
          footer: process.cwd() + '/templates/partials/footer.html'
        }
    }); // process.cwd()gives root directory of entire project
};
module.exports = {
  leaderboard,
};