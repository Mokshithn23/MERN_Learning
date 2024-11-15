async function checkExamREsult() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const score = Math.floor(Math.random() >0.5);
        if(score){
            reject("You failed the exam");
        }
        resolve("You passed the exam");
      }, 2000);
    });
}
