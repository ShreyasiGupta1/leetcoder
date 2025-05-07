function searchAnalysis() {
    const username = document.getElementById('input').value;
    const output = document.getElementById('output');
    const easy = document.getElementById('easy');
    const medium = document.getElementById('med');
    const hard = document.getElementById('hard');

    axios.get(`https://leetcode-api-faisalshohag.vercel.app/${username}`)
      .then(function (response) {
        output.innerHTML = response.data.totalSolved;
        const diff_easy = response.data.matchedUserStats.acSubmissionNum.find(item => item.difficulty === 'Easy');
        const diff_med = response.data.matchedUserStats.acSubmissionNum.find(item => item.difficulty === 'Medium');
        const diff_hard = response.data.matchedUserStats.acSubmissionNum.find(item => item.difficulty === 'Hard');
        easy.innerHTML = diff_easy.count;
        medium.innerHTML = diff_med.count;
        hard.innerHTML = diff_hard.count;

      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
}

